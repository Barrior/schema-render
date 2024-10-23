"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[768],{40492:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(63917),v={}},42254:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(5574),v=e.n(a),_=e(15009),O=e.n(_),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(59869),L=e(74072),$=e(48201),M={"examples-core-react-002-quick-start-demo-0":{component:x.memo(x.lazy(N()(O()().mark(function P(){var h,d,s,t,l,n,r,u;return O()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=m.sent,d=h.default,m.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=m.sent,t=s.Input,l=function(f){var j=f.schema,y=f.body;return x.createElement("div",null,x.createElement("h3",null,j.title),x.createElement("div",null,y))},n={InputText:{component:function(f){var j=f.schema,y=f.value,c=f.onChange;return x.createElement(t,I()(I()({},j.renderOptions),{},{value:y,onChange:function(D){return c(D.target.value)}}))}},Textarea:{component:function(f){var j=f.schema,y=f.value,c=f.onChange;return x.createElement(t.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(j.title)},j.renderOptions),{},{value:y,onChange:function(D){return c(D.target.value)}}))}}},r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},u=function(){return x.createElement(d,{itemLayout:l,renderers:n,schema:r})},m.abrupt("return",{default:u});case 13:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,antd:$},renderOpts:{compile:function(){var P=N()(O()().mark(function d(){var s,t=arguments;return O()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-002-quick-start-demo-1":{component:x.memo(x.lazy(N()(O()().mark(function P(){var h,d,s,t,l,n,r,u,o,m;return O()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=f.sent,d=h.default,f.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=f.sent,t=s.Input,f.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return l=f.sent,n=l.useState,r=function(y){var c=y.schema,b=y.body;return x.createElement("div",null,x.createElement("h3",null,c.title),x.createElement("div",null,b))},u={InputText:{component:function(y){var c=y.schema,b=y.value,D=y.onChange;return x.createElement(t,I()(I()({},c.renderOptions),{},{value:b,onChange:function(C){return D(C.target.value)}}))}},Textarea:{component:function(y){var c=y.schema,b=y.value,D=y.onChange;return x.createElement(t.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(c.title)},c.renderOptions),{},{value:b,onChange:function(C){return D(C.target.value)}}))}}},o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},m=function(){var y=n({}),c=v()(y,2),b=c[0],D=c[1];return x.createElement("div",null,x.createElement(d,{itemLayout:r,renderers:u,schema:o,onChange:D}),x.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),x.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(b,null,2)))},f.abrupt("return",{default:m});case 17:case"end":return f.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,antd:$,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var P=N()(O()().mark(function d(){var s,t=arguments;return O()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},28070:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return $}});var a=e(5574),v=e.n(a),_=e(15009),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(76777),x=e(74072),B=e(2862),L=e(78469),$={"examples-core-react-003-schema-demo-0":{component:p.memo(p.lazy(I()(O()().mark(function M(){var P,h,d,s,t,l,n,r;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=o.sent,h=P.default,o.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=o.sent,s=d.default,o.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=o.sent,l=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:l})},o.abrupt("return",{default:r});case 15:case"end":return o.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var M=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-1":{component:p.memo(p.lazy(I()(O()().mark(function M(){var P,h,d,s,t,l,n,r;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=o.sent,h=P.default,o.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=o.sent,s=d.default,o.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=o.sent,l=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:l})},o.abrupt("return",{default:r});case 15:case"end":return o.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var M=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-2":{component:p.memo(p.lazy(I()(O()().mark(function M(){var P,h,d,s,t,l,n,r;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=o.sent,h=P.default,o.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=o.sent,s=d.default,o.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=o.sent,l=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:l})},o.abrupt("return",{default:r});case 15:case"end":return o.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var M=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-3":{component:p.memo(p.lazy(I()(O()().mark(function M(){var P,h,d,s,t,l,n,r,u,o;return O()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return P=E.sent,h=P.useState,E.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return d=E.sent,s=d.default,E.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return t=E.sent,l=t.default,E.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return n=E.sent,r=n.default,u={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},o=function(){var j=h({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),y=v()(j,2),c=y[0],b=y[1];return p.createElement(s,{value:c,schema:u,onChange:b,itemLayout:l,renderers:r})},E.abrupt("return",{default:o});case 19:case"end":return E.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":L,react:S||(S=e.t(p,2)),"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var M=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-4":{component:p.memo(p.lazy(I()(O()().mark(function M(){var P,h,d,s,t,l,n,r;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=o.sent,h=P.default,o.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=o.sent,s=d.default,o.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=o.sent,l=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:l})},o.abrupt("return",{default:r});case 15:case"end":return o.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":B,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var M=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-5":{component:p.memo(p.lazy(I()(O()().mark(function M(){var P,h,d,s,t,l,n,r;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=o.sent,h=P.default,o.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=o.sent,s=d.default,o.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=o.sent,l=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:l})},o.abrupt("return",{default:r});case 15:case"end":return o.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var M=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}}}},58970:function(G,i,e){e.r(i),e.d(i,{demos:function(){return x}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(84894),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-100-layout-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return O.createElement($,{layout:"normal",schema:s,itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-1":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},t=function(){return O.createElement($,{layout:"normal",schema:s,itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-2":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return O.createElement($,{schema:s,layout:"autoFill",itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-3":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return O.createElement($,{schema:s,layout:"autoFit",itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-4":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return O.createElement($,{schema:s,layout:"autoFill",layoutMinMax:[230,230],itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}}}},61985:function(G,i,e){e.r(i),e.d(i,{demos:function(){return P}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(23382),I=e(74072),p=e(34539),N=e(48201),x=e(93967),B=e.n(x),L=e(29298),$=e(2862),M=e(59868),P={"examples-core-react-101-item-layout-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return d=D.sent,s=d.default,D.next=6,Promise.resolve().then(e.bind(e,34539));case 6:return t=D.sent,l=t.QuestionCircleOutlined,D.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=D.sent,r=n.Popover,D.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return u=D.sent,o=u.default,D.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=D.sent,E=m.default,D.next=22,Promise.resolve().then(e.bind(e,29298));case 22:return f=D.sent,j=function(C){var T=C.body,A=C.schema,g=C.validator,K=C.required,W=C.prefixClassNames;return O.createElement("div",{className:W("item-layout-vertical")},O.createElement("div",{className:o(W("item-header"),f.header)},K&&O.createElement("span",{className:o(W("item-mark"),f.mark)},"*"),O.createElement("span",{className:o(W("item-title"),f.title)},A.title),!!A.titleDescription&&O.createElement(r,{placement:"top",trigger:"hover",content:A.titleDescription},O.createElement(l,{className:o(W("item-title-tooltip"),f.titleTooltip)}))),O.createElement("div",{className:W("item-body")},T),O.createElement("div",{className:o(W("item-footer"),f.footer)},g.status==="error"&&!!g.message&&O.createElement("div",{className:o(W("item-error-msg"),f.errorMsg)},g.message),!!A.description&&O.createElement("div",{className:o(W("item-desc"),f.desc)},A.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},c=function(){return O.createElement(s,{schema:y,itemLayout:j,renderers:E})},D.abrupt("return",{default:c});case 27:case"end":return D.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(29758).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Vertical/styles.ts":L,"./renderers/common.tsx":$,"@schema-render/core-react":I,"@ant-design/icons":p,antd:N,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=_()(a()().mark(function s(){var t,l=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-101-item-layout-demo-1":{component:O.memo(O.lazy(_()(a()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return d=D.sent,s=d.default,D.next=6,Promise.resolve().then(e.bind(e,34539));case 6:return t=D.sent,l=t.QuestionCircleOutlined,D.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=D.sent,r=n.Popover,D.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return u=D.sent,o=u.default,D.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=D.sent,E=m.default,D.next=22,Promise.resolve().then(e.bind(e,59868));case 22:return f=D.sent,j=function(C){var T=C.body,A=C.schema,g=C.validator,K=C.required,W=C.prefixClassNames;return O.createElement("div",{className:o(W("item-layout-horizontal"),f.horizontal)},O.createElement("div",{className:o(W("item-main"),f.main)},O.createElement("div",{className:o(W("item-header"),f.header)},K&&O.createElement("span",{className:o(W("item-mark"),f.mark)},"*"),O.createElement("span",{className:o(W("item-title"),f.title)},A.title),!!A.titleDescription&&O.createElement(r,{placement:"top",trigger:"hover",content:A.titleDescription},O.createElement(l,{className:o(W("item-title-tooltip"),f.titleTooltip)}))),O.createElement("div",{className:o(W("item-body"),f.body)},T)),O.createElement("div",{className:o(W("item-footer"),f.footer)},g.status==="error"&&!!g.message&&O.createElement("div",{className:o(W("item-error-msg"),f.errorMsg)},g.message),!!A.description&&O.createElement("div",{className:o(W("item-desc"),f.desc)},A.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},c=function(){return O.createElement(s,{schema:y,itemLayout:j,renderers:E})},D.abrupt("return",{default:c});case 27:case"end":return D.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(52551).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal/styles.ts":M,"./renderers/common.tsx":$,"@schema-render/core-react":I,"@ant-design/icons":p,antd:N,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=_()(a()().mark(function s(){var t,l=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},83222:function(G,i,e){e.r(i),e.d(i,{demos:function(){return x}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(86131),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-102-prefix-cls-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return O.createElement($,{schema:s,itemLayout:P,renderers:d,prefixCls:"my-cls"})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}}}},81235:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return d}});var a=e(97857),v=e.n(a),_=e(15009),O=e.n(_),F=e(5574),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(15208),L=e(74072),$=e(41989),M=e(78469),P=e(2862),h=e(48201),d={"examples-core-react-200-change-event-demo-0":{component:x.memo(x.lazy(N()(O()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c;return O()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=D.sent,l=t.useState,D.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=D.sent,r=n.default,D.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return u=D.sent,o=u.default,D.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=D.sent,E=m.default,D.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=D.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},c=function(){var C=l({}),T=I()(C,2),A=T[0],g=T[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:E,value:A,onChange:function(W){return g(W)}}),x.createElement(o,{value:A}))},D.abrupt("return",{default:c});case 23:case"end":return D.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":P,react:S||(S=e.t(x,2)),"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function l(){var n,r=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-1":{component:x.memo(x.lazy(N()(O()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c;return O()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=D.sent,l=t.useState,D.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=D.sent,r=n.default,D.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return u=D.sent,o=u.default,D.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=D.sent,E=m.default,D.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=D.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},c=function(){var C=l({}),T=I()(C,2),A=T[0],g=T[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:E,onChange:function(W,V){return g(V)}}),x.createElement(o,{value:A}))},D.abrupt("return",{default:c});case 23:case"end":return D.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":P,react:S||(S=e.t(x,2)),"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function l(){var n,r=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-2":{component:x.memo(x.lazy(N()(O()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c;return O()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=D.sent,l=t.useState,D.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=D.sent,r=n.default,D.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return u=D.sent,o=u.default,D.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=D.sent,E=m.default,D.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=D.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},c=function(){var C=l({}),T=I()(C,2),A=T[0],g=T[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:E,onItemChange:function(W){return g(W)}}),x.createElement(o,{value:A}))},D.abrupt("return",{default:c});case 23:case"end":return D.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":P,react:S||(S=e.t(x,2)),"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function l(){var n,r=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-3":{component:x.memo(x.lazy(N()(O()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C;return O()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=A.sent,l=t.useState,A.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=A.sent,r=n.Input,A.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return u=A.sent,o=u.default,A.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return m=A.sent,E=m.default,A.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return f=A.sent,j=f.default,A.next=22,Promise.resolve().then(e.bind(e,78469));case 22:return y=A.sent,c=y.default,b={component:function(K){var W,V=K.schema,U=K.value,z=K.disabled,H=K.onChange;return x.createElement(r,v()(v()({placeholder:"\u8BF7\u8F93\u5165".concat((W=V.title)!==null&&W!==void 0?W:"")},V.renderOptions),{},{value:U,disabled:z,onChange:function(Y){H(Y.target.value,{extra:Math.random()})}}))}},D=v()({InputTextWithExtra:b},j),R={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},C=function(){var K=l({}),W=I()(K,2),V=W[0],U=W[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(o,{schema:R,itemLayout:c,renderers:D,onItemChange:function(H){return U(H)}}),x.createElement(E,{value:V}))},A.abrupt("return",{default:C});case 29:case"end":return A.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":P,react:S||(S=e.t(x,2)),antd:h,"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function l(){var n,r=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}}}},58297:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(233),x=e(74072),B=e(41989),L=e(78469),$=e(2862),M=e(48201),P={"examples-core-react-210-relation-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=c.sent,s=d.useState,c.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=c.sent,l=t.default,c.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=c.sent,r=n.default,c.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=c.sent,o=u.default,c.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=c.sent,E=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var D=s({}),R=O()(D,2),C=R[0],T=R[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(l,{schema:f,itemLayout:E,renderers:o,value:C,onChange:function(g,K){(K.sPath==="width"||K.sPath==="height")&&(g.width=K.value,g.height=K.value),T(g)}}),p.createElement(r,{value:C}))},c.abrupt("return",{default:j});case 23:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":$,react:S||(S=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-210-relation-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=c.sent,s=d.useState,c.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=c.sent,l=t.default,c.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=c.sent,r=n.default,c.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=c.sent,o=u.default,c.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=c.sent,E=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var D=s({}),R=O()(D,2),C=R[0],T=R[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(l,{schema:f,itemLayout:E,renderers:o,watch:{width:function(g){g.height=g.width},height:function(g){g.width=g.height}},value:C,onChange:T}),p.createElement(r,{value:C}))},c.abrupt("return",{default:j});case 23:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":$,react:S||(S=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-210-relation-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=D.sent,s=d.useState,D.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=D.sent,l=t.Button,D.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return n=D.sent,r=n.default,D.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return u=D.sent,o=u.default,D.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=D.sent,E=m.default,f={BankSelect:{component:function(C){var T=C.value,A=C.sPath,g=C.onChange,K=function(){var U=String(Math.random()).slice(2,6),z={bank_id:"id_".concat(U),bank_account:"111222333".concat(U),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(U),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(U,"\u652F\u884C")};g(z[A],{extra:z})},W={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return p.createElement("div",{style:{display:"flex"}},p.createElement("div",{style:W},T),p.createElement(l,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},j={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},y=function(C,T){C.bank_id=T.extra.bank_id,C.bank_account=T.extra.bank_account,C.bank_name=T.extra.bank_name,C.bank_branch_name=T.extra.bank_branch_name},c=function(){var C=s({}),T=O()(C,2),A=T[0],g=T[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:j,itemLayout:E,renderers:f,watch:{bank_account:y,bank_name:y,bank_branch_name:y},value:A,onChange:g}),p.createElement(o,{value:A}))},D.abrupt("return",{default:c});case 25:case"end":return D.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":L,react:S||(S=e.t(p,2)),antd:M,"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},33632:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(5574),v=e.n(a),_=e(97857),O=e.n(_),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(39008),L=e(48201),$=e(74072),M=e(78469),P={"examples-core-react-220-renderer-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function h(){var d,s,t,l,n,r,u,o,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return d=f.sent,s=d.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=f.sent,l=t.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,u={MyRate:{component:function(y){var c=y.disabled,b=y.value,D=y.onChange;return x.createElement(s,{disabled:c,value:b,onChange:D})}}},o={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(l,{schema:o,itemLayout:r,renderers:u})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,antd:L,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=N()(I()().mark(function s(){var t,l=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-220-renderer-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function h(){var d,s,t,l,n,r,u,o,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return d=f.sent,s=d.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=f.sent,l=t.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,u={MyRate:{formItem:function(y){var c=y.schema,b=y.disabled,D=y.value,R=y.onChange;return x.createElement("div",null,x.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",c.title,"\u3011"),x.createElement(s,{disabled:b,value:D,onChange:R}))}}},o={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(l,{schema:o,itemLayout:r,renderers:u})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,antd:L,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=N()(I()().mark(function s(){var t,l=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-220-renderer-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return I()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=c.sent,s=d.useState,c.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=c.sent,l=t.default,c.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=c.sent,r=n.default,c.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return u=c.sent,o=u.Button,m=u.Input,E={InputText:{component:function(D){var R,C=D.schema,T=D.value,A=D.disabled,g=D.readonly,K=D.onChange;return g?x.createElement("div",null,T):x.createElement(m,O()(O()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((R=C.title)!==null&&R!==void 0?R:"")},C.renderOptions),{},{value:T!=null?T:"",disabled:A,onChange:function(V){return K(V.target.value)}}))}},TextArea:{component:function(D){var R,C=D.schema,T=D.value,A=D.disabled,g=D.onChange;return x.createElement(m.TextArea,O()(O()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((R=C.title)!==null&&R!==void 0?R:"")},C.renderOptions),{},{value:T!=null?T:"",onChange:function(W){return g(W.target.value)},disabled:A}))},readonlyComponent:function(D){var R=D.value;return x.createElement("div",null,R)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var D=s(!1),R=v()(D,2),C=R[0],T=R[1],A=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),g=v()(A,2),K=g[0],W=g[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(l,{schema:f,itemLayout:r,renderers:E,value:K,onChange:W,readonly:C}),x.createElement(o,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return T(!C)}},C?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},c.abrupt("return",{default:j});case 21:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":M,react:S||(S=e.t(x,2)),"@schema-render/core-react":$,antd:L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=N()(I()().mark(function s(){var t,l=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},95902:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return h}});var a=e(15009),v=e.n(a),_=e(97857),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(37424),x=e(48201),B=e(74072),L=e(33517),$=e(78469),M=e(47621),P=e(40644),h={"examples-core-react-221-renderer-object-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b;return v()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=R.sent,t=s.Input,R.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return l=R.sent,n=l.default,R.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=R.sent,u=r.default,R.next=14,Promise.resolve().then(e.bind(e,47621));case 14:return o=R.sent,m=o.default,R.next=18,Promise.resolve().then(e.bind(e,40644));case 18:return E=R.sent,f=E.default,R.next=22,Promise.resolve().then(e.bind(e,33517));case 22:return j=R.sent,y=j.default,c={Object:y,ObjectCollapse:f,InputText:{component:function(T){var A,g=T.schema,K=T.value,W=T.disabled,V=T.onChange;return p.createElement(t,O()(O()({placeholder:"\u8BF7\u8F93\u5165".concat((A=g.title)!==null&&A!==void 0?A:"")},g.renderOptions),{},{value:K,disabled:W,onChange:function(z){return V(z.target.value)}}))}}},b=function(){return p.createElement(n,{schema:m,itemLayout:u,renderers:c})},R.abrupt("return",{default:b});case 27:case"end":return R.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.jsx"},context:{"./renderers/object/ObjectNormal.tsx":L,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":M,"./renderers/object/ObjectCollapse.tsx":P,antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":P},renderOpts:{compile:function(){var d=I()(v()().mark(function t(){var l,n=arguments;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-221-renderer-object-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T,A;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=K.sent,t=s.Input,K.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=K.sent,n=l.useRef,K.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return r=K.sent,u=r.default,K.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return o=K.sent,m=o.Button,E=o.message,K.next=19,Promise.resolve().then(e.bind(e,78469));case 19:return f=K.sent,j=f.default,K.next=23,Promise.resolve().then(e.bind(e,47621));case 23:return y=K.sent,c=y.default,K.next=27,Promise.resolve().then(e.bind(e,40644));case 27:return b=K.sent,D=b.default,K.next=31,Promise.resolve().then(e.bind(e,33517));case 31:return R=K.sent,C=R.default,T={Object:C,ObjectCollapse:D,InputText:{component:function(V){var U,z=V.schema,H=V.value,Q=V.disabled,Y=V.onChange;return p.createElement(t,O()(O()({placeholder:"\u8BF7\u8F93\u5165".concat((U=z.title)!==null&&U!==void 0?U:"")},z.renderOptions),{},{value:H,disabled:Q,onChange:function(re){return Y(re.target.value)}}))}}},A=function(){var V=n(null),U=function(){var z=I()(v()().mark(function H(){var Q,Y,ae;return v()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,(Q=V.current)===null||Q===void 0?void 0:Q.validate();case 2:Y=ue.sent,ae=Y.hasError,ae||E.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return ue.stop()}},H)}));return function(){return z.apply(this,arguments)}}();return p.createElement("div",null,p.createElement(u,{ref:V,schema:c,itemLayout:j,renderers:T}),p.createElement(m,{type:"primary",onClick:U,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:A});case 36:case"end":return K.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":L,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":M,"./renderers/object/ObjectCollapse.tsx":P,antd:x,react:S||(S=e.t(p,2)),"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":P},renderOpts:{compile:function(){var d=I()(v()().mark(function t(){var l,n=arguments;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}}}},93609:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(48966),v={}},90239:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return h}});var a=e(5574),v=e.n(a),_=e(97857),O=e.n(_),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(92436),L=e(74072),$=e(2862),M=e(78469),P=e(48201),h={"examples-core-react-223-validator-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,t,l,n,r,u,o,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return l=f.sent,n=l.default,f.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=f.sent,u=r.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},m=function(){return x.createElement(t,{schema:o,itemLayout:n,renderers:u})},f.abrupt("return",{default:m});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":M,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var d=N()(I()().mark(function t(){var l,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,t,l,n,r,u,o,m,E,f;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=y.sent,t=s.default,y.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return l=y.sent,n=l.default,y.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=y.sent,u=r.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},m=function(){var c=N()(I()().mark(function b(D){return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",new Promise(function(T){setTimeout(function(){return T({ok:!1})},200)}));case 1:case"end":return C.stop()}},b)}));return function(D){return c.apply(this,arguments)}}(),E={detectSensitiveWord:function(){var c=N()(I()().mark(function D(R){var C,T;return I()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return C=R.value,g.next=3,m(C);case 3:if(T=g.sent,T.ok){g.next=6;break}return g.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return g.stop()}},D)}));function b(D){return c.apply(this,arguments)}return b}()},f=function(){return x.createElement(t,{schema:o,itemLayout:n,renderers:u,validators:E})},y.abrupt("return",{default:f});case 17:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":M,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var d=N()(I()().mark(function t(){var l,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=b.sent,t=s.Rate,b.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return l=b.sent,n=l.default,b.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=b.sent,u=r.default,b.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return o=b.sent,m=o.default,E={component:function(R){var C=R.schema,T=R.value,A=R.disabled,g=R.onChange;return x.createElement(t,O()(O()({},C.renderOptions),{},{value:T,disabled:A,onChange:function(W){return g(W)}}))},validator:function(R){var C=R.value;return C===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:C<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},j=O()(O()({},m),{},{Rate:E}),y=function(){return x.createElement(n,{schema:f,itemLayout:u,renderers:j})},b.abrupt("return",{default:y});case 21:case"end":return b.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":M,antd:P,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var d=N()(I()().mark(function t(){var l,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-3":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b;return I()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=R.sent,t=s.useState,l=s.useRef,R.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return n=R.sent,r=n.Button,u=n.message,R.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return o=R.sent,m=o.default,R.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return E=R.sent,f=E.default,R.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return j=R.sent,y=j.default,c={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},b=function(){var T=t({}),A=v()(T,2),g=A[0],K=A[1],W=l(null);function V(){return U.apply(this,arguments)}function U(){return U=N()(I()().mark(function z(){var H,Q,Y;return I()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,W.current.validate();case 2:if(H=re.sent,Q=H.hasError,Y=H.errorList,console.log("[validate] hasError: ",Q),console.log("[validate] errorList: ",Y),!Q){re.next=9;break}return re.abrupt("return",u.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:u.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return re.stop()}},z)})),U.apply(this,arguments)}return x.createElement("div",null,x.createElement(m,{ref:W,schema:c,value:g,onChange:K,itemLayout:y,renderers:f}),x.createElement(r,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:V},"\u63D0\u4EA4"))},R.abrupt("return",{default:b});case 25:case"end":return R.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":$,react:S||(S=e.t(x,2)),antd:P,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var d=N()(I()().mark(function t(){var l,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}}}},61022:function(G,i,e){e.r(i),e.d(i,{demos:function(){return x}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(86685),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-230-global-status-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return O.createElement($,{disabled:!0,schema:s,itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}}}},61650:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return d}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(43315),L=e(48201),$=e(74072),M=e(33517),P=e(2862),h=e(78469),d={"examples-core-react-250-scroll-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=g.sent,l=t.useState,n=t.useRef,g.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=g.sent,u=r.Button,o=r.Space,g.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=g.sent,E=m.default,g.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=g.sent,j=f.default,g.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=g.sent,c=y.default,g.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return b=g.sent,D=b.default,R=I()(I()({},j),{},{Object:D}),C={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},T=function(){var W=l({}),V=O()(W,2),U=V[0],z=V[1],H=n(null);return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(E,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:H,schema:C,value:U,onChange:z,itemLayout:c,renderers:R}),x.createElement(o,{direction:"vertical"},x.createElement(u,{onClick:function(){var Y;return(Y=H.current)===null||Y===void 0?void 0:Y.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(u,{onClick:function(){var Y;(Y=H.current)===null||Y===void 0||Y.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(u,{onClick:function(){var Y;(Y=H.current)===null||Y===void 0||Y.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},g.abrupt("return",{default:T});case 30:case"end":return g.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":P,"./item-layout/Horizontal.tsx":h,react:S||(S=e.t(x,2)),antd:L,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var s=N()(v()().mark(function l(){var n,r=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-250-scroll-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=g.sent,l=t.useState,n=t.useRef,g.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=g.sent,u=r.Button,o=r.Space,g.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=g.sent,E=m.default,g.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=g.sent,j=f.default,g.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=g.sent,c=y.default,g.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return b=g.sent,D=b.default,R=I()(I()({},j),{},{Object:D}),C={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},T=function(){var W=l({}),V=O()(W,2),U=V[0],z=V[1],H=n(null),Q=n(null);return x.createElement("div",{ref:Q,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},x.createElement(E,{style:{maxWidth:500,flexGrow:1},ref:H,schema:C,value:U,onChange:z,itemLayout:c,renderers:R}),x.createElement("div",{style:{position:"sticky",top:0}},x.createElement(o,{direction:"vertical"},x.createElement(u,{onClick:function(){var ae;(ae=H.current)===null||ae===void 0||ae.scrollTo("object_basic",{positionedElement:Q.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(u,{onClick:function(){var ae;(ae=H.current)===null||ae===void 0||ae.scrollTo(["object_spec","title"],{positionedElement:Q.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(u,{onClick:function(){var ae;(ae=H.current)===null||ae===void 0||ae.scrollTo("object_other.content",{positionedElement:Q.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},g.abrupt("return",{default:T});case 30:case"end":return g.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":P,"./item-layout/Horizontal.tsx":h,react:S||(S=e.t(x,2)),antd:L,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var s=N()(v()().mark(function l(){var n,r=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-250-scroll-demo-2":{component:x.memo(x.lazy(N()(v()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=g.sent,l=t.useState,n=t.useRef,g.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=g.sent,u=r.Button,o=r.Space,g.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=g.sent,E=m.default,g.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=g.sent,j=f.default,g.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=g.sent,c=y.default,g.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return b=g.sent,D=b.default,R=I()(I()({},j),{},{Object:D}),C={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},T=function(){var W=l({}),V=O()(W,2),U=V[0],z=V[1],H=n(null),Q=function(ae){var re,ue,fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(re=H.current)===null||re===void 0||re.scrollTo(ae,{positionedElement:window,gap:-76+fe,behavior:"instant"});var se=(ue=H.current)===null||ue===void 0||(ue=ue.findItem(ae))===null||ue===void 0?void 0:ue.getRootElement();se==null||se.classList.add("focus-out"),setTimeout(function(){se==null||se.classList.remove("focus-out")},1e3)};return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(E,{style:{maxWidth:500,flexGrow:1},ref:H,schema:C,value:U,onChange:z,itemLayout:c,renderers:R}),x.createElement("div",null,x.createElement(o,{direction:"vertical"},x.createElement(u,{onClick:function(){return Q("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(u,{onClick:function(){return Q(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(u,{onClick:function(){return Q("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},g.abrupt("return",{default:T});case 30:case"end":return g.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":P,"./item-layout/Horizontal.tsx":h,react:S||(S=e.t(x,2)),antd:L,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var s=N()(v()().mark(function l(){var n,r=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}}}},49669:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(46715),x=e(48201),B=e(74072),L=e(78469),$=e(2862),M={"examples-core-react-280-open-api-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=b.sent,d=h.useState,s=h.useRef,b.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return t=b.sent,l=t.Button,n=t.message,b.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=b.sent,u=r.default,b.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return o=b.sent,m=o.default,b.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return E=b.sent,f=E.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var R=d({}),C=O()(R,2),T=C[0],A=C[1],g=s(null);function K(){return W.apply(this,arguments)}function W(){return W=I()(v()().mark(function V(){var U,z,H;return v()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,g.current.validate();case 2:if(U=Y.sent,z=U.hasError,H=U.errorList,console.log("[validate] hasError: ",z),console.log("[validate] errorList: ",H),!z){Y.next=9;break}return Y.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return Y.stop()}},V)})),W.apply(this,arguments)}return p.createElement("div",null,p.createElement(u,{ref:g,schema:j,value:T,onChange:A,itemLayout:f,renderers:m}),p.createElement(l,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},b.abrupt("return",{default:y});case 25:case"end":return b.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":$,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=b.sent,d=h.useState,s=h.useRef,b.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return t=b.sent,l=t.Button,n=t.message,b.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=b.sent,u=r.default,b.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return o=b.sent,m=o.default,b.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return E=b.sent,f=E.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var R=d({}),C=O()(R,2),T=C[0],A=C[1],g=s(null);function K(){return W.apply(this,arguments)}function W(){return W=I()(v()().mark(function U(){var z,H;return v()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,g.current.validate();case 2:if(z=Y.sent,H=z.hasError,!H){Y.next=6;break}return Y.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return Y.stop()}},U)})),W.apply(this,arguments)}var V=function(){g.current.resetError()};return p.createElement("div",null,p.createElement(u,{ref:g,schema:j,value:T,onChange:A,itemLayout:f,renderers:m}),p.createElement(l,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),p.createElement(l,{onClick:V},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},b.abrupt("return",{default:y});case 25:case"end":return b.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":$,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,d=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return o=y.sent,m=o.default,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var b=d(null),D=function(){b.current.resetValue()};return p.createElement("div",null,p.createElement(n,{ref:b,schema:E,itemLayout:m,renderers:u}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},onClick:D},"\u91CD\u7F6E"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":$,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,d=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return o=y.sent,m=o.default,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var b=d(null);return p.createElement("div",null,p.createElement(n,{ref:b,schema:E,itemLayout:m,renderers:u}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var R,C=(R=b.current)===null||R===void 0?void 0:R.getRootElement();console.log("rootElement:",C)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,d=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return o=y.sent,m=o.default,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var b=d(null);return p.createElement("div",null,p.createElement(n,{ref:b,schema:E,itemLayout:m,renderers:u}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var R,C=(R=b.current)===null||R===void 0||(R=R.findItem("title"))===null||R===void 0?void 0:R.getRootElement();console.log("formItemRootElement:",C)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":$,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},68642:function(G,i,e){e.r(i),e.d(i,{demos:function(){return x}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(35786),I=e(74072),p=e(78469),N=e(2862),x={"examples-core-react-300-default-value-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function B(){var L,$,M,P,h,d,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,$=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,P=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return O.createElement($,{schema:s,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:P,renderers:d})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":p,"./renderers/common.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":N},renderOpts:{compile:function(){var B=_()(a()().mark(function $(){var M,P=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,P));case 3:case"end":return d.stop()}},$)}));function L(){return B.apply(this,arguments)}return L}()}}}},95206:function(G,i,e){e.r(i),e.d(i,{demos:function(){return L}});var S=e(15009),a=e.n(S),v=e(97857),_=e.n(v),O=e(99289),F=e.n(O),I=e(67294),p=e(69708),N=e(74072),x=e(48201),B=e(78469),L={"examples-core-react-600-catch-error-tips-demo-0":{component:I.memo(I.lazy(F()(a()().mark(function $(){var M,P,h,d,s,t,l,n,r;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return M=o.sent,P=M.default,o.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return h=o.sent,d=h.Input,o.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=o.sent,t=s.default,l={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(E){var f,j=E.schema,y=E.value,c=E.disabled,b=E.onChange;return I.createElement(d.TextArea,_()(_()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(R){return b(R.target.value)},disabled:c}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(P,{schema:n,itemLayout:t,renderers:l})},o.abrupt("return",{default:r});case 16:case"end":return o.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=F()(a()().mark(function P(){var h,d=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}},"examples-core-react-600-catch-error-tips-demo-1":{component:I.memo(I.lazy(F()(a()().mark(function $(){var M,P,h,d,s,t,l,n,r;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return M=o.sent,P=M.default,o.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return h=o.sent,d=h.Input,o.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=o.sent,t=s.default,l={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(E){var f,j=E.schema,y=E.value,c=E.disabled,b=E.onChange;return I.createElement(d.TextArea,_()(_()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(R){return b(R.target.value)},disabled:c}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(P,{catchErrorTips:"silent",schema:n,itemLayout:t,renderers:l})},o.abrupt("return",{default:r});case 16:case"end":return o.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=F()(a()().mark(function P(){var h,d=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}},"examples-core-react-600-catch-error-tips-demo-2":{component:I.memo(I.lazy(F()(a()().mark(function $(){var M,P,h,d,s,t,l,n,r;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return M=o.sent,P=M.default,o.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return h=o.sent,d=h.Input,o.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=o.sent,t=s.default,l={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(E){var f,j=E.schema,y=E.value,c=E.disabled,b=E.onChange;return I.createElement(d.TextArea,_()(_()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(R){return b(R.target.value)},disabled:c}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(P,{catchErrorTips:function(){return I.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:t,renderers:l})},o.abrupt("return",{default:r});case 16:case"end":return o.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=F()(a()().mark(function P(){var h,d=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}}}},35963:function(G,i,e){e.r(i),e.d(i,{demos:function(){return B}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(96687),I=e(74072),p=e(78484),N=e(2862),x=e(78469),B={"examples-core-react-700-locale-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function L(){var $,M,P,h,d,s,t,l,n,r;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return $=o.sent,M=$.default,o.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return P=o.sent,h=P.default,o.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return d=o.sent,s=d.default,o.next=14,Promise.resolve().then(e.bind(e,78484));case 14:return t=o.sent,l=t.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},r=function(){return O.createElement(M,{style:{maxWidth:600},schema:n,itemLayout:h,renderers:s,locale:l})},o.abrupt("return",{default:r});case 19:case"end":return o.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":N,"./item-layout/Horizontal.tsx":x,"@schema-render/core-react":I,"@schema-render/core-react/dist/esm/locale/en_US":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":x},renderOpts:{compile:function(){var L=_()(a()().mark(function M(){var P,h=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},M)}));function $(){return L.apply(this,arguments)}return $}()}}}},82440:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(85105),v={}},95491:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return $}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(19632),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(2755),L=e(74072),$={"examples-core-react-890-benchmark-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function M(){var P,h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=y.sent,h=P.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=y.sent,s=d.useState,t=d.Profiler,l=function(b){var D=b.schema,R=b.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,D.title),x.createElement("div",null,R))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(b){var D=b.schema,R=b.value,C=b.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(D.title),value:R||"",onChange:function(A){return C(A.target.value)}}))}}},u=600,o={renderType:"Root",properties:{}},m=I()(Array(u).keys()),m.forEach(function(c){var b="field_".concat(c);o.properties[b]={title:b,renderType:"InputText"}}),E=["100px","1fr"],f=function(){var b=s({}),D=O()(b,2),R=D[0],C=D[1],T=s(""),A=O()(T,2),g=A[0],K=A[1],W=function(U,z){var H=parseInt(z.sPath.slice(6)),Q=H-1,Y=H+1,ae="field_".concat(Y>=u?Q:Y);U[ae]=z.value,C(U)};return x.createElement(t,{id:"sr",onRender:function(U,z,H,Q,Y,ae){var re="\u64CD\u4F5C: ".concat(z,", \u6E32\u67D3\u8017\u65F6: ").concat(H," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),ue=document.getElementById("profile");ue&&(ue.innerHTML=re),console.log("===> ".concat(re)),console.log("phase: ".concat(z,", actualDuration: ").concat(H,", baseDuration: ").concat(Q,", startTime: ").concat(Y,", commitTime: ").concat(ae))}},x.createElement("h3",{id:"profile"},g),x.createElement(h,{layout:"autoFill",layoutMinMax:E,schema:o,itemLayout:l,renderers:r,value:R,onChange:W}))},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var M=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-core-react-890-benchmark-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function M(){var P,h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=y.sent,h=P.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=y.sent,s=d.useState,t=d.Profiler,l=function(b){var D=b.schema,R=b.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,D.title),x.createElement("div",null,R))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(b){var D=b.schema,R=b.value,C=b.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(D.title),value:R||"",onChange:function(A){return C(A.target.value)}}))}}},u=1800,o={renderType:"Root",properties:{}},m=I()(Array(u).keys()),m.forEach(function(c){var b="field_".concat(c);o.properties[b]={title:b,renderType:"InputText"}}),E=["100px","1fr"],f=function(){var b=s({}),D=O()(b,2),R=D[0],C=D[1],T=function(g,K){var W=parseInt(K.sPath.slice(6)),V=W-1,U=W+1,z="field_".concat(U>=u?V:U);g[z]=K.value,C(g)};return x.createElement(h,{layout:"autoFill",layoutMinMax:E,schema:o,itemLayout:l,renderers:r,value:R,onChange:T})},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var M=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}}}},50142:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(88485),v={}},67941:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(97024),v={}},50094:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(92311),v={}},79584:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(78593),v={}},75916:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(25105),x=e(74072),B=e(48201),L=e(2862),$=e(78469),M={"examples-core-react-950-async-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=c.sent,d=h.default,c.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=c.sent,t=s.default,c.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=c.sent,u=r.useState,c.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return o=c.sent,m=o.Button,E=o.Space,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},j=function(){var D=u({}),R=O()(D,2),C=R[0],T=R[1],A=function(){setTimeout(function(){T({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},g=function(){return T({})};return p.createElement(p.Fragment,null,p.createElement(d,{style:{marginBottom:15},schema:f,value:C,onChange:function(W){return T(W)},itemLayout:t,renderers:n}),p.createElement(E,null,p.createElement(m,{type:"primary",onClick:A},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),p.createElement(m,{onClick:g},"\u91CD\u7F6E")))},c.abrupt("return",{default:j});case 24:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":x,react:S||(S=e.t(p,2)),antd:B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},58177:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(35170),x=e(41989),B=e(74072),L=e(2862),$=e(78469),M={"examples-core-react-951-controllable-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return o=y.sent,m=o.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var b=m({}),D=O()(b,2),R=D[0],C=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:E,itemLayout:n,renderers:u,value:R,onChange:function(A){return C(A)}}),p.createElement(d,{value:R}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return o=y.sent,m=o.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var b=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),D=O()(b,1),R=D[0];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:E,itemLayout:n,renderers:u,value:R}),p.createElement(d,{value:R}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return o=y.sent,m=o.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var b=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),D=O()(b,1),R=D[0],C=m(1),T=O()(C,2),A=T[0],g=T[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:E,itemLayout:n,renderers:u,value:R,onChange:function(){g(function(W){return W+1})}}),p.createElement(d,{value:R}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=m.sent,d=h.default,m.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return l=m.sent,n=l.default,r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},u=function(){return p.createElement(d,{schema:r,itemLayout:t,renderers:n})},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return o=y.sent,m=o.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var b=m({}),D=O()(b,2),R=D[0],C=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:E,itemLayout:n,renderers:u,onChange:function(A){return C(A)}}),p.createElement(d,{value:R}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},30266:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(12727),x=e(41989),B=e(74072),L=e(48201),$=e(78469),M={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=b.sent,d=h.default,b.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=b.sent,t=s.default,b.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return l=b.sent,n=l.default,b.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=b.sent,u=r.useState,o=r.useEffect,b.next=19,Promise.resolve().then(e.bind(e,48201));case 19:return m=b.sent,E=m.Input,f={InputOrg:{component:function(R){var C,T=R.schema,A=R.value,g=R.rootValue,K=R.onChange;return console.log("==== InputOrg ===="),console.log("value:",A),console.log("rootValue:",g),o(function(){K("\u673A\u6784 A")},[]),p.createElement(E,{placeholder:"\u8BF7\u8F93\u5165".concat((C=T.title)!==null&&C!==void 0?C:""),value:A!=null?A:"",onChange:function(V){return K(V.target.value)}})}},InputSupplier:{component:function(R){var C,T=R.schema,A=R.value,g=R.rootValue,K=R.onChange;return console.log("==== InputSupplier ===="),console.log("value:",A),console.log("rootValue:",g),o(function(){K("\u4F9B\u5E94\u5546 A")},[]),p.createElement(E,{placeholder:"\u8BF7\u8F93\u5165".concat((C=T.title)!==null&&C!==void 0?C:""),value:A!=null?A:"",onChange:function(V){return K(V.target.value)}})}},InputBill:{component:function(R){var C,T=R.schema,A=R.value,g=R.rootValue,K=R.onChange;return console.log("==== InputBill ===="),console.log("value:",A),console.log("rootValue:",g),o(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),p.createElement(E,{placeholder:"\u8BF7\u8F93\u5165".concat((C=T.title)!==null&&C!==void 0?C:""),value:A!=null?A:"",onChange:function(V){return K(V.target.value)}})}}},j={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},y=function(){var R=u({}),C=O()(R,2),T=C[0],A=C[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:j,itemLayout:n,renderers:f,value:T,onChange:function(K,W){console.log("***** updateBy ".concat(W.sPath," *****")),console.log("value:",K),console.log("e:",W),A(K)}}),p.createElement(d,{value:T}))},b.abrupt("return",{default:y});case 25:case"end":return b.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:S||(S=e.t(p,2)),antd:L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},23450:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(53143),L=e(74072),$=e(48201),M=e(78469),P={"examples-core-react-953-disabled-component-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=c.sent,s=d.useState,c.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=c.sent,l=t.default,c.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=c.sent,r=n.default,c.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return u=c.sent,o=u.Button,m=u.Input,E={InputText:{component:function(D){var R,C=D.schema,T=D.value,A=D.disabled,g=D.readonly,K=D.onChange;return x.createElement(m,I()(I()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((R=C.title)!==null&&R!==void 0?R:"")},C.renderOptions),{},{value:T!=null?T:"",disabled:A,onChange:function(V){return K(V.target.value)}}))},readonlyComponent:function(D){var R=D.value;return x.createElement(x.Fragment,null,R)},disabledComponent:function(D){var R=D.value;return x.createElement(x.Fragment,null,"Disabled: ",R)}},TextArea:{component:function(D){var R,C=D.schema,T=D.value,A=D.disabled,g=D.onChange;return x.createElement(m.TextArea,I()(I()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((R=C.title)!==null&&R!==void 0?R:"")},C.renderOptions),{},{value:T!=null?T:"",onChange:function(W){return g(W.target.value)},disabled:A}))},readonlyComponent:function(D){var R=D.value;return x.createElement("div",null,R)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var D=s(!1),R=O()(D,2),C=R[0],T=R[1],A=s(!1),g=O()(A,2),K=g[0],W=g[1],V=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),U=O()(V,2),z=U[0],H=U[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(l,{schema:f,itemLayout:r,renderers:E,value:z,onChange:H,readonly:C,disabled:K}),x.createElement(o,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return W(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),x.createElement(o,{style:{margin:"20px 0 0 115px"},onClick:function(){return T(!C)}},C?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},c.abrupt("return",{default:j});case 21:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":M,react:S||(S=e.t(x,2)),"@schema-render/core-react":L,antd:$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},17571:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return $}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(65063),x=e(41989),B=e(48201),L=e(74311),$={"examples-form-render-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function M(){var P,h,d,s,t,l,n,r,u,o;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return P=E.sent,h=P.default,E.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=E.sent,s=d.useState,E.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return t=E.sent,l=t.message,E.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return n=E.sent,r=n.default,u={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},o=function(){var j=s({}),y=O()(j,2),c=y[0],b=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:u,value:c,onChange:b,onSubmit:function(){l.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(h,{value:c}))},E.abrupt("return",{default:o});case 19:case"end":return E.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:S||(S=e.t(p,2)),antd:B,"@schema-render/form-render-react":L},renderOpts:{compile:function(){var M=I()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}}}},8266:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return L}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(30761),x=e(41989),B=e(74311),L={"examples-form-render-react-100-item-layout-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var M,P,h,d,s,t,l,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=u.sent,P=M.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,t=s.default,l={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=P({}),E=O()(m,2),f=E[0],j=E[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{itemLayout:"vertical",schema:l,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}},"examples-form-render-react-100-item-layout-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function $(){var M,P,h,d,s,t,l,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=u.sent,P=M.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,t=s.default,l={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=P({}),E=O()(m,2),f=E[0],j=E[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{itemLayout:"horizontal",schema:l,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}}}},86799:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(25937),x=e(41989),B=e(74311),L=e(34539),$=e(48201),M={"examples-form-render-react-200-label-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return l=m.sent,n=l.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],c=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,schema:r,value:y,onChange:c}),p.createElement(t,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return l=m.sent,n=l.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],c=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:"max-content",schema:r,value:y,onChange:c}),p.createElement(t,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return l=m.sent,n=l.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],c=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:r,value:y,onChange:c}),p.createElement(t,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=c.sent,d=h.useState,c.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=c.sent,t=s.default,c.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,34539));case 14:return r=c.sent,u=r.QuestionCircleOutlined,c.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return o=c.sent,m=o.Popover,E={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(D){var R=D.schema,C=D.required,T=D.prefixClassNames;return p.createElement("div",null,R.title,!!R.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:R.titleDescription},p.createElement(u,{className:T("item-title-tooltip"),style:{marginLeft:4}})),!C&&" (\u53EF\u9009)")},j=function(){var D=d({}),R=O()(D,2),C=R[0],T=R[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelRender:f,schema:E,value:C,onChange:T}),p.createElement(t,{value:C}))},c.abrupt("return",{default:j});case 24:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B,"@ant-design/icons":L,antd:$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},41393:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(91260),x=e(48201),B=e(41989),L=e(38959),$=e(74311),M=e(34539),P={"examples-form-render-react-300-actions-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=b.sent,s=d.useState,t=d.useRef,b.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return l=b.sent,n=l.message,b.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=b.sent,u=r.default,b.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return o=b.sent,m=o.sleep,b.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return E=b.sent,f=E.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var R=s({}),C=O()(R,2),T=C[0],A=C[1],g=t(null),K=function(){var W=I()(v()().mark(function V(){var U,z;return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,g.current.validate();case 2:if(U=Q.sent,z=U.hasError,!z){Q.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),Q.abrupt("return");case 7:return Q.next=9,m();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return Q.stop()}},V)}));return function(){return W.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{ref:g,schema:j,value:T,onChange:A,onSubmit:K}),p.createElement(u,{value:T}))},b.abrupt("return",{default:y});case 24:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@examples/utils":L,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E;return v()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=j.sent,s=d.useState,j.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=j.sent,l=t.message,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return u=j.sent,o=u.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},E=function(){var c=s({}),b=O()(c,2),D=b[0],R=b[1],C=function(){l.success("\u91CD\u7F6E\u5B8C\u6210")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:m,value:D,onChange:R,onReset:C}),p.createElement(r,{value:D}))},j.abrupt("return",{default:E});case 19:case"end":return j.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=c.sent,s=d.useState,c.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=c.sent,l=t.message,c.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return n=c.sent,r=n.sleep,c.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return u=c.sent,o=u.default,c.next=18,Promise.resolve().then(e.bind(e,74311));case 18:return m=c.sent,E=m.default,f={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},j=function(){var D=s({}),R=O()(D,2),C=R[0],T=R[1],A=function(){var g=I()(v()().mark(function K(){return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,r();case 2:l.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return V.stop()}},K)}));return function(){return g.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(E,{schema:f,value:C,onChange:T,onReset:A}),p.createElement(o,{value:C}))},c.abrupt("return",{default:j});case 23:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/utils":L,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E;return v()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=j.sent,s=d.useState,j.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=j.sent,l=t.sleep,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return u=j.sent,o=u.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},E=function(){var c=s({}),b=O()(c,2),D=b[0],R=b[1],C=function(){var T=I()(v()().mark(function A(){return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,l();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},A)}));return function(){return T.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:m,value:D,onChange:R,onBeforeReset:C,onReset:function(A){console.log("formData:",A)}}),p.createElement(r,{value:D}))},j.abrupt("return",{default:E});case 19:case"end":return j.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/utils":L,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=E.sent,s=d.useState,E.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=E.sent,l=t.default,E.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=E.sent,r=n.default,u={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},o=function(){var j=s({}),y=O()(j,2),c=y[0],b=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:u,value:c,onChange:b,actions:["reset","submit"]}),p.createElement(l,{value:c}))},E.abrupt("return",{default:o});case 15:case"end":return E.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-5":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=b.sent,s=d.useState,b.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=b.sent,l=t.message,n=t.Button,b.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return r=b.sent,u=r.sleep,b.next=15,Promise.resolve().then(e.bind(e,41989));case 15:return o=b.sent,m=o.default,b.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return E=b.sent,f=E.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var R=s({}),C=O()(R,2),T=C[0],A=C[1],g=function(){var W=I()(v()().mark(function V(){return v()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:l.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return z.stop()}},V)}));return function(){return W.apply(this,arguments)}}(),K=function(){l.success("\u5BFC\u51FA\u6210\u529F")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{schema:j,value:T,onChange:A,onSubmit:g,actions:["submit","reset","export"],registerActions:{export:function(V){var U=V.loading;return p.createElement(n,{type:"primary",disabled:U.submit||U.reset,onClick:K},"\u5BFC\u51FA")}}}),p.createElement(m,{value:T}))},b.abrupt("return",{default:y});case 24:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/utils":L,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-6":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=g.sent,s=d.useState,t=d.useRef,g.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return l=g.sent,n=l.message,r=l.Button,u=l.Popconfirm,g.next=13,Promise.resolve().then(e.bind(e,34539));case 13:return o=g.sent,m=o.DeleteOutlined,E=o.UploadOutlined,g.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return f=g.sent,j=f.sleep,g.next=22,Promise.resolve().then(e.bind(e,41989));case 22:return y=g.sent,c=y.default,g.next=26,Promise.resolve().then(e.bind(e,74311));case 26:return b=g.sent,D=b.default,R={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},C={submit:function(W){var V=W.handleSubmit,U=W.loading;return p.createElement(u,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:V},p.createElement(r,{loading:U.submit,type:"primary",icon:p.createElement(E,null)},"\u63D0\u4EA4"))},reset:function(W){var V=W.handleReset,U=W.loading;return p.createElement(r,{loading:U.reset,onClick:V,icon:p.createElement(m,null)},"\u91CD\u7F6E")}},T=function(){var W=s({}),V=O()(W,2),U=V[0],z=V[1],H=t(null),Q=function(){var Y=I()(v()().mark(function ae(){var re,ue;return v()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,H.current.validate();case 2:if(re=se.sent,ue=re.hasError,!ue){se.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),se.abrupt("return");case 7:return se.next=9,j();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return se.stop()}},ae)}));return function(){return Y.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(D,{ref:H,schema:R,value:U,onChange:z,onSubmit:Q,registerActions:C}),p.createElement(c,{value:U}))},g.abrupt("return",{default:T});case 32:case"end":return g.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@ant-design/icons":M,"@examples/utils":L,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},39820:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(90261),x=e(48201),B=e(41989),L=e(74311),$=e(14953),M=e(97609),P={"examples-form-render-react-500-builtin-renderers-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=b.sent,s=d.useState,t=d.useMemo,b.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return l=b.sent,n=l.Button,b.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=b.sent,u=r.default,b.next=15,Promise.resolve().then(e.bind(e,74311));case 15:return o=b.sent,m=o.default,b.next=19,Promise.resolve().then(e.bind(e,97609));case 19:return E=b.sent,b.next=22,Promise.resolve().then(e.bind(e,14953));case 22:return f=b.sent,j=f.default,y=function(){var R=s(!1),C=O()(R,2),T=C[0],A=C[1],g=s(!1),K=O()(g,2),W=K[0],V=K[1],U=s({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),z=O()(U,2),H=z[0],Q=z[1],Y=t(function(){return{disable:function(){return p.createElement(n,{type:"dashed",onClick:function(){return A(!T)}},T?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return p.createElement(n,{type:"dashed",onClick:function(){return V(!W)}},W?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[W,T]);return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(m,{rootClassName:E.builtinRenderers,labelWidth:230,schema:j,value:H,onChange:Q,actions:["submit","reset","disable","readonly"],registerActions:Y,disabled:T,readonly:W,readonlyPlaceholder:p.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),p.createElement(u,{value:H}))},b.abrupt("return",{default:y});case 26:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"./schemas/all.ts":{type:"FILE",value:e(71525).Z},"./styles.ts":{type:"FILE",value:e(24127).Z}},entry:"index.tsx"},context:{"./schemas/all.ts":$,"./styles.ts":M,react:S||(S=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":L,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.ts":$,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":M},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},28680:function(G,i,e){e.r(i),e.d(i,{demos:function(){return N}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(4123),I=e(74311),p=e(35804),N={"examples-form-render-react-700-locale-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function x(){var B,L,$,M,P,h;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return B=s.sent,L=B.default,s.next=6,Promise.resolve().then(e.bind(e,35804));case 6:return $=s.sent,M=$.default,P={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},h=function(){return O.createElement(L,{rootStyle:{maxWidth:500},schema:P,locale:M})},s.abrupt("return",{default:h});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{"@schema-render/form-render-react":I,"@schema-render/form-render-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=_()(a()().mark(function L(){var $,M=arguments;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,M));case 3:case"end":return h.stop()}},L)}));function B(){return x.apply(this,arguments)}return B}()}}}},47023:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(74624),v={}},48167:function(G,i,e){e.r(i),e.d(i,{demos:function(){return N}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(83140),I=e(74311),p=e(37418),N={"examples-form-render-react-850-position-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function x(){var B,L,$,M,P,h,d;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return B=t.sent,L=B.default,t.next=6,Promise.resolve().then(e.bind(e,37418));case 6:return $=t.sent,M=$.default,P={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},h=function(n,r){n.bank_id=r.extra.bank_id,n.bank_account=r.extra.bank_account,n.bank_name=r.extra.bank_name,n.bank_branch_name=r.extra.bank_branch_name},d=function(){return O.createElement(L,{schema:P,renderers:M,watch:{bank_account:h,bank_name:h,bank_branch_name:h}})},t.abrupt("return",{default:d});case 12:case"end":return t.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"./renderers.tsx":{type:"FILE",value:e(540).Z}},entry:"index.tsx"},context:{"./renderers.tsx":p,"@schema-render/form-render-react":I,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":p},renderOpts:{compile:function(){var x=_()(a()().mark(function L(){var $,M=arguments;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,M));case 3:case"end":return h.stop()}},L)}));function B(){return x.apply(this,arguments)}return B}()}}}},68170:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return d}});var a=e(9783),v=e.n(a),_=e(97857),O=e.n(_),F=e(15009),I=e.n(F),p=e(5574),N=e.n(p),x=e(99289),B=e.n(x),L=e(67294),$=e(34877),M=e(74311),P=e(48201),h=e(31776),d={"examples-form-render-react-851-steps-demo-0":{component:L.memo(L.lazy(B()(I()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b;return I()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=R.sent,l=t.useState,n=t.useMemo,r=t.useRef,R.next=8,Promise.resolve().then(e.bind(e,74311));case 8:return u=R.sent,o=u.default,R.next=12,Promise.resolve().then(e.bind(e,48201));case 12:return m=R.sent,E=m.Steps,f=m.Button,R.next=17,Promise.resolve().then(e.bind(e,31776));case 17:return j=R.sent,y=j.useMemoizedFn,c={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},b=function(){var T=l(0),A=N()(T,2),g=A[0],K=A[1],W=l({}),V=N()(W,2),U=V[0],z=V[1],H=r(null),Q=function(){K(function(se){return se-1})},Y=y(B()(I()().mark(function fe(){var se,de,xe,pe;return I()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:return Oe.next=2,(se=H.current)===null||se===void 0?void 0:se.validate();case 2:if(de=Oe.sent,!(de!=null&&de.hasError||de!=null&&de.hasWarning)){Oe.next=8;break}if(xe="step".concat(g+1),pe=de.errorList.some(function(Se){return Se.path[0]===xe}),!pe){Oe.next=8;break}return Oe.abrupt("return");case 8:K(g+1);case 9:case"end":return Oe.stop()}},fe)}))),ae=y(function(){var fe;z(O()(O()({},U),{},v()({},"step".concat(g+1),{}))),(fe=H.current)===null||fe===void 0||fe.resetError()}),re=n(function(){return{prev:function(){return L.createElement(f,{onClick:Q},"\u4E0A\u4E00\u6B65")},next:function(){return L.createElement(f,{type:"primary",onClick:Y},"\u4E0B\u4E00\u6B65")},reset:function(){return L.createElement(f,{onClick:ae},"\u91CD\u7F6E")}}},[]),ue=function(){var fe=B()(I()().mark(function se(){var de,xe;return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,(de=H.current)===null||de===void 0?void 0:de.validate();case 2:if(xe=ve.sent,!(xe!=null&&xe.hasError||xe!=null&&xe.hasWarning)){ve.next=5;break}return ve.abrupt("return");case 5:case"end":return ve.stop()}},se)}));return function(){return fe.apply(this,arguments)}}();return L.createElement("div",{style:{maxWidth:800}},L.createElement(E,{size:"small",current:g,onChange:K,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),L.createElement(o,{ref:H,schema:c,value:U,onChange:z,userCtx:{step:g},actions:g===0?["next","reset"]:g===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:re,onSubmit:ue}))},R.abrupt("return",{default:b});case 22:case"end":return R.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},ahooks:{type:"NPM",value:"3.8.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(L,2)),"@schema-render/form-render-react":M,antd:P,ahooks:h},renderOpts:{compile:function(){var s=B()(I()().mark(function l(){var n,r=arguments;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}}}},62127:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(45011),L=e(41989),$=e(74311),M=e(48201),P={"examples-form-render-react-852-audit-renderer-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=D.sent,s=d.useState,D.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=D.sent,l=t.default,D.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=D.sent,r=n.default,D.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return u=D.sent,o=u.Input,m=u.Radio,E=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],f=function(C){var T,A=C.disabled,g=C.value,K=C.onChange,W=C.validator,V=function(H){K(I()(I()({},g),H),{triggerValidator:!H.hasOwnProperty("type")})},U=(g==null?void 0:g.type)===2;return x.createElement("div",null,x.createElement(m.Group,{options:E,value:(T=g==null?void 0:g.type)!==null&&T!==void 0?T:null,onChange:function(H){return V({type:H.target.value})},disabled:A}),x.createElement("div",{style:{marginTop:U?5:0}},U&&x.createElement(o.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:W.status,disabled:A,value:g.failReason,onChange:function(H){return V({failReason:H.target.value})}})))},j={Audit:{component:f,validator:function(C){var T=C.value;if((T==null?void 0:T.type)===2&&!T.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},c=function(){var C=s({}),T=O()(C,2),A=T[0],g=T[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,value:A,onChange:g,renderers:j}),x.createElement(l,{value:A}))},D.abrupt("return",{default:c});case 23:case"end":return D.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(x,2)),"@examples/components/SyntaxHighlighter":L,"@schema-render/form-render-react":$,antd:M},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},42087:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return L}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(6168),x=e(41989),B=e(74311),L={"examples-form-render-react-853-validate-on-blur-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var M,P,h,d,s,t,l,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=u.sent,P=M.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,t=s.default,l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var m=P({}),E=O()(m,2),f=E[0],j=E[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:l,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}}}},55850:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(88358),L=e(41989),$=e(74311),M=e(48201),P={"examples-form-render-react-880-relation-checkbox-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=c.sent,s=d.useState,t=d.useRef,c.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return l=c.sent,n=l.default,c.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return r=c.sent,u=r.default,c.next=15,Promise.resolve().then(e.bind(e,48201));case 15:return o=c.sent,m=o.Select,E={component:function(D){var R,C=D.schema,T=D.value,A=D.disabled,g=D.validator,K=D.onChange,W=D.userCtx,V=W.cityList||((R=C.renderOptions)===null||R===void 0?void 0:R.options);return x.createElement(m,I()(I()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(C.title)},C.renderOptions),{},{options:V,status:g.status,mode:void 0,value:T,onChange:function(z){return K(z)},disabled:A}))}},f={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},j=function(){var D=s({}),R=O()(D,2),C=R[0],T=R[1],A=t({});return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(u,{labelWidth:180,actions:[],schema:f,value:C,onChange:T,renderers:{AvailableCities:E},watch:{cities:function(K,W){A.current.cityList=W.extra.checkedOptions,W.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:A.current}),x.createElement(n,{value:C}))},c.abrupt("return",{default:j});case 21:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{react:S||(S=e.t(x,2)),"@examples/components/SyntaxHighlighter":L,"@schema-render/form-render-react":$,antd:M},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,t,l,n,r,u,o;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=E.sent,s=d.useState,E.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=E.sent,l=t.default,E.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=E.sent,r=n.default,u={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},o=function(){var j=s({}),y=O()(j,2),c=y[0],b=y[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{labelWidth:180,actions:[],schema:u,value:c,onChange:b,watch:{cities:function(R,C){u.properties.available_cities.renderOptions.options=C.extra.checkedOptions,C.value.includes(R.available_cities)||(R.available_cities=void 0)}}}),x.createElement(l,{value:c}))},E.abrupt("return",{default:o});case 15:case"end":return E.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{react:S||(S=e.t(x,2)),"@examples/components/SyntaxHighlighter":L,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},54811:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return L}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(73888),x=e(41989),B=e(74311),L={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var M,P,h,d,s,t,l,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],E={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:m}}}};return E},u.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return M=u.sent,P=M.useState,u.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return h=u.sent,d=h.default,u.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return s=u.sent,t=s.default,n=function(){var m=P({}),E=O()(m,2),f=E[0],j=E[1],y=P(function(){return l()}),c=O()(y,2),b=c[0],D=c[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{labelWidth:180,actions:[],schema:b,value:f,onChange:j,watch:{cities:function(C,T){D(l(T.extra.selectedOptions)),T.value.includes(C.available_cities)||(C.available_cities=void 0)}}}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}}}},37531:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return $}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(19632),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(73914),L=e(74311),$={"examples-form-render-react-890-benchmark-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function M(){var P,h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return P=m.sent,h=P.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,s=d.useState,t=100,l={renderType:"Root",properties:{}},n=I()(Array(t).keys()),n.forEach(function(E){var f="field_".concat(E);l.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],u=function(){var f=s({}),j=O()(f,2),y=j[0],c=j[1],b=function(R,C){var T=parseInt(C.sPath.slice(6)),A=T-1,g=T+1,K="field_".concat(g>=t?A:g);R[K]=C.value,c(R)};return x.createElement(h,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:l,value:y,onChange:b})},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":L,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var M=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}},"examples-form-render-react-890-benchmark-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function M(){var P,h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return P=m.sent,h=P.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,s=d.useState,t=300,l={renderType:"Root",properties:{}},n=I()(Array(t).keys()),n.forEach(function(E){var f="field_".concat(E);l.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],u=function(){var f=s({}),j=O()(f,2),y=j[0],c=j[1],b=function(R,C){var T=parseInt(C.sPath.slice(6)),A=T-1,g=T+1,K="field_".concat(g>=t?A:g);R[K]=C.value,c(R)};return x.createElement(h,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:l,value:y,onChange:b})},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":L,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var M=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,s));case 3:case"end":return l.stop()}},h)}));function P(){return M.apply(this,arguments)}return P}()}}}},53775:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return L}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(64768),x=e(41989),B=e(74311),L={"examples-form-render-react-900-renderers-warning-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var M,P,h,d,s,t,l,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=u.sent,P=M.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,t=s.default,l={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=P({}),E=O()(m,2),f=E[0],j=E[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:l,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(h=t.sent).default.apply(h,d));case 3:case"end":return t.stop()}},P)}));function M(){return $.apply(this,arguments)}return M}()}}}},88642:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(87004),x=e(41989),B=e(74311),L=e(34539),$=e(48201),M={"examples-form-render-react-901-label-vertical-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return l=m.sent,n=l.default,r={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],c=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:r,value:y,onChange:c}),p.createElement(t,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-901-label-vertical-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=c.sent,d=h.useState,c.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=c.sent,t=s.default,c.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,34539));case 14:return r=c.sent,u=r.QuestionCircleOutlined,c.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return o=c.sent,m=o.Popover,E={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(D){var R=D.schema,C=D.required,T=D.prefixClassNames;return p.createElement("div",null,R.title,!!R.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:R.titleDescription},p.createElement(u,{className:T("item-title-tooltip"),style:{marginLeft:4}})),!C&&" (\u53EF\u9009)")},j=function(){var D=d({}),R=O()(D,2),C=R[0],T=R[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:f,schema:E,value:C,onChange:T}),p.createElement(t,{value:C}))},c.abrupt("return",{default:j});case 24:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B,"@ant-design/icons":L,antd:$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},94270:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return r}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(43895),x=e(41989),B=e(48201),L=e(74072),$=e(2862),M=e(78469),P=e(74311),h=e(38959),d=e(90489),s=e(60823),t=e(92114),l=e(68666),n=e(362),r={"examples-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function u(){var o,m,E,f,j,y,c,b,D,R,C,T,A,g,K,W;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return o=U.sent,m=o.default,U.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return E=U.sent,f=E.useState,j=E.useRef,U.next=11,Promise.resolve().then(e.bind(e,48201));case 11:return y=U.sent,c=y.Button,b=y.message,U.next=16,Promise.resolve().then(e.bind(e,74072));case 16:return D=U.sent,R=D.default,U.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return C=U.sent,T=C.default,U.next=24,Promise.resolve().then(e.bind(e,2862));case 24:return A=U.sent,g=A.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},W=function(){var H=f({}),Q=O()(H,2),Y=Q[0],ae=Q[1],re=j(),ue=function(){var fe=I()(v()().mark(function se(){var de;return v()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,re.current.validate();case 2:de=pe.sent,de.hasError||b.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return pe.stop()}},se)}));return function(){return fe.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement("div",null,p.createElement(R,{ref:re,schema:K,value:Y,onChange:ae,itemLayout:T,renderers:g}),p.createElement(c,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:ue},"\u63D0\u4EA4")),p.createElement(m,{value:Y}))},U.abrupt("return",{default:W});case 29:case"end":return U.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./core-react/renderers/common.tsx":$,"./core-react/item-layout/Horizontal.tsx":M,"@examples/components/SyntaxHighlighter":x,react:S||(S=e.t(p,2)),antd:B,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var E,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},m)}));function o(){return u.apply(this,arguments)}return o}()}},"examples-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function u(){var o,m,E,f,j,y,c,b,D,R;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return o=T.sent,m=o.default,T.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return E=T.sent,f=E.useState,T.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return j=T.sent,y=j.message,T.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return c=T.sent,b=c.default,D={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},R=function(){var g=f({}),K=O()(g,2),W=K[0],V=K[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(b,{schema:D,value:W,onChange:V,onSubmit:function(){return y.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(m,{value:W}))},T.abrupt("return",{default:R});case 19:case"end":return T.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:S||(S=e.t(p,2)),antd:B,"@schema-render/form-render-react":P},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var E,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},m)}));function o(){return u.apply(this,arguments)}return o}()}},"examples-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function u(){var o,m,E,f,j,y;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,m=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,90489));case 6:return E=b.sent,f=E.default,j={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},y=function(){var R=function(){var C=I()(v()().mark(function T(A){return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",A),K.next=3,m();case 3:case"end":return K.stop()}},T)}));return function(A){return C.apply(this,arguments)}}();return p.createElement(f,{schema:j,onSubmit:R,onReset:R})},b.abrupt("return",{default:y});case 11:case"end":return b.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

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

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{"@examples/utils":h,"@schema-render/search-react":d},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var E,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},m)}));function o(){return u.apply(this,arguments)}return o}()}},"examples-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function u(){var o,m,E,f,j,y,c,b,D,R,C;return v()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=A.sent,m=o.sleep,A.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return E=A.sent,f=E.default,A.next=10,Promise.resolve().then(e.bind(e,362));case 10:return j=A.sent,y=j.default,A.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return c=A.sent,b=c.default,A.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return D=A.sent,R=D.default,C=function(){return p.createElement(R,{search:{schema:f},table:{columns:y,showRowNumber:!0},request:function(){var K=I()(v()().mark(function V(U){var z;return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return console.log("searchParams:",U),Q.next=3,m();case 3:return z=b(),Q.abrupt("return",{data:z,total:100});case 5:case"end":return Q.stop()}},V)}));function W(V){return K.apply(this,arguments)}return W}()})},A.abrupt("return",{default:C});case 22:case"end":return A.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./search-table-react/helpers/createDataSource.ts":t,"./search-table-react/helpers/schema.ts":l,"./search-table-react/helpers/columns.ts":n,"@examples/utils":h,"@schema-render/search-table-react":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":l,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var E,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},m)}));function o(){return u.apply(this,arguments)}return o}()}}}},11124:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return h}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(67342),x=e(48201),B=e(38959),L=e(67247),$=e(90489),M=e(77095),P=e(36641),h={"examples-search-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C;return v()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=A.sent,t=s.useState,A.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return l=A.sent,n=l.ConfigProvider,r=l.Table,A.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return u=A.sent,o=u.sleep,A.next=15,Promise.resolve().then(e.bind(e,67247));case 15:return m=A.sent,E=m.default,A.next=19,Promise.resolve().then(e.bind(e,36641));case 19:return f=A.sent,j=f.default,A.next=23,Promise.resolve().then(e.bind(e,77095));case 23:return y=A.sent,c=y.default,A.next=27,Promise.resolve().then(e.bind(e,90489));case 27:return b=A.sent,D=b.default,R={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},C=function(){var K=t(function(){return c()}),W=O()(K,2),V=W[0],U=W[1],z=function(){var H=I()(v()().mark(function Q(Y){return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return console.log("searchParams:",Y),re.next=3,o();case 3:U(c());case 4:case"end":return re.stop()}},Q)}));return function(Y){return H.apply(this,arguments)}}();return p.createElement(n,{locale:E},p.createElement(D,{schema:R,onSubmit:z,onReset:z}),p.createElement(r,{style:{marginTop:20},columns:j,dataSource:V,scroll:{x:1500}}))},A.abrupt("return",{default:C});case 32:case"end":return A.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(77538).Z},"./helpers/columns.ts":{type:"FILE",value:e(96390).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/columns.ts":P,react:S||(S=e.t(p,2)),antd:x,"@examples/utils":B,"antd/locale/zh_CN":L,"@schema-render/search-react":$,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":P},renderOpts:{compile:function(){var d=I()(v()().mark(function t(){var l,n=arguments;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}}}},79899:function(G,i,e){e.r(i),e.d(i,{demos:function(){return B}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(27885),I=e(48201),p=e(38959),N=e(67247),x=e(90489),B={"examples-search-react-300-actions-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function L(){var $,M,P,h,d,s,t,l,n,r;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return $=o.sent,M=$.ConfigProvider,o.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return P=o.sent,h=P.sleep,o.next=10,Promise.resolve().then(e.bind(e,67247));case 10:return d=o.sent,s=d.default,o.next=14,Promise.resolve().then(e.bind(e,90489));case 14:return t=o.sent,l=t.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},r=function(){var E=function(){var j=_()(a()().mark(function y(c){return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return console.log("searchParams:",c),D.next=3,h();case 3:case"end":return D.stop()}},y)}));return function(c){return j.apply(this,arguments)}}(),f=function(y){console.log("isCollapsed:",y)};return O.createElement(M,{locale:s},O.createElement(l,{schema:n,onSubmit:E,onReset:E,onToggleCollapsed:f}))},o.abrupt("return",{default:r});case 19:case"end":return o.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{antd:I,"@examples/utils":p,"antd/locale/zh_CN":N,"@schema-render/search-react":x},renderOpts:{compile:function(){var L=_()(a()().mark(function M(){var P,h=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},M)}));function $(){return L.apply(this,arguments)}return $}()}}}},49469:function(G,i,e){e.r(i),e.d(i,{demos:function(){return N}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(10122),I=e(90489),p=e(9686),N={"examples-search-react-700-locale-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function x(){var B,L,$,M,P,h;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,90489));case 2:return B=s.sent,L=B.default,s.next=6,Promise.resolve().then(e.bind(e,9686));case 6:return $=s.sent,M=$.default,P={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},h=function(){return O.createElement(L,{schema:P,labelWidth:120,locale:M})},s.abrupt("return",{default:h});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{"@schema-render/search-react":I,"@schema-render/search-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=_()(a()().mark(function L(){var $,M=arguments;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,M));case 3:case"end":return h.stop()}},L)}));function B(){return x.apply(this,arguments)}return B}()}}}},90712:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(84123),v={}},11973:function(G,i,e){e.r(i),e.d(i,{demos:function(){return B}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(24197),I=e(90489),p=e(57864),N=e(35719),x=e(9680),B={"examples-search-react-850-category-title-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function L(){var $,M,P,h,d,s,t,l,n,r,u,o;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,90489));case 2:return $=E.sent,M=$.default,E.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return P=E.sent,h=P.default,E.next=10,Promise.resolve().then(e.bind(e,57864));case 10:return d=E.sent,s=d.default,t={BankSelect:h,ObjectSectionTitle:s},l={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(j){var y=function(b,D){b[j].bank_id=D.extra.bank_id,b[j].bank_account=D.extra.bank_account,b[j].bank_name=D.extra.bank_name,b[j].bank_branch_name=D.extra.bank_branch_name};return y},r=n("payment"),u=n("collection"),o=function(){return O.createElement(M,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:l,renderers:t,actions:["collapse"],watch:{"payment.bank_account":r,"payment.bank_name":r,"payment.bank_branch_name":r,"collection.bank_account":u,"collection.bank_name":u,"collection.bank_branch_name":u}})},E.abrupt("return",{default:o});case 19:case"end":return E.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.6.2"},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(97395).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/ObjectSectionTitle.tsx":p,"./renderers/BankSelect.tsx":N,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":p,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":N},renderOpts:{compile:function(){var L=_()(a()().mark(function M(){var P,h=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},M)}));function $(){return L.apply(this,arguments)}return $}()}},"examples-search-react-850-category-title-demo-1":{component:O.memo(O.lazy(_()(a()().mark(function L(){var $,M,P,h,d,s,t,l,n,r,u,o,m;return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,90489));case 2:return $=f.sent,M=$.default,f.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return P=f.sent,h=P.default,f.next=10,Promise.resolve().then(e.bind(e,9680));case 10:return d=f.sent,s=d.default,t={BankSelect:h,SectionTitle:s},l={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(y){var c=function(D,R){D["".concat(y,"_bank_id")]=R.extra.bank_id,D["".concat(y,"_bank_account")]=R.extra.bank_account,D["".concat(y,"_bank_name")]=R.extra.bank_name,D["".concat(y,"_bank_branch_name")]=R.extra.bank_branch_name};return c},r=n("payment"),u=n("collection"),o=function(y){var c;if(!y)return 5;var b=y.clientWidth,D=((c=y.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||c===void 0||(c=c.getBoundingClientRect())===null||c===void 0?void 0:c.width)||320;return Math.floor(b/D)*2},m=function(){return O.createElement(M,{defaultCollapsed:!1,schema:l,renderers:t,actions:["collapse"],watch:{payment_bank_account:r,payment_bank_name:r,payment_bank_branch_name:r,collection_bank_account:u,collection_bank_name:u,collection_bank_branch_name:u},calcCollapsedNumber:o})},f.abrupt("return",{default:m});case 20:case"end":return f.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.6.2"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(5038).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/SectionTitle.tsx":x,"./renderers/BankSelect.tsx":N,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":x,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":N},renderOpts:{compile:function(){var L=_()(a()().mark(function M(){var P,h=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},M)}));function $(){return L.apply(this,arguments)}return $}()}}}},79181:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return l}});var a=e(5574),v=e.n(a),_=e(97857),O=e.n(_),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(69306),L=e(38959),$=e(60823),M=e(92114),P=e(68666),h=e(362),d=e(48201),s=e(67247),t=e(91845),l={"examples-search-table-react-001-intro-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=C.sent,u=r.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=C.sent,m=o.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=C.sent,f=E.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=C.sent,y=j.default,C.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return c=C.sent,b=c.default,D=function(){return x.createElement(b,{search:{schema:m},table:{columns:f},request:function(){var A=N()(I()().mark(function K(W){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return console.log("searchParams:",W),z.next=3,u();case 3:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 5:case"end":return z.stop()}},K)}));function g(K){return A.apply(this,arguments)}return g}()})},C.abrupt("return",{default:D});case 22:case"end":return C.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-001-intro-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R,C,T,A,g,K,W,V,U,z,H,Q,Y,ae,re,ue,fe;return I()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=de.sent,u=r.sleep,de.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=de.sent,m=o.default,de.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=de.sent,f=E.default,de.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=de.sent,y=j.default,de.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return c=de.sent,b=c.default,de.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return D=de.sent,R=D.useState,C=D.useRef,de.next=27,Promise.resolve().then(e.bind(e,48201));case 27:return T=de.sent,A=T.ConfigProvider,g=T.message,K=T.Button,W=T.Tag,de.next=34,Promise.resolve().then(e.bind(e,67247));case 34:return V=de.sent,U=V.default,de.next=38,Promise.resolve().then(e.bind(e,91845));case 38:return z=de.sent,H=z.pinyin,Q=/[\u4e00-\u9fa5]/,Y=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],ae=f.map(function(xe,pe){var ve=O()({},xe);return pe===0?ve.fixed="left":pe===f.length-1&&(ve.fixed="right"),ve}),re={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},ue=function(pe){return u()},fe=function(){var pe=R("1"),ve=v()(pe,2),Oe=ve[0],Se=ve[1],Be=C(null),Fe=function(Ze,He){return[{text:"\u7F16\u8F91",onClick:function(){g.success("\u70B9\u51FB\u4E86\u7B2C ".concat(He," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Qe=N()(I()().mark(function we(){var Ye;return I()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ke.next=2,ue(Ze.id);case 2:(Ye=Be.current)===null||Ye===void 0||Ye.refresh();case 3:case"end":return Ke.stop()}},we)}));function Ue(){return Qe.apply(this,arguments)}return Ue}()}]},$e={left:x.createElement(K,{style:{marginRight:16}},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9"),right:x.createElement(K,null,"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")};return x.createElement(A,{locale:U},x.createElement(b,{ref:Be,search:{schema:m,labelWidth:80},title:{showSetting:!0,tabs:{activeKey:Oe,items:Y,onChange:Se,tabBarExtraContent:$e}},titleTop:function(){return x.createElement("div",{style:re},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return x.createElement("div",{style:re},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:ae,showRowNumber:!0,actionItems:Fe,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(Ze){return Q.test(Ze)?H(Ze,{toneType:"none"}):Ze}},request:function(){var ze=N()(I()().mark(function He(Qe){var Ue,we;return I()().wrap(function(ke){for(;;)switch(ke.prev=ke.next){case 0:return ke.next=2,u();case 2:return Ue=y(Qe.pageSize),we=Ue.reduce(function(Ke,an){return Ke+an.goods_price},0).toFixed(2),ke.abrupt("return",{data:Ue,total:100,summaryData:{supplier_code:x.createElement(W,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:we}});case 5:case"end":return ke.stop()}},He)}));function Ze(He){return ze.apply(this,arguments)}return Ze}()}))},de.abrupt("return",{default:fe});case 47:case"end":return de.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":L,"@schema-render/search-table-react":$,react:S||(S=e.t(x,2)),antd:d,"antd/locale/zh_CN":s,"pinyin-pro":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}}}},37629:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return P}});var a=e(15009),v=e.n(a),_=e(99289),O=e.n(_),F=e(67294),I=e(72106),p=e(38959),N=e(60823),x=e(92114),B=e(362),L=e(68666),$=e(48201),M=e(67247),P={"examples-search-table-react-010-table-actions-demo-0":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=y.sent,s=d.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=y.sent,l=t.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=y.sent,r=n.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return u=y.sent,o=u.default,y.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return m=y.sent,E=m.default,f=function(){return F.createElement(E,{search:{schema:l},table:{columns:r,showRowNumber:!0},request:function(){var b=O()(v()().mark(function R(C){var T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,s();case 2:return T=o(C.pageSize),g.abrupt("return",{data:T,total:100});case 4:case"end":return g.stop()}},R)}));function D(R){return b.apply(this,arguments)}return D}()})},y.abrupt("return",{default:f});case 22:case"end":return y.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/columns.ts":B,"./helpers/schema.ts":L,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-1":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=c.sent,s=d.sleep,c.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=c.sent,l=t.default,c.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=c.sent,r=n.default,c.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return u=c.sent,o=u.default,c.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return m=c.sent,E=m.default,f=function(D,R,C){return F.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},C+1)},j=function(){return F.createElement(E,{search:{schema:l},table:{columns:r,showRowNumber:!0,rowNumberColumnData:{width:80,render:f}},request:function(){var D=O()(v()().mark(function C(T){var A;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return A=o(T.pageSize),K.abrupt("return",{data:A,total:100});case 4:case"end":return K.stop()}},C)}));function R(C){return D.apply(this,arguments)}return R}()})},c.abrupt("return",{default:j});case 23:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":L,"./helpers/columns.ts":B,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-2":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c,b,D;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=C.sent,s=d.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=C.sent,l=t.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=C.sent,r=n.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return u=C.sent,o=u.default,C.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return m=C.sent,E=m.default,C.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return f=C.sent,j=f.ConfigProvider,y=f.message,C.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return c=C.sent,b=c.default,D=function(){var A=function(K,W){return[{text:"\u7F16\u8F91",onClick:function(){y.success("\u70B9\u51FB\u4E86\u7B2C ".concat(W," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return F.createElement(j,{locale:b},F.createElement(E,{search:{schema:l},table:{columns:r,actionItems:A},request:function(){var g=O()(v()().mark(function W(V){var U;return v()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,s();case 2:return U=o(V.pageSize),H.abrupt("return",{data:U,total:100});case 4:case"end":return H.stop()}},W)}));function K(W){return g.apply(this,arguments)}return K}()}))},C.abrupt("return",{default:D});case 31:case"end":return C.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":L,"./helpers/columns.ts":B,"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-3":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=g.sent,s=d.useRef,g.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=g.sent,l=t.sleep,g.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=g.sent,r=n.default,g.next=14,Promise.resolve().then(e.bind(e,362));case 14:return u=g.sent,o=u.default,g.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=g.sent,E=m.default,g.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return f=g.sent,j=f.default,g.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=g.sent,c=y.ConfigProvider,b=y.message,g.next=31,Promise.resolve().then(e.bind(e,67247));case 31:return D=g.sent,R=D.default,C=function(W){return l()},T=function(){var W=s(null),V=function(z,H){return[{text:"\u7F16\u8F91",onClick:function(){b.success("\u70B9\u51FB\u7B2C ".concat(H," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Q=O()(v()().mark(function ae(){var re;return v()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.next=2,C(z.id);case 2:(re=W.current)===null||re===void 0||re.refresh();case 3:case"end":return fe.stop()}},ae)}));function Y(){return Q.apply(this,arguments)}return Y}()}]};return F.createElement(c,{locale:R},F.createElement(j,{ref:W,search:{schema:r},table:{columns:o,actionItems:V,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:function(){var U=O()(v()().mark(function H(Q){var Y;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,l();case 2:return Y=E(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 4:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()}))},g.abrupt("return",{default:T});case 36:case"end":return g.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":L,"./helpers/columns.ts":B,react:S||(S=e.t(F,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-4":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C;return v()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=A.sent,s=d.useRef,A.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=A.sent,l=t.sleep,A.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=A.sent,r=n.default,A.next=14,Promise.resolve().then(e.bind(e,362));case 14:return u=A.sent,o=u.default,A.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=A.sent,E=m.default,A.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return f=A.sent,j=f.default,A.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=A.sent,c=y.ConfigProvider,A.next=30,Promise.resolve().then(e.bind(e,67247));case 30:return b=A.sent,D=b.default,R=function(K){return l()},C=function(){var K=s(null),W=function(U,z){return[{text:F.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(z)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(U.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:function(){var H=O()(v()().mark(function Y(){var ae;return v()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,R(U.id);case 2:(ae=K.current)===null||ae===void 0||ae.refresh();case 3:case"end":return ue.stop()}},Y)}));function Q(){return H.apply(this,arguments)}return Q}()}]};return F.createElement(c,{locale:D},F.createElement(j,{ref:K,search:{schema:r},table:{columns:o,actionItems:W,actionItemsCount:3,actionItemsColumnData:{width:180}},request:function(){var V=O()(v()().mark(function z(H){var Q;return v()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,l();case 2:return Q=E(H.pageSize),ae.abrupt("return",{data:Q,total:100});case 4:case"end":return ae.stop()}},z)}));function U(z){return V.apply(this,arguments)}return U}()}))},A.abrupt("return",{default:C});case 35:case"end":return A.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":L,"./helpers/columns.ts":B,react:S||(S=e.t(F,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var t,l=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},89588:function(G,i,e){e.r(i),e.d(i,{demos:function(){return M}});var S=e(97857),a=e.n(S),v=e(15009),_=e.n(v),O=e(99289),F=e.n(O),I=e(67294),p=e(17258),N=e(38959),x=e(60823),B=e(92114),L=e(68666),$=e(362),M={"examples-search-table-react-020-table-height-demo-0":{component:I.memo(I.lazy(F()(_()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E;return _()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return h=j.sent,d=h.sleep,j.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=j.sent,t=s.default,j.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=j.sent,n=l.default,j.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=j.sent,u=r.default,j.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return o=j.sent,m=o.default,E=function(){return I.createElement(m,{style:{height:500,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:function(){var c=F()(_()().mark(function D(R){var C;return _()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,d();case 2:return C=u(R.pageSize),A.abrupt("return",{data:C,total:100});case 4:case"end":return A.stop()}},D)}));function b(D){return c.apply(this,arguments)}return b}()})},j.abrupt("return",{default:E});case 22:case"end":return j.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,"./helpers/columns.ts":$,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var P=F()(_()().mark(function d(){var s,t=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-020-table-height-demo-1":{component:I.memo(I.lazy(F()(_()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f;return _()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return h=y.sent,d=h.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=y.sent,n=l.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return o=y.sent,m=o.default,E={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},f=function(){return I.createElement(m,{style:{height:700,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:function(){var b=F()(_()().mark(function R(C){var T;return _()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,d();case 2:return T=u(C.pageSize),g.abrupt("return",{data:T,total:100});case 4:case"end":return g.stop()}},R)}));function D(R){return b.apply(this,arguments)}return D}(),header:function(){return I.createElement("div",{style:a()(a()({},E),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return I.createElement("div",{style:E},"Title Top")},titleBottom:function(){return I.createElement("div",{style:E},"Title Bottom")},footer:function(){return I.createElement("div",{style:E},"Footer")}})},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,"./helpers/columns.ts":$,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var P=F()(_()().mark(function d(){var s,t=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},64929:function(G,i,e){e.r(i),e.d(i,{demos:function(){return M}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(73865),I=e(48201),p=e(38959),N=e(60823),x=e(92114),B=e(68666),L=e(362),$=e(23786),M={"examples-search-table-react-030-table-summay-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=c.sent,d=h.Tag,c.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=c.sent,t=s.sleep,c.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=c.sent,u=r.default,c.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return o=c.sent,m=o.default,c.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return E=c.sent,f=E.default,j=function(){return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300}},request:function(){var D=_()(a()().mark(function C(T){var A,g;return a()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,t();case 2:return A=m(T.pageSize),g=A.reduce(function(V,U){return V+U.goods_price},0).toFixed(2),W.abrupt("return",{data:A,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:g}});case 5:case"end":return W.stop()}},C)}));function R(C){return D.apply(this,arguments)}return R}()})},c.abrupt("return",{default:j});case 26:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var P=_()(a()().mark(function d(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-1":{component:O.memo(O.lazy(_()(a()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=c.sent,d=h.Tag,c.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=c.sent,t=s.sleep,c.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=c.sent,u=r.default,c.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return o=c.sent,m=o.default,c.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return E=c.sent,f=E.default,j=function(){var D=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},R=O.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,summaryText:R,actionItems:D},request:function(){var C=_()(a()().mark(function A(g){var K,W;return a()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,t();case 2:return K=m(g.pageSize),W=K.reduce(function(z,H){return z+H.goods_price},0).toFixed(2),U.abrupt("return",{data:K,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:W}});case 5:case"end":return U.stop()}},A)}));function T(A){return C.apply(this,arguments)}return T}()})},c.abrupt("return",{default:j});case 26:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":B,"./helpers/createDataSource.ts":x,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var P=_()(a()().mark(function d(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-2":{component:O.memo(O.lazy(_()(a()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=c.sent,d=h.Tag,c.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=c.sent,t=s.sleep,c.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=c.sent,u=r.default,c.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return o=c.sent,m=o.default,c.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return E=c.sent,f=E.default,j=function(){var D=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},actionItems:D,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:function(){var R=_()(a()().mark(function T(A){var g,K;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return g=m(A.pageSize),K=g.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:g,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},T)}));function C(T){return R.apply(this,arguments)}return C}()})},c.abrupt("return",{default:j});case 26:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var P=_()(a()().mark(function d(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-3":{component:O.memo(O.lazy(_()(a()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=c.sent,d=h.Tag,c.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=c.sent,t=s.sleep,c.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=c.sent,u=r.default,c.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return o=c.sent,m=o.default,c.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return E=c.sent,f=E.default,j=function(){var D=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,actionItems:D,rowSelection:{type:"checkbox"}},request:function(){var R=_()(a()().mark(function T(A){var g,K;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return g=m(A.pageSize),K=g.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:g,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},T)}));function C(T){return R.apply(this,arguments)}return C}()})},c.abrupt("return",{default:j});case 26:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var P=_()(a()().mark(function d(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-4":{component:O.memo(O.lazy(_()(a()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j,y;return a()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=b.sent,d=h.Tag,b.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=b.sent,t=s.sleep,b.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=b.sent,n=l.default,b.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=b.sent,u=r.default,b.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return o=b.sent,m=o.default,b.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return E=b.sent,f=E.default,j={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},y=function(){var R=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},C=O.createElement("div",{style:j},"\u5408\u8BA1");return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:C,actionItems:R,rowSelection:{type:"checkbox"}},request:function(){var T=_()(a()().mark(function g(K){var W,V;return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,t();case 2:return W=m(K.pageSize),V=W.reduce(function(H,Q){return H+Q.goods_price},0).toFixed(2),z.abrupt("return",{data:W,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:V}});case 5:case"end":return z.stop()}},g)}));function A(g){return T.apply(this,arguments)}return A}()})},b.abrupt("return",{default:y});case 27:case"end":return b.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var P=_()(a()().mark(function d(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-5":{component:O.memo(O.lazy(_()(a()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=c.sent,d=h.Tag,c.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=c.sent,t=s.sleep,c.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=c.sent,n=l.default,c.next=14,Promise.resolve().then(e.bind(e,23786));case 14:return r=c.sent,u=r.default,c.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return o=c.sent,m=o.default,c.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return E=c.sent,f=E.default,j=function(){var D=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:D},request:function(){var R=_()(a()().mark(function T(A){var g,K;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return g=m(A.pageSize),K=g.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:g,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},T)}));function C(T){return R.apply(this,arguments)}return C}()})},c.abrupt("return",{default:j});case 26:case"end":return c.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns-tree.ts":$,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":$},renderOpts:{compile:function(){var P=_()(a()().mark(function d(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},35955:function(G,i,e){e.r(i),e.d(i,{demos:function(){return h}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(81535),I=e(48201),p=e(67247),N=e(38959),x=e(60823),B=e(92114),L=e(68666),$=e(362),M=e(23786),P=e(91845),h={"examples-search-table-react-040-table-sort-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b;return a()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=R.sent,t=s.ConfigProvider,R.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return l=R.sent,n=l.default,R.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=R.sent,u=r.sleep,R.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return o=R.sent,m=o.default,R.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return E=R.sent,f=E.default,R.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return j=R.sent,y=j.default,c=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(T){return T.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],b=function(){return O.createElement(t,{locale:n},O.createElement(y,{search:{schema:m},table:{columns:c},request:function(){var T=_()(a()().mark(function g(K){var W;return a()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,u();case 2:return W=f(K.pageSize),U.abrupt("return",{data:W,total:100});case 4:case"end":return U.stop()}},g)}));function A(g){return T.apply(this,arguments)}return A}()}))},R.abrupt("return",{default:b});case 27:case"end":return R.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L},renderOpts:{compile:function(){var d=_()(a()().mark(function t(){var l,n=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-1":{component:O.memo(O.lazy(_()(a()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b,D;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,t=s.ConfigProvider,C.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return l=C.sent,n=l.default,C.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=C.sent,u=r.sleep,C.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return o=C.sent,m=o.default,C.next=18,Promise.resolve().then(e.bind(e,362));case 18:return E=C.sent,f=E.default,C.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=C.sent,y=j.default,C.next=26,Promise.resolve().then(e.bind(e,60823));case 26:return c=C.sent,b=c.default,D=function(){return O.createElement(t,{locale:n},O.createElement(b,{search:{schema:m},table:{columns:f,sortMode:"local-all"},request:function(){var A=_()(a()().mark(function K(W){var V;return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function g(K){return A.apply(this,arguments)}return g}()}))},C.abrupt("return",{default:D});case 30:case"end":return C.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,"./helpers/columns.ts":$,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var d=_()(a()().mark(function t(){var l,n=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-2":{component:O.memo(O.lazy(_()(a()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b,D;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,t=s.ConfigProvider,C.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return l=C.sent,n=l.default,C.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=C.sent,u=r.sleep,C.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return o=C.sent,m=o.default,C.next=18,Promise.resolve().then(e.bind(e,23786));case 18:return E=C.sent,f=E.default,C.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=C.sent,y=j.default,C.next=26,Promise.resolve().then(e.bind(e,60823));case 26:return c=C.sent,b=c.default,D=function(){return O.createElement(t,{locale:n},O.createElement(b,{search:{schema:m},table:{columns:f,bordered:!0,sortMode:"local-all"},request:function(){var A=_()(a()().mark(function K(W){var V;return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function g(K){return A.apply(this,arguments)}return g}()}))},C.abrupt("return",{default:D});case 30:case"end":return C.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,"./helpers/columns-tree.ts":M,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":M},renderOpts:{compile:function(){var d=_()(a()().mark(function t(){var l,n=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-3":{component:O.memo(O.lazy(_()(a()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=g.sent,t=s.ConfigProvider,g.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return l=g.sent,n=l.default,g.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=g.sent,u=r.sleep,g.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return o=g.sent,m=o.default,g.next=18,Promise.resolve().then(e.bind(e,362));case 18:return E=g.sent,f=E.default,g.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=g.sent,y=j.default,g.next=26,Promise.resolve().then(e.bind(e,60823));case 26:return c=g.sent,b=c.default,g.next=30,Promise.resolve().then(e.bind(e,91845));case 30:return D=g.sent,R=D.pinyin,C=/[\u4e00-\u9fa5]/,T=function(){return O.createElement(t,{locale:n},O.createElement(b,{search:{schema:m},table:{columns:f,sortMode:"local-all",sortStringValueTransform:function(V){return C.test(V)?R(V,{toneType:"none"}):V}},request:function(){var W=_()(a()().mark(function U(z){var H;return a()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,u();case 2:return H=y(z.pageSize),Y.abrupt("return",{data:H,total:100});case 4:case"end":return Y.stop()}},U)}));function V(U){return W.apply(this,arguments)}return V}()}))},g.abrupt("return",{default:T});case 35:case"end":return g.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,"./helpers/columns.ts":$,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"pinyin-pro":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var d=_()(a()().mark(function t(){var l,n=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-4":{component:O.memo(O.lazy(_()(a()().mark(function d(){var s,t,l,n,r,u,o,m,E,f,j,y,c,b;return a()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=R.sent,t=s.ConfigProvider,R.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return l=R.sent,n=l.default,R.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=R.sent,u=r.sleep,R.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return o=R.sent,m=o.default,R.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return E=R.sent,f=E.default,R.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return j=R.sent,y=j.default,c=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],b=function(){return O.createElement(t,{locale:n},O.createElement(y,{search:{schema:m},table:{columns:c,sortMode:"service"},request:function(){var T=_()(a()().mark(function g(K,W){var V,U,z;return a()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return V=W.sorter,U=V,Q.next=4,u();case 4:return z=f(K.pageSize,{sort_field:U==null?void 0:U.field,sort_order:U==null?void 0:U.order}),Q.abrupt("return",{data:z,total:100});case 6:case"end":return Q.stop()}},g)}));function A(g,K){return T.apply(this,arguments)}return A}()}))},R.abrupt("return",{default:b});case 27:case"end":return R.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":L,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L},renderOpts:{compile:function(){var d=_()(a()().mark(function t(){var l,n=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,n));case 3:case"end":return u.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}}}},66725:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return s}});var a=e(15009),v=e.n(a),_=e(5574),O=e.n(_),F=e(99289),I=e.n(F),p=e(67294),N=e(18899),x=e(38959),B=e(60823),L=e(92114),$=e(68666),M=e(362),P=e(27164),h=e(6271),d=e(48201),s={"examples-search-table-react-050-tabs-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function t(){var l,n,r,u,o,m,E,f,j,y,c,b,D,R;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=T.sent,n=l.sleep,T.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=T.sent,u=r.default,T.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=T.sent,m=o.default,T.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=T.sent,f=E.default,T.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return j=T.sent,y=j.default,T.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return c=T.sent,b=c.useState,D=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],R=function(){var g=b("1"),K=O()(g,2),W=K[0],V=K[1];return p.createElement(y,{search:{schema:u,labelWidth:80},title:{tabs:{activeKey:W,items:D,onChange:V}},table:{columns:m},request:function(){var U=I()(v()().mark(function H(Q){var Y;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return console.log("activeKey:",W),re.next=3,n();case 3:return Y=f(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 5:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()})},T.abrupt("return",{default:R});case 27:case"end":return T.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":x,"@schema-render/search-table-react":B,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var t=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function l(){return t.apply(this,arguments)}return l}()}},"examples-search-table-react-050-tabs-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function t(){var l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T,A,g;return v()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=W.sent,n=l.useState,W.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return r=W.sent,u=r.sleep,W.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=W.sent,m=o.default,W.next=14,Promise.resolve().then(e.bind(e,362));case 14:return E=W.sent,f=E.default,W.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return j=W.sent,y=j.default,W.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return c=W.sent,b=c.default,W.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=W.sent,R=D.default,W.next=30,Promise.resolve().then(e.bind(e,60823));case 30:return C=W.sent,T=C.default,A=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],g=function(){var U=n("1"),z=O()(U,2),H=z[0],Q=z[1];return p.createElement(T,{search:{schema:m},title:{showSetting:!0,tabs:{activeKey:H,items:A,onChange:Q}},table:{columns:H==="1"?f:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var Y=I()(v()().mark(function re(ue){var fe,se;return v()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:if(fe=H==="1"?b:R,se=fe(ue.pageSize),!(Math.random()>.7)){xe.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return xe.abrupt("return",{data:se,total:100});case 7:case"end":return xe.stop()}},re)}));function ae(re){return Y.apply(this,arguments)}return ae}()})},W.abrupt("return",{default:g});case 35:case"end":return W.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":P,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"./helpers/columns-value-type.ts":h,"./helpers/createDataSource.ts":L,react:S||(S=e.t(p,2)),"@examples/utils":x,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L},renderOpts:{compile:function(){var t=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function l(){return t.apply(this,arguments)}return l}()}},"examples-search-table-react-050-tabs-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function t(){var l,n,r,u,o,m,E,f,j,y,c,b,D,R;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=T.sent,n=l.sleep,T.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=T.sent,u=r.default,T.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=T.sent,m=o.default,T.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=T.sent,f=E.default,T.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return j=T.sent,y=j.default,T.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return c=T.sent,b=c.useState,D=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],R=function(){var g=b("1"),K=O()(g,2),W=K[0],V=K[1];return p.createElement(y,{search:{schema:u,labelWidth:80},title:{showSetting:!0,tabs:{activeKey:W,items:D,onChange:V}},table:{columns:m},request:function(){var U=I()(v()().mark(function H(Q){var Y;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return console.log("activeKey:",W),re.next=3,n();case 3:return Y=f(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 5:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()})},T.abrupt("return",{default:R});case 27:case"end":return T.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":x,"@schema-render/search-table-react":B,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var t=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function l(){return t.apply(this,arguments)}return l}()}},"examples-search-table-react-050-tabs-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function t(){var l,n,r,u,o,m,E,f,j,y,c;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=D.sent,n=l.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,u=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=D.sent,m=o.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=D.sent,f=E.default,D.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return j=D.sent,y=j.default,c=function(){return p.createElement(y,{search:{schema:u,labelWidth:80},title:{showSetting:!0},table:{columns:m},request:function(){var C=I()(v()().mark(function A(g){var K;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,n();case 2:return K=f(g.pageSize),V.abrupt("return",{data:K,total:100});case 4:case"end":return V.stop()}},A)}));function T(A){return C.apply(this,arguments)}return T}()})},D.abrupt("return",{default:c});case 22:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":x,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var t=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function l(){return t.apply(this,arguments)}return l}()}},"examples-search-table-react-050-tabs-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function t(){var l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=g.sent,n=l.sleep,g.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=g.sent,u=r.default,g.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=g.sent,m=o.default,g.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=g.sent,f=E.default,g.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return j=g.sent,y=j.default,g.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return c=g.sent,b=c.useState,g.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return D=g.sent,R=D.Button,C=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],T=function(){var W=b("1"),V=O()(W,2),U=V[0],z=V[1],H={left:p.createElement(R,{style:{marginRight:16}},"\u5DE6\u4FA7\u5185\u5BB9"),right:p.createElement(R,null,"\u53F3\u4FA7\u5185\u5BB9")};return p.createElement(y,{search:{schema:u,labelWidth:80},title:{showSetting:!0,tabs:{activeKey:U,items:C,onChange:z,tabBarExtraContent:H}},table:{columns:m},request:function(){var Q=I()(v()().mark(function ae(re){var ue;return v()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return console.log("activeKey:",U),se.next=3,n();case 3:return ue=f(re.pageSize),se.abrupt("return",{data:ue,total:100});case 5:case"end":return se.stop()}},ae)}));function Y(ae){return Q.apply(this,arguments)}return Y}()})},g.abrupt("return",{default:T});case 31:case"end":return g.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":x,"@schema-render/search-table-react":B,react:S||(S=e.t(p,2)),antd:d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var t=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function l(){return t.apply(this,arguments)}return l}()}}}},23915:function(G,i,e){e.r(i),e.d(i,{demos:function(){return d}});var S=e(97857),a=e.n(S),v=e(15009),_=e.n(v),O=e(99289),F=e.n(O),I=e(67294),p=e(87922),N=e(48201),x=e(67247),B=e(38959),L=e(60823),$=e(27164),M=e(68666),P=e(6271),h=e(41989),d={"examples-search-table-react-060-value-type-demo-0":{component:I.memo(I.lazy(F()(_()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b,D,R;return _()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return t=T.sent,l=t.ConfigProvider,T.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return n=T.sent,r=n.default,T.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return u=T.sent,o=u.sleep,T.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return m=T.sent,E=m.default,T.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return f=T.sent,j=f.default,T.next=22,Promise.resolve().then(e.bind(e,27164));case 22:return y=T.sent,c=y.default,T.next=26,Promise.resolve().then(e.bind(e,60823));case 26:return b=T.sent,D=b.default,R=function(){return I.createElement(l,{locale:r},I.createElement(D,{search:{schema:E},table:{columns:j,showRowNumber:!0,sortMode:"local-all"},request:function(){var g=F()(_()().mark(function W(V){var U;return _()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,o();case 2:return U=c(V.pageSize),H.abrupt("return",{data:U,total:100});case 4:case"end":return H.stop()}},W)}));function K(W){return g.apply(this,arguments)}return K}()}))},T.abrupt("return",{default:R});case 30:case"end":return T.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":M,"./helpers/columns-value-type.ts":P,antd:N,"antd/locale/zh_CN":x,"@examples/utils":B,"@schema-render/search-table-react":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":P},renderOpts:{compile:function(){var s=F()(_()().mark(function l(){var n,r=arguments;return _()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-search-table-react-060-value-type-demo-1":{component:I.memo(I.lazy(F()(_()().mark(function s(){var t,l,n,r,u,o,m,E,f,j;return _()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=c.sent,l=t.sleep,c.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return n=c.sent,r=n.default,c.next=10,Promise.resolve().then(e.bind(e,27164));case 10:return u=c.sent,o=u.default,c.next=14,Promise.resolve().then(e.bind(e,60823));case 14:return m=c.sent,E=m.default,f=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u5F69\u8272\u6807\u7B7E",dataIndex:"tags",valueType:function(D){return{type:"tags",color:Array.isArray(D.tags)?"blue":"green"}}}],j=function(){return I.createElement(E,{search:{schema:r},table:{columns:f,sortMode:"local-all"},request:function(){var D=F()(_()().mark(function C(T){var A;return _()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,l();case 2:return A=o(T.pageSize),K.abrupt("return",{data:A,total:100});case 4:case"end":return K.stop()}},C)}));function R(C){return D.apply(this,arguments)}return R}()})},c.abrupt("return",{default:j});case 19:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":M,"@examples/utils":B,"@schema-render/search-table-react":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M},renderOpts:{compile:function(){var s=F()(_()().mark(function l(){var n,r=arguments;return _()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-search-table-react-060-value-type-demo-2":{component:I.memo(I.lazy(F()(_()().mark(function s(){var t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T,A,g;return _()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return t=W.sent,l=t.default,W.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=W.sent,r=n.ConfigProvider,u=n.Tag,W.next=11,Promise.resolve().then(e.bind(e,67247));case 11:return o=W.sent,m=o.default,W.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return E=W.sent,f=E.sleep,W.next=19,Promise.resolve().then(e.bind(e,68666));case 19:return j=W.sent,y=j.default,W.next=23,Promise.resolve().then(e.bind(e,27164));case 23:return c=W.sent,b=c.default,W.next=27,Promise.resolve().then(e.bind(e,60823));case 27:return D=W.sent,R=D.default,C=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],T={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},A={code:function(U){var z=U.value;return I.createElement(l,{value:z,language:"js"})},"deploy-status":function(U){var z=U.value,H=T[z];return I.createElement("div",null,I.createElement("span",{style:a()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},H.style)}),H.text)},"deploy-status-tag":function(U){var z=U.record,H=z.deploy_status,Q=T[H];return I.createElement(u,{color:Q.color},Q.text)}},g=function(){return I.createElement(r,{locale:m},I.createElement(R,{search:{schema:y},table:{columns:C,showRowNumber:!0,sortMode:"local-all",registerValueType:A},request:function(){var U=F()(_()().mark(function H(Q){var Y;return _()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,f();case 2:return Y=b(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 4:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()}))},W.abrupt("return",{default:g});case 34:case"end":return W.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":M,"@examples/components/SyntaxHighlighter":h,antd:N,"antd/locale/zh_CN":x,"@examples/utils":B,"@schema-render/search-table-react":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M},renderOpts:{compile:function(){var s=F()(_()().mark(function l(){var n,r=arguments;return _()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,r));case 3:case"end":return o.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}}}},55983:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return l}});var a=e(5574),v=e.n(a),_=e(97857),O=e.n(_),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(8497),L=e(38959),$=e(60823),M=e(92114),P=e(68666),h=e(362),d=e(27164),s=e(6271),t=e(48201),l={"examples-search-table-react-100-columns-setting-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=C.sent,u=r.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=C.sent,m=o.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=C.sent,f=E.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=C.sent,y=j.default,C.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return c=C.sent,b=c.default,D=function(){return x.createElement(b,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var A=N()(I()().mark(function K(W){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function g(K){return A.apply(this,arguments)}return g}()})},C.abrupt("return",{default:D});case 22:case"end":return C.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R;return I()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=T.sent,u=r.sleep,T.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=T.sent,m=o.default,T.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=T.sent,f=E.default,T.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=T.sent,y=j.default,T.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return c=T.sent,b=c.default,D=f.map(function(A,g){var K=O()({},A);return g===0?K.fixed="left":g===f.length-1&&(K.fixed="right"),K}),R=function(){return x.createElement(b,{search:{schema:m},title:{showSetting:!0},table:{columns:D,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var g=N()(I()().mark(function W(V){var U;return I()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,u();case 2:return U=y(V.pageSize),H.abrupt("return",{data:U,total:100});case 4:case"end":return H.stop()}},W)}));function K(W){return g.apply(this,arguments)}return K}()})},T.abrupt("return",{default:R});case 23:case"end":return T.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R,C,T,A,g,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,u=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=U.sent,m=o.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=U.sent,f=E.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return c=U.sent,b=c.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return D=U.sent,R=D.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return C=U.sent,T=C.default,U.next=30,Promise.resolve().then(e.bind(e,60823));case 30:return A=U.sent,g=A.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],W=function(){var H=u("1"),Q=v()(H,2),Y=Q[0],ae=Q[1];return x.createElement(g,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:ae}},table:{columns:Y==="1"?y:b,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var re=N()(I()().mark(function fe(se){var de,xe;return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,m();case 2:return de=Y==="1"?R:T,xe=de(se.pageSize),ve.abrupt("return",{data:xe,total:100});case 5:case"end":return ve.stop()}},fe)}));function ue(fe){return re.apply(this,arguments)}return ue}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":d,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":M,react:S||(S=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-3":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R,C,T,A;return I()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=K.sent,u=r.useRef,K.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=K.sent,m=o.sleep,K.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=K.sent,f=E.default,K.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=K.sent,y=j.default,K.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return c=K.sent,b=c.default,K.next=22,Promise.resolve().then(e.bind(e,60823));case 22:return D=K.sent,R=D.default,K.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return C=K.sent,T=C.Button,A=function(){var V=u(null),U=function(){var H;(H=V.current)===null||H===void 0||H.openSettingModal()};return x.createElement(R,{ref:V,search:{schema:f},titleTop:function(){return x.createElement(T,{type:"primary",onClick:U},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var z=N()(I()().mark(function Q(Y){var ae;return I()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,m();case 2:return ae=b(Y.pageSize),ue.abrupt("return",{data:ae,total:100});case 4:case"end":return ue.stop()}},Q)}));function H(Q){return z.apply(this,arguments)}return H}()})},K.abrupt("return",{default:A});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":P,"./helpers/columns.ts":h,react:S||(S=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":$,antd:t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-4":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R;return I()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=T.sent,u=r.sleep,T.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=T.sent,m=o.default,T.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=T.sent,f=E.default,T.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=T.sent,y=j.default,T.next=18,Promise.resolve().then(e.bind(e,60823));case 18:return c=T.sent,b=c.default,D="save-setting-unique-id",R=function(){var g=function(){var W=N()(I()().mark(function V(U){return I()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,u();case 2:localStorage.setItem(D,JSON.stringify(U));case 3:case"end":return H.stop()}},V)}));return function(U){return W.apply(this,arguments)}}(),K=function(){var W=N()(I()().mark(function V(){var U;return I()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,u();case 2:if(U=localStorage.getItem(D),!U){H.next=5;break}return H.abrupt("return",JSON.parse(U));case 5:case"end":return H.stop()}},V)}));return function(){return W.apply(this,arguments)}}();return x.createElement(b,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:g,getSetting:K},request:function(){var W=N()(I()().mark(function U(z){var H;return I()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,u();case 2:return H=y(z.pageSize),Y.abrupt("return",{data:H,total:100});case 4:case"end":return Y.stop()}},U)}));function V(U){return W.apply(this,arguments)}return V}()})},T.abrupt("return",{default:R});case 23:case"end":return T.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-5":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R,C,T,A,g,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,u=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=U.sent,m=o.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=U.sent,f=E.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return c=U.sent,b=c.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return D=U.sent,R=D.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return C=U.sent,T=C.default,U.next=30,Promise.resolve().then(e.bind(e,60823));case 30:return A=U.sent,g=A.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],W=function(){var H=u("1"),Q=v()(H,2),Y=Q[0],ae=Q[1],re=function(){var fe=N()(I()().mark(function se(de,xe){return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,m();case 2:localStorage.setItem(xe,JSON.stringify(de));case 3:case"end":return ve.stop()}},se)}));return function(de,xe){return fe.apply(this,arguments)}}(),ue=function(){var fe=N()(I()().mark(function se(de){var xe;return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,m();case 2:if(xe=localStorage.getItem(de),!xe){ve.next=5;break}return ve.abrupt("return",JSON.parse(xe));case 5:case"end":return ve.stop()}},se)}));return function(de){return fe.apply(this,arguments)}}();return x.createElement(g,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:ae}},table:{columns:Y==="1"?y:b,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(Y),onSettingChanged:re,getSetting:ue},request:function(){var fe=N()(I()().mark(function de(xe){var pe,ve;return I()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,m();case 2:return pe=Y==="1"?R:T,ve=pe(xe.pageSize),Se.abrupt("return",{data:ve,total:100});case 5:case"end":return Se.stop()}},de)}));function se(de){return fe.apply(this,arguments)}return se}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":d,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":M,react:S||(S=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-6":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,o,m,E,f,j,y,c,b,D,R,C,T,A,g,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,u=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=U.sent,m=o.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=U.sent,f=E.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return c=U.sent,b=c.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return D=U.sent,R=D.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return C=U.sent,T=C.default,U.next=30,Promise.resolve().then(e.bind(e,60823));case 30:return A=U.sent,g=A.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],W=function(){var H=u("1"),Q=v()(H,2),Y=Q[0],ae=Q[1],re=u([]),ue=v()(re,2),fe=ue[0],se=ue[1],de=function(){var ve=N()(I()().mark(function Oe(Se,Be){return I()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:return $e.next=2,m();case 2:localStorage.setItem(Be,JSON.stringify(Se));case 3:case"end":return $e.stop()}},Oe)}));return function(Se,Be){return ve.apply(this,arguments)}}(),xe=function(){var ve=N()(I()().mark(function Oe(Se){var Be;return I()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:return $e.next=2,m();case 2:if(Be=localStorage.getItem(Se),!Be){$e.next=5;break}return $e.abrupt("return",JSON.parse(Be));case 5:case"end":return $e.stop()}},Oe)}));return function(Se){return ve.apply(this,arguments)}}(),pe=function(){var ve=N()(I()().mark(function Oe(){return I()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Be.next=2,m(500);case 2:return Be.abrupt("return",Y==="1"?y:b);case 3:case"end":return Be.stop()}},Oe)}));return function(){return ve.apply(this,arguments)}}();return x.createElement(g,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:ae}},table:{columns:fe,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(Y),onSettingChanged:de,getSetting:xe},request:function(){var ve=N()(I()().mark(function Se(Be){var Fe,$e,ze;return I()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,m();case 2:return Fe=Y==="1"?R:T,$e=Fe(Be.pageSize),He.next=6,pe();case 6:return ze=He.sent,se(ze),He.abrupt("return",{data:$e,total:100});case 9:case"end":return He.stop()}},Se)}));function Oe(Se){return ve.apply(this,arguments)}return Oe}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":d,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":M,react:S||(S=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var o,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(o=f.sent).default.apply(o,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}}}},81706:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(27490),v={}},62111:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(8906),v={}},44307:function(G,i,e){var S;e.r(i),e.d(i,{demos:function(){return M}});var a=e(15009),v=e.n(a),_=e(99289),O=e.n(_),F=e(67294),I=e(34451),p=e(38959),N=e(60823),x=e(48201),B=e(67247),L=e(92114),$=e(68666),M={"examples-search-table-react-900-table-editable-demo-0":{component:F.memo(F.lazy(O()(v()().mark(function P(){var h,d,s,t,l,n,r,u,o,m,E,f,j,y,c,b,D,R,C,T;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=g.sent,d=h.useRef,s=h.useMemo,g.next=7,Promise.resolve().then(e.bind(e,38959));case 7:return t=g.sent,l=t.sleep,g.next=11,Promise.resolve().then(e.bind(e,68666));case 11:return n=g.sent,r=n.default,g.next=15,Promise.resolve().then(e.bind(e,92114));case 15:return u=g.sent,o=u.default,g.next=19,Promise.resolve().then(e.bind(e,60823));case 19:return m=g.sent,E=m.default,g.next=23,Promise.resolve().then(e.bind(e,48201));case 23:return f=g.sent,j=f.ConfigProvider,g.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return y=g.sent,c=y.default,g.next=31,Promise.resolve().then(e.bind(e,48201));case 31:return b=g.sent,D=b.InputNumber,R=b.Button,C=b.message,T=function(){var W=d(null),V=s(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(H,Q){return F.createElement(D,{value:H,onChange:function(ae){var re;Q.goods_price=ae,(re=W.current)===null||re===void 0||re.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),U=function(){var H;console.log("dataSource:",(H=W.current)===null||H===void 0?void 0:H.getDataSource()),C.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return F.createElement(j,{locale:c},F.createElement(E,{ref:W,search:{schema:r},table:{columns:V},request:function(){var z=O()(v()().mark(function Q(Y){var ae;return v()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,l();case 2:return ae=o(Y.pageSize),ue.abrupt("return",{data:ae,total:100});case 4:case"end":return ue.stop()}},Q)}));function H(Q){return z.apply(this,arguments)}return H}()}),F.createElement(R,{type:"primary",onClick:U},"\u63D0\u4EA4"))},g.abrupt("return",{default:T});case 37:case"end":return g.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":$,react:S||(S=e.t(F,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:x,"antd/locale/zh_CN":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var P=O()(v()().mark(function d(){var s,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},13836:function(G,i,e){e.r(i),e.d(i,{demos:function(){return v}});var S=e(67294),a=e(24311),v={}},28629:function(G,i,e){e.r(i),e.d(i,{demos:function(){return B}});var S=e(15009),a=e.n(S),v=e(99289),_=e.n(v),O=e(67294),F=e(63710),I=e(38959),p=e(60823),N=e(92114),x=e(362),B={"examples-search-table-react-910-no-search-demo-0":{component:O.memo(O.lazy(_()(a()().mark(function L(){var $,M,P,h,d,s,t,l,n;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return $=u.sent,M=$.sleep,u.next=6,Promise.resolve().then(e.bind(e,362));case 6:return P=u.sent,h=P.default,u.next=10,Promise.resolve().then(e.bind(e,92114));case 10:return d=u.sent,s=d.default,u.next=14,Promise.resolve().then(e.bind(e,60823));case 14:return t=u.sent,l=t.default,n=function(){return O.createElement(l,{search:!1,table:{columns:h},request:function(){var m=_()(a()().mark(function f(){var j;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,M();case 2:return j=s(),c.abrupt("return",{data:j,total:100});case 4:case"end":return c.stop()}},f)}));function E(){return m.apply(this,arguments)}return E}()})},u.abrupt("return",{default:n});case 18:case"end":return u.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":N,"./helpers/columns.ts":x,"@examples/utils":I,"@schema-render/search-table-react":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":x},renderOpts:{compile:function(){var L=_()(a()().mark(function M(){var P,h=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},M)}));function $(){return L.apply(this,arguments)}return $}()}}}},41989:function(G,i,e){e.r(i),e.d(i,{default:function(){return O}});var S=e(42481),a=e(71353),v=e(85893),_=function(I){var p=I.value,N=I.language,x=N===void 0?"json":N,B=I.style;return(0,v.jsx)("div",{style:B,children:(0,v.jsx)(S.Z,{className:"example-hl",language:x,style:a.Z,children:x==="json"?JSON.stringify(p,null,2):p})})},O=_},78469:function(G,i,e){e.r(i);var S=e(25035),a=e(55241),v=e(93967),_=e.n(v),O=e(59868),F=e(85893),I=function(N){var x=N.body,B=N.schema,L=N.validator,$=N.required,M=N.prefixClassNames;return(0,F.jsxs)("div",{className:_()(M("item-layout-horizontal"),O.horizontal),children:[(0,F.jsxs)("div",{className:_()(M("item-main"),O.main),children:[(0,F.jsxs)("div",{className:_()(M("item-header"),O.header),children:[$&&(0,F.jsx)("span",{className:_()(M("item-mark"),O.mark),children:"*"}),(0,F.jsx)("span",{className:_()(M("item-title"),O.title),children:B.title}),!!B.titleDescription&&(0,F.jsx)(a.Z,{placement:"top",trigger:"hover",content:B.titleDescription,children:(0,F.jsx)(S.Z,{className:_()(M("item-title-tooltip"),O.titleTooltip)})})]}),(0,F.jsx)("div",{className:_()(M("item-body"),O.body),children:x})]}),(0,F.jsxs)("div",{className:_()(M("item-footer"),O.footer),children:[L.status==="error"&&!!L.message&&(0,F.jsx)("div",{className:_()(M("item-error-msg"),O.errorMsg),children:L.message}),!!B.description&&(0,F.jsx)("div",{className:_()(M("item-desc"),O.desc),children:B.description})]})]})};i.default=I},59868:function(G,i,e){e.r(i),e.d(i,{body:function(){return l},desc:function(){return r},errorMsg:function(){return u},footer:function(){return n},header:function(){return h},horizontal:function(){return M},main:function(){return P},mark:function(){return s},title:function(){return d},titleTooltip:function(){return t}});var S=e(68400),a=e.n(S),v=e(77525),_,O,F,I,p,N,x,B,L,$,M=(0,v.H)(_||(_=a()([""]))),P=(0,v.H)(O||(O=a()([`
  display: flex;
  align-items: center;
`]))),h=(0,v.H)(F||(F=a()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),d=(0,v.H)(I||(I=a()([`
  word-break: break-all;
`]))),s=(0,v.H)(p||(p=a()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),t=(0,v.H)(N||(N=a()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),l=(0,v.H)(x||(x=a()([`
  flex-grow: 1;
`]))),n=(0,v.H)(B||(B=a()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),r=(0,v.H)(L||(L=a()([`
  margin-top: 6px;
  color: #999;
`]))),u=(0,v.H)($||($=a()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},29298:function(G,i,e){e.r(i),e.d(i,{desc:function(){return h},errorMsg:function(){return d},footer:function(){return P},header:function(){return B},mark:function(){return $},title:function(){return L},titleTooltip:function(){return M}});var S=e(68400),a=e.n(S),v=e(77525),_,O,F,I,p,N,x,B=(0,v.H)(_||(_=a()([`
  margin-bottom: 8px;
`]))),L=(0,v.H)(O||(O=a()([`
  word-break: break-all;
`]))),$=(0,v.H)(F||(F=a()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),M=(0,v.H)(I||(I=a()([`
  margin-left: 4px;
`]))),P=(0,v.H)(p||(p=a()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),h=(0,v.H)(N||(N=a()([`
  margin-top: 8px;
  color: #999;
`]))),d=(0,v.H)(x||(x=a()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))},2862:function(G,i,e){e.r(i);var S=e(97857),a=e.n(S),v=e(25278),_=e(13457),O=e(41637),F=e(34041),I=e(55742),p=e(85893),N={InputText:{component:function(B){var L,$=B.schema,M=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:M}):(0,p.jsx)(v.Z,a()(a()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((L=$.title)!==null&&L!==void 0?L:"")},$.renderOptions),{},{value:M!=null?M:"",disabled:P,onChange:function(t){return d(t.target.value)}}))}},InputNumber:{component:function(B){var L,$=B.schema,M=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:M}):(0,p.jsx)(_.Z,a()(a()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((L=$.title)!==null&&L!==void 0?L:"")},$.renderOptions),{},{value:M,onChange:function(t){return d(t!=null?t:void 0)},disabled:P}))}},TextArea:{component:function(B){var L,$=B.schema,M=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:M}):(0,p.jsx)(v.Z.TextArea,a()(a()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((L=$.title)!==null&&L!==void 0?L:"")},$.renderOptions),{},{value:M!=null?M:"",onChange:function(t){return d(t.target.value)},disabled:P}))}},Password:{component:function(B){var L,$=B.schema,M=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:M}):(0,p.jsx)(v.Z.Password,a()(a()({placeholder:"\u8BF7\u8F93\u5165".concat((L=$.title)!==null&&L!==void 0?L:"")},$.renderOptions),{},{value:M!=null?M:"",onChange:function(t){return d(t.target.value)},disabled:P}))}},Switch:{component:function(B){var L=B.value,$=B.disabled,M=B.onChange;return(0,p.jsx)(O.Z,{checked:L,disabled:$,onChange:function(h){return M(h)}})}},Select:{component:function(B){var L,$,M,P=B.schema,h=B.value,d=B.disabled,s=B.readonly,t=B.onChange,l=(L=($=P.renderOptions)===null||$===void 0?void 0:$.options)!==null&&L!==void 0?L:[];if(s){var n=l.find(function(r){return r.value===h});return(0,p.jsx)("div",{children:n==null?void 0:n.label})}return(0,p.jsx)(F.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((M=P.title)!==null&&M!==void 0?M:"")},P.renderOptions),{},{value:h,onChange:function(u){return t(u)},disabled:d}))}},Radio:{component:function(B){var L,$,M=B.schema,P=B.value,h=B.disabled,d=B.onChange,s=(L=($=M.renderOptions)===null||$===void 0?void 0:$.options)!==null&&L!==void 0?L:[];return(0,p.jsx)(I.ZP.Group,{value:P,disabled:h,onChange:function(l){return d(l.target.value)},children:s.map(function(t){return(0,p.jsx)(I.ZP,{value:t.value,disabled:t.disabled,children:t.label},t.value)})})}}};i.default=N},40644:function(G,i,e){e.r(i);var S=e(5574),a=e.n(S),v=e(25035),_=e(52162),O=e(55241),F=e(47221),I=e(67294),p=e(85893),N=function(B){var L=B.schema,$=B.path,M=B.objectStyle,P=(0,I.useState)(!1),h=a()(P,2),d=h[0],s=h[1],t=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{children:L.title}),!!L.titleDescription&&(0,p.jsx)(O.Z,{placement:"top",trigger:"hover",content:L.titleDescription,children:(0,p.jsx)(v.Z,{style:{marginLeft:4}})})]});return(0,p.jsx)(F.Z,{bordered:!1,ghost:!0,activeKey:String(d),onChange:function(){return s(!d)},children:(0,p.jsx)(F.Z.Panel,{header:t,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,p.jsx)("div",{style:M,children:(0,p.jsx)(_.Z,{schema:L,path:$})})},"false")})};i.default={formItem:N}},33517:function(G,i,e){e.r(i);var S=e(25035),a=e(52162),v=e(55241),_=e(85893),O={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},F=function(p){var N=p.schema,x=p.path,B=p.objectStyle;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{style:O,children:[(0,_.jsx)("span",{children:N.title}),!!N.titleDescription&&(0,_.jsx)(v.Z,{placement:"top",trigger:"hover",content:N.titleDescription,children:(0,_.jsx)(S.Z,{style:{marginLeft:4}})})]}),(0,_.jsx)("div",{style:B,children:(0,_.jsx)(a.Z,{schema:N,path:x})})]})};i.default={formItem:F}},47621:function(G,i,e){e.r(i),i.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}},37418:function(G,i,e){e.r(i),e.d(i,{default:function(){return F}});var S=e(67294),a=e(85893),v={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},_=function(p){var N=p.value,x=p.sPath,B=p.onChange,L=function(){var M=String(Math.random()).slice(2,6),P={bank_id:"id_".concat(M),bank_account:"111222333".concat(M),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(M),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(M,"\u652F\u884C")};B(P[x],{extra:P})};return(0,a.jsx)("div",{style:v,onClick:L,children:N?(0,a.jsx)("div",{children:N}):(0,a.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},O={component:_},F={BankSelect:O}},14953:function(G,i,e){e.r(i);var S=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],a={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:S,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:S}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:S}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:S}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};i.default=a},97609:function(G,i,e){e.r(i),e.d(i,{builtinRenderers:function(){return O}});var S=e(68400),a=e.n(S),v=e(77525),_,O=(0,v.H)(_||(_=a()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))},36641:function(G,i,e){e.r(i);var S=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];i.default=S},77095:function(G,i,e){e.r(i),e.d(i,{default:function(){return v}});var S=e(27484),a=e.n(S);function v(){for(var _=[],O=0;O<10;O++){var F=String(Math.random()).slice(2,6),I=Math.random()>.5?1:2,p=a()().format("YYYY-MM-DD HH:mm:ss");_.push({key:Math.random(),supplier_name:"".concat(F,"\u6709\u9650\u516C\u53F8"),supplier_code:F,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:p,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:I===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:I===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:p})}return _}},35719:function(G,i,e){e.r(i);var S=e(67294),a=e(85893),v={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},_=function(F){var I=F.value,p=F.sPath,N=F.onChange,x=function(){var L=String(Math.random()).slice(2,6),$={bank_id:"id_".concat(L),bank_account:"111222333".concat(L),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(L),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(L,"\u652F\u884C")};N($[p],{extra:$})};return(0,a.jsx)("div",{style:v,onClick:x,children:I?(0,a.jsx)("div",{children:I}):(0,a.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};i.default={component:_}},57864:function(G,i,e){e.r(i);var S=e(52162),a=e(85893),v=function(O){var F=O.schema,I=O.path,p=O.objectStyle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"section-title",children:F.title}),(0,a.jsx)("div",{style:p,children:(0,a.jsx)(S.Z,{schema:F,path:I})})]})};i.default={formItem:v}},9680:function(G,i,e){e.r(i);var S=e(85893),a=function(_){var O=_.schema;return(0,S.jsx)("div",{className:"section-title",children:O.title})};i.default={formItem:a}},23786:function(G,i,e){e.r(i);var S=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];i.default=S},6271:function(G,i,e){e.r(i);var S=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(v,_){return{type:"long-text",maxLength:20,color:_%2?"#1677ff":"#000"}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(){return{type:"long-text-modal",maxLength:20,width:500}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];i.default=S},362:function(G,i,e){e.r(i);var S=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];i.default=S},27164:function(G,i,e){e.r(i),e.d(i,{default:function(){return a}});function S(v,_){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,F=Math.random()*(_-v)+v;return O?Math.floor(F):F}function a(){for(var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,_=[],O=0;O<v;O++){var F="id_".concat(O);_.push({key:F,id:F,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:S(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?S(1e3,1e5):S(0,1e3),percent:S(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:S(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return _}},92114:function(G,i,e){e.r(i),e.d(i,{default:function(){return v}});var S=e(27484),a=e.n(S);function v(){for(var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,O=arguments.length>1?arguments[1]:void 0,F=[],I=0;I<_;I++){var p=String(Math.random()).slice(2,6),N=Math.random()>.5?1:2,x=a()().format("YYYY-MM-DD HH:mm:ss"),B="id_".concat(I);F.push({key:B,id:B,supplier_name:"".concat(p,"\u6709\u9650\u516C\u53F8"),supplier_code:p,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:x,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:N===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:N===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:x,goods_price:N===1?19.9:22.8})}return O&&F.sort(function(L,$){var M=String(L[O.sort_field]),P=String($[O.sort_field]);return O.sort_order==="ascend"?M.localeCompare(P):P.localeCompare(M)}),F}},68666:function(G,i,e){e.r(i);var S={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};i.default=S},77525:function(G,i,e){e.d(i,{H:function(){return v}});var S=e(80834),a=(0,S.Z)({key:"schema-render"}),v=a.css},38959:function(G,i,e){e.r(i),e.d(i,{sleep:function(){return S}});function S(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(v){return setTimeout(v,a)})}},57558:function(G,i,e){var S=e(67294),a=(0,S.createContext)({});i.Z=a},57547:function(G,i,e){e.d(i,{Z:function(){return h}});var S=e(12444),a=e.n(S),v=e(72004),_=e.n(v),O=e(25098),F=e.n(O),I=e(31996),p=e.n(I),N=e(26037),x=e.n(N),B=e(9783),L=e.n(B),$=e(67294),M=e(28e3),P=e(85893),h=function(d){p()(t,d);var s=x()(t);function t(){var l;a()(this,t);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return l=s.call.apply(s,[this].concat(r)),L()(F()(l),"state",{hasError:!1,error:Error()}),l}return _()(t,[{key:"getFallback",value:function(){var n,r=this.state.error,u=this.props.catchErrorTips;return u==="silent"?null:(0,M.mf)(u)?u(r):(0,P.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(n=r==null?void 0:r.stack)!==null&&n!==void 0?n:String(r)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0,error:n}}}]),t}($.Component)},95399:function(G,i,e){e.d(i,{SY:function(){return v},f1:function(){return a},r6:function(){return S}});var S=function(_){return _.success="success",_.warning="warning",_.error="error",_}({}),a=[S.success,S.warning,S.error],v=function(_){return _.normal="normal",_.autoFill="autoFill",_.autoFit="autoFit",_}({})},16223:function(G,i,e){var S=e(67294),a=e(38812),v=function(O,F){var I=(0,a.Z)(O);(0,S.useEffect)(function(){I.current()},F)};i.Z=v},56432:function(G,i,e){var S=e(67294),a=e(23060),v=e(38812),_=e(37091);function O(F,I){var p,N=(0,v.Z)(F),x=(p=I==null?void 0:I.wait)!==null&&p!==void 0?p:1e3,B=(0,S.useMemo)(function(){return(0,a.Ds)(function(){return N.current.apply(N,arguments)},x)},[]);return(0,_.Z)(function(){return B.cancel()}),{run:B,cancel:B.cancel}}i.Z=O},4559:function(G,i,e){e.d(i,{Z:function(){return _}});var S=e(5574),a=e.n(S),v=e(67294);function _(){var O=(0,v.useReducer)(function(N){return N+1},0),F=a()(O,2),I=F[0],p=F[1];return{forceUpdate:p}}},38812:function(G,i,e){var S=e(67294);function a(v){var _=(0,S.useRef)(v);return _.current=v,_}i.Z=a},24317:function(G,i,e){e.d(i,{Z:function(){return a}});var S=e(67294);function a(v){var _=(0,S.useRef)(v),O=(0,S.useRef)();return _.current=(0,S.useMemo)(function(){return v},[v]),O.current||(O.current=function(){for(var F=arguments.length,I=new Array(F),p=0;p<F;p++)I[p]=arguments[p];return _.current.apply(this,I)}),O.current}},85908:function(G,i,e){var S=e(67294),a=function(_){(0,S.useEffect)(function(){return _()},[])};i.Z=a},90808:function(G,i,e){e.d(i,{Z:function(){return v}});var S=e(67294),a=e(57558);function v(){var _=(0,S.useContext)(a.Z);return _}},37091:function(G,i,e){var S=e(67294),a=e(38812),v=function(O){var F=(0,a.Z)(O);(0,S.useEffect)(function(){return function(){F.current()}},[])};i.Z=v},74072:function(G,i,e){e.r(i),e.d(i,{RendererDistributor:function(){return g.Z},RendererExecutor:function(){return K.Z},RendererIterator:function(){return o.Z},default:function(){return U},useAsyncEffect:function(){return D.Z},useCoreValue:function(){return M},useDebounceFn:function(){return R.Z},useForceUpdate:function(){return x.Z},useLatest:function(){return C.Z},useMemoizedFn:function(){return B.Z},useMounted:function(){return T.Z},useUnmount:function(){return A.Z},utils:function(){return S}});var S={};e.r(S),e.d(S,{classNames:function(){return E.Z},classNamesWithPrefix:function(){return F.Rk},cloneDeep:function(){return N.Xh},debounce:function(){return N.Ds},dropRight:function(){return N.j7},find:function(){return N.sE},get:function(){return N.U2},hasOwnProperty:function(){return F.nr},isArray:function(){return I.kJ},isBoolean:function(){return I.jn},isFunction:function(){return I.mf},isMatch:function(){return N.BD},isNil:function(){return I.kK},isNull:function(){return I.Ft},isNumber:function(){return I.hj},isObject:function(){return I.Kn},isPlainObject:function(){return I.PO},isString:function(){return I.HD},isUndefined:function(){return I.o8},logger:function(){return W.Z},mapKeys:function(){return N.Cw},omit:function(){return N.CE},pick:function(){return N.ei},positionedOffset:function(){return s},set:function(){return N.t8},templateCompiled:function(){return F.dr},toLower:function(){return N.t$},traverseSchema:function(){return V.Z},typeChecking:function(){return I.DN}});var a=e(97857),v=e.n(a),_=e(67294),O=e(57547),F=e(52038),I=e(28e3),p=e(49552),N=e(23060),x=e(4559),B=e(24317),L=function(){var H=(0,_.useRef)(!1);return(0,_.useEffect)(function(){return H.current=!1,function(){H.current=!0}},[]),H},$=L;function M(z){var H,Q=(0,_.useRef)((H=z.defaultValue)!==null&&H!==void 0?H:{}),Y=$(),ae=(0,x.Z)(),re=ae.forceUpdate,ue=(0,F.nr)(z,"value");if(ue){var fe;Q.current=(fe=z.value)!==null&&fe!==void 0?fe:{}}var se=(0,B.Z)(function(Oe,Se){if(!Y.current){var Be,Fe,$e,ze=(0,p.P)(Se.path),Ze=v()(v()({},Se),{},{sPath:ze}),He=(Be=z.watch)===null||Be===void 0?void 0:Be[ze];(0,I.mf)(He)&&He(Oe,Ze),Q.current=Oe,ue||re(),(Fe=z.onItemChange)===null||Fe===void 0||Fe.call(z,Ze),($e=z.onChange)===null||$e===void 0||$e.call(z,Oe,Ze)}}),de=(0,B.Z)(function(Oe){var Se=(0,N.t8)(v()({},Q.current),Oe.path,Oe.value);se(Se,Oe)}),xe=(0,B.Z)(function(){return Q.current}),pe=(0,B.Z)(function(Oe){se(Oe,{path:[],value:void 0})}),ve=(0,B.Z)(function(){pe({})});return{value:Q.current,valueRef:Q,onChange:de,getValue:xe,setValue:pe,resetValue:ve}}var P=e(95399),h=["320px","1fr"];function d(z){var H=z.layout,Q=z.layoutMinMax,Y=z.layoutColumnGap,ae=z.layoutRowGap,re=Q==null?void 0:Q[0],ue=Q==null?void 0:Q[1],fe=(0,_.useMemo)(function(){if(H===P.SY.normal)return"repeat(24, 1fr)";var de=H===P.SY.autoFill?"auto-fill":"auto-fit",xe=(0,p.e)(re!=null?re:h[0]),pe=(0,p.e)(ue!=null?ue:h[1]);return"repeat(".concat(de,", minmax(").concat(xe,", ").concat(pe,"))")},[H,re,ue]),se={display:"grid",gridTemplateColumns:fe,columnGap:Y,rowGap:ae};return se}function s(z,H){if(!z||!H)return{left:0,top:0};for(var Q=0,Y=0,ae=z;ae&&ae!==H;)Q+=ae.offsetLeft,Y+=ae.offsetTop,ae=ae.offsetParent;return{left:Q,top:Y}}var t=e(36578);function l(z,H){var Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(z){var Y=Q.positionedElement,ae=Q.xAxis,re=Q.yAxis,ue=Q.behavior,fe=ue===void 0?"smooth":ue,se=Q.gap,de=se===void 0?0:se,xe=Y||H;if(xe){var pe=s(z,xe);xe.scrollTo({left:ae===!1?void 0:pe.left+de,top:re===!1?void 0:pe.top+de,behavior:fe})}}}function n(z){var H=z.ref,Q=z.rootElementRef,Y=z.rootContextRef,ae=z.getValue,re=z.setValue,ue=z.resetValue,fe=(0,B.Z)(function(){return(0,t.Ze)((0,N.ei)(Y.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),se=(0,B.Z)(function(ve){var Oe,Se=(Oe=Y.current)===null||Oe===void 0?void 0:Oe.rendererStorage;if(Se&&ve){var Be=(0,I.kJ)(ve)?(0,p.P)(ve):ve;return Se[Be]}}),de=(0,B.Z)(function(ve){var Oe,Se=(Oe=Y.current)===null||Oe===void 0?void 0:Oe.rendererStorage;if(Se){var Be=ve?(0,I.HD)(ve)?[ve]:ve:Object.keys(Se);Be.forEach(function(Fe){var $e;($e=Se[Fe])===null||$e===void 0||$e.setValidatorState({status:P.r6.success})})}}),xe=(0,B.Z)(function(){return Q.current}),pe=(0,B.Z)(function(ve,Oe){var Se;return l((Se=se(ve))===null||Se===void 0?void 0:Se.getRootElement(),xe(),Oe)});(0,_.useImperativeHandle)(H,function(){return{validate:fe,resetError:de,setValue:re,resetValue:ue,getValue:ae,getRootElement:xe,scrollTo:pe,findItem:se}},[])}var r=e(39214),u=e(57558),o=e(52162),m=e(97192),E=e(18474),f=e(85893),j={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:h,disabled:!1,readonly:!1,validators:{},userCtx:{}},y=(0,_.forwardRef)(function(z,H){m.Z.falsy(z.schema,"missing schema."),m.Z.falsy(z.itemLayout,"missing itemLayout.");var Q=v()(v()({},j),z),Y=(0,_.useRef)(null),ae=(0,_.useRef)({}),re=M(Q),ue=re.value,fe=re.onChange,se=re.getValue,de=re.setValue,xe=re.resetValue,pe=(0,_.useMemo)(function(){return v()(v()({},r.Z),Q.locale)},[Q.locale]),ve=(0,_.useMemo)(function(){return(0,N.Cw)(Q.renderers,function(Be,Fe){return Fe.toLowerCase()})},[Q.renderers]),Oe=d(Q),Se=ae.current=v()(v()({},(0,N.ei)(Q,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:Oe,renderers:ve,rootSchema:Q.schema,rootValue:ue,locale:pe,rendererStorage:{},onChange:fe,prefixClassNames:function(){for(var Fe=arguments.length,$e=new Array(Fe),ze=0;ze<Fe;ze++)$e[ze]=arguments[ze];return F.Rk.apply(void 0,[Q.prefixCls].concat($e))}});return n({ref:H,rootElementRef:Y,rootContextRef:ae,getValue:se,setValue:de,resetValue:xe}),(0,f.jsx)(u.Z.Provider,{value:Se,children:(0,f.jsx)("div",{className:(0,E.Z)(Se.prefixCls,Q.className,{"is-disabled":Se.disabled,"is-readonly":Se.readonly}),ref:Y,style:v()(v()({position:"relative"},Oe),Q.style),children:(0,f.jsx)(o.Z,{schema:Se.rootSchema,path:[]})})})}),c=(0,_.forwardRef)(function(z,H){return(0,f.jsx)(O.Z,{catchErrorTips:z.catchErrorTips,children:(0,f.jsx)(y,v()(v()({},z),{},{ref:H}))})}),b=c,D=e(16223),R=e(56432),C=e(38812),T=e(85908),A=e(37091),g=e(82535),K=e(94963),W=e(93047),V=e(44081),U=b},78484:function(G,i,e){e.r(i),i.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}},39214:function(G,i){i.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},82535:function(G,i,e){var S=e(97857),a=e.n(S),v=e(90808),_=e(97192),O=e(8465),F=e(94963),I=e(85893),p=function(x){var B=(0,v.Z)(),L=x.schema;_.Z.falsy(L,"schema is required in RendererDistributor Props.");var $=(0,O.j)(B.renderers,L.renderType);return $?(0,I.jsx)(F.Z,a()(a()({},x),{},{renderer:$})):null};i.Z=p},94963:function(G,i,e){var S=e(15009),a=e.n(S),v=e(97857),_=e.n(v),O=e(99289),F=e.n(O),I=e(5574),p=e.n(I),N=e(67294),x=e(57547),B=e(95399),L=e(56432),$=e(24317),M=e(90808),P=e(18474),h=e(49552),d=e(23060),s=e(36578),t=e(85893),l=function(r){var u=r.schema,o=r.path,m=r.renderer,E=r.gridColumn,f=(0,M.Z)(),j=(0,N.useState)({status:B.r6.success}),y=p()(j,2),c=y[0],b=y[1],D=(0,h.P)(o),R=(0,N.useRef)(null);f.rendererStorage[D]=(0,N.useMemo)(function(){return{setValidatorState:function(z){return b(z)},getRootElement:function(){return R.current}}},[b]);var C=(0,L.Z)(function(){var U=F()(a()().mark(function z(H){var Q;return a()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,(0,s.Q7)({schema:u,rootValue:f.rootValue,userCtx:f.userCtx,path:o,value:H,locale:f.locale,globalValidators:f.validators,rendererValidator:m.validator,rendererValidatorParams:g});case 2:Q=ae.sent,b(_()({},Q));case 4:case"end":return ae.stop()}},z)}));return function(z){return U.apply(this,arguments)}}(),{wait:300}),T=C.run,A=(0,$.Z)(function(){var U=F()(a()().mark(function z(H){var Q,Y=arguments;return a()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:Q=Y.length>1&&Y[1]!==void 0?Y[1]:{},f.onChange({path:o,value:H,extra:Q.extra}),Q.triggerValidator!==!1?T(H):b({status:B.r6.success});case 3:case"end":return re.stop()}},z)}));return function(z){return U.apply(this,arguments)}}()),g=(0,s.cy)(_()({schema:u,path:o,value:(0,d.U2)(f.rootValue,o)},(0,d.ei)(f,"disabled","readonly","rootValue","userCtx","locale"))),K=_()(_()({},g),{},{validator:c,objectStyle:f.objectStyle,onChange:A}),W=K,V=function(){var z=_()(_()({},(0,d.ei)(K,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:f.prefixClassNames});if(K.readonly){if(m.readonlyFormItem)return(0,N.createElement)(m.readonlyFormItem,W);if(m.readonlyComponent)return(0,N.createElement)(f.itemLayout,_()(_()({},z),{},{body:(0,N.createElement)(m.readonlyComponent,K)}))}if(K.disabled){if(m.disabledFormItem)return(0,N.createElement)(m.disabledFormItem,W);if(m.disabledComponent)return(0,N.createElement)(f.itemLayout,_()(_()({},z),{},{body:(0,N.createElement)(m.disabledComponent,K)}))}if(m.formItem)return(0,N.createElement)(m.formItem,W);if(m.component)return(0,N.createElement)(f.itemLayout,_()(_()({},z),{},{body:(0,N.createElement)(m.component,K)}))};return(0,t.jsx)("div",{ref:R,className:(0,P.Z)(f.prefixClassNames("form-item","item-".concat(u.renderType)),u.className,{"is-required":K.required,"is-disabled":K.disabled,"is-readonly":K.readonly}),style:_()({gridColumn:E},u.style),children:(0,t.jsx)(x.Z,{catchErrorTips:f.catchErrorTips,children:V()})})};i.Z=l},52162:function(G,i,e){var S=e(97857),a=e.n(S),v=e(19632),_=e.n(v),O=e(67294),F=e(95399),I=e(90808),p=e(28e3),N=e(49552),x=e(27597),B=e(23060),L=e(82535),$=e(85893),M=function(h){var d=h.schema,s=h.path,t=(0,I.Z)(),l=t.rootValue,n=t.userCtx,r=s.length?(0,B.U2)(l,s):l,u=1,o=Object.keys(d.properties).map(function(m){var E=d.properties[m],f=(0,x.A)({statement:E.hidden,parentValue:r,rootValue:l,userCtx:n});if(f)return null;var j=[].concat(_()(s),[m]),y=(0,N.P)(j),c;if(t.layout===F.SY.normal){var b=u,D=25;!(0,p.hj)(E.span)&&!(0,p.hj)(E.spanStart)?b=u=1:(E.spanStart&&(b=E.spanStart,u=b),E.span&&(D=b+E.span,u=D)),c="".concat(b,"/").concat(D)}else(0,p.hj)(E.spanStart)&&(c="".concat(E.spanStart,"/auto"));var R={schema:E,path:j,gridColumn:c};return(0,$.jsx)(L.Z,a()({},R),y)});return(0,$.jsx)(O.Fragment,{children:o})};i.Z=M},97192:function(G,i){function e(v,_){v&&a(_)}function S(v,_){!v&&a(_)}function a(v){throw new Error("[AssertionError]: ".concat(v!=null?v:"Failed"))}i.Z={truthy:e,falsy:S,fail:a}},52038:function(G,i,e){e.d(i,{RI:function(){return O},Rk:function(){return I},dr:function(){return F},nr:function(){return p}});var S=e(28e3),a=e(18474),v=e(93047);function _(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function O(x){if(!(0,S.HD)(x))return null;try{return new RegExp(x)}catch(B){v.Z.warn(B)}return null}function F(x){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return x?x.replace(/\$\{((\s|.)+?)?\}/g,function(){var L,$=(L=arguments.length<=1?void 0:arguments[1])===null||L===void 0?void 0:L.trim();if(!$)return"";var M=B[$];return M!=null?M:""}):""}function I(x){for(var B=arguments.length,L=new Array(B>1?B-1:0),$=1;$<B;$++)L[$-1]=arguments[$];if(!L.length)return"";var M=a.Z.apply(void 0,L).trim();if(!M)return"";var P=M.split(" ").map(function(h){return"".concat(x,"-").concat(h)});return P.join(" ")}function p(x,B){return Object.prototype.hasOwnProperty.call(x,B)}function N(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(B){return setTimeout(B,x)})}},28e3:function(G,i,e){e.d(i,{DN:function(){return O},Ft:function(){return M},HD:function(){return x},Kn:function(){return p},PO:function(){return N},hj:function(){return B},jn:function(){return L},kJ:function(){return I},kK:function(){return P},mf:function(){return F},o8:function(){return $}});var S=e(52677),a=e.n(S),v=Function.prototype.toString,_=v.call(Object);function O(h,d){return Object.prototype.toString.call(h)===d}function F(h){return O(h,"[object Function]")||O(h,"[object AsyncFunction]")}function I(h){return Array.isArray(h)}function p(h){var d=a()(h);return h!==null&&(d==="object"||d==="function")}function N(h){if(!O(h,"[object Object]"))return!1;var d=Object.getPrototypeOf(h);if(d===null)return!0;var s=Object.hasOwnProperty.call(d,"constructor")&&d.constructor;return typeof s=="function"&&s instanceof s&&v.call(s)===_}function x(h){return typeof h=="string"}function B(h){return typeof h=="number"}function L(h){return typeof h=="boolean"}function $(h){return h===void 0}function M(h){return h===null}function P(h){return $(h)||M(h)}},18474:function(G,i,e){var S=e(52677),a=e.n(S),v={}.hasOwnProperty;function _(){for(var O=[],F=0;F<arguments.length;F++){var I=arguments[F];if(I){var p=a()(I);if(p==="string"||p==="number")O.push(I);else if(Array.isArray(I)){if(I.length){var N=_.apply(null,I);N&&O.push(N)}}else if(p==="object"){if(I.toString!==Object.prototype.toString&&!I.toString.toString().includes("[native code]")){O.push(I.toString());continue}for(var x in I)v.call(I,x)&&I[x]&&O.push(x)}}}return O.join(" ")}i.Z=_},93047:function(G,i){var e={warn:function(){var a;(a=console).warn.apply(a,arguments)}};i.Z=e},49552:function(G,i,e){e.d(i,{P:function(){return a},e:function(){return v}});var S=e(28e3);function a(_){return _.join(".")}function v(_){return(0,S.hj)(_)?"".concat(String(_),"px"):_}},8465:function(G,i,e){e.d(i,{j:function(){return S}});function S(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1?arguments[1]:void 0;if(v){var _=a[v.toLowerCase()];if(_&&(_.formItem||_.component))return _}}},27597:function(G,i,e){e.d(i,{A:function(){return _},o:function(){return O}});var S=e(23060),a=e(28e3),v=e(93047);function _(F){var I=F.statement,p=F.parentValue,N=p===void 0?{}:p,x=F.rootValue,B=x===void 0?{}:x,L=F.userCtx,$=L===void 0?{}:L;if((0,a.jn)(I))return I;if((0,a.HD)(I))try{var M=new Function("$","$root","$userCtx","return ".concat(I));return!!M(N,B,$)}catch(P){v.Z.warn(P)}return!1}function O(F){var I=F.statement,p=F.path,N=F.rootValue,x=F.userCtx,B=(0,S.j7)(p);return _({statement:I,parentValue:B.length?(0,S.U2)(N,B):N,rootValue:N,userCtx:x})}},23060:function(G,i,e){e.d(i,{BD:function(){return M},CE:function(){return B},Cw:function(){return N},Ds:function(){return t},U2:function(){return P},Xh:function(){return p},ei:function(){return x},j7:function(){return L},sE:function(){return $},t$:function(){return l},t8:function(){return s}});var S=e(97857),a=e.n(S),v=e(52677),_=e.n(v),O=e(97192),F=e(52038),I=e(28e3);function p(n){var r,u,o;if(Array.isArray(n)){for(u=Array(r=n.length);r--;)u[r]=(o=n[r])&&_()(o)==="object"?p(o):o;return u}if(Object.prototype.toString.call(n)==="[object Object]"){u={};for(r in n)r==="__proto__"?Object.defineProperty(u,r,{value:p(n[r]),configurable:!0,enumerable:!0,writable:!0}):u[r]=(o=n[r])&&_()(o)==="object"?p(o):o;return u}return n}function N(n,r){if(!(0,I.PO)(n)||!(0,I.mf)(r))return{};var u=Object.keys(n),o={};return u.map(function(m){var E=n[m],f=r(E,m);o[f]=E}),o}function x(n){var r={};if(!(0,I.PO)(n))return r;for(var u=arguments.length,o=new Array(u>1?u-1:0),m=1;m<u;m++)o[m-1]=arguments[m];return o.map(function(E){(0,F.nr)(n,E)&&(r[E]=n[E])}),r}function B(n){if(!(0,I.PO)(n))return{};for(var r=a()({},n),u=arguments.length,o=new Array(u>1?u-1:0),m=1;m<u;m++)o[m-1]=arguments[m];return o.map(function(E){(0,F.nr)(n,E)&&delete r[E]}),r}function L(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,I.kJ)(n)?n.slice(0,r>0?r*-1:n.length):[]}function $(n,r){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,I.kJ)(n))for(var o=n.length,m=u;m<o;m++){var E=n[m];if((0,I.mf)(r)){if(r(E))return E}else if((0,I.PO)(r)&&M(E,r))return E}}function M(n,r){if(!(0,I.PO)(n))return!0;for(var u=Object.keys(r),o=0;o<u.length;o++){var m=u[o];if(!(0,F.nr)(n,m)||r[m]!==n[m])return!1}return!0}function P(n,r){if(!(!(0,I.PO)(n)||!(0,I.kJ)(r))){for(var u=n,o=0;o<r.length;o++){var m=r[o];if(u)u=u[m];else return}return u}}var h=/^(?:0|[1-9]\d*)$/;function d(n){return(0,I.hj)(n)||h.test(n)}function s(n,r,u){if(!(0,I.PO)(n))return n;for(var o=r.length,m=o-1,E=-1,f=n;f!==null&&++E<o;){var j=r[E],y=u;if(E!==m){var c=f[j];y=(0,I.Kn)(c)?c:d(r[E+1])?[]:{}}f[j]=y,f=f[j]}return n}function t(n,r){(0,I.mf)(n)||O.Z.fail("Expected a function");var u;function o(){for(var m=this,E=arguments.length,f=new Array(E),j=0;j<E;j++)f[j]=arguments[j];clearTimeout(u),u=setTimeout(function(){return n.apply(m,f)},r)}return o.cancel=function(){clearTimeout(u)},o}function l(n){return(0,I.HD)(n)?n.toLowerCase():""}},44081:function(G,i,e){e.d(i,{Z:function(){return N}});var S=e(19632),a=e.n(S),v=e(97857),_=e.n(v),O=e(52677),F=e.n(O),I=e(23060);function p(x){var B=x.properties;return!B||F()(B)!=="object"||Array.isArray(B)}function N(x,B,L){var $=_()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},L),M=$.clone?(0,I.Xh)(x):x;B=(0,I.Cw)(B,function(h,d){return d.toLowerCase()});var P=function h(d){var s=d.schema,t=d.path,l=d.state,n=d.store;p(s)||Object.keys(s.properties).forEach(function(r){var u,o,m,E,f,j,y,c,b,D=s.properties[r],R=[].concat(a()(t),[r]),C=(0,I.Xh)(l),T={schema:D,parentSchema:s,path:R,field:r,state:C,store:n},A=function(Q){h(_()(_()({schema:D,path:R,state:C},Q),{},{store:n}))},g=(u=B.$$)!==null&&u!==void 0?u:{},K=(o=B.$$object)!==null&&o!==void 0?o:{};(m=g.enter)===null||m===void 0||m.call(g,_()(_()({},T),{},{traverse:A}));var W=(E=D[$.mapKey])!==null&&E!==void 0?E:"";W=$.ignoreCase?(0,I.t$)(W):W;var V=(0,I.t$)(W).startsWith("object");if(V){var U;(U=K.enter)===null||U===void 0||U.call(K,_()(_()({},T),{},{traverse:A}))}var z=(f=B[W])!==null&&f!==void 0?f:{};(j=z.enter)===null||j===void 0||j.call(z,_()(_()({},T),{},{traverse:A})),(y=g.exit)===null||y===void 0||y.call(g,T),V&&((c=K.exit)===null||c===void 0||c.call(K,T)),(b=z.exit)===null||b===void 0||b.call(z,T)})};return P({schema:M,path:[],state:$.initialState,store:$.initialStore}),M}},36578:function(G,i,e){e.d(i,{cy:function(){return C},Q7:function(){return c},Ze:function(){return j}});var S=e(97857),a=e.n(S),v=e(15009),_=e.n(v),O=e(19632),F=e.n(O),I=e(99289),p=e.n(I),N=e(95399),x=e(23060),B=e(52038),L=e(28e3),$=e(49552),M=e(8465),P=e(12444),h=e.n(P),d=e(72004),s=e.n(d),t=e(9783),l=e.n(t),n=function(){function T(A){h()(this,T),l()(this,"value",void 0),l()(this,"rules",void 0),l()(this,"locale",void 0),l()(this,"globalValidators",void 0),l()(this,"globalValidatorParams",void 0),Object.assign(this,A)}return s()(T,[{key:"setValue",value:function(g){this.value=g}},{key:"validate",value:function(){var A=p()(_()().mark(function K(){return _()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,this.validateRules(this.rules);case 2:return V.abrupt("return",V.sent);case 3:case"end":return V.stop()}},K,this)}));function g(){return A.apply(this,arguments)}return g}()},{key:"validateRules",value:function(){var A=p()(_()().mark(function K(W){var V,U,z,H;return _()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:Y.prev=0,V=o(W),U=0,z=V;case 3:if(!(U<z.length)){Y.next=12;break}if(H=z[U],!(0,L.PO)(H)){Y.next=9;break}return this.validateRuleItem(H),Y.next=9,this.validateGlobal(H);case 9:U++,Y.next=3;break;case 12:Y.next=19;break;case 14:if(Y.prev=14,Y.t0=Y.catch(0),!T.isValidationError(Y.t0)){Y.next=18;break}return Y.abrupt("return",(0,x.ei)(Y.t0,"status","message","extra"));case 18:return Y.abrupt("return",{status:N.r6.error,message:Y.t0!==null&&Y.t0!==void 0&&Y.t0.message?Y.t0.message:"CatchError"});case 19:return Y.abrupt("return",{status:N.r6.success});case 20:case"end":return Y.stop()}},K,this,[[0,14]])}));function g(K){return A.apply(this,arguments)}return g}()},{key:"validateRuleItem",value:function(g){var K=(0,L.jn)(g.required)?g.required:void 0,W=(0,L.hj)(g.len)?g.len:void 0,V=(0,L.hj)(g.min)?g.min:void 0,U=(0,L.hj)(g.max)?g.max:void 0,z=T.fail,H=this.value,Q=this.locale;if(K&&[void 0,null].includes(H)&&T.fail(g.message),(g.type==="string"&&!(0,L.HD)(H)||g.type==="number"&&!(0,L.hj)(H)||g.type==="boolean"&&!(0,L.jn)(H)||g.type==="object"&&!(0,L.PO)(H)||g.type==="array"&&!(0,L.kJ)(H))&&z((0,B.dr)(Q.typeError,{type:g.type})),(0,L.HD)(H)){var Y=(0,B.RI)(g.pattern);(K&&H===""||W&&H.length!==W||V&&H.length<V||U&&H.length>U||Y&&!Y.test(H))&&z(g.message)}(0,L.hj)(H)&&(W&&H!==W||V&&H<V||U&&H>U)&&z(g.message),(0,L.kJ)(H)&&(K&&H.length===0||W&&H.length!==W||V&&H.length<V||U&&H.length>U)&&z(g.message)}},{key:"validateGlobal",value:function(){var A=p()(_()().mark(function K(W){var V,U,z,H,Q,Y,ae,re,ue;return _()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:if(V=W.validator,U=this.globalValidators,z=this.globalValidatorParams,!(!V||!U||!z)){se.next=4;break}return se.abrupt("return");case 4:if(H=U[V],Q=function(xe){xe.status!==N.r6.success&&T.fail(xe)},!u(H)){se.next=11;break}return se.next=9,this.validateRules(H.filter(function(de){return!de.validator}));case 9:Y=se.sent,Q(Y);case 11:if(!(0,L.mf)(H)){se.next=21;break}return se.next=14,H(a()(a()({},z),{},{value:this.value}));case 14:if(ae=se.sent,!u(ae)){se.next=20;break}return se.next=18,this.validateRules(ae.filter(function(de){return!de.validator}));case 18:re=se.sent,Q(re);case 20:r(ae)&&Q({status:ae.status,message:(ue=W.message)!==null&&ue!==void 0?ue:ae.message,extra:ae.extra});case 21:case"end":return se.stop()}},K,this)}));function g(K){return A.apply(this,arguments)}return g}()}],[{key:"isValidationError",value:function(g){return(0,L.PO)(g)&&(0,B.nr)(g,T.failUK)}},{key:"fail",value:function(g){var K=l()({},T.failUK,!0);throw(0,L.HD)(g)?K.message=g:(0,L.PO)(g)&&Object.assign(K,(0,x.ei)(g,"status","message","extra")),K.status||(K.status=N.r6.error),K}}]),T}();l()(n,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function r(T){return N.f1.includes(T==null?void 0:T.status)}function u(T){return(0,L.kJ)(T)&&!!T.length}function o(T){var A=[];return(0,L.PO)(T)?A.push(T):(0,L.kJ)(T)&&A.push.apply(A,F()(T)),A}function m(T){var A=new n(T);return A.validate()}var E=e(27597),f=e(44081);function j(T){return y.apply(this,arguments)}function y(){return y=p()(_()().mark(function T(A){var g,K,W,V,U,z,H,Q,Y,ae,re,ue,fe;return _()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return g=A.rootSchema,K=A.rootValue,W=A.disabled,V=A.readonly,U=A.locale,z=A.renderers,H=A.rendererStorage,Q=A.validators,Y=A.userCtx,ae=[],(0,f.Z)(g,{$$:{enter:function(pe){var ve=pe.schema,Oe=pe.path,Se=(0,E.o)({statement:ve.hidden,rootValue:K,path:Oe,userCtx:Y});if(!Se){var Be=(0,M.j)(z,ve.renderType);if(Be){var Fe=function(){var $e=p()(_()().mark(function ze(){var Ze,He,Qe,Ue,we,Ye;return _()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ze=(0,x.U2)(K,Oe),He=C({schema:ve,value:Ze,path:Oe,disabled:W,readonly:V,rootValue:K,locale:U,userCtx:Y}),Ke.prev=2,Ke.next=5,c({schema:ve,rootValue:K,userCtx:Y,path:Oe,locale:U,value:Ze,globalValidators:Q,rendererValidator:Be.validator,rendererValidatorParams:He});case 5:if(Qe=Ke.sent,Ue=Qe.status,we=Qe.message,Ye=Qe.extra,Ue===N.r6.success){Ke.next=11;break}return Ke.abrupt("return",{path:Oe,value:Ze,status:Ue,message:we,extra:Ye});case 11:Ke.next=16;break;case 13:return Ke.prev=13,Ke.t0=Ke.catch(2),Ke.abrupt("return",{path:Oe,value:Ze,status:N.r6.error,message:"[CatchError]: ".concat(Ke.t0===null||Ke.t0===void 0?void 0:Ke.t0.message)});case 16:case"end":return Ke.stop()}},ze,null,[[2,13]])}));return function(){return $e.apply(this,arguments)}}();ae.push(Fe())}}}},$$Object:{enter:function(pe){var ve=pe.traverse;ve()}}},{clone:!1}),re=[],ue=[],de.next=7,Promise.all(ae).then(function(xe){return xe.filter(function(pe){return(pe==null?void 0:pe.status)===N.r6.error?re.push(pe):(pe==null?void 0:pe.status)===N.r6.warning&&ue.push(pe),!!pe})});case 7:return fe=de.sent,fe.forEach(function(xe){var pe=xe.status,ve=xe.path,Oe=xe.message,Se=xe.extra,Be=H[(0,$.P)(ve)];Be==null||Be.setValidatorState({status:pe,message:Oe,extra:Se})}),de.abrupt("return",{hasError:!!re.length,hasWarning:!!ue.length,errorList:re,warningList:ue});case 10:case"end":return de.stop()}},T)})),y.apply(this,arguments)}function c(T){return b.apply(this,arguments)}function b(){return b=p()(_()().mark(function T(A){var g,K,W,V,U,z,H,Q,Y,ae,re,ue,fe,se,de;return _()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:if(g=A.schema,K=A.rootValue,W=A.userCtx,V=A.path,U=A.locale,z=A.value,H=A.globalValidators,Q=A.rendererValidator,Y=A.rendererValidatorParams,ae=D({schema:g,rootValue:K,path:V,locale:U,userCtx:W}),re={value:z,globalValidators:H,globalValidatorParams:Y,locale:U.validation},!u(ae)){pe.next=9;break}return pe.next=6,m(a()(a()({},re),{},{rules:ae}));case 6:if(ue=pe.sent,ue.status===N.r6.success){pe.next=9;break}return pe.abrupt("return",ue);case 9:if(!u(Q)){pe.next=14;break}return pe.next=12,m(a()(a()({},re),{},{rules:Q}));case 12:return fe=pe.sent,pe.abrupt("return",fe);case 14:if(!(0,L.mf)(Q)){pe.next=25;break}return pe.next=17,Q(a()(a()({},Y),{},{value:z}));case 17:if(se=pe.sent,!u(se)){pe.next=23;break}return pe.next=21,m(a()(a()({},re),{},{rules:se}));case 21:return de=pe.sent,pe.abrupt("return",de);case 23:if(!r(se)){pe.next=25;break}return pe.abrupt("return",{status:se.status,message:se.message,extra:se.extra});case 25:return pe.abrupt("return",{status:N.r6.success});case 26:case"end":return pe.stop()}},T)})),b.apply(this,arguments)}function D(T){var A=T.schema,g=T.rootValue,K=T.path,W=T.locale,V=T.userCtx,U=o(A.rules),z=(0,E.o)({statement:A.required,rootValue:g,path:K,userCtx:V});return z&&!(0,x.sE)(A.rules,{required:!0})&&U.unshift({required:!0,message:(0,B.dr)(W.validation.required,{label:A.title})}),U}function R(T){var A=T.schema,g=T.rootValue,K=T.path,W=T.userCtx,V=(0,E.o)({statement:A.required,rootValue:g,path:K,userCtx:W});return!!(V||(0,x.sE)(o(A.rules),{required:!0}))}function C(T){var A=T.schema,g=T.value,K=T.path,W=T.disabled,V=T.readonly,U=T.rootValue,z=T.locale,H=T.userCtx,Q=!!W,Y=!!V;Q||(Q=(0,E.o)({statement:A.disabled,rootValue:U,path:K,userCtx:H})),Y||(Y=(0,E.o)({statement:A.readonly,rootValue:U,path:K,userCtx:H}));var ae=R({schema:A,path:K,rootValue:U,userCtx:H});return{schema:A,value:g,path:F()(K),sPath:(0,$.P)(K),required:ae,disabled:Q,readonly:Y,rootValue:U,locale:z,userCtx:H}}},21222:function(G,i,e){e.d(i,{H:function(){return _}});var S=e(80834),a=Math.random().toString(36).substring(7).replace(/\d/g,"x"),v=(0,S.Z)({key:"schema-render-".concat(a)}),_=v.css},74311:function(G,i,e){e.r(i),e.d(i,{cij:function(){return H.H},default:function(){return me}});var S=e(97857),a=e.n(S),v=e(23060),_=e(18474),O=e(74072),F=e(52038),I=e(67294),p=e(13769),N=e.n(p),x=e(9783),B=e.n(x),L=e(28e3),$=e(14726),M=e(42075),P={submit:"submit",reset:"reset"},h={normal:"normal",formItem:"formItem"},d={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[P.submit,P.reset],actionsRenderMode:h.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},s=B()(B()({},P.submit,!1),P.reset,!1),t="__FORM_RENDER_ACTIONS__",l="YYYY-MM-DD",n="YYYY-MM-DD HH:mm:ss",r=(0,I.createContext)({}),u=r;function o(){var ee=(0,I.useContext)(u);return ee}var m=e(85893),E=["disabled"],f=B()(B()({},P.submit,function(ee){var Z,J=ee.loading,w=ee.locale,k=ee.disabled;return(0,m.jsx)($.ZP,{type:"primary",htmlType:"submit",disabled:J.submit?!1:k||J.reset,loading:J.submit,children:w==null||(Z=w.FormRender)===null||Z===void 0?void 0:Z.submit})}),P.reset,function(ee){var Z,J=ee.handleReset,w=ee.loading,k=ee.locale,oe=ee.disabled;return(0,m.jsx)($.ZP,{htmlType:"button",disabled:w.reset?!1:oe||w.submit,loading:w.reset,onClick:J,children:k==null||(Z=k.FormRender)===null||Z===void 0?void 0:Z.reset})}),j=function(Z){var J=Z.disabled,w=N()(Z,E),k=o(),oe=k.actions,ce=k.actionsLoading,Te=k.registerActions,be=k.handleReset,De=k.handleSubmit,Le=k.layoutColumnGap,je=k.locale,We=L.kJ(oe)&&oe.length>0;if(!We)return null;var _e=a()(a()({},f),Te);return(0,m.jsx)(M.Z,a()(a()({size:Le},w),{},{children:oe.map(function(Ne){var Ae={locale:je,disabled:J,loading:ce};Ne===P.submit?Ae.handleSubmit=De:Ne===P.reset&&(Ae.handleReset=be);var Ve=_e[Ne];return Ve?(0,m.jsx)(I.Fragment,{children:Ve==null?void 0:Ve(Ae)},Ne):null})}))},y=j,c=e(15009),b=e.n(c),D=e(99289),R=e.n(D),C=e(5574),T=e.n(C),A=e(24317),g=e(93047);function K(ee){var Z=ee.props,J=ee.coreRef,w=(0,I.useState)(s),k=T()(w,2),oe=k[0],ce=k[1],Te=(0,A.Z)(function(){var je=R()(b()().mark(function We(_e,Ne){return b()().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:return ce(function(Ge){return a()(a()({},Ge),{},B()({},_e,!0))}),Ve.next=3,Ne().catch(function(Ge){g.Z.warn(Ge)});case 3:ce(function(Ge){return a()(a()({},Ge),{},B()({},_e,!1))});case 4:case"end":return Ve.stop()}},We)}));return function(We,_e){return je.apply(this,arguments)}}()),be=(0,A.Z)(function(){Te(P.submit,R()(b()().mark(function je(){var We,_e;return b()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:if(J.current){Ae.next=2;break}return Ae.abrupt("return");case 2:if(!Z.validateFormOnSubmit){Ae.next=8;break}return Ae.next=5,J.current.validate();case 5:if(_e=Ae.sent,!(_e.hasError||_e.hasWarning)){Ae.next=8;break}return Ae.abrupt("return");case 8:return Ae.next=10,(We=Z.onSubmit)===null||We===void 0?void 0:We.call(Z,J.current.getValue());case 10:case"end":return Ae.stop()}},je)})))}),De=(0,A.Z)(function(je){je.preventDefault(),je.stopPropagation(),be()}),Le=(0,A.Z)(function(){Te(P.reset,R()(b()().mark(function je(){var We,_e,Ne,Ae;return b()().wrap(function(Ge){for(;;)switch(Ge.prev=Ge.next){case 0:if(J.current){Ge.next=2;break}return Ge.abrupt("return");case 2:return Ge.next=4,(We=Z.onBeforeReset)===null||We===void 0?void 0:We.call(Z,J.current.getValue());case 4:return Ne=Ge.sent,Ae=a()({},Ne),J.current.setValue(Ae),J.current.resetError(),Ge.next=10,(_e=Z.onReset)===null||_e===void 0?void 0:_e.call(Z,Ae);case 10:case"end":return Ge.stop()}},je)})))});return{handleFormSubmit:De,handleSubmit:be,handleReset:Le,actionsLoading:oe,isLoading:oe.submit||oe.reset}}var W=e(25035),V=e(55241),U=e(68400),z=e.n(U),H=e(21222),Q,Y,ae,re,ue,fe,se,de,xe,pe,ve=(0,H.H)(Q||(Q=z()([`
  display: flex;
  align-items: center;
`]))),Oe=(0,H.H)(Y||(Y=z()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),Se=(0,H.H)(ae||(ae=z()([`
  word-break: break-all;
`]))),Be=(0,H.H)(re||(re=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),Fe=(0,H.H)(ue||(ue=z()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),$e=(0,H.H)(fe||(fe=z()([`
  flex-grow: 1;
`]))),ze=(0,H.H)(se||(se=z()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),Ze=(0,H.H)(de||(de=z()([`
  margin-top: 6px;
  color: var(--schema-render-color-description);
`]))),He=(0,H.H)(xe||(xe=z()([`
  margin-top: 6px;
  color: var(--schema-render-color-error);
`]))),Qe=(0,H.H)(pe||(pe=z()([`
  color: var(--schema-render-color-warning);
`]))),Ue=_.Z,we=function(Z){var J=Z.schema,w=Z.required,k=Z.prefixClassNames,oe=Z.labelColon,ce=!!oe;return(0,m.jsxs)(m.Fragment,{children:[w&&(0,m.jsx)("span",{className:Ue(k("item-mark"),Be),children:"*"}),(0,m.jsx)("span",{className:Ue(k("item-title"),Se),children:J.title}),!!J.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:J.titleDescription,children:(0,m.jsx)(W.Z,{className:Ue(k("item-title-tooltip"),Fe),style:{marginRight:ce?4:void 0}})}),ce&&(0,m.jsx)("span",{className:Ue(k("item-colon")),children:oe})]})},Ye=function(Z){var J=Z.body,w=Z.schema,k=Z.validator,oe=Z.required,ce=Z.disabled,Te=Z.readonly,be=Z.userCtx,De=Z.prefixClassNames,Le=o(),je=Le.labelWidth,We=Le.labelColon,_e=Le.labelGap,Ne=Le.labelRender,Ae=Le.locale,Ve=Ne||we,Ge={schema:w,required:oe,disabled:ce,readonly:Te,userCtx:be,prefixClassNames:De,labelWidth:je,labelColon:We,labelGap:_e,locale:Ae};return(0,m.jsxs)("div",{className:Ue(De("item-layout-horizontal")),children:[(0,m.jsxs)("div",{className:Ue(De("item-main"),ve),children:[(0,m.jsx)("div",{className:Ue(De("item-header"),Oe),style:{flexBasis:je,marginRight:_e},children:Ve(Ge)}),(0,m.jsx)("div",{className:Ue(De("item-body"),$e),children:J})]}),(0,m.jsxs)("div",{className:Ue(De("item-footer"),ze),style:{paddingLeft:L.hj(je)?je+_e:0},children:[k.status==="error"&&!!k.message&&(0,m.jsx)("div",{className:Ue(De("item-error-msg"),He),children:k.message}),k.status==="warning"&&!!k.message&&(0,m.jsx)("div",{className:Ue(De("item-warning-msg"),Qe),children:k.message}),!!w.description&&(0,m.jsx)("div",{className:Ue(De("item-description"),Ze),children:w.description})]})]})},ke=Ye,Ke,an,sn,hn,nn,vn,rn,In,$n=(0,H.H)(Ke||(Ke=z()([`
  margin-bottom: 8px;
`]))),Kn=(0,H.H)(an||(an=z()([`
  word-break: break-all;
`]))),Nn=(0,H.H)(sn||(sn=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),Wn=(0,H.H)(hn||(hn=z()([`
  margin-left: 4px;
`]))),Un=(0,H.H)(nn||(nn=z()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),Fn=(0,H.H)(vn||(vn=z()([`
  margin-top: 8px;
  color: var(--schema-render-color-description);
`]))),fn=(0,H.H)(rn||(rn=z()([`
  margin-top: 8px;
  color: var(--schema-render-color-error);
`]))),zn=(0,H.H)(In||(In=z()([`
  color: var(--schema-render-color-warning);
`]))),Je=_.Z,qe=function(Z){var J=Z.schema,w=Z.required,k=Z.prefixClassNames,oe=Z.labelColon,ce=!!oe;return(0,m.jsxs)(m.Fragment,{children:[w&&(0,m.jsx)("span",{className:Je(k("item-mark"),Nn),children:"*"}),(0,m.jsx)("span",{className:Je(k("item-title"),Kn),children:J.title}),!!J.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:J.titleDescription,children:(0,m.jsx)(W.Z,{className:Je(k("item-title-tooltip"),Wn),style:{marginRight:ce?4:void 0}})}),ce&&(0,m.jsx)("span",{className:Je(k("item-colon")),children:oe})]})},yn=function(Z){var J=Z.body,w=Z.schema,k=Z.validator,oe=Z.required,ce=Z.disabled,Te=Z.readonly,be=Z.userCtx,De=Z.prefixClassNames,Le=o(),je=Le.labelWidth,We=Le.labelColon,_e=Le.labelGap,Ne=Le.labelRender,Ae=Le.locale,Ve=Ne||qe,Ge={schema:w,required:oe,disabled:ce,readonly:Te,userCtx:be,prefixClassNames:De,labelWidth:je,labelColon:We,labelGap:_e,locale:Ae};return(0,m.jsxs)("div",{className:De("item-layout-vertical"),children:[(0,m.jsx)("div",{className:Je(De("item-header"),$n),children:Ve(Ge)}),(0,m.jsx)("div",{className:De("item-body"),children:J}),(0,m.jsxs)("div",{className:Je(De("item-footer"),Un),children:[k.status==="error"&&!!k.message&&(0,m.jsx)("div",{className:Je(De("item-error-msg"),fn),children:k.message}),k.status==="warning"&&!!k.message&&(0,m.jsx)("div",{className:Je(De("item-warning-msg"),zn),children:k.message}),!!w.description&&(0,m.jsx)("div",{className:Je(De("item-description"),Fn),children:w.description})]})]})},xn=yn;function gn(ee){var Z=ee.itemLayout,J=(0,I.useMemo)(function(){return!Z||Z==="horizontal"?ke:Z==="vertical"?xn:Z},[Z]);return J}var tn=L.kJ,ln=L.kK,En=L.Kn;function Pn(ee,Z){var J="".concat(t,"_").concat(Date.now());return a()(a()({},ee),{},{properties:a()(a()({},ee==null?void 0:ee.properties),{},B()({},J,a()(a()({},Z),{},{renderType:t})))})}function Hn(ee){var Z=ee.itemLayout,J=ee.labelWidth,w=ee.labelGap;return Z==="horizontal"&&L.hj(J)?J+w:0}function Tn(){for(var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Z=arguments.length>1?arguments[1]:void 0,J=0;J<ee.length;J++){var w=ee[J],k=En(w)?w:{label:w,value:w},oe=Z(k);if(oe)return}}function on(ee,Z){var J=[];return!tn(ee)||!tn(Z)||Z.forEach(function(w){ln(w)||Tn(ee,function(k){if(w===k.value)return J.push(k.label),!0})}),J}function Zn(ee,Z){var J=[];return!tn(ee)||!tn(Z)||Tn(ee,function(w){Z.includes(w.value)&&J.push(w)}),J}function Vn(ee){return!!(ln(ee)||ee==="")}function Dn(ee){var Z=ee.schema,J=ee.actionsRestSchema,w=ee.actionsRenderMode;return(0,I.useMemo)(function(){return w===h.normal?Z:Pn(Z,J)},[Z,J,w])}var bn,dn=(0,H.H)(bn||(bn=z()([`
  --schema-render-color-description: #999;
  --schema-render-color-required-mark: #ff4d4f;
  --schema-render-color-warning: #faad14;
  --schema-render-color-error: #ff4d4f;

  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
`]))),Gn=e(28403),On=e(84567),Yn=function(Z){var J=Z.children,w=o(),k=w.readonlyPlaceholder;return(0,m.jsx)(m.Fragment,{children:Vn(J)?k:J})},Xe=Yn,Jn=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=(0,A.Z)(function(Te){var be;oe(Te,{extra:{checkedOptions:Zn((be=J.renderOptions)===null||be===void 0?void 0:be.options,Te)}})});return(0,m.jsx)(On.Z.Group,a()(a()({},J.renderOptions),{},{value:k,onChange:ce,disabled:w}))},Qn=function(Z){var J,w=Z.schema,k=Z.value,oe=Z.locale,ce=on((J=w.renderOptions)===null||J===void 0?void 0:J.options,k);return(0,m.jsx)(Xe,{children:ce.join(oe.FormRender.comma)})},Xn={component:Jn,readonlyComponent:Qn},Cn=e(88760),wn=e(27484),en=e.n(wn),kn=function(Z){var J=Z.schema,w=Z.value,k=Z.onChange,oe=Z.disabled,ce=Z.locale,Te=Z.validator,be=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderSelect,{title:J.title})},[J.title,ce.FormRender.placeholderSelect]);return(0,m.jsx)(Cn.default,a()(a()({allowClear:!0,placeholder:be,style:{width:"100%"}},J.renderOptions),{},{status:Te.status,value:w?en()(w):null,onChange:function(Le){return k(Le?en()(Le).toISOString():void 0)},disabled:oe}))},Sn=function(Z){var J,w,k=Z.schema,oe=Z.value;return(0,m.jsx)(Xe,{children:oe?en()(oe).format(((J=k.renderOptions)===null||J===void 0?void 0:J.format)||((w=k.renderOptions)!==null&&w!==void 0&&w.showTime?n:l)):""})},qn={component:kn,readonlyComponent:Sn};function Rn(ee){return en()(ee).toISOString()}var er=function(Z){var J=Z.schema,w=Z.value,k=Z.onChange,oe=Z.disabled,ce=Z.validator;return(0,m.jsx)(Cn.default.RangePicker,a()(a()({allowClear:!0,style:{width:"100%"}},J.renderOptions),{},{status:ce.status,value:w?[en()(w[0]),en()(w[1])]:null,onChange:function(be){return k(be?[Rn(be[0]),Rn(be[1])]:void 0)},disabled:oe}))},nr=function(Z){var J=Z.schema,w=Z.value,k=Z.locale,oe="";if(L.kJ(w)&&w[0]&&w[1]){var ce,Te,be=(ce=J.renderOptions)!==null&&ce!==void 0&&ce.showTime?n:l,De=((Te=J.renderOptions)===null||Te===void 0?void 0:Te.format)||be;oe=F.dr(k.FormRender.displayDateRange,{start:en()(w[0]).format(De),end:en()(w[1]).format(De)})}return(0,m.jsx)(Xe,{children:oe})},Mn={component:er,readonlyComponent:nr},rr=function(Z){var J=Z.value;return(0,m.jsx)(Xe,{children:J})},tr={component:rr},ar=function(Z){var J=Z.disabled;return(0,m.jsx)(y,{disabled:J})},sr={formItem:ar},un=e(13457),or=["validateOnBlur"],lr=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=Z.validator,Te=Z.locale,be=J.renderOptions||{},De=be.validateOnBlur,Le=N()(be,or),je=(0,I.useMemo)(function(){return F.dr(Te.FormRender.placeholderInput,{title:J.title})},[J.title,Te.FormRender.placeholderInput]),We=(0,A.Z)(function(Ne){oe(Ne!=null?Ne:void 0,{triggerValidator:!De})}),_e=(0,A.Z)(function(){oe(k,{triggerValidator:!0})});return(0,m.jsx)(un.Z,a()(a()({style:{width:"100%"},placeholder:je},Le),{},{status:ce.status,value:k,onChange:We,onBlur:De?_e:void 0,disabled:w}))},_n=function(Z){var J=Z.value;return(0,m.jsx)(Xe,{children:J})},dr={component:lr,readonlyComponent:_n},mn=e(25278),ur=["validateOnBlur"],mr=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=Z.validator,Te=Z.locale,be=J.renderOptions||{},De=be.validateOnBlur,Le=N()(be,ur),je=(0,I.useMemo)(function(){return F.dr(Te.FormRender.placeholderInput,{title:J.title})},[J.title,Te.FormRender.placeholderInput]),We=(0,A.Z)(function(Ne){var Ae=Ne.target.value;Ae!==k&&oe(Ae,{triggerValidator:!De})}),_e=(0,A.Z)(function(){oe(k,{triggerValidator:!0})});return(0,m.jsx)(mn.Z,a()(a()({placeholder:je},Le),{},{status:ce.status,value:k!=null?k:"",onChange:We,onBlur:De?_e:void 0,disabled:w}))},cr=function(Z){var J=Z.value;return(0,m.jsx)(Xe,{children:J})},ir={component:mr,readonlyComponent:cr},cn=e(52162),Ln=e(47221),pr=function(Z){var J,w,k=Z.schema,oe=Z.path,ce=Z.objectStyle,Te=(0,I.useState)(!1),be=T()(Te,2),De=be[0],Le=be[1],je=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:k.title}),!!k.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,m.jsx)(W.Z,{style:{marginLeft:4}})})]});return(0,m.jsx)(Ln.Z,a()(a()({},(J=k.renderOptions)===null||J===void 0?void 0:J.headerOptions),{},{activeKey:String(De),onChange:function(){return Le(!De)},children:(0,I.createElement)(Ln.Z.Panel,a()(a()({},(w=k.renderOptions)===null||w===void 0?void 0:w.panelOptions),{},{header:je,key:"false"}),(0,m.jsx)("div",{style:ce,children:(0,m.jsx)(cn.Z,{schema:k,path:oe})}))}))},hr={formItem:pr},vr=function(Z){var J=Z.schema,w=Z.path,k=Z.objectStyle;return(0,m.jsx)("div",{style:k,children:(0,m.jsx)(cn.Z,{schema:J,path:w})})},Ir={formItem:vr},fr=["validateOnBlur"],yr=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=Z.validator,Te=Z.locale,be=J.renderOptions||{},De=be.validateOnBlur,Le=N()(be,fr),je=(0,I.useMemo)(function(){return F.dr(Te.FormRender.placeholderInput,{title:J.title})},[J.title,Te.FormRender.placeholderInput]),We=(0,A.Z)(function(Ne){var Ae=Ne.target.value;Ae!==k&&oe(Ae,{triggerValidator:!De})}),_e=(0,A.Z)(function(){oe(k,{triggerValidator:!0})});return(0,m.jsx)(mn.Z.Password,a()(a()({placeholder:je},Le),{},{status:ce.status,value:k!=null?k:"",onChange:We,onBlur:De?_e:void 0,disabled:w}))},An=function(Z){var J=Z.value;return(0,m.jsx)(Xe,{children:J})},xr={component:yr,readonlyComponent:An},gr=e(55742),Er=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange;return(0,m.jsx)(gr.ZP.Group,a()(a()({},J.renderOptions),{},{value:k,onChange:function(Te){return oe(Te.target.value)},disabled:w}))},Pr=function(Z){var J,w=Z.schema,k=Z.value,oe=on((J=w.renderOptions)===null||J===void 0?void 0:J.options,[k]);return(0,m.jsx)(Xe,{children:oe[0]})},Tr={component:Er,readonlyComponent:Pr},Dr=e(67002),br=function(Z){var J=Z.schema,w=Z.disabled,k=Z.readonly,oe=Z.value,ce=Z.onChange;return(0,m.jsx)(Dr.Z,a()(a()({},J.renderOptions),{},{value:oe!=null?oe:0,onChange:ce,disabled:w||k}))},Or={component:br},jn=e(34041),Cr=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=Z.locale,Te=Z.validator,be=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderSelect,{title:J.title})},[J.title,ce.FormRender.placeholderSelect]);return(0,m.jsx)(jn.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:be},J.renderOptions),{},{status:Te.status,mode:void 0,value:k!=null?k:null,onChange:function(Le){return oe(Le)},disabled:w}))},Sr=function(Z){var J,w,k=Z.schema,oe=Z.value,ce=Z.locale,Te=on((J=k.renderOptions)===null||J===void 0?void 0:J.options,[oe]);return(0,m.jsx)(Xe,{children:Te.join((w=ce.FormRender)===null||w===void 0?void 0:w.comma)})},Rr={component:Cr,readonlyComponent:Sr},Mr=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=Z.validator,Te=Z.locale,be=(0,I.useMemo)(function(){return F.dr(Te.FormRender.placeholderSelect,{title:J.title})},[J.title,Te.FormRender.placeholderSelect]),De=(0,A.Z)(function(Le,je){oe(Le,{extra:{selectedOptions:je}})});return(0,m.jsx)(jn.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:be},J.renderOptions),{},{status:ce.status,mode:"multiple",value:k,onChange:De,disabled:w}))},_r=function(Z){var J,w,k=Z.schema,oe=Z.value,ce=Z.locale,Te=on((J=k.renderOptions)===null||J===void 0?void 0:J.options,oe);return(0,m.jsx)(Xe,{children:Te.join((w=ce.FormRender)===null||w===void 0?void 0:w.comma)})},q={component:Mr,readonlyComponent:_r},X=e(41637),te=function(Z){var J=Z.schema,w=Z.disabled,k=Z.readonly,oe=Z.value,ce=Z.onChange;return(0,m.jsx)(X.Z,a()(a()({},J.renderOptions),{},{checked:oe,onChange:function(be){return ce(be)},disabled:w||k}))},ne={component:te},le=function(Z){var J,w=Z.schema,k=Z.disabled,oe=Z.readonly,ce=Z.value,Te=Z.onChange;return(0,m.jsx)(On.Z,a()(a()({},w.renderOptions),{},{checked:ce,onChange:function(De){return Te(De.target.checked)},disabled:k||oe,children:(J=w.renderOptions)===null||J===void 0?void 0:J.text}))},Ie={component:le},ie=["validateOnBlur"],Ee=function(Z){var J=Z.schema,w=Z.disabled,k=Z.value,oe=Z.onChange,ce=Z.validator,Te=Z.locale,be=J.renderOptions||{},De=be.validateOnBlur,Le=N()(be,ie),je=(0,I.useMemo)(function(){return F.dr(Te.FormRender.placeholderInput,{title:J.title})},[J.title,Te.FormRender.placeholderInput]),We=(0,A.Z)(function(Ne){var Ae=Ne.target.value;Ae!==k&&oe(Ae,{triggerValidator:!De})}),_e=(0,A.Z)(function(){oe(k,{triggerValidator:!0})});return(0,m.jsx)(mn.Z.TextArea,a()(a()({rows:3,placeholder:je},Le),{},{status:ce.status,value:k!=null?k:"",onChange:We,onBlur:De?_e:void 0,disabled:w}))},ge=function(Z){var J=Z.value;return(0,m.jsx)(Xe,{children:J})},ye={component:Ee,readonlyComponent:ge},he,Pe=(he={},B()(B()(B()(B()(B()(B()(B()(B()(B()(B()(he,t,sr),"Object",hr),"ObjectNull",Ir),"InputText",ir),"InputNumber",dr),"Password",xr),"TextArea",ye),"Radio",Tr),"Checkbox",Xn),"Switch",ne),B()(B()(B()(B()(B()(B()(B()(he,"SwitchBox",Ie),"DatePicker",qn),"DateRangePicker",Mn),"Description",tr),"Rate",Or),"Select",Rr),"SelectMultiple",q)),Re=Pe,Me=function(Z,J){var w=a()(a()({},d),Z),k=(0,I.useRef)(null);(0,I.useImperativeHandle)(J,function(){return k.current});var oe=(0,I.useMemo)(function(){return a()(a()({},Re),w.renderers)},[w.renderers]),ce=(0,I.useMemo)(function(){return a()(a()({},Gn.Z),w.locale)},[w.locale]),Te=gn(w),be=K({props:w,coreRef:k}),De=be.handleFormSubmit,Le=be.handleSubmit,je=be.handleReset,We=be.actionsLoading,_e=be.isLoading,Ne=Dn(v.ei(w,"schema","actionsRestSchema","actionsRenderMode")),Ae=a()(a()({},v.ei(w,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder")),{},{locale:ce,actionsLoading:We,handleSubmit:Le,handleReset:je}),Ve=w.disableFormOnActionLoading?w.disabled||_e:w.disabled;return(0,m.jsx)(u.Provider,{value:Ae,children:(0,m.jsxs)("form",{onSubmit:De,className:_.Z(w.rootClassName,dn),style:w.rootStyle,children:[(0,m.jsx)(O.default,a()(a()({},w),{},{ref:k,schema:Ne,locale:ce,renderers:oe,itemLayout:Te,disabled:Ve})),w.actionsRenderMode===h.normal&&(0,m.jsx)(y,{disabled:Ve,className:F.Rk(w.prefixCls,"form-actions"),style:{marginTop:w.layoutRowGap,marginLeft:Hn(w)}})]})})},Ce=(0,I.forwardRef)(Me),me=Ce},35804:function(G,i,e){e.r(i);var S=e(97857),a=e.n(S),v=e(78484);i.default=a()(a()({},v.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})},28403:function(G,i,e){var S=e(97857),a=e.n(S),v=e(39214);i.Z=a()(a()({},v.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},90489:function(G,i,e){e.r(i),e.d(i,{default:function(){return R}});var S=e(97857),a=e.n(S),v=e(68795),_=e(48689),O=e(74311),F=e(14726),I=e(67294),p={submit:"submit",reset:"reset",collapse:"collapse"},N={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[p.reset,p.submit,p.collapse],defaultCollapsed:!0,collapsedRows:2},x=e(5574),B=e.n(x),L=e(80882),$=e(48115),M=e(24317);function P(C,T,A){var g;if(A)return A(C);if(!C)return 5;var K=C.clientWidth,W=((g=C.firstElementChild)===null||g===void 0||(g=g.getBoundingClientRect())===null||g===void 0?void 0:g.width)||320;return Math.floor(K/W)*T-1}var h=e(64599),d=e.n(h);function s(C,T){var A={},g=Object.keys(C.properties).slice(0,T),K=d()(g),W;try{for(K.s();!(W=K.n()).done;){var V=W.value;A[V]=C.properties[V]}}catch(U){K.e(U)}finally{K.f()}return{renderType:"Root",properties:A}}function t(C){var T=C.isCollapsed,A=C.rawSchema,g=C.collapsedNumber;return T?s(A,g):A}var l=e(28e3);function n(C){return l.PO(C)?Object.keys(C).length:l.kJ(C)||l.HD(C)?C.length:0}var r=e(38812);function u(C,T){var A=(0,r.Z)(T),g=(0,I.useRef)(-1);(0,I.useEffect)(function(){var K,W=(K=C.current)===null||K===void 0?void 0:K.getRootElement();if(W){var V=new ResizeObserver(function(U){var z=U[0].contentRect.width;g.current!==z&&(g.current=z,A.current(W))});return V.observe(W),function(){return V.disconnect()}}},[])}var o=e(85893);function m(C,T){var A=C.schema,g=(0,I.useState)(C.defaultCollapsed),K=B()(g,2),W=K[0],V=K[1],U=(0,I.useState)(function(){var fe;return P((fe=T.current)===null||fe===void 0?void 0:fe.getRootElement(),C.collapsedRows,C.calcCollapsedNumber)}),z=B()(U,2),H=z[0],Q=z[1],Y=(0,I.useRef)(A);(0,I.useMemo)(function(){Y.current=t({isCollapsed:W,collapsedNumber:H,rawSchema:A})},[H,W,A]),u(T,function(fe){Q(P(fe,C.collapsedRows,C.calcCollapsedNumber))});var ae=(0,M.Z)(function(fe){var se;V(fe),(se=C.onToggleCollapsed)===null||se===void 0||se.call(C,fe)}),re=(0,M.Z)(function(fe){var se,de=fe.locale;if(n(A.properties)<=H)return null;if(W){var xe;return(0,o.jsxs)(F.ZP,{type:"link",onClick:function(){return ae(!1)},style:{padding:0},children:[de==null||(xe=de.Search)===null||xe===void 0?void 0:xe.expand,(0,o.jsx)(L.Z,{})]})}return(0,o.jsxs)(F.ZP,{type:"link",onClick:function(){return ae(!0)},style:{padding:0},children:[de==null||(se=de.Search)===null||se===void 0?void 0:se.collapse,(0,o.jsx)($.Z,{})]})}),ue=a()({collapse:re},C.registerActions);return{schema:Y.current,registerActions:ue}}var E=e(28403),f=a()(a()({},E.Z),{},{FormRender:a()(a()({},E.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}}),j=e(52038);function y(C){return{className:j.Rk(C,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var c={submit:function(T){var A=T.loading,g=T.locale;return(0,o.jsx)(F.ZP,{loading:A.submit,htmlType:"submit",type:"primary",icon:(0,o.jsx)(v.Z,{}),children:g.FormRender.submit})},reset:function(T){var A=T.loading,g=T.locale,K=T.handleReset;return(0,o.jsx)(F.ZP,{loading:A.reset,onClick:K,icon:(0,o.jsx)(_.Z,{}),children:g.FormRender.reset})}},b=function(T,A){var g=a()(a()({},N),T),K=(0,I.useRef)(null),W=(0,I.useMemo)(function(){return a()(a()({},f),g.locale)},[g.locale]),V=m(g,K),U=V.schema,z=V.registerActions,H=(0,I.useMemo)(function(){return y(g.prefixCls)},[g.prefixCls]);return(0,I.useImperativeHandle)(A,function(){return K.current}),(0,o.jsx)(O.default,a()(a()({layout:"autoFill"},g),{},{ref:K,locale:W,schema:U,registerActions:a()(a()({},c),z),actionsRestSchema:H,actionsRenderMode:"formItem"}))},D=(0,I.forwardRef)(b),R=D},9686:function(G,i,e){e.r(i);var S=e(97857),a=e.n(S),v=e(35804);i.default=a()(a()({},v.default),{},{FormRender:a()(a()({},v.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})},60823:function(G,i,e){e.r(i),e.d(i,{default:function(){return _r}});var S=e(97857),a=e.n(S),v=e(18474),_=e(28e3),O=e(85908),F=e(24317),I=e(95511),p=e(67294),N=_.kJ,x=_.PO,B=_.HD,L=_.kK,$=function(X){return N(X)?!X.length:x(X)?!Object.keys(X).length:B(X)?X.trim()==="":L(X)};function M(q,X){return N(q)?q.map(X):[]}function P(q,X){if(q)for(var te=q.length,ne=0;ne<te;ne++){var le=X==null?void 0:X(q[ne],ne,q);if(le)return}}function h(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var d=h(),s=function(q){return q.actions="__actions__",q.rowNumber="__row-number__",q}({}),t={table:"st-table-".concat(d),pagination:"st-pagination-".concat(d)},l=e(23060),n=e(13769),r=e.n(n),u=e(41637),o=e(66309),m=e(67002),E=e(5574),f=e.n(E),j=e(57020),y=e(42075),c=e(85893),b=function(X){var te=X.imgList,ne=X.imgProps,le=X.groupProps,Ie=(0,p.useState)(!1),ie=f()(Ie,2),Ee=ie[0],ge=ie[1],ye=(0,p.useState)(0),he=f()(ye,2),Pe=he[0],Re=he[1],Me=function(me){Re(me),ge(!0)};return(0,c.jsx)(j.Z.PreviewGroup,a()(a()({},le),{},{items:te,preview:{visible:Ee,current:Pe,onChange:function(me){return Re(me)},onVisibleChange:function(me){return ge(me)}},children:(0,c.jsx)(y.Z,{children:te.map(function(Ce,me){return(0,p.createElement)(j.Z,a()(a()({width:60},ne),{},{src:Ce,key:me,onClick:function(){return Me(me)}}))})})}))},D=b,R={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},C=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),T=function(X){var te=X.value;return $(te)?"-":isNaN(Number(te))?te:String(te).replace(C,",")},A=T,g=e(83062),K=["maxLength"],W=function(X){var te=X.value,ne=X.options,le=ne===void 0?{}:ne,Ie=$(te)?"-":String(te),ie=le.maxLength,Ee=ie===void 0?10:ie,ge=r()(le,K);return Ie.length>Ee?(0,c.jsxs)(g.Z,a()(a()({title:Ie},ge),{},{children:[Ie.slice(0,Ee-1),"..."]})):(0,c.jsx)(c.Fragment,{children:Ie})},V=W,U=e(14726),z=e(85576),H=["maxLength"],Q=function(X){var te=X.value,ne=X.options,le=ne===void 0?{}:ne,Ie=$(te)?"-":String(te),ie=le.maxLength,Ee=ie===void 0?10:ie,ge=r()(le,H),ye=(0,p.useState)(!1),he=f()(ye,2),Pe=he[0],Re=he[1];return Ie.length>Ee?(0,c.jsxs)(c.Fragment,{children:[Ie.slice(0,Ee-3),"...",(0,c.jsx)(U.ZP,{type:"link",style:{padding:0},onClick:function(){return Re(!0)},children:"\u5168\u90E8"}),(0,c.jsx)(z.Z,a()(a()({width:600,title:"\u5168\u90E8",footer:null},ge),{},{open:Pe,onCancel:function(){return Re(!1)},children:Ie}))]}):(0,c.jsx)(c.Fragment,{children:Ie})},Y=Q,ae=["groupProps"],re=_.kJ,ue={code:function(X){var te=X.value,ne=X.options;return(0,c.jsx)("pre",{style:a()(a()({},R),ne.style),children:(0,c.jsx)("code",{children:te})})},percent:function(X){var te=X.value;return $(te)?"-":"".concat(te,"%")},switch:function(X){var te=X.value,ne=X.options;return(0,c.jsx)(u.Z,a()(a()({},ne),{},{checked:!!te}))},tags:function(X){var te=X.value,ne=X.options,le=re(te)?te:[te];return le.map(function(Ie,ie){return(0,p.createElement)(o.Z,a()(a()({},ne),{},{key:ie}),Ie)})},rate:function(X){var te=X.value,ne=X.options;return(0,c.jsx)(m.Z,a()(a()({style:{width:134}},ne),{},{disabled:!0,value:te}))},"comma-number":function(X){return(0,c.jsx)(A,a()({},X))},images:function(X){var te=X.value,ne=X.options;if($(te))return"-";var le=re(te)?te:[te],Ie=ne.groupProps,ie=r()(ne,ae);return(0,c.jsx)(D,{imgList:le,imgProps:ie,groupProps:Ie})},"long-text":function(X){return(0,c.jsx)(V,a()({},X))},"long-text-modal":function(X){return(0,c.jsx)(Y,a()({},X))}},fe=e(27484),se=e.n(fe),de=l.U2,xe=_.kJ,pe=_.PO;function ve(q,X){return q===X?0:q>X?1:-1}var Oe=function(X,te,ne){var le=ne.sortType,Ie=ne.sortOrder,ie=ne.arrDataIndex,Ee=ne.sortDataExtractor,ge=ne.sortStringValueTransform,ye=Ee?Ee(X):de(X,ie),he=Ee?Ee(te):de(te,ie);return pe(ye)||pe(he)?0:(xe(ye)&&(ye=ye.join("")),xe(he)&&(he=he.join("")),ye=String(ye).trim(),he=String(he).trim(),$(ye)?Ie==="ascend"?1:-1:$(he)?Ie==="ascend"?-1:1:le==="string"?(ge&&(ye=ge(ye),he=ge(he)),ve("@".concat(ye).toLowerCase(),"@".concat(he).toLowerCase())):le==="date"?ve(new Date(ye),new Date(he)):!isNaN(Number(ye))&&!isNaN(Number(he))?ve(Number(ye),Number(he)):se()(ye).isValid()&&se()(he).isValid()?ve(new Date(ye),new Date(he)):(ge&&(ye=ge(ye),he=ge(he)),ve(ye,he)))},Se=["title","dataIndex","children","valueType"],Be=["type"],Fe=l.U2,$e=_.kJ,ze=_.HD,Ze=_.mf;function He(q,X,te){return q.map(function(ne){var le=ne.title,Ie=ne.dataIndex,ie=ne.children,Ee=ne.valueType,ge=r()(ne,Se);$e(ie)&&(ie=He(ie,X,te));var ye=$e(Ie)?Ie.join("."):Ie,he=$e(Ie)?Ie:[Ie],Pe=X.sortMode==="local-all"||X.sortMode==="service-all",Re=!!ge.sorter||!!ge.sortType||Pe,Me=!1;ie||(ge.sorter?Me=ge.sorter:(Pe||ge.sortType)&&(Me=X.sortMode==="service-all"?!0:function(me,ee,Z){return Oe(me,ee,{arrDataIndex:he,sortOrder:Z,sortType:ge.sortType,sortDataExtractor:ge.sortDataExtractor,sortStringValueTransform:X.sortStringValueTransform})}));var Ce=function(ee,Z,J){var w=Fe(Z,he),k="",oe=void 0;if(Ee)if(Ze(Ee)){var ce=Ee(Z,J),Te=ce.type,be=r()(ce,Be);k=Te,oe=be}else k=Ee;var De=te[k];return De?De({value:w,record:Z,options:oe||{},index:J}):$(w)?"-":w};return a()(a()({align:"center",key:ye,width:ze(le)?le.length*16+(Re?50:30):void 0,render:Ce},ge),{},{title:le,dataIndex:Ie,children:ie,sorter:Me})})}var Qe=l.Cw;function Ue(q){var X=q.table,te=q.globalStateRef,ne=(0,p.useRef)([]),le=te.current.isTabChanging;(0,p.useMemo)(function(){le||(ne.current=X.columns||[])},[X.columns,le]);var Ie=(0,p.useMemo)(function(){var Ee=a()(a()({},ue),X.registerValueType);return Qe(Ee,function(ge,ye){return ye.toLowerCase()})},[X.registerValueType]),ie=(0,p.useMemo)(function(){return He(ne.current,X,Ie)},[ne.current]);return{rawColumns:ne.current,baseColumns:ie}}var we=e(15009),Ye=e.n(we),ke=e(99289),Ke=e.n(ke),an=e(19632),sn=e.n(an),hn=e(16223),nn=e(60887),vn=e(32339),rn=e(45587),In=e(24285),$n=function(X){var te=X.items,ne=te===void 0?[]:te,le=X.onChange,Ie=X.itemClassName,ie=X.overlayClassName,Ee=X.renderItem,ge=(0,nn.Dy)((0,nn.VT)(nn.MA)),ye=(0,p.useState)(null),he=f()(ye,2),Pe=he[0],Re=he[1],Me=(0,F.Z)(function(Ce){var me=Ce.active,ee=Ce.over;if(me.id!==ee.id){var Z=ne.findIndex(function(w){return w.id===me.id}),J=ne.findIndex(function(w){return w.id===ee.id});le==null||le((0,rn.Rp)(ne,Z,J))}Re(null)});return(0,c.jsxs)(nn.LB,{sensors:ge,collisionDetection:nn.pE,onDragStart:function(me){var ee=me.active;return Re(ee.id)},onDragEnd:Me,modifiers:[vn.DL],children:[(0,c.jsx)(rn.Fo,{items:ne,strategy:rn.qw,children:ne.map(function(Ce,me){return(0,c.jsx)(Kn,{className:Ie,id:Ce.id,itemData:Ce,itemIndex:me,renderItem:Ee},Ce.id)})}),(0,c.jsx)(nn.y9,{zIndex:9999,children:Pe?(0,c.jsx)("div",{className:ie,children:Ee==null?void 0:Ee(ne.find(function(Ce){return Ce.id===Pe}),ne.findIndex(function(Ce){return Ce.id===Pe}))}):null})]})};function Kn(q){var X=q.className,te=q.id,ne=q.itemData,le=q.itemIndex,Ie=q.renderItem,ie=(0,rn.nB)({id:te}),Ee={transform:In.ux.Transform.toString(ie.transform),transition:ie.transition,opacity:ie.isDragging?0:void 0};return(0,c.jsx)("div",{className:X,ref:ie.setNodeRef,style:Ee,children:Ie==null?void 0:Ie(ne,le,ie)})}var Nn=$n,Wn=e(29751),Un=e(13457),Fn=[{title:"\u5217\u540D\u79F0",dataIndex:"name",width:200},{title:"\u663E\u793A\u5217",dataIndex:"hidden",width:90,render:function(X,te){return(0,c.jsx)(u.Z,{checked:!X,onChange:function(ne){function le(Ie){return ne.apply(this,arguments)}return le.toString=function(){return ne.toString()},le}(function(ne){return te(!ne)})})}},{title:"\u5BBD\u5EA6",dataIndex:"width",width:100,render:function(X,te){return(0,c.jsx)(Un.Z,{min:1,value:X,onChange:function(ne){function le(Ie){return ne.apply(this,arguments)}return le.toString=function(){return ne.toString()},le}(function(ne){ne&&te(ne)})})}},{title:"\u56FA\u5B9A\u65B9\u5F0F",dataIndex:"fixed",width:60,algin:"center",render:function(X){var te=X?X==="left"?"\u5DE6":"\u53F3":"\u65E0",ne=X?X==="left"?"orange":"blue":void 0;return(0,c.jsx)(o.Z,{color:ne,style:{margin:0},children:te})}},{title:"\u6392\u5E8F",dataIndex:"sort",width:50,algin:"center",render:function(){return(0,c.jsx)(U.ZP,{type:"text",size:"small",icon:(0,c.jsx)(Wn.Z,{}),style:{cursor:"move"}})}}],fn=Fn,zn=e(68400),Je=e.n(zn),qe=e(21222),yn,xn,gn,tn,ln,En,Pn,Hn=(0,qe.H)(yn||(yn=Je()([`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
`]))),Tn=(0,qe.H)(xn||(xn=Je()([`
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
`]))),on=(0,qe.H)(gn||(gn=Je()([`
  border-top: 1px solid #f0f0f0;

  &:first-of-type {
    border-top: none;
  }
`]))),Zn=(0,qe.H)(tn||(tn=Je()([`
  background-color: #fff;
  transform: scale(1.05);
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 200ms ease-out;
`]))),Vn=(0,qe.H)(ln||(ln=Je()([`
  display: flex;
  padding: 8px 0;
  background-color: #fff;

  &:hover {
    background-color: #fafafa;
  }
`]))),Dn=(0,qe.H)(En||(En=Je()([`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  word-break: break-all;
  flex-shrink: 0;
`]))),bn=(0,qe.H)(Pn||(Pn=Je()([`
  text-align: right;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`])));function dn(q){return q.map(function(X){return{id:String(X.dataIndex),name:X.title,hidden:X.hidden,width:X.width,fixed:X.fixed}})}var Gn=function(X){var te=X.defaultColumns,ne=X.sortColumns,le=X.onOk,Ie=(0,p.useState)(function(){return dn(ne)}),ie=f()(Ie,2),Ee=ie[0],ge=ie[1],ye=(0,F.Z)(function(Ce,me,ee){var Z=sn()(Ee);Z[Ce][me]=ee,ge(Z)}),he=(0,F.Z)(function(Ce){ge(Ce)}),Pe=(0,F.Z)(function(){ge(dn(ne))}),Re=(0,F.Z)(function(){ge(dn(te))}),Me=(0,F.Z)(function(){var Ce=[];Ee.forEach(function(me){var ee=me.id,Z=me.width,J=me.hidden,w=te.find(function(k){return String(k.dataIndex)===ee});w&&Ce.push(a()(a()({},w),{},{width:Z,hidden:J}))}),le==null||le(Ce)});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:Hn,children:fn.map(function(Ce,me){return(0,c.jsx)("div",{className:Dn,style:{width:Ce.width,justifyContent:Ce.algin},children:Ce.title},me)})}),(0,c.jsx)("div",{className:Tn,children:(0,c.jsx)(Nn,{items:Ee,onChange:he,itemClassName:on,overlayClassName:Zn,renderItem:function(me,ee,Z){return(0,c.jsx)("div",{className:Vn,children:fn.map(function(J,w){var k=me[J.dataIndex],oe=J.dataIndex==="sort"?Z==null?void 0:Z.listeners:{};return(0,c.jsx)("div",a()(a()({className:Dn,style:{width:J.width,justifyContent:J.algin}},oe),{},{children:J.render?J.render(k,function(ce){return ye(ee,J.dataIndex,ce)}):k}),"".concat(ee).concat(w))})},ee)}})}),(0,c.jsx)("div",{className:bn,children:(0,c.jsxs)(y.Z,{children:[(0,c.jsx)(U.ZP,{onClick:Re,children:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E"}),(0,c.jsx)(U.ZP,{onClick:Pe,children:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E"}),(0,c.jsx)(U.ZP,{type:"primary",onClick:Me,children:"\u786E\u5B9A"})]})})]})},On=Gn,Yn=["sortColumns","defaultColumns","onOk"],Xe=function(X){var te=X.sortColumns,ne=X.defaultColumns,le=X.onOk,Ie=r()(X,Yn);return(0,c.jsx)(z.Z,a()(a()({title:"\u5217\u8BBE\u7F6E",width:680,centered:!0,destroyOnClose:!0,footer:null},Ie),{},{children:(0,c.jsx)(On,{sortColumns:te,defaultColumns:ne,onOk:le})}))},Jn=Xe,Qn=function(X,te){var ne=[],le={};X.forEach(function(ge){le[String(ge.dataIndex)]=ge}),te.forEach(function(ge){var ye=String(ge.dataIndex),he=le[ye];if(he){var Pe,Re,Me;ne.push(a()(a()({},he),{},{width:(Pe=ge.width)!==null&&Pe!==void 0?Pe:he.width,hidden:(Re=ge.hidden)!==null&&Re!==void 0?Re:he.hidden,fixed:(Me=ge.fixed)!==null&&Me!==void 0?Me:he.fixed})),delete le[ye]}});for(var Ie=0,ie=Object.values(le);Ie<ie.length;Ie++){var Ee=ie[Ie];ne.push(Ee)}return ne},Xn=l.ei;function Cn(q){var X=q.baseColumns,te=q.table,ne=q.globalStateRef,le=(0,p.useRef)([]),Ie=(0,p.useState)(!1),ie=f()(Ie,2),Ee=ie[0],ge=ie[1],ye=(0,p.useState)([]),he=f()(ye,2),Pe=he[0],Re=he[1],Me=ne.current.isTabChanging;(0,p.useMemo)(function(){if(!Me)if(Pe.length){var J=te.settingColumnsMergeAlgo||Qn;le.current=J(X,Pe)}else le.current=sn()(X)},[X,Pe]);var Ce=(0,F.Z)(function(){ge(!0)}),me=(0,F.Z)(function(){ge(!1)}),ee=(0,F.Z)(function(J){var w;le.current=J,me();var k=J.map(function(oe){return Xn(oe,"title","dataIndex","width","hidden","fixed")});(w=te.onSettingChanged)===null||w===void 0||w.call(te,{columns:k},te.settingId)}),Z=(0,c.jsx)(Jn,{open:Ee,sortColumns:le.current,defaultColumns:X,onCancel:me,onOk:ee});return(0,hn.Z)(Ke()(Ye()().mark(function J(){var w,k,oe;return Ye()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,(w=te.getSetting)===null||w===void 0?void 0:w.call(te,te.settingId);case 2:oe=Te.sent,oe!=null&&(k=oe.columns)!==null&&k!==void 0&&k.length&&Re(oe.columns);case 4:case"end":return Te.stop()}},J)})),[te.settingId]),{sortColumns:le.current,sortModalHolder:Z,openSettingModal:Ce,closeSettingModal:me}}var wn=e(80882),en=e(86738),kn=e(85418),Sn=e(93047),qn=["children","onClick","noLoading"],Rn=Sn.Z;function er(q){var X=q.children,te=q.onClick,ne=q.noLoading,le=ne===void 0?!1:ne,Ie=r()(q,qn),ie=(0,p.useState)(!1),Ee=f()(ie,2),ge=Ee[0],ye=Ee[1],he=(0,F.Z)(function(){var Pe=Ke()(Ye()().mark(function Re(Me){return Ye()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:if(!le){me.next=3;break}return te==null||te(Me),me.abrupt("return");case 3:return ye(!0),me.prev=4,me.next=7,te==null?void 0:te(Me);case 7:me.next=12;break;case 9:me.prev=9,me.t0=me.catch(4),Rn.warn(me.t0);case 12:ye(!1);case 13:case"end":return me.stop()}},Re,null,[[4,9]])}));return function(Re){return Pe.apply(this,arguments)}}());return(0,c.jsx)(U.ZP,a()(a()({loading:ge},Ie),{},{onClick:he,children:X}))}var nr=["text","confirmAgain","confirmProps","onClick"],Mn,rr=_.kJ,tr=_.HD,ar=l.CE,sr=(0,qe.H)(Mn||(Mn=Je()([`
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
`])));function un(q,X){var te=q.text,ne=q.confirmAgain,le=q.confirmProps,Ie=q.onClick,ie=r()(q,nr),Ee=tr(te)?(0,c.jsx)(er,a()(a()({type:"link",size:"small"},ar(ie,"isShow")),{},{onClick:function(ye){return!ne&&(Ie==null?void 0:Ie(ye))},children:te}),X):te;return ne?(0,c.jsx)(en.Z,a()(a()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},le),{},{onConfirm:Ie,children:Ee}),X):Ee}function or(q){var X=q.record,te=q.index,ne=q.actionItems,le=q.actionItemsCount,Ie=q.actionItemsDropdownProps,ie=ne==null?void 0:ne(X,te);if(!rr(ie))return null;var Ee=ie.filter(function(Pe){return Pe.isShow!==!1}),ge;if(Ee.length>le){var ye=[],he=[];return Ee.forEach(function(Pe,Re){Re<le-1?ye.push(Pe):he.push(un(Pe,Re))}),(0,c.jsxs)(c.Fragment,{children:[ye.map(function(Pe,Re){return un(Pe,Re)}),(0,c.jsx)(kn.Z,a()(a()({placement:"bottomRight"},Ie),{},{dropdownRender:function(){return(0,c.jsx)("div",{className:sr,children:he.map(function(Re,Me){return(0,c.jsx)(p.Fragment,{children:Re},Me)})})},children:(0,c.jsxs)(U.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:["\u66F4\u591A ",(0,c.jsx)(wn.Z,{style:{margin:0}})]})}))]})}else ge=Ee.map(function(Pe,Re){return un(Pe,Re)});return ge}function lr(q){var X=q.table,te=q.sortColumns,ne=X.showRowNumber,le=ne===void 0?!1:ne,Ie=X.rowNumberColumnData,ie=Ie===void 0?{}:Ie,Ee=X.actionItems,ge=X.actionItemsCount,ye=ge===void 0?2:ge,he=X.actionItemsColumnData,Pe=he===void 0?{}:he,Re=X.actionItemsDropdownProps,Me=(0,F.Z)(function(ee,Z,J){return or({record:Z,index:J,actionItems:Ee,actionItemsCount:ye,actionItemsDropdownProps:Re})}),Ce=(0,p.useMemo)(function(){return te.filter(function(ee){return!ee.hidden})},[te]),me=(0,p.useMemo)(function(){var ee=sn()(Ce);return le&&ee.unshift(a()({title:"\u5E8F\u53F7",align:"center",width:70,fixed:"left",render:function(J,w,k){return k+1},key:s.rowNumber},ie)),Ee&&ee.push(a()({title:"\u64CD\u4F5C",align:"center",fixed:"right",width:134,render:Me,key:s.actions},Pe)),ee},[Ce]);return{finalColumns:me}}var _n=e(4559);function dr(q){var X=q.ref,te=q.rootElemRef,ne=q.searchRef,le=q.requestParamsRef,Ie=q.requestExtraParamsRef,ie=q.searchValueRef,Ee=q.dataSource,ge=q.updateDataSource,ye=q.updateSummaryData,he=q.updateScrollY,Pe=q.openSettingModal,Re=q.runRequest,Me=(0,_n.Z)(),Ce=Me.forceUpdate;(0,p.useImperativeHandle)(X,function(){return{refresh:Re,getRootElement:function(){return te.current},getSearchRef:function(){return ne.current},getRequestParams:function(){return le.current},getRequestExtraParams:function(){return Ie.current},getSearchValue:function(){return ie.current},setSearchValue:function(ee,Z){var J,w=Z!=null&&Z.overwrite?ee:a()(a()({},ie.current),ee);(J=ne.current)===null||J===void 0||J.setValue(w)},clearSearchValue:function(){var ee;return(ee=ne.current)===null||ee===void 0?void 0:ee.resetValue()},getDataSource:function(){return Ee},setDataSource:function(ee){ge(ee),Ce()},setSummaryData:function(ee){ye(ee),Ce()},updateScrollY:he,openSettingModal:Pe,rerender:Ce}})}var mn=Sn.Z,ur=l.ei,mr=v.Z;function cr(q){var X,te=q.request,ne=q.updateScrollY,le=q.table,Ie=q.searchValueRef,ie=(0,p.useRef)({current:1,pageSize:(le.pagination!==!1?(X=le.pagination)===null||X===void 0?void 0:X.defaultPageSize:10)||10,total:0}),Ee=(0,p.useRef)({}),ge=(0,p.useRef)({}),ye=(0,p.useRef)([]),he=(0,p.useRef)({}),Pe=(0,p.useState)(!1),Re=f()(Pe,2),Me=Re[0],Ce=Re[1];le.pagination===!1&&(ie.current={});var me=(0,F.Z)(function(){var oe=Ke()(Ye()().mark(function ce(Te,be){var De,Le,je;return Ye()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(De={data:[],total:0},!Me){_e.next=3;break}return _e.abrupt("return",De);case 3:if(Ce(!0),_e.prev=4,!te){_e.next=18;break}return Le={},be!=null&&be.overwrite?Le=Te||{}:Le=a()(a()(a()({},Ie.current),ur(ie.current,"current","pageSize")),Te),_e.next=10,te(Le,ge.current);case 10:je=_e.sent,Ee.current=Le,Le.current&&(ie.current.current=Le.current),Le.pageSize&&(ie.current.pageSize=Le.pageSize),ie.current.total=je.total||0,ye.current=je.data||[],he.current=je.summaryData||{},De=a()(a()({},je),{},{data:ye.current,total:ie.current.total});case 18:_e.next=23;break;case 20:_e.prev=20,_e.t0=_e.catch(4),mn.warn(_e.t0);case 23:return Ce(!1),le.autoScrollY&&ne(),_e.abrupt("return",De);case 26:case"end":return _e.stop()}},ce,null,[[4,20]])}));return function(ce,Te){return oe.apply(this,arguments)}}()),ee=!1;if(le.pagination!==!1){var Z;ee=a()(a()(a()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(ce){return"\u5171 ".concat(ce," \u6761\u6570\u636E")}},le.pagination),ie.current),{},{onChange:function(ce,Te){var be,De;(be=le.pagination)===null||be===void 0||(De=be.onChange)===null||De===void 0||De.call(be,ce,Te),Object.assign(ie.current,{current:ce,pageSize:Te}),me()},className:mr((Z=le.pagination)===null||Z===void 0?void 0:Z.className,t.pagination)})}var J=(0,F.Z)(function(oe){ye.current=oe}),w=(0,F.Z)(function(oe){he.current=oe}),k=(0,F.Z)(function(oe){ge.current=oe});return{loading:Me,dataSource:ye.current,updateDataSource:J,summaryData:he.current,updateSummaryData:w,requestParamsRef:Ee,requestExtraParamsRef:ge,updateRequestExtraParams:k,finalPagination:ee,runRequest:me}}var ir=_.HD;function cn(q){if(!q)return 0;var X=window.getComputedStyle(q,null),te=parseFloat(X.marginTop)+parseFloat(X.marginBottom);return q.offsetHeight+te}function Ln(q,X){if(!q||!X)return 0;var te=window.getComputedStyle(q,null),ne=te[X];return ir(ne)&&ne.match(/^\d+/)?parseFloat(ne):0}var pr=_.o8;function hr(q){var X=q.table,te=q.rootElemRef,ne=(0,p.useState)(X.virtual?0:void 0),le=f()(ne,2),Ie=le[0],ie=le[1],Ee=(0,p.useRef)(),ge=(0,F.Z)(function(){var he;if(!(!te.current||!pr((he=X.scroll)===null||he===void 0?void 0:he.y))){var Pe=te.current.querySelector(".".concat(t.table)),Re=Pe==null?void 0:Pe.querySelector("thead"),Me=Pe==null?void 0:Pe.querySelector("tfoot"),Ce=Pe==null?void 0:Pe.querySelector(".".concat(t.pagination)),me=[Re,Me,Ce],ee=0;P(te.current.children,function(Z){Z!==Pe&&(ee+=cn(Z))}),ee+=Ln(Pe,"marginTop"),P(me,function(Z){ee+=cn(Z)}),ie(te.current.clientHeight-ee)}}),ye=(0,F.Z)(function(){var he=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Pe&&!X.autoScrollY||(clearTimeout(Ee.current),Ee.current=setTimeout(ge,he))});return(0,O.Z)(function(){var he=function(){return ye(0,!0)};return window.addEventListener("resize",he),function(){return window.removeEventListener("resize",he)}}),{scrollY:Ie,updateScrollY:ye}}var vr=e(52038),Ir=e(90489),fr=vr.nr;function yr(q){var X=q.loading,te=q.search,ne=q.searchValueRef,le=q.runRequest,Ie=q.updateScrollY,ie=te===!1?{}:te,Ee=(0,p.useRef)(null),ge=(0,_n.Z)(),ye=ge.forceUpdate,he=fr(ie,"value");if(he){var Pe;ne.current=(Pe=ie.value)!==null&&Pe!==void 0?Pe:{}}var Re=(0,F.Z)(function(Z,J){var w;ne.current=a()({},Z),he||ye(),(w=ie.onChange)===null||w===void 0||w.call(ie,Z,J)}),Me=(0,F.Z)(function(){var Z=Ke()(Ye()().mark(function J(w){var k;return Ye()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ne.current=a()({},w),ce.next=3,(k=ie.onReset)===null||k===void 0?void 0:k.call(ie,w);case 3:return ce.next=5,le({current:1});case 5:case"end":return ce.stop()}},J)}));return function(J){return Z.apply(this,arguments)}}()),Ce=(0,F.Z)(function(){var Z=Ke()(Ye()().mark(function J(w){var k;return Ye()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.next=2,(k=ie.onSubmit)===null||k===void 0?void 0:k.call(ie,w);case 2:return ce.next=4,le();case 4:case"end":return ce.stop()}},J)}));return function(J){return Z.apply(this,arguments)}}()),me=(0,F.Z)(function(Z){var J;(J=ie.onToggleCollapsed)===null||J===void 0||J.call(ie,Z),Ie(0,!0)}),ee=te?(0,c.jsx)(Ir.default,a()(a()({},te),{},{rootStyle:a()({marginBottom:16},te.rootStyle),ref:Ee,disabled:te.disabled||X,value:ne.current,onChange:Re,onReset:Me,onSubmit:Ce,onToggleCollapsed:me})):null;return{searchNodeHolder:ee,searchRef:Ee}}var An=_.kJ,xr=_.kK;function gr(q,X){return q===s.rowNumber?X:q===s.actions?"":"-"}function Er(q){var X=[];function te(ne){P(ne,function(le){An(le.children)?te(le.children):X.push(le)})}return te(q),X}function Pr(q){var X=q.flattenedColumns,te=q.summaryData,ne=q.summaryText,le=ne===void 0?"\u5408\u8BA1":ne,Ie=q.hasRowNumber,ie=Ie===void 0?!1:Ie,Ee=q.hasRowSelection,ge=Ee===void 0?!1:Ee,ye=[],he=-1;return ge&&(he++,ye.push({index:he,text:ie?"":le})),P(X,function(Pe){var Re=Pe.key,Me=Pe.dataIndex,Ce=An(Me)?Me.join("."):Me,me=String(Re||Ce),ee=te[me];he++,ye.push({index:he,text:xr(ee)?gr(me,le):ee})}),ye}function Tr(q){var X=Pr(q);return(0,c.jsx)(I.Z.Summary,{fixed:"bottom",children:(0,c.jsx)(I.Z.Summary.Row,{children:X.map(function(te){return(0,c.jsx)(I.Z.Summary.Cell,{align:"center",index:te.index,colSpan:te.colSpan,children:te.text},te.index)})})})}function Dr(q){var X=q.table,te=q.finalColumns,ne=q.summaryData,le=(0,p.useMemo)(function(){return Er(te)},[te]),Ie=(0,F.Z)(function(){return Tr({flattenedColumns:le,summaryData:ne,summaryText:X.summaryText,hasRowSelection:!!X.rowSelection,hasRowNumber:X.showRowNumber})}),ie=X.summary?X.summary:$(ne)?void 0:function(){return Ie()};return{finalSummary:ie}}var br=e(42952),Or=e(56140);function jn(q){var X,te=q.title,ne=te===void 0?{}:te,le=q.loading,Ie=q.globalStateRef,ie=q.runRequest,Ee=q.openSettingModal,ge=(0,F.Z)(function(Re){var Me,Ce;le||(Ie.current.isTabChanging=!0,(Me=ne.tabs)===null||Me===void 0||(Ce=Me.onChange)===null||Ce===void 0||Ce.call(Me,Re),setTimeout(function(){return ie({current:1}).finally(function(){return Ie.current.isTabChanging=!1})},0))}),ye={},he=ne.showSetting?(0,c.jsx)(g.Z,{title:"\u5217\u8BBE\u7F6E",children:(0,c.jsx)(U.ZP,{icon:(0,c.jsx)(br.Z,{}),disabled:le,style:{marginLeft:10},onClick:Ee})}):null;(X=ne.tabs)!==null&&X!==void 0&&X.tabBarExtraContent&&((0,p.isValidElement)(ne.tabs.tabBarExtraContent)?ye.right=ne.tabs.tabBarExtraContent:Object.assign(ye,ne.tabs.tabBarExtraContent)),ne.showSetting&&(ye.right=(0,c.jsxs)(c.Fragment,{children:[ye.right,he]}));var Pe=ne.tabs?(0,c.jsx)(Or.Z,a()(a()({},ne.tabs),{},{tabBarExtraContent:ye,onChange:ge})):ne.showSetting?(0,c.jsx)("div",{className:ne.className,style:a()({textAlign:"right",marginBottom:16},ne.style),children:he}):null;return{titleNodeHolder:Pe}}var Cr=v.Z,Sr=_.PO,Rr=function(X,te){var ne=X.className,le=X.style,Ie=X.request,ie=X.requestOnMounted,Ee=ie===void 0?!0:ie,ge=X.header,ye=X.search,he=X.titleTop,Pe=X.title,Re=Pe===void 0?{}:Pe,Me=X.titleBottom,Ce=X.table,me=Ce===void 0?{}:Ce,ee=X.footer,Z=(0,p.useRef)(null),J=(0,p.useRef)(ye===!1?{}:ye.defaultValue||{}),w=(0,p.useRef)({isTabChanging:!1}),k=Ue({table:me,globalStateRef:w}),oe=k.baseColumns,ce=Cn({table:me,baseColumns:oe,globalStateRef:w}),Te=ce.sortColumns,be=ce.sortModalHolder,De=ce.openSettingModal,Le=lr({table:me,sortColumns:Te}),je=Le.finalColumns,We=hr({table:me,rootElemRef:Z}),_e=We.scrollY,Ne=We.updateScrollY,Ae=cr({searchValueRef:J,table:me,request:Ie,updateScrollY:Ne}),Ve=Ae.loading,Ge=Ae.dataSource,$r=Ae.updateDataSource,Kr=Ae.summaryData,Nr=Ae.updateSummaryData,Wr=Ae.finalPagination,pn=Ae.runRequest,Ur=Ae.requestParamsRef,Fr=Ae.requestExtraParamsRef,zr=Ae.updateRequestExtraParams,Ar=yr({loading:Ve,search:ye,searchValueRef:J,runRequest:pn,updateScrollY:Ne}),Hr=Ar.searchNodeHolder,Zr=Ar.searchRef,Vr=jn({title:Re,loading:Ve,globalStateRef:w,runRequest:pn,openSettingModal:De}),Gr=Vr.titleNodeHolder,Yr=Dr({table:me,finalColumns:je,summaryData:Kr}),Jr=Yr.finalSummary;(0,O.Z)(function(){Ee&&pn()});var Bn={loading:Ve},Qr=(0,F.Z)(function(Xr,jr,Br,wr){var Lr;(me.sortMode==="service"||me.sortMode==="service-all")&&(zr({filter:jr,sorter:Br}),pn()),(Lr=me.onChange)===null||Lr===void 0||Lr.call(me,Xr,jr,Br,wr)});return dr({ref:te,rootElemRef:Z,searchRef:Zr,requestParamsRef:Ur,requestExtraParamsRef:Fr,searchValueRef:J,dataSource:Ge,updateDataSource:$r,updateSummaryData:Nr,updateScrollY:Ne,openSettingModal:De,runRequest:pn}),(0,c.jsxs)("div",{ref:Z,className:ne,style:le,children:[ge==null?void 0:ge(Bn),Hr,he==null?void 0:he(Bn),Gr,Me==null?void 0:Me(Bn),(0,c.jsx)(I.Z,a()(a()({tableLayout:"fixed"},me),{},{className:Cr(me.className,t.table),columns:je,dataSource:Ge,loading:a()({spinning:Ve},Sr(me==null?void 0:me.loading)?me.loading:void 0),scroll:a()({scrollToFirstRowOnChange:!0,x:"max-content",y:_e},me==null?void 0:me.scroll),summary:Jr,pagination:Wr,onChange:Qr})),ee==null?void 0:ee(Bn),be]})},Mr=(0,p.forwardRef)(Rr),_r=Mr},88442:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(63917);const a=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\uFF0C\u652F\u6301 SSR(Server-Side Rendering)\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\uFF08\u5EFA\u8BBE\u4E2D\uFF09\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search \u6CA1\u6709\u5F88\u597D\u7684\u652F\u6301 SSR\uFF0C\u5982\u679C\u662F Next.js \u9879\u76EE\uFF0C\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u5E76\u914D\u7F6E ssr \u4E3A\u4E0D\u542F\u7528\uFF0C\u5982\u4E0B\u793A\u4F8B\u3002",paraId:5},{value:`import dynamic from 'next/dynamic'

const FormRender = dynamic(() => import('@schema-render/form-render-react'), {
  ssr: false,
})
`,paraId:6},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:7,tocIndex:2},{value:"itemLayout",paraId:7,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:7,tocIndex:2},{value:"Renderers",paraId:7,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:7,tocIndex:2},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:8,tocIndex:2},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:9,tocIndex:2},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:10,tocIndex:2},{value:"\u3002",paraId:9,tocIndex:2},{value:"\u7B80\u6D01\u6613\u7528",paraId:9,tocIndex:2},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:9,tocIndex:2},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u4E0E\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u4E1A\u52A1\u81EA\u8EAB\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:9,tocIndex:2},{value:"\u8F7B\u91CF\u7EA7",paraId:9,tocIndex:2},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:9,tocIndex:2}]},87351:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(59869);const a=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u52A0\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}]},43504:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(76777);const a=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
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
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}]},12157:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(84894);const a=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}]},14569:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(23382);const a=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}]},49116:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(86131);const a=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}]},44272:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(15208);const a=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}]},19520:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(233);const a=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}]},53671:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(39008);const a=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}]},71905:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(37424);const a=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}]},73148:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(48966);const a=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},12875:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(92436);const a=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}]},15727:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(86685);const a=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}]},59865:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(43315);const a=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}]},63021:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(46715);const a=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}]},727:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(35786);const a=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},71789:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(69708);const a=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}]},49961:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(96687);const a=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},47468:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(85105);const a=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}]},73890:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(2755);const a=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},21979:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(88485);const a=[]},98008:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(97024);const a=[]},15672:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(92311);const a=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}]},3215:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(78593);const a=[]},72624:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(25105);const a=[]},38319:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(35170);const a=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}]},23352:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(12727);const a=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}]},17139:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(53143);const a=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}]},44878:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(65063);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}]},8706:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(30761);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},39263:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(25937);const a=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}]},43811:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(91260);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}]},14590:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(90261);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:6,tocIndex:4},{value:"extra.checkedOptions",paraId:6,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:6,tocIndex:4},{value:"options",paraId:6,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:6,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:7,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"v1.4.0",paraId:8,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:9,tocIndex:5},{value:"extra.selectedOptions",paraId:9,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:9,tocIndex:5},{value:"options",paraId:9,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:9,tocIndex:5},{value:"v1.4.0",paraId:10,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:11,tocIndex:6},{value:"ISOString",paraId:11,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u66F4\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:11,tocIndex:6},{value:"\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:12,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:13,tocIndex:7},{value:"locale",paraId:13,tocIndex:7},{value:" \u7684 ",paraId:13,tocIndex:7},{value:"FormRender.displayDateRange",paraId:13,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:13,tocIndex:7},{value:"renderOptions.headerOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"renderOptions.panelOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse.Panel",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:15,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:16,tocIndex:9},{value:"className",paraId:16,tocIndex:9},{value:" \u548C ",paraId:16,tocIndex:9},{value:"style",paraId:16,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:16,tocIndex:9}]},93076:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(4123);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},24426:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(74624);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},64092:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(83140);const a=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}]},75796:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(34877);const a=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}]},2131:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(45011);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}]},98685:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(6168);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}]},7669:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(88358);const a=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}]},15577:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(73888);const a=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}]},2531:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(73914);const a=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},26875:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(64768);const a=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}]},18335:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(87004);const a=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}]},9034:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(43895);const a=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}]},23652:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(67342);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}]},26138:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(27885);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},51001:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(10122);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},13086:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(84123);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},31626:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(24197);const a=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}]},60031:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(69306);const a=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}]},12952:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(72106);const a=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}]},10198:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(17258);const a=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}]},51184:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(73865);const a=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}]},59418:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(81535);const a=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}]},49329:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(18899);const a=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u5F00\u542F\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u5F00\u542F\u5217\u8BBE\u7F6E\u529F\u80FD\u65F6\uFF0C\u6807\u9898\u680F DOM \u7ED3\u6784\u6709\u53D8\u5316\uFF0C\u4E0D\u5B58\u5728 Tabs \u7EC4\u4EF6 DOM \u7ED3\u6784\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 Antd Tabs \u81EA\u5E26\u7684 ",paraId:3,tocIndex:5},{value:"tabBarExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u5B9E\u73B0\u3002",paraId:3,tocIndex:5}]},78323:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(87922);const a=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u5F69\u8272\u6807\u7B7E\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Tag \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Modal \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}]},66376:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(8497);const a=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}]},95378:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(27490);const a=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}]},39168:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(8906);const a=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}]},9382:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(34451);const a=[]},93283:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(24311);const a=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
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
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}]},92724:function(G,i,e){e.r(i),e.d(i,{texts:function(){return a}});var S=e(63710);const a=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}]},36005:function(G,i){i.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},52551:function(G,i){i.Z=`import { cij } from '@examples/utils/cssinjs'

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
`},29758:function(G,i){i.Z=`import { cij } from '@examples/utils/cssinjs'

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
`},19970:function(G,i){i.Z=`import type { IRenderers, ISchema } from '@schema-render/core-react'
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
`},93635:function(G,i){i.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},3116:function(G,i){i.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},12967:function(G,i){i.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
`},540:function(G,i){i.Z=`import BankSelect from './BankSelect'

export default {
  BankSelect,
}
`},71525:function(G,i){i.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
`},24127:function(G,i){i.Z=`import { cij } from '@examples/utils/cssinjs'

export const builtinRenderers = cij\`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
\`
`},96390:function(G,i){i.Z=`import type { TableProps } from 'antd'

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
`},77538:function(G,i){i.Z=`import dayjs from 'dayjs'

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
`},19150:function(G,i){i.Z=`import type { IOpenComponentParams } from '@schema-render/core-react'
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
`},97395:function(G,i){i.Z=`import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
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
`},5038:function(G,i){i.Z=`import type { IOpenFormItemParams } from '@schema-render/core-react'
import type { FC } from 'react'

const SectionTitle: FC<IOpenFormItemParams<never>> = ({ schema }) => {
  return <div className="section-title">{schema.title}</div>
}

export default {
  formItem: SectionTitle as never,
}
`},29449:function(G,i){i.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},17261:function(G,i){i.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},34569:function(G,i){i.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},90887:function(G,i){i.Z=`function rangeNumber(min: number, max: number, toInt = true) {
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
`},37343:function(G,i){i.Z=`import dayjs from 'dayjs'

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
`},22452:function(G,i){i.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
