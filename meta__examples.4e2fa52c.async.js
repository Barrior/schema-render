"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[768],{40492:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(63917),h={}},42254:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(5574),h=e.n(t),L=e(15009),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(59869),A=e(74072),$=e(48201),_={"examples-core-react-002-quick-start-demo-0":{component:x.memo(x.lazy(N()(P()().mark(function T(){var v,u,s,a,o,n,r,d;return P()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=m.sent,u=v.default,m.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=m.sent,a=s.Input,o=function(f){var j=f.schema,y=f.body;return x.createElement("div",null,x.createElement("h3",null,j.title),x.createElement("div",null,y))},n={InputText:{component:function(f){var j=f.schema,y=f.value,i=f.onChange;return x.createElement(a,I()(I()({},j.renderOptions),{},{value:y,onChange:function(O){return i(O.target.value)}}))}},Textarea:{component:function(f){var j=f.schema,y=f.value,i=f.onChange;return x.createElement(a.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(j.title)},j.renderOptions),{},{value:y,onChange:function(O){return i(O.target.value)}}))}}},r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},d=function(){return x.createElement(u,{itemLayout:o,renderers:n,schema:r})},m.abrupt("return",{default:d});case 13:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:$},renderOpts:{compile:function(){var T=N()(P()().mark(function u(){var s,a=arguments;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-002-quick-start-demo-1":{component:x.memo(x.lazy(N()(P()().mark(function T(){var v,u,s,a,o,n,r,d,l,m;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=f.sent,u=v.default,f.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=f.sent,a=s.Input,f.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return o=f.sent,n=o.useState,r=function(y){var i=y.schema,S=y.body;return x.createElement("div",null,x.createElement("h3",null,i.title),x.createElement("div",null,S))},d={InputText:{component:function(y){var i=y.schema,S=y.value,O=y.onChange;return x.createElement(a,I()(I()({},i.renderOptions),{},{value:S,onChange:function(b){return O(b.target.value)}}))}},Textarea:{component:function(y){var i=y.schema,S=y.value,O=y.onChange;return x.createElement(a.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(i.title)},i.renderOptions),{},{value:S,onChange:function(b){return O(b.target.value)}}))}}},l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},m=function(){var y=n({}),i=h()(y,2),S=i[0],O=i[1];return x.createElement("div",null,x.createElement(u,{itemLayout:r,renderers:d,schema:l,onChange:O}),x.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),x.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(S,null,2)))},f.abrupt("return",{default:m});case 17:case"end":return f.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:$,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var T=N()(P()().mark(function u(){var s,a=arguments;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},28070:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var t=e(5574),h=e.n(t),L=e(15009),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(76777),x=e(74072),B=e(2862),A=e(78469),$={"examples-core-react-003-schema-demo-0":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,u,s,a,o,n,r;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=l.sent,v=T.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=l.sent,s=u.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-1":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,u,s,a,o,n,r;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=l.sent,v=T.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=l.sent,s=u.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-2":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,u,s,a,o,n,r;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=l.sent,v=T.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=l.sent,s=u.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-3":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,u,s,a,o,n,r,d,l;return P()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return T=g.sent,v=T.useState,g.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return u=g.sent,s=u.default,g.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return a=g.sent,o=a.default,g.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return n=g.sent,r=n.default,d={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},l=function(){var j=v({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),y=h()(j,2),i=y[0],S=y[1];return p.createElement(s,{value:i,schema:d,onChange:S,itemLayout:o,renderers:r})},g.abrupt("return",{default:l});case 19:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,react:R||(R=e.t(p,2)),"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-4":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,u,s,a,o,n,r;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=l.sent,v=T.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=l.sent,s=u.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-5":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,u,s,a,o,n,r;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=l.sent,v=T.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=l.sent,s=u.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},58970:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(84894),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-100-layout-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return P.createElement($,{layout:"normal",schema:s,itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-1":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},a=function(){return P.createElement($,{layout:"normal",schema:s,itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-2":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return P.createElement($,{schema:s,layout:"autoFill",itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-3":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return P.createElement($,{schema:s,layout:"autoFit",itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-4":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return P.createElement($,{schema:s,layout:"autoFill",layoutMinMax:[230,230],itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},61985:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return T}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(23382),I=e(74072),p=e(69581),N=e(48201),x=e(93967),B=e.n(x),A=e(29298),$=e(2862),_=e(59868),T={"examples-core-react-101-item-layout-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return u=O.sent,s=u.default,O.next=6,Promise.resolve().then(e.bind(e,69581));case 6:return a=O.sent,o=a.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=O.sent,r=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return d=O.sent,l=d.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=O.sent,g=m.default,O.next=22,Promise.resolve().then(e.bind(e,29298));case 22:return f=O.sent,j=function(b){var D=b.body,M=b.schema,E=b.validator,K=b.required,W=b.prefixClassNames;return P.createElement("div",{className:W("item-layout-vertical")},P.createElement("div",{className:l(W("item-header"),f.header)},K&&P.createElement("span",{className:l(W("item-mark"),f.mark)},"*"),P.createElement("span",{className:l(W("item-title"),f.title)},M.title),!!M.titleDescription&&P.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},P.createElement(o,{className:l(W("item-title-tooltip"),f.titleTooltip)}))),P.createElement("div",{className:W("item-body")},D),P.createElement("div",{className:l(W("item-footer"),f.footer)},E.status==="error"&&!!E.message&&P.createElement("div",{className:l(W("item-error-msg"),f.errorMsg)},E.message),!!M.description&&P.createElement("div",{className:l(W("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return P.createElement(s,{schema:y,itemLayout:j,renderers:g})},O.abrupt("return",{default:i});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(29758).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Vertical/styles.ts":A,"./renderers/common.tsx":$,"@schema-render/core-react":I,"@ant-design/icons":p,antd:N,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var v=L()(t()().mark(function s(){var a,o=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-101-item-layout-demo-1":{component:P.memo(P.lazy(L()(t()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return u=O.sent,s=u.default,O.next=6,Promise.resolve().then(e.bind(e,69581));case 6:return a=O.sent,o=a.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=O.sent,r=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return d=O.sent,l=d.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=O.sent,g=m.default,O.next=22,Promise.resolve().then(e.bind(e,59868));case 22:return f=O.sent,j=function(b){var D=b.body,M=b.schema,E=b.validator,K=b.required,W=b.prefixClassNames;return P.createElement("div",{className:l(W("item-layout-horizontal"),f.horizontal)},P.createElement("div",{className:l(W("item-main"),f.main)},P.createElement("div",{className:l(W("item-header"),f.header)},K&&P.createElement("span",{className:l(W("item-mark"),f.mark)},"*"),P.createElement("span",{className:l(W("item-title"),f.title)},M.title),!!M.titleDescription&&P.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},P.createElement(o,{className:l(W("item-title-tooltip"),f.titleTooltip)}))),P.createElement("div",{className:l(W("item-body"),f.body)},D)),P.createElement("div",{className:l(W("item-footer"),f.footer)},E.status==="error"&&!!E.message&&P.createElement("div",{className:l(W("item-error-msg"),f.errorMsg)},E.message),!!M.description&&P.createElement("div",{className:l(W("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return P.createElement(s,{schema:y,itemLayout:j,renderers:g})},O.abrupt("return",{default:i});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(52551).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal/styles.ts":_,"./renderers/common.tsx":$,"@schema-render/core-react":I,"@ant-design/icons":p,antd:N,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var v=L()(t()().mark(function s(){var a,o=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},83222:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(86131),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-102-prefix-cls-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return P.createElement($,{schema:s,itemLayout:T,renderers:u,prefixCls:"my-cls"})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},81235:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return u}});var t=e(97857),h=e.n(t),L=e(15009),P=e.n(L),H=e(5574),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(15208),A=e(74072),$=e(41989),_=e(78469),T=e(2862),v=e(48201),u={"examples-core-react-200-change-event-demo-0":{component:x.memo(x.lazy(N()(P()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=O.sent,o=a.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return d=O.sent,l=d.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=O.sent,g=m.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var b=o({}),D=I()(b,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,value:M,onChange:function(W){return E(W)}}),x.createElement(l,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=N()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-1":{component:x.memo(x.lazy(N()(P()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=O.sent,o=a.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return d=O.sent,l=d.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=O.sent,g=m.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var b=o({}),D=I()(b,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,onChange:function(W,V){return E(V)}}),x.createElement(l,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=N()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-2":{component:x.memo(x.lazy(N()(P()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=O.sent,o=a.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return d=O.sent,l=d.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=O.sent,g=m.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var b=o({}),D=I()(b,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,onItemChange:function(W){return E(W)}}),x.createElement(l,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=N()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-3":{component:x.memo(x.lazy(N()(P()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b;return P()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=M.sent,o=a.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=M.sent,r=n.Input,M.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return d=M.sent,l=d.default,M.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return m=M.sent,g=m.default,M.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return f=M.sent,j=f.default,M.next=22,Promise.resolve().then(e.bind(e,78469));case 22:return y=M.sent,i=y.default,S={component:function(K){var W,V=K.schema,U=K.value,z=K.disabled,Z=K.onChange;return x.createElement(r,h()(h()({placeholder:"\u8BF7\u8F93\u5165".concat((W=V.title)!==null&&W!==void 0?W:"")},V.renderOptions),{},{value:U,disabled:z,onChange:function(X){Z(X.target.value,{extra:Math.random()})}}))}},O=h()({InputTextWithExtra:S},j),C={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},b=function(){var K=o({}),W=I()(K,2),V=W[0],U=W[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(l,{schema:C,itemLayout:i,renderers:O,onItemChange:function(Z){return U(Z)}}),x.createElement(g,{value:V}))},M.abrupt("return",{default:b});case 29:case"end":return M.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),antd:v,"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=N()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},58297:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(233),x=e(74072),B=e(41989),A=e(78469),$=e(2862),_=e(48201),T={"examples-core-react-210-relation-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return d=i.sent,l=d.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var O=s({}),C=P()(O,2),b=C[0],D=C[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:l,value:b,onChange:function(E,K){(K.sPath==="width"||K.sPath==="height")&&(E.width=K.value,E.height=K.value),D(E)}}),p.createElement(r,{value:b}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-210-relation-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return d=i.sent,l=d.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var O=s({}),C=P()(O,2),b=C[0],D=C[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:l,watch:{width:function(E){E.height=E.width},height:function(E){E.width=E.height}},value:b,onChange:D}),p.createElement(r,{value:b}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-210-relation-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=O.sent,s=u.useState,O.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=O.sent,o=a.Button,O.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return n=O.sent,r=n.default,O.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return d=O.sent,l=d.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=O.sent,g=m.default,f={BankSelect:{component:function(b){var D=b.value,M=b.sPath,E=b.onChange,K=function(){var U=String(Math.random()).slice(2,6),z={bank_id:"id_".concat(U),bank_account:"111222333".concat(U),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(U),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(U,"\u652F\u884C")};E(z[M],{extra:z})},W={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return p.createElement("div",{style:{display:"flex"}},p.createElement("div",{style:W},D),p.createElement(o,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},j={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},y=function(b,D){b.bank_id=D.extra.bank_id,b.bank_account=D.extra.bank_account,b.bank_name=D.extra.bank_name,b.bank_branch_name=D.extra.bank_branch_name},i=function(){var b=s({}),D=P()(b,2),M=D[0],E=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:j,itemLayout:g,renderers:f,watch:{bank_account:y,bank_name:y,bank_branch_name:y},value:M,onChange:E}),p.createElement(l,{value:M}))},O.abrupt("return",{default:i});case 25:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":A,react:R||(R=e.t(p,2)),antd:_,"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},33632:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(5574),h=e.n(t),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(39008),A=e(48201),$=e(74072),_=e(78469),T={"examples-core-react-220-renderer-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function v(){var u,s,a,o,n,r,d,l,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return u=f.sent,s=u.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=f.sent,o=a.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,d={MyRate:{component:function(y){var i=y.disabled,S=y.value,O=y.onChange;return x.createElement(s,{disabled:i,value:S,onChange:O})}}},l={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(o,{schema:l,itemLayout:r,renderers:d})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=N()(I()().mark(function s(){var a,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-220-renderer-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function v(){var u,s,a,o,n,r,d,l,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return u=f.sent,s=u.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=f.sent,o=a.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,d={MyRate:{formItem:function(y){var i=y.schema,S=y.disabled,O=y.value,C=y.onChange;return x.createElement("div",null,x.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",i.title,"\u3011"),x.createElement(s,{disabled:S,value:O,onChange:C}))}}},l={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(o,{schema:l,itemLayout:r,renderers:d})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=N()(I()().mark(function s(){var a,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-220-renderer-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return d=i.sent,l=d.Button,m=d.Input,g={InputText:{component:function(O){var C,b=O.schema,D=O.value,M=O.disabled,E=O.readonly,K=O.onChange;return E?x.createElement("div",null,D):x.createElement(m,P()(P()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((C=b.title)!==null&&C!==void 0?C:"")},b.renderOptions),{},{value:D!=null?D:"",disabled:M,onChange:function(V){return K(V.target.value)}}))}},TextArea:{component:function(O){var C,b=O.schema,D=O.value,M=O.disabled,E=O.onChange;return x.createElement(m.TextArea,P()(P()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((C=b.title)!==null&&C!==void 0?C:"")},b.renderOptions),{},{value:D!=null?D:"",onChange:function(W){return E(W.target.value)},disabled:M}))},readonlyComponent:function(O){var C=O.value;return x.createElement("div",null,C)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var O=s(!1),C=h()(O,2),b=C[0],D=C[1],M=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),E=h()(M,2),K=E[0],W=E[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:K,onChange:W,readonly:b}),x.createElement(l,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return D(!b)}},b?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":_,react:R||(R=e.t(x,2)),"@schema-render/core-react":$,antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=N()(I()().mark(function s(){var a,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},95902:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var t=e(15009),h=e.n(t),L=e(97857),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(37424),x=e(48201),B=e(74072),A=e(33517),$=e(78469),_=e(40644),T=e(47621),v={"examples-core-react-221-renderer-object-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,a=s.Input,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=C.sent,n=o.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=C.sent,d=r.default,C.next=14,Promise.resolve().then(e.bind(e,47621));case 14:return l=C.sent,m=l.default,C.next=18,Promise.resolve().then(e.bind(e,40644));case 18:return g=C.sent,f=g.default,C.next=22,Promise.resolve().then(e.bind(e,33517));case 22:return j=C.sent,y=j.default,i={Object:y,ObjectCollapse:f,InputText:{component:function(D){var M,E=D.schema,K=D.value,W=D.disabled,V=D.onChange;return p.createElement(a,P()(P()({placeholder:"\u8BF7\u8F93\u5165".concat((M=E.title)!==null&&M!==void 0?M:"")},E.renderOptions),{},{value:K,disabled:W,onChange:function(z){return V(z.target.value)}}))}}},S=function(){return p.createElement(n,{schema:m,itemLayout:d,renderers:i})},C.abrupt("return",{default:S});case 27:case"end":return C.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z}},entry:"index.jsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":$,"./renderers/object/ObjectCollapse.tsx":_,"./schemas/object.ts":T,antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":T},renderOpts:{compile:function(){var u=I()(h()().mark(function a(){var o,n=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-221-renderer-object-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D,M;return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=K.sent,a=s.Input,K.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return o=K.sent,n=o.useRef,K.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return r=K.sent,d=r.default,K.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=K.sent,m=l.Button,g=l.message,K.next=19,Promise.resolve().then(e.bind(e,78469));case 19:return f=K.sent,j=f.default,K.next=23,Promise.resolve().then(e.bind(e,47621));case 23:return y=K.sent,i=y.default,K.next=27,Promise.resolve().then(e.bind(e,40644));case 27:return S=K.sent,O=S.default,K.next=31,Promise.resolve().then(e.bind(e,33517));case 31:return C=K.sent,b=C.default,D={Object:b,ObjectCollapse:O,InputText:{component:function(V){var U,z=V.schema,Z=V.value,w=V.disabled,X=V.onChange;return p.createElement(a,P()(P()({placeholder:"\u8BF7\u8F93\u5165".concat((U=z.title)!==null&&U!==void 0?U:"")},z.renderOptions),{},{value:Z,disabled:w,onChange:function(te){return X(te.target.value)}}))}}},M=function(){var V=n(null),U=function(){var z=I()(h()().mark(function Z(){var w,X,se;return h()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,(w=V.current)===null||w===void 0?void 0:w.validate();case 2:X=ie.sent,se=X.hasError,se||g.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return ie.stop()}},Z)}));return function(){return z.apply(this,arguments)}}();return p.createElement("div",null,p.createElement(d,{ref:V,schema:i,itemLayout:j,renderers:D}),p.createElement(m,{type:"primary",onClick:U,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:M});case 36:case"end":return K.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":T,"./renderers/object/ObjectCollapse.tsx":_,antd:x,react:R||(R=e.t(p,2)),"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":T,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":_},renderOpts:{compile:function(){var u=I()(h()().mark(function a(){var o,n=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}}}},93609:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(48966),h={}},90239:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var t=e(5574),h=e.n(t),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(92436),A=e(74072),$=e(2862),_=e(78469),T=e(48201),v={"examples-core-react-223-validator-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function u(){var s,a,o,n,r,d,l,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=f.sent,a=s.default,f.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=f.sent,n=o.default,f.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=f.sent,d=r.default,l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},m=function(){return x.createElement(a,{schema:l,itemLayout:n,renderers:d})},f.abrupt("return",{default:m});case 15:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":_,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var u=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function u(){var s,a,o,n,r,d,l,m,g,f;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=y.sent,a=s.default,y.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=y.sent,n=o.default,y.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=y.sent,d=r.default,l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},m=function(){var i=N()(I()().mark(function S(O){return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",new Promise(function(D){setTimeout(function(){return D({ok:!1})},200)}));case 1:case"end":return b.stop()}},S)}));return function(O){return i.apply(this,arguments)}}(),g={detectSensitiveWord:function(){var i=N()(I()().mark(function O(C){var b,D;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return b=C.value,E.next=3,m(b);case 3:if(D=E.sent,D.ok){E.next=6;break}return E.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return E.stop()}},O)}));function S(O){return i.apply(this,arguments)}return S}()},f=function(){return x.createElement(a,{schema:l,itemLayout:n,renderers:d,validators:g})},y.abrupt("return",{default:f});case 17:case"end":return y.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":_,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var u=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y;return I()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=S.sent,a=s.Rate,S.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=S.sent,n=o.default,S.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=S.sent,d=r.default,S.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=S.sent,m=l.default,g={component:function(C){var b=C.schema,D=C.value,M=C.disabled,E=C.onChange;return x.createElement(a,P()(P()({},b.renderOptions),{},{value:D,disabled:M,onChange:function(W){return E(W)}}))},validator:function(C){var b=C.value;return b===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:b<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},j=P()(P()({},m),{},{Rate:g}),y=function(){return x.createElement(n,{schema:f,itemLayout:d,renderers:j})},S.abrupt("return",{default:y});case 21:case"end":return S.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":_,antd:T,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var u=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-3":{component:x.memo(x.lazy(N()(I()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=C.sent,a=s.useState,o=s.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return n=C.sent,r=n.Button,d=n.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return l=C.sent,m=l.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return g=C.sent,f=g.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return j=C.sent,y=j.default,i={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},S=function(){var D=a({}),M=h()(D,2),E=M[0],K=M[1],W=o(null);function V(){return U.apply(this,arguments)}function U(){return U=N()(I()().mark(function z(){var Z,w,X;return I()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,W.current.validate();case 2:if(Z=te.sent,w=Z.hasError,X=Z.errorList,console.log("[validate] hasError: ",w),console.log("[validate] errorList: ",X),!w){te.next=9;break}return te.abrupt("return",d.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:d.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return te.stop()}},z)})),U.apply(this,arguments)}return x.createElement("div",null,x.createElement(m,{ref:W,schema:i,value:E,onChange:K,itemLayout:y,renderers:f}),x.createElement(r,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:V},"\u63D0\u4EA4"))},C.abrupt("return",{default:S});case 25:case"end":return C.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":$,react:R||(R=e.t(x,2)),antd:T,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var u=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}}}},61022:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(86685),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-230-global-status-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},a=function(){return P.createElement($,{disabled:!0,schema:s,itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},61650:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return u}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(43315),A=e(48201),$=e(74072),_=e(33517),T=e(2862),v=e(78469),u={"examples-core-react-250-scroll-demo-0":{component:x.memo(x.lazy(N()(h()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=E.sent,o=a.useState,n=a.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,d=r.Button,l=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return S=E.sent,O=S.default,C=I()(I()({},j),{},{Object:O}),b={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},D=function(){var W=o({}),V=P()(W,2),U=V[0],z=V[1],Z=n(null);return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:Z,schema:b,value:U,onChange:z,itemLayout:i,renderers:C}),x.createElement(l,{direction:"vertical"},x.createElement(d,{onClick:function(){var X;return(X=Z.current)===null||X===void 0?void 0:X.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(d,{onClick:function(){var X;(X=Z.current)===null||X===void 0||X.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(d,{onClick:function(){var X;(X=Z.current)===null||X===void 0||X.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},E.abrupt("return",{default:D});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":_,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:R||(R=e.t(x,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=N()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-250-scroll-demo-1":{component:x.memo(x.lazy(N()(h()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=E.sent,o=a.useState,n=a.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,d=r.Button,l=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return S=E.sent,O=S.default,C=I()(I()({},j),{},{Object:O}),b={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},D=function(){var W=o({}),V=P()(W,2),U=V[0],z=V[1],Z=n(null),w=n(null);return x.createElement("div",{ref:w,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:b,value:U,onChange:z,itemLayout:i,renderers:C}),x.createElement("div",{style:{position:"sticky",top:0}},x.createElement(l,{direction:"vertical"},x.createElement(d,{onClick:function(){var se;(se=Z.current)===null||se===void 0||se.scrollTo("object_basic",{positionedElement:w.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(d,{onClick:function(){var se;(se=Z.current)===null||se===void 0||se.scrollTo(["object_spec","title"],{positionedElement:w.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(d,{onClick:function(){var se;(se=Z.current)===null||se===void 0||se.scrollTo("object_other.content",{positionedElement:w.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:D});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":_,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:R||(R=e.t(x,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=N()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-250-scroll-demo-2":{component:x.memo(x.lazy(N()(h()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=E.sent,o=a.useState,n=a.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,d=r.Button,l=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return S=E.sent,O=S.default,C=I()(I()({},j),{},{Object:O}),b={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},D=function(){var W=o({}),V=P()(W,2),U=V[0],z=V[1],Z=n(null),w=function(se){var te,ie,xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(te=Z.current)===null||te===void 0||te.scrollTo(se,{positionedElement:window,gap:-76+xe,behavior:"instant"});var he=(ie=Z.current)===null||ie===void 0||(ie=ie.findItem(se))===null||ie===void 0?void 0:ie.getRootElement();he==null||he.classList.add("focus-out"),setTimeout(function(){he==null||he.classList.remove("focus-out")},1e3)};return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:b,value:U,onChange:z,itemLayout:i,renderers:C}),x.createElement("div",null,x.createElement(l,{direction:"vertical"},x.createElement(d,{onClick:function(){return w("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(d,{onClick:function(){return w(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(d,{onClick:function(){return w("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:D});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":_,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:R||(R=e.t(x,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=N()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},49669:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(46715),x=e(48201),B=e(74072),A=e(78469),$=e(2862),_={"examples-core-react-280-open-api-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=S.sent,u=v.useState,s=v.useRef,S.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return a=S.sent,o=a.Button,n=a.message,S.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=S.sent,d=r.default,S.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return l=S.sent,m=l.default,S.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=S.sent,f=g.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var C=u({}),b=P()(C,2),D=b[0],M=b[1],E=s(null);function K(){return W.apply(this,arguments)}function W(){return W=I()(h()().mark(function V(){var U,z,Z;return h()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,E.current.validate();case 2:if(U=X.sent,z=U.hasError,Z=U.errorList,console.log("[validate] hasError: ",z),console.log("[validate] errorList: ",Z),!z){X.next=9;break}return X.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return X.stop()}},V)})),W.apply(this,arguments)}return p.createElement("div",null,p.createElement(d,{ref:E,schema:j,value:D,onChange:M,itemLayout:f,renderers:m}),p.createElement(o,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},S.abrupt("return",{default:y});case 25:case"end":return S.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=S.sent,u=v.useState,s=v.useRef,S.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return a=S.sent,o=a.Button,n=a.message,S.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=S.sent,d=r.default,S.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return l=S.sent,m=l.default,S.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=S.sent,f=g.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var C=u({}),b=P()(C,2),D=b[0],M=b[1],E=s(null);function K(){return W.apply(this,arguments)}function W(){return W=I()(h()().mark(function U(){var z,Z;return h()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,E.current.validate();case 2:if(z=X.sent,Z=z.hasError,!Z){X.next=6;break}return X.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return X.stop()}},U)})),W.apply(this,arguments)}var V=function(){E.current.resetError()};return p.createElement("div",null,p.createElement(d,{ref:E,schema:j,value:D,onChange:M,itemLayout:f,renderers:m}),p.createElement(o,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),p.createElement(o,{onClick:V},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},S.abrupt("return",{default:y});case 25:case"end":return S.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,u=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,a=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return l=y.sent,m=l.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var S=u(null),O=function(){S.current.resetValue()};return p.createElement("div",null,p.createElement(n,{ref:S,schema:g,itemLayout:m,renderers:d}),p.createElement(a,{style:{margin:"24px 15px 0 115px"},onClick:O},"\u91CD\u7F6E"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,u=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,a=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return l=y.sent,m=l.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var S=u(null);return p.createElement("div",null,p.createElement(n,{ref:S,schema:g,itemLayout:m,renderers:d}),p.createElement(a,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var C,b=(C=S.current)===null||C===void 0?void 0:C.getRootElement();console.log("rootElement:",b)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,u=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,a=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return l=y.sent,m=l.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var S=u(null);return p.createElement("div",null,p.createElement(n,{ref:S,schema:g,itemLayout:m,renderers:d}),p.createElement(a,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var C,b=(C=S.current)===null||C===void 0||(C=C.findItem("title"))===null||C===void 0?void 0:C.getRootElement();console.log("formItemRootElement:",b)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},68642:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(35786),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-300-default-value-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function B(){var A,$,_,T,v,u,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},a=function(){return P.createElement($,{schema:s,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:T,renderers:u})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var _,T=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(_=u.sent).default.apply(_,T));case 3:case"end":return u.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},95206:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return A}});var R=e(15009),t=e.n(R),h=e(97857),L=e.n(h),P=e(99289),H=e.n(P),I=e(67294),p=e(69708),N=e(74072),x=e(48201),B=e(78469),A={"examples-core-react-600-catch-error-tips-demo-0":{component:I.memo(I.lazy(H()(t()().mark(function $(){var _,T,v,u,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return _=l.sent,T=_.default,l.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=l.sent,u=v.Input,l.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=l.sent,a=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,S=g.onChange;return I.createElement(u.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(C){return S(C.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{schema:n,itemLayout:a,renderers:o})},l.abrupt("return",{default:r});case 16:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=H()(t()().mark(function T(){var v,u=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}},"examples-core-react-600-catch-error-tips-demo-1":{component:I.memo(I.lazy(H()(t()().mark(function $(){var _,T,v,u,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return _=l.sent,T=_.default,l.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=l.sent,u=v.Input,l.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=l.sent,a=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,S=g.onChange;return I.createElement(u.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(C){return S(C.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{catchErrorTips:"silent",schema:n,itemLayout:a,renderers:o})},l.abrupt("return",{default:r});case 16:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=H()(t()().mark(function T(){var v,u=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}},"examples-core-react-600-catch-error-tips-demo-2":{component:I.memo(I.lazy(H()(t()().mark(function $(){var _,T,v,u,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return _=l.sent,T=_.default,l.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=l.sent,u=v.Input,l.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=l.sent,a=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,S=g.onChange;return I.createElement(u.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(C){return S(C.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{catchErrorTips:function(){return I.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:a,renderers:o})},l.abrupt("return",{default:r});case 16:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=H()(t()().mark(function T(){var v,u=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}}}},35963:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return B}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(96687),I=e(74072),p=e(78484),N=e(2862),x=e(78469),B={"examples-core-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function A(){var $,_,T,v,u,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return $=l.sent,_=$.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return T=l.sent,v=T.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return u=l.sent,s=u.default,l.next=14,Promise.resolve().then(e.bind(e,78484));case 14:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},r=function(){return P.createElement(_,{style:{maxWidth:600},schema:n,itemLayout:v,renderers:s,locale:o})},l.abrupt("return",{default:r});case 19:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":N,"./item-layout/Horizontal.tsx":x,"@schema-render/core-react":I,"@schema-render/core-react/dist/esm/locale/en_US":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":x},renderOpts:{compile:function(){var A=L()(t()().mark(function _(){var T,v=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function $(){return A.apply(this,arguments)}return $}()}}}},82440:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(85105),h={}},95491:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(19632),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(2755),A=e(74072),$={"examples-core-react-890-benchmark-demo-0":{component:x.memo(x.lazy(N()(h()().mark(function _(){var T,v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=y.sent,s=u.useState,a=u.Profiler,o=function(S){var O=S.schema,C=S.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,O.title),x.createElement("div",null,C))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(S){var O=S.schema,C=S.value,b=S.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:C||"",onChange:function(M){return b(M.target.value)}}))}}},d=600,l={renderType:"Root",properties:{}},m=I()(Array(d).keys()),m.forEach(function(i){var S="field_".concat(i);l.properties[S]={title:S,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var S=s({}),O=P()(S,2),C=O[0],b=O[1],D=s(""),M=P()(D,2),E=M[0],K=M[1],W=function(U,z){var Z=parseInt(z.sPath.slice(6)),w=Z-1,X=Z+1,se="field_".concat(X>=d?w:X);U[se]=z.value,b(U)};return x.createElement(a,{id:"sr",onRender:function(U,z,Z,w,X,se){var te="\u64CD\u4F5C: ".concat(z,", \u6E32\u67D3\u8017\u65F6: ").concat(Z," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),ie=document.getElementById("profile");ie&&(ie.innerHTML=te),console.log("===> ".concat(te)),console.log("phase: ".concat(z,", actualDuration: ").concat(Z,", baseDuration: ").concat(w,", startTime: ").concat(X,", commitTime: ").concat(se))}},x.createElement("h3",{id:"profile"},E),x.createElement(v,{layout:"autoFill",layoutMinMax:g,schema:l,itemLayout:o,renderers:r,value:C,onChange:W}))},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=N()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-890-benchmark-demo-1":{component:x.memo(x.lazy(N()(h()().mark(function _(){var T,v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=y.sent,s=u.useState,a=u.Profiler,o=function(S){var O=S.schema,C=S.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,O.title),x.createElement("div",null,C))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(S){var O=S.schema,C=S.value,b=S.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:C||"",onChange:function(M){return b(M.target.value)}}))}}},d=1800,l={renderType:"Root",properties:{}},m=I()(Array(d).keys()),m.forEach(function(i){var S="field_".concat(i);l.properties[S]={title:S,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var S=s({}),O=P()(S,2),C=O[0],b=O[1],D=function(E,K){var W=parseInt(K.sPath.slice(6)),V=W-1,U=W+1,z="field_".concat(U>=d?V:U);E[z]=K.value,b(E)};return x.createElement(v,{layout:"autoFill",layoutMinMax:g,schema:l,itemLayout:o,renderers:r,value:C,onChange:D})},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=N()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},50142:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(88485),h={}},67941:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(97024),h={}},50094:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(92311),h={}},79584:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(78593),h={}},75916:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(25105),x=e(74072),B=e(48201),A=e(2862),$=e(78469),_={"examples-core-react-950-async-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=i.sent,u=v.default,i.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=i.sent,a=s.default,i.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=i.sent,d=r.useState,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return l=i.sent,m=l.Button,g=l.Space,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},j=function(){var O=d({}),C=P()(O,2),b=C[0],D=C[1],M=function(){setTimeout(function(){D({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},E=function(){return D({})};return p.createElement(p.Fragment,null,p.createElement(u,{style:{marginBottom:15},schema:f,value:b,onChange:function(W){return D(W)},itemLayout:a,renderers:n}),p.createElement(g,null,p.createElement(m,{type:"primary",onClick:M},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),p.createElement(m,{onClick:E},"\u91CD\u7F6E")))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":x,react:R||(R=e.t(p,2)),antd:B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},58177:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(35170),x=e(41989),B=e(74072),A=e(2862),$=e(78469),_={"examples-core-react-951-controllable-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var S=m({}),O=P()(S,2),C=O[0],b=O[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:d,value:C,onChange:function(M){return b(M)}}),p.createElement(u,{value:C}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var S=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=P()(S,1),C=O[0];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:d,value:C}),p.createElement(u,{value:C}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var S=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=P()(S,1),C=O[0],b=m(1),D=P()(b,2),M=D[0],E=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:d,value:C,onChange:function(){E(function(W){return W+1})}}),p.createElement(u,{value:C}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=m.sent,u=v.default,m.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},d=function(){return p.createElement(u,{schema:r,itemLayout:a,renderers:n})},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var S=m({}),O=P()(S,2),C=O[0],b=O[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:d,onChange:function(M){return b(M)}}),p.createElement(u,{value:C}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},30266:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(12727),x=e(41989),B=e(74072),A=e(48201),$=e(78469),_={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=S.sent,u=v.default,S.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=S.sent,a=s.default,S.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=S.sent,n=o.default,S.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=S.sent,d=r.useState,l=r.useEffect,S.next=19,Promise.resolve().then(e.bind(e,48201));case 19:return m=S.sent,g=m.Input,f={InputOrg:{component:function(C){var b,D=C.schema,M=C.value,E=C.rootValue,K=C.onChange;return console.log("==== InputOrg ===="),console.log("value:",M),console.log("rootValue:",E),l(function(){K("\u673A\u6784 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((b=D.title)!==null&&b!==void 0?b:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}},InputSupplier:{component:function(C){var b,D=C.schema,M=C.value,E=C.rootValue,K=C.onChange;return console.log("==== InputSupplier ===="),console.log("value:",M),console.log("rootValue:",E),l(function(){K("\u4F9B\u5E94\u5546 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((b=D.title)!==null&&b!==void 0?b:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}},InputBill:{component:function(C){var b,D=C.schema,M=C.value,E=C.rootValue,K=C.onChange;return console.log("==== InputBill ===="),console.log("value:",M),console.log("rootValue:",E),l(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((b=D.title)!==null&&b!==void 0?b:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}}},j={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},y=function(){var C=d({}),b=P()(C,2),D=b[0],M=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:j,itemLayout:n,renderers:f,value:D,onChange:function(K,W){console.log("***** updateBy ".concat(W.sPath," *****")),console.log("value:",K),console.log("e:",W),M(K)}}),p.createElement(u,{value:D}))},S.abrupt("return",{default:y});case 25:case"end":return S.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:R||(R=e.t(p,2)),antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},23450:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(53143),A=e(74072),$=e(48201),_=e(78469),T={"examples-core-react-953-disabled-component-demo-0":{component:x.memo(x.lazy(N()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return d=i.sent,l=d.Button,m=d.Input,g={InputText:{component:function(O){var C,b=O.schema,D=O.value,M=O.disabled,E=O.readonly,K=O.onChange;return x.createElement(m,I()(I()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((C=b.title)!==null&&C!==void 0?C:"")},b.renderOptions),{},{value:D!=null?D:"",disabled:M,onChange:function(V){return K(V.target.value)}}))},readonlyComponent:function(O){var C=O.value;return x.createElement(x.Fragment,null,C)},disabledComponent:function(O){var C=O.value;return x.createElement(x.Fragment,null,"Disabled: ",C)}},TextArea:{component:function(O){var C,b=O.schema,D=O.value,M=O.disabled,E=O.onChange;return x.createElement(m.TextArea,I()(I()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((C=b.title)!==null&&C!==void 0?C:"")},b.renderOptions),{},{value:D!=null?D:"",onChange:function(W){return E(W.target.value)},disabled:M}))},readonlyComponent:function(O){var C=O.value;return x.createElement("div",null,C)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var O=s(!1),C=P()(O,2),b=C[0],D=C[1],M=s(!1),E=P()(M,2),K=E[0],W=E[1],V=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),U=P()(V,2),z=U[0],Z=U[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:z,onChange:Z,readonly:b,disabled:K}),x.createElement(l,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return W(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),x.createElement(l,{style:{margin:"20px 0 0 115px"},onClick:function(){return D(!b)}},b?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":_,react:R||(R=e.t(x,2)),"@schema-render/core-react":A,antd:$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=N()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},17571:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(65063),x=e(41989),B=e(48201),A=e(74311),$={"examples-form-render-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function _(){var T,v,u,s,a,o,n,r,d,l;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return T=g.sent,v=T.default,g.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=g.sent,s=u.useState,g.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return a=g.sent,o=a.message,g.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return n=g.sent,r=n.default,d={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},l=function(){var j=s({}),y=P()(j,2),i=y[0],S=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:d,value:i,onChange:S,onSubmit:function(){o.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(v,{value:i}))},g.abrupt("return",{default:l});case 19:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:R||(R=e.t(p,2)),antd:B,"@schema-render/form-render-react":A},renderOpts:{compile:function(){var _=I()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},8266:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(30761),x=e(41989),B=e(74311),A={"examples-form-render-react-100-item-layout-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function $(){var _,T,v,u,s,a,o,n;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=d.sent,T=_.useState,d.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=d.sent,u=v.default,d.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=d.sent,a=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{itemLayout:"vertical",schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},d.abrupt("return",{default:n});case 15:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}},"examples-form-render-react-100-item-layout-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function $(){var _,T,v,u,s,a,o,n;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=d.sent,T=_.useState,d.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=d.sent,u=v.default,d.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=d.sent,a=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{itemLayout:"horizontal",schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},d.abrupt("return",{default:n});case 15:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}}}},86799:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(25937),x=e(41989),B=e(74311),A=e(69581),$=e(48201),_={"examples-form-render-react-200-label-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:"max-content",schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,u=v.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,a=s.default,i.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,69581));case 14:return r=i.sent,d=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return l=i.sent,m=l.Popover,g={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var C=O.schema,b=O.required,D=O.prefixClassNames;return p.createElement("div",null,C.title,!!C.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:C.titleDescription},p.createElement(d,{className:D("item-title-tooltip"),style:{marginLeft:4}})),!b&&" (\u53EF\u9009)")},j=function(){var O=u({}),C=P()(O,2),b=C[0],D=C[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelRender:f,schema:g,value:b,onChange:D}),p.createElement(a,{value:b}))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B,"@ant-design/icons":A,antd:$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},41393:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(91260),x=e(48201),B=e(41989),A=e(38959),$=e(74311),_=e(69581),T={"examples-form-render-react-300-actions-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=S.sent,s=u.useState,a=u.useRef,S.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=S.sent,n=o.message,S.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=S.sent,d=r.default,S.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return l=S.sent,m=l.sleep,S.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return g=S.sent,f=g.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var C=s({}),b=P()(C,2),D=b[0],M=b[1],E=a(null),K=function(){var W=I()(h()().mark(function V(){var U,z;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,E.current.validate();case 2:if(U=w.sent,z=U.hasError,!z){w.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),w.abrupt("return");case 7:return w.next=9,m();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return w.stop()}},V)}));return function(){return W.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{ref:E,schema:j,value:D,onChange:M,onSubmit:K}),p.createElement(d,{value:D}))},S.abrupt("return",{default:y});case 24:case"end":return S.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@examples/utils":A,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g;return h()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=j.sent,s=u.useState,j.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=j.sent,o=a.message,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return d=j.sent,l=d.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),S=P()(i,2),O=S[0],C=S[1],b=function(){o.success("\u91CD\u7F6E\u5B8C\u6210")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(l,{schema:m,value:O,onChange:C,onReset:b}),p.createElement(r,{value:O}))},j.abrupt("return",{default:g});case 19:case"end":return j.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=i.sent,o=a.message,i.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return n=i.sent,r=n.sleep,i.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return d=i.sent,l=d.default,i.next=18,Promise.resolve().then(e.bind(e,74311));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},j=function(){var O=s({}),C=P()(O,2),b=C[0],D=C[1],M=function(){var E=I()(h()().mark(function K(){return h()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,r();case 2:o.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return V.stop()}},K)}));return function(){return E.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(g,{schema:f,value:b,onChange:D,onReset:M}),p.createElement(l,{value:b}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g;return h()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=j.sent,s=u.useState,j.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=j.sent,o=a.sleep,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return d=j.sent,l=d.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),S=P()(i,2),O=S[0],C=S[1],b=function(){var D=I()(h()().mark(function M(){return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},M)}));return function(){return D.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(l,{schema:m,value:O,onChange:C,onBeforeReset:b,onReset:function(M){console.log("formData:",M)}}),p.createElement(r,{value:O}))},j.abrupt("return",{default:g});case 19:case"end":return j.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=g.sent,s=u.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=g.sent,o=a.default,g.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=g.sent,r=n.default,d={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var j=s({}),y=P()(j,2),i=y[0],S=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:d,value:i,onChange:S,actions:["reset","submit"]}),p.createElement(o,{value:i}))},g.abrupt("return",{default:l});case 15:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-5":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=S.sent,s=u.useState,S.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=S.sent,o=a.message,n=a.Button,S.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return r=S.sent,d=r.sleep,S.next=15,Promise.resolve().then(e.bind(e,41989));case 15:return l=S.sent,m=l.default,S.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return g=S.sent,f=g.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var C=s({}),b=P()(C,2),D=b[0],M=b[1],E=function(){var W=I()(h()().mark(function V(){return h()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,d();case 2:o.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return z.stop()}},V)}));return function(){return W.apply(this,arguments)}}(),K=function(){o.success("\u5BFC\u51FA\u6210\u529F")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{schema:j,value:D,onChange:M,onSubmit:E,actions:["submit","reset","export"],registerActions:{export:function(V){var U=V.loading;return p.createElement(n,{type:"primary",disabled:U.submit||U.reset,onClick:K},"\u5BFC\u51FA")}}}),p.createElement(m,{value:D}))},S.abrupt("return",{default:y});case 24:case"end":return S.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-6":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=E.sent,s=u.useState,a=u.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=E.sent,n=o.message,r=o.Button,d=o.Popconfirm,E.next=13,Promise.resolve().then(e.bind(e,69581));case 13:return l=E.sent,m=l.DeleteOutlined,g=l.UploadOutlined,E.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return f=E.sent,j=f.sleep,E.next=22,Promise.resolve().then(e.bind(e,41989));case 22:return y=E.sent,i=y.default,E.next=26,Promise.resolve().then(e.bind(e,74311));case 26:return S=E.sent,O=S.default,C={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},b={submit:function(W){var V=W.handleSubmit,U=W.loading;return p.createElement(d,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:V},p.createElement(r,{loading:U.submit,type:"primary",icon:p.createElement(g,null)},"\u63D0\u4EA4"))},reset:function(W){var V=W.handleReset,U=W.loading;return p.createElement(r,{loading:U.reset,onClick:V,icon:p.createElement(m,null)},"\u91CD\u7F6E")}},D=function(){var W=s({}),V=P()(W,2),U=V[0],z=V[1],Z=a(null),w=function(){var X=I()(h()().mark(function se(){var te,ie;return h()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,Z.current.validate();case 2:if(te=he.sent,ie=te.hasError,!ie){he.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),he.abrupt("return");case 7:return he.next=9,j();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return he.stop()}},se)}));return function(){return X.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(O,{ref:Z,schema:C,value:U,onChange:z,onSubmit:w,registerActions:b}),p.createElement(i,{value:U}))},E.abrupt("return",{default:D});case 32:case"end":return E.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@ant-design/icons":_,"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},39820:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(90261),x=e(48201),B=e(41989),A=e(74311),$=e(14953),_=e(97609),T={"examples-form-render-react-500-builtin-renderers-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=S.sent,s=u.useState,a=u.useMemo,S.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=S.sent,n=o.Button,S.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=S.sent,d=r.default,S.next=15,Promise.resolve().then(e.bind(e,74311));case 15:return l=S.sent,m=l.default,S.next=19,Promise.resolve().then(e.bind(e,97609));case 19:return g=S.sent,S.next=22,Promise.resolve().then(e.bind(e,14953));case 22:return f=S.sent,j=f.default,y=function(){var C=s(!1),b=P()(C,2),D=b[0],M=b[1],E=s(!1),K=P()(E,2),W=K[0],V=K[1],U=s({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),z=P()(U,2),Z=z[0],w=z[1],X=a(function(){return{disable:function(){return p.createElement(n,{type:"dashed",onClick:function(){return M(!D)}},D?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return p.createElement(n,{type:"dashed",onClick:function(){return V(!W)}},W?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[W,D]);return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(m,{rootClassName:g.builtinRenderers,labelWidth:230,schema:j,value:Z,onChange:w,actions:["submit","reset","disable","readonly"],registerActions:X,disabled:D,readonly:W,readonlyPlaceholder:p.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),p.createElement(d,{value:Z}))},S.abrupt("return",{default:y});case 26:case"end":return S.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"./schemas/all.ts":{type:"FILE",value:e(71525).Z},"./styles.ts":{type:"FILE",value:e(24127).Z}},entry:"index.tsx"},context:{"./schemas/all.ts":$,"./styles.ts":_,react:R||(R=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":A,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.ts":$,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":_},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},28680:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return N}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(4123),I=e(74311),p=e(35804),N={"examples-form-render-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function x(){var B,A,$,_,T,v;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return B=s.sent,A=B.default,s.next=6,Promise.resolve().then(e.bind(e,35804));case 6:return $=s.sent,_=$.default,T={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},v=function(){return P.createElement(A,{rootStyle:{maxWidth:500},schema:T,locale:_})},s.abrupt("return",{default:v});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{"@schema-render/form-render-react":I,"@schema-render/form-render-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=L()(t()().mark(function A(){var $,_=arguments;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",($=v.sent).default.apply($,_));case 3:case"end":return v.stop()}},A)}));function B(){return x.apply(this,arguments)}return B}()}}}},47023:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(74624),h={}},48167:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return N}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(83140),I=e(74311),p=e(37418),N={"examples-form-render-react-850-position-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function x(){var B,A,$,_,T,v,u;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return B=a.sent,A=B.default,a.next=6,Promise.resolve().then(e.bind(e,37418));case 6:return $=a.sent,_=$.default,T={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},v=function(n,r){n.bank_id=r.extra.bank_id,n.bank_account=r.extra.bank_account,n.bank_name=r.extra.bank_name,n.bank_branch_name=r.extra.bank_branch_name},u=function(){return P.createElement(A,{schema:T,renderers:_,watch:{bank_account:v,bank_name:v,bank_branch_name:v}})},a.abrupt("return",{default:u});case 12:case"end":return a.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"./renderers.tsx":{type:"FILE",value:e(540).Z}},entry:"index.tsx"},context:{"./renderers.tsx":p,"@schema-render/form-render-react":I,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":p},renderOpts:{compile:function(){var x=L()(t()().mark(function A(){var $,_=arguments;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",($=v.sent).default.apply($,_));case 3:case"end":return v.stop()}},A)}));function B(){return x.apply(this,arguments)}return B}()}}}},68170:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return u}});var t=e(9783),h=e.n(t),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(5574),N=e.n(p),x=e(99289),B=e.n(x),A=e(67294),$=e(34877),_=e(74311),T=e(48201),v=e(31776),u={"examples-form-render-react-851-steps-demo-0":{component:A.memo(A.lazy(B()(I()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=C.sent,o=a.useState,n=a.useMemo,r=a.useRef,C.next=8,Promise.resolve().then(e.bind(e,74311));case 8:return d=C.sent,l=d.default,C.next=12,Promise.resolve().then(e.bind(e,48201));case 12:return m=C.sent,g=m.Steps,f=m.Button,C.next=17,Promise.resolve().then(e.bind(e,31776));case 17:return j=C.sent,y=j.useMemoizedFn,i={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},S=function(){var D=o(0),M=N()(D,2),E=M[0],K=M[1],W=o({}),V=N()(W,2),U=V[0],z=V[1],Z=r(null),w=function(){K(function(he){return he-1})},X=y(B()(I()().mark(function xe(){var he,ve,Pe,fe;return I()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,(he=Z.current)===null||he===void 0?void 0:he.validate();case 2:if(ve=Te.sent,!(ve!=null&&ve.hasError||ve!=null&&ve.hasWarning)){Te.next=8;break}if(Pe="step".concat(E+1),fe=ve.errorList.some(function(Oe){return Oe.path[0]===Pe}),!fe){Te.next=8;break}return Te.abrupt("return");case 8:K(E+1);case 9:case"end":return Te.stop()}},xe)}))),se=y(function(){var xe;z(P()(P()({},U),{},h()({},"step".concat(E+1),{}))),(xe=Z.current)===null||xe===void 0||xe.resetError()}),te=n(function(){return{prev:function(){return A.createElement(f,{onClick:w},"\u4E0A\u4E00\u6B65")},next:function(){return A.createElement(f,{type:"primary",onClick:X},"\u4E0B\u4E00\u6B65")},reset:function(){return A.createElement(f,{onClick:se},"\u91CD\u7F6E")}}},[]),ie=function(){var xe=B()(I()().mark(function he(){var ve,Pe;return I()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,(ve=Z.current)===null||ve===void 0?void 0:ve.validate();case 2:if(Pe=ge.sent,!(Pe!=null&&Pe.hasError||Pe!=null&&Pe.hasWarning)){ge.next=5;break}return ge.abrupt("return");case 5:case"end":return ge.stop()}},he)}));return function(){return xe.apply(this,arguments)}}();return A.createElement("div",{style:{maxWidth:800}},A.createElement(g,{size:"small",current:E,onChange:K,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),A.createElement(l,{ref:Z,schema:i,value:U,onChange:z,userCtx:{step:E},actions:E===0?["next","reset"]:E===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:te,onSubmit:ie}))},C.abrupt("return",{default:S});case 22:case"end":return C.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},ahooks:{type:"NPM",value:"3.8.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(A,2)),"@schema-render/form-render-react":_,antd:T,ahooks:v},renderOpts:{compile:function(){var s=B()(I()().mark(function o(){var n,r=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},62127:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(45011),A=e(41989),$=e(74311),_=e(48201),T={"examples-form-render-react-852-audit-renderer-demo-0":{component:x.memo(x.lazy(N()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=O.sent,s=u.useState,O.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=O.sent,o=a.default,O.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=O.sent,r=n.default,O.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return d=O.sent,l=d.Input,m=d.Radio,g=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],f=function(b){var D,M=b.disabled,E=b.value,K=b.onChange,W=b.validator,V=function(Z){K(I()(I()({},E),Z),{triggerValidator:!Z.hasOwnProperty("type")})},U=(E==null?void 0:E.type)===2;return x.createElement("div",null,x.createElement(m.Group,{options:g,value:(D=E==null?void 0:E.type)!==null&&D!==void 0?D:null,onChange:function(Z){return V({type:Z.target.value})},disabled:M}),x.createElement("div",{style:{marginTop:U?5:0}},U&&x.createElement(l.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:W.status,disabled:M,value:E.failReason,onChange:function(Z){return V({failReason:Z.target.value})}})))},j={Audit:{component:f,validator:function(b){var D=b.value;if((D==null?void 0:D.type)===2&&!D.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},i=function(){var b=s({}),D=P()(b,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,value:M,onChange:E,renderers:j}),x.createElement(o,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$,antd:_},renderOpts:{compile:function(){var v=N()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},42087:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(6168),x=e(41989),B=e(74311),A={"examples-form-render-react-853-validate-on-blur-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function $(){var _,T,v,u,s,a,o,n;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=d.sent,T=_.useState,d.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=d.sent,u=v.default,d.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=d.sent,a=s.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},d.abrupt("return",{default:n});case 15:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}}}},55850:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(88358),A=e(41989),$=e(74311),_=e(48201),T={"examples-form-render-react-880-relation-checkbox-demo-0":{component:x.memo(x.lazy(N()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,a=u.useRef,i.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return o=i.sent,n=o.default,i.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return r=i.sent,d=r.default,i.next=15,Promise.resolve().then(e.bind(e,48201));case 15:return l=i.sent,m=l.Select,g={component:function(O){var C,b=O.schema,D=O.value,M=O.disabled,E=O.validator,K=O.onChange,W=O.userCtx,V=W.cityList||((C=b.renderOptions)===null||C===void 0?void 0:C.options);return x.createElement(m,I()(I()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(b.title)},b.renderOptions),{},{options:V,status:E.status,mode:void 0,value:D,onChange:function(z){return K(z)},disabled:M}))}},f={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},j=function(){var O=s({}),C=P()(O,2),b=C[0],D=C[1],M=a({});return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(d,{labelWidth:180,actions:[],schema:f,value:b,onChange:D,renderers:{AvailableCities:g},watch:{cities:function(K,W){M.current.cityList=W.extra.checkedOptions,W.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:M.current}),x.createElement(n,{value:b}))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{react:R||(R=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$,antd:_},renderOpts:{compile:function(){var v=N()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:x.memo(x.lazy(N()(h()().mark(function v(){var u,s,a,o,n,r,d,l;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=g.sent,s=u.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=g.sent,o=a.default,g.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=g.sent,r=n.default,d={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},l=function(){var j=s({}),y=P()(j,2),i=y[0],S=y[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{labelWidth:180,actions:[],schema:d,value:i,onChange:S,watch:{cities:function(C,b){d.properties.available_cities.renderOptions.options=b.extra.checkedOptions,b.value.includes(C.available_cities)||(C.available_cities=void 0)}}}),x.createElement(o,{value:i}))},g.abrupt("return",{default:l});case 15:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{react:R||(R=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var v=N()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},54811:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(73888),x=e(41989),B=e(74311),A={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function $(){var _,T,v,u,s,a,o,n;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:m}}}};return g},d.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return _=d.sent,T=_.useState,d.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return v=d.sent,u=v.default,d.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return s=d.sent,a=s.default,n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1],y=T(function(){return o()}),i=P()(y,2),S=i[0],O=i[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{labelWidth:180,actions:[],schema:S,value:f,onChange:j,watch:{cities:function(b,D){O(o(D.extra.selectedOptions)),D.value.includes(b.available_cities)||(b.available_cities=void 0)}}}),p.createElement(u,{value:f}))},d.abrupt("return",{default:n});case 15:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}}}},37531:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(19632),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(73914),A=e(74311),$={"examples-form-render-react-890-benchmark-demo-0":{component:x.memo(x.lazy(N()(h()().mark(function _(){var T,v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return T=m.sent,v=T.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,s=u.useState,a=100,o={renderType:"Root",properties:{}},n=I()(Array(a).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],d=function(){var f=s({}),j=P()(f,2),y=j[0],i=j[1],S=function(C,b){var D=parseInt(b.sPath.slice(6)),M=D-1,E=D+1,K="field_".concat(E>=a?M:E);C[K]=b.value,i(C)};return x.createElement(v,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:S})},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=N()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-form-render-react-890-benchmark-demo-1":{component:x.memo(x.lazy(N()(h()().mark(function _(){var T,v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return T=m.sent,v=T.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,s=u.useState,a=300,o={renderType:"Root",properties:{}},n=I()(Array(a).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],d=function(){var f=s({}),j=P()(f,2),y=j[0],i=j[1],S=function(C,b){var D=parseInt(b.sPath.slice(6)),M=D-1,E=D+1,K="field_".concat(E>=a?M:E);C[K]=b.value,i(C)};return x.createElement(v,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:S})},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=N()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},53775:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(64768),x=e(41989),B=e(74311),A={"examples-form-render-react-900-renderers-warning-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function $(){var _,T,v,u,s,a,o,n;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=d.sent,T=_.useState,d.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=d.sent,u=v.default,d.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=d.sent,a=s.default,o={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},d.abrupt("return",{default:n});case 15:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,u));case 3:case"end":return a.stop()}},T)}));function _(){return $.apply(this,arguments)}return _}()}}}},88642:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(87004),x=e(41989),B=e(74311),A=e(69581),$=e(48201),_={"examples-form-render-react-901-label-vertical-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},d=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:d});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-901-label-vertical-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,u=v.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,a=s.default,i.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,69581));case 14:return r=i.sent,d=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return l=i.sent,m=l.Popover,g={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var C=O.schema,b=O.required,D=O.prefixClassNames;return p.createElement("div",null,C.title,!!C.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:C.titleDescription},p.createElement(d,{className:D("item-title-tooltip"),style:{marginLeft:4}})),!b&&" (\u53EF\u9009)")},j=function(){var O=u({}),C=P()(O,2),b=C[0],D=C[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:f,schema:g,value:b,onChange:D}),p.createElement(a,{value:b}))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B,"@ant-design/icons":A,antd:$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},94270:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return r}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(43895),x=e(41989),B=e(48201),A=e(74072),$=e(2862),_=e(78469),T=e(74311),v=e(38959),u=e(36116),s=e(71856),a=e(92114),o=e(68666),n=e(362),r={"examples-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function d(){var l,m,g,f,j,y,i,S,O,C,b,D,M,E,K,W;return h()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return l=U.sent,m=l.default,U.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=U.sent,f=g.useState,j=g.useRef,U.next=11,Promise.resolve().then(e.bind(e,48201));case 11:return y=U.sent,i=y.Button,S=y.message,U.next=16,Promise.resolve().then(e.bind(e,74072));case 16:return O=U.sent,C=O.default,U.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return b=U.sent,D=b.default,U.next=24,Promise.resolve().then(e.bind(e,2862));case 24:return M=U.sent,E=M.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},W=function(){var Z=f({}),w=P()(Z,2),X=w[0],se=w[1],te=j(),ie=function(){var xe=I()(h()().mark(function he(){var ve;return h()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.next=2,te.current.validate();case 2:ve=fe.sent,ve.hasError||S.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return fe.stop()}},he)}));return function(){return xe.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement("div",null,p.createElement(C,{ref:te,schema:K,value:X,onChange:se,itemLayout:D,renderers:E}),p.createElement(i,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:ie},"\u63D0\u4EA4")),p.createElement(m,{value:X}))},U.abrupt("return",{default:W});case 29:case"end":return U.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./core-react/renderers/common.tsx":$,"./core-react/item-layout/Horizontal.tsx":_,"@examples/components/SyntaxHighlighter":x,react:R||(R=e.t(p,2)),antd:B,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var d=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return d.apply(this,arguments)}return l}()}},"examples-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function d(){var l,m,g,f,j,y,i,S,O,C;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return l=D.sent,m=l.default,D.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=D.sent,f=g.useState,D.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return j=D.sent,y=j.message,D.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return i=D.sent,S=i.default,O={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},C=function(){var E=f({}),K=P()(E,2),W=K[0],V=K[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(S,{schema:O,value:W,onChange:V,onSubmit:function(){return y.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(m,{value:W}))},D.abrupt("return",{default:C});case 19:case"end":return D.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:R||(R=e.t(p,2)),antd:B,"@schema-render/form-render-react":T},renderOpts:{compile:function(){var d=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return d.apply(this,arguments)}return l}()}},"examples-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function d(){var l,m,g,f,j,y;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=S.sent,m=l.sleep,S.next=6,Promise.resolve().then(e.bind(e,36116));case 6:return g=S.sent,f=g.default,j={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},y=function(){var C=function(){var b=I()(h()().mark(function D(M){return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",M),K.next=3,m();case 3:case"end":return K.stop()}},D)}));return function(M){return b.apply(this,arguments)}}();return p.createElement(f,{schema:j,onSubmit:C,onReset:C})},S.abrupt("return",{default:y});case 11:case"end":return S.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

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

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/utils":v,"@schema-render/search-react":u},renderOpts:{compile:function(){var d=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return d.apply(this,arguments)}return l}()}},"examples-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function d(){var l,m,g,f,j,y,i,S,O,C,b;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=M.sent,m=l.sleep,M.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return g=M.sent,f=g.default,M.next=10,Promise.resolve().then(e.bind(e,362));case 10:return j=M.sent,y=j.default,M.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return i=M.sent,S=i.default,M.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return O=M.sent,C=O.default,b=function(){return p.createElement(C,{search:{schema:f},table:{columns:y,showRowNumber:!0},request:function(){var K=I()(h()().mark(function V(U){var z;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("searchParams:",U),w.next=3,m();case 3:return z=S(),w.abrupt("return",{data:z,total:100});case 5:case"end":return w.stop()}},V)}));function W(V){return K.apply(this,arguments)}return W}()})},M.abrupt("return",{default:b});case 22:case"end":return M.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./search-table-react/helpers/createDataSource.ts":a,"./search-table-react/helpers/schema.ts":o,"./search-table-react/helpers/columns.ts":n,"@examples/utils":v,"@schema-render/search-table-react":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:function(){var d=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return d.apply(this,arguments)}return l}()}}}},11124:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(67342),x=e(48201),B=e(38959),A=e(67247),$=e(36116),_=e(77095),T=e(36641),v={"examples-search-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=M.sent,a=s.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return o=M.sent,n=o.ConfigProvider,r=o.Table,M.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return d=M.sent,l=d.sleep,M.next=15,Promise.resolve().then(e.bind(e,67247));case 15:return m=M.sent,g=m.default,M.next=19,Promise.resolve().then(e.bind(e,36641));case 19:return f=M.sent,j=f.default,M.next=23,Promise.resolve().then(e.bind(e,77095));case 23:return y=M.sent,i=y.default,M.next=27,Promise.resolve().then(e.bind(e,36116));case 27:return S=M.sent,O=S.default,C={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},b=function(){var K=a(function(){return i()}),W=P()(K,2),V=W[0],U=W[1],z=function(){var Z=I()(h()().mark(function w(X){return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return console.log("searchParams:",X),te.next=3,l();case 3:U(i());case 4:case"end":return te.stop()}},w)}));return function(X){return Z.apply(this,arguments)}}();return p.createElement(n,{locale:g},p.createElement(O,{schema:C,onSubmit:z,onReset:z}),p.createElement(r,{style:{marginTop:20},columns:j,dataSource:V,scroll:{x:1500}}))},M.abrupt("return",{default:b});case 32:case"end":return M.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(77538).Z},"./helpers/columns.ts":{type:"FILE",value:e(96390).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/columns.ts":T,react:R||(R=e.t(p,2)),antd:x,"@examples/utils":B,"antd/locale/zh_CN":A,"@schema-render/search-react":$,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":T},renderOpts:{compile:function(){var u=I()(h()().mark(function a(){var o,n=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}}}},79899:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return B}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(27885),I=e(48201),p=e(38959),N=e(67247),x=e(36116),B={"examples-search-react-300-actions-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function A(){var $,_,T,v,u,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return $=l.sent,_=$.ConfigProvider,l.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return T=l.sent,v=T.sleep,l.next=10,Promise.resolve().then(e.bind(e,67247));case 10:return u=l.sent,s=u.default,l.next=14,Promise.resolve().then(e.bind(e,36116));case 14:return a=l.sent,o=a.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},r=function(){var g=function(){var j=L()(t()().mark(function y(i){return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("searchParams:",i),O.next=3,v();case 3:case"end":return O.stop()}},y)}));return function(i){return j.apply(this,arguments)}}(),f=function(y){console.log("isCollapsed:",y)};return P.createElement(_,{locale:s},P.createElement(o,{schema:n,onSubmit:g,onReset:g,onToggleCollapsed:f}))},l.abrupt("return",{default:r});case 19:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{antd:I,"@examples/utils":p,"antd/locale/zh_CN":N,"@schema-render/search-react":x},renderOpts:{compile:function(){var A=L()(t()().mark(function _(){var T,v=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function $(){return A.apply(this,arguments)}return $}()}}}},49469:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return N}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(10122),I=e(36116),p=e(9686),N={"examples-search-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function x(){var B,A,$,_,T,v;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return B=s.sent,A=B.default,s.next=6,Promise.resolve().then(e.bind(e,9686));case 6:return $=s.sent,_=$.default,T={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},v=function(){return P.createElement(A,{schema:T,labelWidth:120,locale:_})},s.abrupt("return",{default:v});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{"@schema-render/search-react":I,"@schema-render/search-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=L()(t()().mark(function A(){var $,_=arguments;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",($=v.sent).default.apply($,_));case 3:case"end":return v.stop()}},A)}));function B(){return x.apply(this,arguments)}return B}()}}}},90712:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(84123),h={}},11973:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return B}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(24197),I=e(36116),p=e(57864),N=e(35719),x=e(9680),B={"examples-search-react-850-category-title-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function A(){var $,_,T,v,u,s,a,o,n,r,d,l;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=g.sent,_=$.default,g.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return T=g.sent,v=T.default,g.next=10,Promise.resolve().then(e.bind(e,57864));case 10:return u=g.sent,s=u.default,a={BankSelect:v,ObjectSectionTitle:s},o={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(j){var y=function(S,O){S[j].bank_id=O.extra.bank_id,S[j].bank_account=O.extra.bank_account,S[j].bank_name=O.extra.bank_name,S[j].bank_branch_name=O.extra.bank_branch_name};return y},r=n("payment"),d=n("collection"),l=function(){return P.createElement(_,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:o,renderers:a,actions:["collapse"],watch:{"payment.bank_account":r,"payment.bank_name":r,"payment.bank_branch_name":r,"collection.bank_account":d,"collection.bank_name":d,"collection.bank_branch_name":d}})},g.abrupt("return",{default:l});case 19:case"end":return g.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(97395).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/ObjectSectionTitle.tsx":p,"./renderers/BankSelect.tsx":N,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":p,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":N},renderOpts:{compile:function(){var A=L()(t()().mark(function _(){var T,v=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function $(){return A.apply(this,arguments)}return $}()}},"examples-search-react-850-category-title-demo-1":{component:P.memo(P.lazy(L()(t()().mark(function A(){var $,_,T,v,u,s,a,o,n,r,d,l,m;return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=f.sent,_=$.default,f.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return T=f.sent,v=T.default,f.next=10,Promise.resolve().then(e.bind(e,9680));case 10:return u=f.sent,s=u.default,a={BankSelect:v,SectionTitle:s},o={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(y){var i=function(O,C){O["".concat(y,"_bank_id")]=C.extra.bank_id,O["".concat(y,"_bank_account")]=C.extra.bank_account,O["".concat(y,"_bank_name")]=C.extra.bank_name,O["".concat(y,"_bank_branch_name")]=C.extra.bank_branch_name};return i},r=n("payment"),d=n("collection"),l=function(y){var i;if(!y)return 5;var S=y.clientWidth,O=((i=y.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||i===void 0||(i=i.getBoundingClientRect())===null||i===void 0?void 0:i.width)||320;return Math.floor(S/O)*2},m=function(){return P.createElement(_,{defaultCollapsed:!1,schema:o,renderers:a,actions:["collapse"],watch:{payment_bank_account:r,payment_bank_name:r,payment_bank_branch_name:r,collection_bank_account:d,collection_bank_name:d,collection_bank_branch_name:d},calcCollapsedNumber:l})},f.abrupt("return",{default:m});case 20:case"end":return f.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(5038).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/SectionTitle.tsx":x,"./renderers/BankSelect.tsx":N,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":x,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":N},renderOpts:{compile:function(){var A=L()(t()().mark(function _(){var T,v=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function $(){return A.apply(this,arguments)}return $}()}}}},79181:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return o}});var t=e(5574),h=e.n(t),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(69306),A=e(38959),$=e(71856),_=e(92114),T=e(68666),v=e(362),u=e(48201),s=e(67247),a=e(91845),o={"examples-search-table-react-001-intro-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=b.sent,d=r.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=b.sent,m=l.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=b.sent,f=g.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=b.sent,y=j.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=b.sent,S=i.default,O=function(){return x.createElement(S,{search:{schema:m},table:{columns:f},request:function(){var M=N()(I()().mark(function K(W){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return console.log("searchParams:",W),z.next=3,d();case 3:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 5:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},b.abrupt("return",{default:O});case 22:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-001-intro-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C,b,D,M,E,K,W,V,U,z,Z,w,X,se,te,ie,xe;return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=ve.sent,d=r.sleep,ve.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=ve.sent,m=l.default,ve.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=ve.sent,f=g.default,ve.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=ve.sent,y=j.default,ve.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=ve.sent,S=i.default,ve.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return O=ve.sent,C=O.useState,b=O.useRef,ve.next=27,Promise.resolve().then(e.bind(e,48201));case 27:return D=ve.sent,M=D.ConfigProvider,E=D.message,K=D.Button,W=D.Tag,ve.next=34,Promise.resolve().then(e.bind(e,67247));case 34:return V=ve.sent,U=V.default,ve.next=38,Promise.resolve().then(e.bind(e,91845));case 38:return z=ve.sent,Z=z.pinyin,w=/[\u4e00-\u9fa5]/,X=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],se=f.map(function(Pe,fe){var ge=P()({},Pe);return fe===0?ge.fixed="left":fe===f.length-1&&(ge.fixed="right"),ge}),te={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},ie=function(fe){return d()},xe=function(){var fe=C("1"),ge=h()(fe,2),Te=ge[0],Oe=ge[1],Ce=b(null),Ae=function(_e,je){return[{text:"\u7F16\u8F91",onClick:function(){E.success("\u70B9\u51FB\u4E86\u7B2C ".concat(je," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Le=N()(I()().mark(function Be(){var Ge;return I()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,ie(_e.id);case 2:(Ge=Ce.current)===null||Ge===void 0||Ge.refresh();case 3:case"end":return Ye.stop()}},Be)}));function ze(){return Le.apply(this,arguments)}return ze}()}]};return x.createElement(M,{locale:U},x.createElement(S,{ref:Ce,search:{schema:m,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:Te,items:X,onChange:Oe},leftExtraContent:function(_e){var je=_e.loading;return x.createElement(K,{disabled:je},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(_e){var je=_e.loading;return x.createElement(K,{disabled:je},"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")}},titleTop:function(){return x.createElement("div",{style:te},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return x.createElement("div",{style:te},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},header:function(){return x.createElement("div",{style:te},"Header \u5185\u5BB9\u81EA\u5B9A\u4E49")},footer:function(){return x.createElement("div",{style:P()(P()({},te),{},{marginTop:16})},"Footer \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:se,showRowNumber:!0,actionItems:Ae,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(_e){return w.test(_e)?Z(_e,{toneType:"none"}):_e}},request:function(){var Se=N()(I()().mark(function je(Le){var ze,Be;return I()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,d();case 2:return ze=y(Le.pageSize),Be=ze.reduce(function(Ye,$e){return Ye+$e.goods_price},0).toFixed(2),He.abrupt("return",{data:ze,total:100,summaryData:{supplier_code:x.createElement(W,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:Be}});case 5:case"end":return He.stop()}},je)}));function _e(je){return Se.apply(this,arguments)}return _e}()}))},ve.abrupt("return",{default:xe});case 47:case"end":return ve.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":$,react:R||(R=e.t(x,2)),antd:u,"antd/locale/zh_CN":s,"pinyin-pro":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}}}},37629:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var t=e(15009),h=e.n(t),L=e(99289),P=e.n(L),H=e(67294),I=e(72106),p=e(38959),N=e(71856),x=e(92114),B=e(68666),A=e(362),$=e(48201),_=e(67247),T={"examples-search-table-react-010-table-actions-demo-0":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return u=y.sent,s=u.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=y.sent,o=a.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=y.sent,r=n.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return d=y.sent,l=d.default,y.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=y.sent,g=m.default,f=function(){return H.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0},request:function(){var S=P()(h()().mark(function C(b){var D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,s();case 2:return D=l(b.pageSize),E.abrupt("return",{data:D,total:100});case 4:case"end":return E.stop()}},C)}));function O(C){return S.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 22:case"end":return y.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-1":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return u=i.sent,s=u.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return d=i.sent,l=d.default,i.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=i.sent,g=m.default,f=function(O,C,b){return H.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},b+1)},j=function(){return H.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0,rowNumberColumnData:{width:80,render:f}},request:function(){var O=P()(h()().mark(function b(D){var M;return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return M=l(D.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},b)}));function C(b){return O.apply(this,arguments)}return C}()})},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-2":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i,S,O;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return u=b.sent,s=u.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=b.sent,o=a.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=b.sent,r=n.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return d=b.sent,l=d.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=b.sent,g=m.default,b.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return f=b.sent,j=f.ConfigProvider,y=f.message,b.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return i=b.sent,S=i.default,O=function(){var M=function(K,W){return[{text:"\u7F16\u8F91",onClick:function(){y.success("\u70B9\u51FB\u4E86\u7B2C ".concat(W," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return H.createElement(j,{locale:S},H.createElement(g,{search:{schema:o},table:{columns:r,actionItems:M},request:function(){var E=P()(h()().mark(function W(V){var U;return h()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,s();case 2:return U=l(V.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},W)}));function K(W){return E.apply(this,arguments)}return K}()}))},b.abrupt("return",{default:O});case 31:case"end":return b.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":B,"./helpers/createDataSource.ts":x,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-3":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=E.sent,s=u.useRef,E.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=E.sent,o=a.sleep,E.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=E.sent,r=n.default,E.next=14,Promise.resolve().then(e.bind(e,362));case 14:return d=E.sent,l=d.default,E.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=E.sent,g=m.default,E.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return f=E.sent,j=f.default,E.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=E.sent,i=y.ConfigProvider,S=y.message,E.next=31,Promise.resolve().then(e.bind(e,67247));case 31:return O=E.sent,C=O.default,b=function(W){return o()},D=function(){var W=s(null),V=function(z,Z){return[{text:"\u7F16\u8F91",onClick:function(){S.success("\u70B9\u51FB\u7B2C ".concat(Z," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var w=P()(h()().mark(function se(){var te;return h()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,b(z.id);case 2:(te=W.current)===null||te===void 0||te.refresh();case 3:case"end":return xe.stop()}},se)}));function X(){return w.apply(this,arguments)}return X}()}]};return H.createElement(i,{locale:C},H.createElement(j,{ref:W,search:{schema:r},table:{columns:l,actionItems:V,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:function(){var U=P()(h()().mark(function Z(w){var X;return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,o();case 2:return X=g(w.pageSize),te.abrupt("return",{data:X,total:100});case 4:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()}))},E.abrupt("return",{default:D});case 36:case"end":return E.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,react:R||(R=e.t(H,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-4":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=M.sent,s=u.useRef,M.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=M.sent,o=a.sleep,M.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=M.sent,r=n.default,M.next=14,Promise.resolve().then(e.bind(e,362));case 14:return d=M.sent,l=d.default,M.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=M.sent,g=m.default,M.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return f=M.sent,j=f.default,M.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=M.sent,i=y.ConfigProvider,M.next=30,Promise.resolve().then(e.bind(e,67247));case 30:return S=M.sent,O=S.default,C=function(K){return o()},b=function(){var K=s(null),W=function(U,z){return[{text:H.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(z)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(U.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:function(){var Z=P()(h()().mark(function X(){var se;return h()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,C(U.id);case 2:(se=K.current)===null||se===void 0||se.refresh();case 3:case"end":return ie.stop()}},X)}));function w(){return Z.apply(this,arguments)}return w}()}]};return H.createElement(i,{locale:O},H.createElement(j,{ref:K,search:{schema:r},table:{columns:l,actionItems:W,actionItemsCount:3,actionItemsColumnData:{width:180}},request:function(){var V=P()(h()().mark(function z(Z){var w;return h()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,o();case 2:return w=g(Z.pageSize),se.abrupt("return",{data:w,total:100});case 4:case"end":return se.stop()}},z)}));function U(z){return V.apply(this,arguments)}return U}()}))},M.abrupt("return",{default:b});case 35:case"end":return M.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,react:R||(R=e.t(H,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var a,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},89588:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return _}});var R=e(97857),t=e.n(R),h=e(15009),L=e.n(h),P=e(99289),H=e.n(P),I=e(67294),p=e(17258),N=e(38959),x=e(71856),B=e(92114),A=e(68666),$=e(362),_={"examples-search-table-react-020-table-height-demo-0":{component:I.memo(I.lazy(H()(L()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g;return L()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return v=j.sent,u=v.sleep,j.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=j.sent,a=s.default,j.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=j.sent,n=o.default,j.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=j.sent,d=r.default,j.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return l=j.sent,m=l.default,g=function(){return I.createElement(m,{style:{height:500,overflow:"hidden"},search:{schema:a},table:{columns:n,autoScrollY:!0},request:function(){var i=H()(L()().mark(function O(C){var b;return L()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,u();case 2:return b=d(C.pageSize),M.abrupt("return",{data:b,total:100});case 4:case"end":return M.stop()}},O)}));function S(O){return i.apply(this,arguments)}return S}()})},j.abrupt("return",{default:g});case 22:case"end":return j.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var T=H()(L()().mark(function u(){var s,a=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-020-table-height-demo-1":{component:I.memo(I.lazy(H()(L()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f;return L()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return v=y.sent,u=v.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=y.sent,d=r.default,y.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return l=y.sent,m=l.default,g={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},f=function(){return I.createElement(m,{style:{height:700,overflow:"hidden"},search:{schema:a},table:{columns:n,autoScrollY:!0},request:function(){var S=H()(L()().mark(function C(b){var D;return L()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,u();case 2:return D=d(b.pageSize),E.abrupt("return",{data:D,total:100});case 4:case"end":return E.stop()}},C)}));function O(C){return S.apply(this,arguments)}return O}(),header:function(){return I.createElement("div",{style:t()(t()({},g),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return I.createElement("div",{style:g},"Title Top")},titleBottom:function(){return I.createElement("div",{style:g},"Title Bottom")},footer:function(){return I.createElement("div",{style:g},"Footer")}})},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var T=H()(L()().mark(function u(){var s,a=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},64929:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return _}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(73865),I=e(48201),p=e(38959),N=e(71856),x=e(92114),B=e(68666),A=e(362),$=e(23786),_={"examples-search-table-react-030-table-summay-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,d=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){return P.createElement(f,{search:{schema:n},table:{columns:d,scroll:{y:300}},request:function(){var O=L()(t()().mark(function b(D){var M,E;return t()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,a();case 2:return M=m(D.pageSize),E=M.reduce(function(V,U){return V+U.goods_price},0).toFixed(2),W.abrupt("return",{data:M,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:E}});case 5:case"end":return W.stop()}},b)}));function C(b){return O.apply(this,arguments)}return C}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(t()().mark(function u(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-1":{component:P.memo(P.lazy(L()(t()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,d=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},C=P.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return P.createElement(f,{search:{schema:n},table:{columns:d,scroll:{y:300},showRowNumber:!0,summaryText:C,actionItems:O},request:function(){var b=L()(t()().mark(function M(E){var K,W;return t()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,a();case 2:return K=m(E.pageSize),W=K.reduce(function(z,Z){return z+Z.goods_price},0).toFixed(2),U.abrupt("return",{data:K,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:W}});case 5:case"end":return U.stop()}},M)}));function D(M){return b.apply(this,arguments)}return D}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(t()().mark(function u(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-2":{component:P.memo(P.lazy(L()(t()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,d=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:d,scroll:{y:300},actionItems:O,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:function(){var C=L()(t()().mark(function D(M){var E,K;return t()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,a();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},D)}));function b(D){return C.apply(this,arguments)}return b}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(t()().mark(function u(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-3":{component:P.memo(P.lazy(L()(t()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,d=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:d,scroll:{y:300},showRowNumber:!0,actionItems:O,rowSelection:{type:"checkbox"}},request:function(){var C=L()(t()().mark(function D(M){var E,K;return t()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,a();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},D)}));function b(D){return C.apply(this,arguments)}return b}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(t()().mark(function u(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-4":{component:P.memo(P.lazy(L()(t()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j,y;return t()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=S.sent,u=v.Tag,S.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=S.sent,a=s.sleep,S.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=S.sent,n=o.default,S.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=S.sent,d=r.default,S.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=S.sent,m=l.default,S.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=S.sent,f=g.default,j={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},y=function(){var C=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},b=P.createElement("div",{style:j},"\u5408\u8BA1");return P.createElement(f,{search:{schema:n},table:{columns:d,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:b,actionItems:C,rowSelection:{type:"checkbox"}},request:function(){var D=L()(t()().mark(function E(K){var W,V;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,a();case 2:return W=m(K.pageSize),V=W.reduce(function(Z,w){return Z+w.goods_price},0).toFixed(2),z.abrupt("return",{data:W,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:V}});case 5:case"end":return z.stop()}},E)}));function M(E){return D.apply(this,arguments)}return M}()})},S.abrupt("return",{default:y});case 27:case"end":return S.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(t()().mark(function u(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-5":{component:P.memo(P.lazy(L()(t()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,23786));case 14:return r=i.sent,d=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:d,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:O},request:function(){var C=L()(t()().mark(function D(M){var E,K;return t()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,a();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},D)}));function b(D){return C.apply(this,arguments)}return b}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns-tree.ts":$,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":$},renderOpts:{compile:function(){var T=L()(t()().mark(function u(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},35955:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return v}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(81535),I=e(48201),p=e(67247),N=e(38959),x=e(71856),B=e(92114),A=e(68666),$=e(362),_=e(23786),T=e(91845),v={"examples-search-table-react-040-table-sort-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S;return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,a=s.ConfigProvider,C.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=C.sent,n=o.default,C.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=C.sent,d=r.sleep,C.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=C.sent,m=l.default,C.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=C.sent,f=g.default,C.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return j=C.sent,y=j.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(D){return D.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],S=function(){return P.createElement(a,{locale:n},P.createElement(y,{search:{schema:m},table:{columns:i},request:function(){var D=L()(t()().mark(function E(K){var W;return t()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,d();case 2:return W=f(K.pageSize),U.abrupt("return",{data:W,total:100});case 4:case"end":return U.stop()}},E)}));function M(E){return D.apply(this,arguments)}return M}()}))},C.abrupt("return",{default:S});case 27:case"end":return C.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var u=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-1":{component:P.memo(P.lazy(L()(t()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S,O;return t()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=b.sent,a=s.ConfigProvider,b.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=b.sent,n=o.default,b.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=b.sent,d=r.sleep,b.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=b.sent,m=l.default,b.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=b.sent,f=g.default,b.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=b.sent,y=j.default,b.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=b.sent,S=i.default,O=function(){return P.createElement(a,{locale:n},P.createElement(S,{search:{schema:m},table:{columns:f,sortMode:"local-all"},request:function(){var M=L()(t()().mark(function K(W){var V;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,d();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},b.abrupt("return",{default:O});case 30:case"end":return b.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var u=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-2":{component:P.memo(P.lazy(L()(t()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S,O;return t()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=b.sent,a=s.ConfigProvider,b.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=b.sent,n=o.default,b.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=b.sent,d=r.sleep,b.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=b.sent,m=l.default,b.next=18,Promise.resolve().then(e.bind(e,23786));case 18:return g=b.sent,f=g.default,b.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=b.sent,y=j.default,b.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=b.sent,S=i.default,O=function(){return P.createElement(a,{locale:n},P.createElement(S,{search:{schema:m},table:{columns:f,bordered:!0,sortMode:"local-all"},request:function(){var M=L()(t()().mark(function K(W){var V;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,d();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},b.abrupt("return",{default:O});case 30:case"end":return b.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns-tree.ts":_,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":_},renderOpts:{compile:function(){var u=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-3":{component:P.memo(P.lazy(L()(t()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=E.sent,a=s.ConfigProvider,E.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=E.sent,n=o.default,E.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=E.sent,d=r.sleep,E.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=E.sent,m=l.default,E.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=E.sent,f=g.default,E.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=E.sent,y=j.default,E.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=E.sent,S=i.default,E.next=30,Promise.resolve().then(e.bind(e,91845));case 30:return O=E.sent,C=O.pinyin,b=/[\u4e00-\u9fa5]/,D=function(){return P.createElement(a,{locale:n},P.createElement(S,{search:{schema:m},table:{columns:f,sortMode:"local-all",sortStringValueTransform:function(V){return b.test(V)?C(V,{toneType:"none"}):V}},request:function(){var W=L()(t()().mark(function U(z){var Z;return t()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,d();case 2:return Z=y(z.pageSize),X.abrupt("return",{data:Z,total:100});case 4:case"end":return X.stop()}},U)}));function V(U){return W.apply(this,arguments)}return V}()}))},E.abrupt("return",{default:D});case 35:case"end":return E.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"pinyin-pro":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var u=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-4":{component:P.memo(P.lazy(L()(t()().mark(function u(){var s,a,o,n,r,d,l,m,g,f,j,y,i,S;return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,a=s.ConfigProvider,C.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=C.sent,n=o.default,C.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=C.sent,d=r.sleep,C.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=C.sent,m=l.default,C.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=C.sent,f=g.default,C.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return j=C.sent,y=j.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],S=function(){return P.createElement(a,{locale:n},P.createElement(y,{search:{schema:m},table:{columns:i,sortMode:"service"},request:function(){var D=L()(t()().mark(function E(K,W){var V,U,z;return t()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return V=W.sorter,U=V,w.next=4,d();case 4:return z=f(K.pageSize,{sort_field:U==null?void 0:U.field,sort_order:U==null?void 0:U.order}),w.abrupt("return",{data:z,total:100});case 6:case"end":return w.stop()}},E)}));function M(E,K){return D.apply(this,arguments)}return M}()}))},C.abrupt("return",{default:S});case 27:case"end":return C.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var u=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,n));case 3:case"end":return d.stop()}},a)}));function s(){return u.apply(this,arguments)}return s}()}}}},66725:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return s}});var t=e(15009),h=e.n(t),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),N=e(18899),x=e(38959),B=e(71856),A=e(92114),$=e(68666),_=e(362),T=e(27164),v=e(6271),u=e(48201),s={"examples-search-table-react-050-tabs-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i,S,O,C;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,d=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=D.sent,m=l.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=D.sent,y=j.default,D.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=D.sent,S=i.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],C=function(){var E=S("1"),K=P()(E,2),W=K[0],V=K[1];return p.createElement(y,{search:{schema:d,labelWidth:80},title:{tabs:{activeKey:W,items:O,onChange:V}},table:{columns:m},request:function(){var U=I()(h()().mark(function Z(w){var X;return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return console.log("activeKey:",W),te.next=3,n();case 3:return X=f(w.pageSize),te.abrupt("return",{data:X,total:100});case 5:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()})},D.abrupt("return",{default:C});case 27:case"end":return D.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":B,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D,M,E;return h()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=W.sent,n=o.useState,W.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return r=W.sent,d=r.sleep,W.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=W.sent,m=l.default,W.next=14,Promise.resolve().then(e.bind(e,362));case 14:return g=W.sent,f=g.default,W.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return j=W.sent,y=j.default,W.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return i=W.sent,S=i.default,W.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return O=W.sent,C=O.default,W.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return b=W.sent,D=b.default,M=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],E=function(){var U=n("1"),z=P()(U,2),Z=z[0],w=z[1];return p.createElement(D,{search:{schema:m},title:{showSetting:!0,tabs:{activeKey:Z,items:M,onChange:w}},table:{columns:Z==="1"?f:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var X=I()(h()().mark(function te(ie){var xe,he;return h()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,d();case 2:if(xe=Z==="1"?S:C,he=xe(ie.pageSize),!(Math.random()>.7)){Pe.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return Pe.abrupt("return",{data:he,total:100});case 7:case"end":return Pe.stop()}},te)}));function se(te){return X.apply(this,arguments)}return se}()})},W.abrupt("return",{default:E});case 35:case"end":return W.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":T,"./helpers/schema.ts":$,"./helpers/columns.ts":_,"./helpers/columns-value-type.ts":v,"./helpers/createDataSource.ts":A,react:R||(R=e.t(p,2)),"@examples/utils":x,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i,S,O,C;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,d=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=D.sent,m=l.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=D.sent,y=j.default,D.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=D.sent,S=i.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],C=function(){var E=S("1"),K=P()(E,2),W=K[0],V=K[1];return p.createElement(y,{search:{schema:d,labelWidth:80},title:{showSetting:!0,showRefresh:!0,tabs:{activeKey:W,items:O,onChange:V}},table:{columns:m},request:function(){var U=I()(h()().mark(function Z(w){var X;return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return console.log("activeKey:",W),te.next=3,n();case 3:return X=f(w.pageSize),te.abrupt("return",{data:X,total:100});case 5:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()})},D.abrupt("return",{default:C});case 27:case"end":return D.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":B,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=O.sent,n=o.sleep,O.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=O.sent,d=r.default,O.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=O.sent,m=l.default,O.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=O.sent,f=g.default,O.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=O.sent,y=j.default,i=function(){return p.createElement(y,{search:{schema:d,labelWidth:80},title:{showSetting:!0,showRefresh:!0},table:{columns:m},request:function(){var b=I()(h()().mark(function M(E){var K;return h()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,n();case 2:return K=f(E.pageSize),V.abrupt("return",{data:K,total:100});case 4:case"end":return V.stop()}},M)}));function D(M){return b.apply(this,arguments)}return D}()})},O.abrupt("return",{default:i});case 22:case"end":return O.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":$,"./helpers/createDataSource.ts":A,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i,S,O;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,d=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=b.sent,m=l.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=b.sent,y=j.default,b.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=b.sent,S=i.Button,O=function(){return p.createElement(y,{search:{schema:d,labelWidth:80},title:{leftExtraContent:function(E){var K=E.loading;return p.createElement(p.Fragment,null,p.createElement(S,{type:"primary",disabled:K},"\u5BFC\u5165"),p.createElement(S,{disabled:K},"\u5BFC\u51FA"))}},table:{columns:m},request:function(){var M=I()(h()().mark(function K(W){var V;return h()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,n();case 2:return V=f(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},b.abrupt("return",{default:O});case 26:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":B,antd:u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-5":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i,S,O;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,d=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=b.sent,m=l.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=b.sent,y=j.default,b.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=b.sent,S=i.Button,O=function(){return p.createElement(y,{search:{schema:d,labelWidth:80},title:{rightExtraContent:function(E){var K=E.loading;return p.createElement(S,{disabled:K},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:m},request:function(){var M=I()(h()().mark(function K(W){var V;return h()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,n();case 2:return V=f(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},b.abrupt("return",{default:O});case 26:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":B,antd:u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-6":{component:p.memo(p.lazy(I()(h()().mark(function a(){var o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=E.sent,n=o.sleep,E.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=E.sent,d=r.default,E.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=E.sent,m=l.default,E.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=E.sent,f=g.default,E.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=E.sent,y=j.default,E.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=E.sent,S=i.Button,E.next=26,Promise.resolve().then(e.t.bind(e,67294,19));case 26:return O=E.sent,C=O.useState,b=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],D=function(){var W=C("1"),V=P()(W,2),U=V[0],z=V[1];return p.createElement(y,{search:{schema:d,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:U,items:b,onChange:z},leftExtraContent:function(w){var X=w.loading;return p.createElement(S,{disabled:X},"\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(w){var X=w.loading;return p.createElement(S,{disabled:X},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:m},request:function(){var Z=I()(h()().mark(function X(se){var te;return h()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,n();case 2:return te=f(se.pageSize),xe.abrupt("return",{data:te,total:100});case 4:case"end":return xe.stop()}},X)}));function w(X){return Z.apply(this,arguments)}return w}()})},E.abrupt("return",{default:D});case 31:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":B,antd:u,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var a=I()(h()().mark(function n(){var r,d=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,d));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}}}},23915:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return u}});var R=e(97857),t=e.n(R),h=e(15009),L=e.n(h),P=e(99289),H=e.n(P),I=e(67294),p=e(87922),N=e(48201),x=e(67247),B=e(38959),A=e(71856),$=e(68666),_=e(27164),T=e(6271),v=e(41989),u={"examples-search-table-react-060-value-type-demo-0":{component:I.memo(I.lazy(H()(L()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S,O,C;return L()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return a=D.sent,o=a.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return n=D.sent,r=n.default,D.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return d=D.sent,l=d.sleep,D.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return m=D.sent,g=m.default,D.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return f=D.sent,j=f.default,D.next=22,Promise.resolve().then(e.bind(e,27164));case 22:return y=D.sent,i=y.default,D.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return S=D.sent,O=S.default,C=function(){return I.createElement(o,{locale:r},I.createElement(O,{search:{schema:g},table:{columns:j,showRowNumber:!0,sortMode:"local-all"},request:function(){var E=H()(L()().mark(function W(V){var U;return L()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:return U=i(V.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},W)}));function K(W){return E.apply(this,arguments)}return K}()}))},D.abrupt("return",{default:C});case 30:case"end":return D.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":$,"./helpers/createDataSource-vt.ts":_,"./helpers/columns-value-type.ts":T,antd:N,"antd/locale/zh_CN":x,"@examples/utils":B,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":T},renderOpts:{compile:function(){var s=H()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-search-table-react-060-value-type-demo-1":{component:I.memo(I.lazy(H()(L()().mark(function s(){var a,o,n,r,d,l,m,g,f,j;return L()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return a=i.sent,o=a.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return n=i.sent,r=n.default,i.next=10,Promise.resolve().then(e.bind(e,27164));case 10:return d=i.sent,l=d.default,i.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return m=i.sent,g=m.default,f=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u5F69\u8272\u6807\u7B7E",dataIndex:"tags",valueType:function(O){return{type:"tags",color:Array.isArray(O.tags)?"blue":"green"}}}],j=function(){return I.createElement(g,{search:{schema:r},table:{columns:f,sortMode:"local-all"},request:function(){var O=H()(L()().mark(function b(D){var M;return L()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return M=l(D.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},b)}));function C(b){return O.apply(this,arguments)}return C}()})},i.abrupt("return",{default:j});case 19:case"end":return i.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":_,"./helpers/schema.ts":$,"@examples/utils":B,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var s=H()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-search-table-react-060-value-type-demo-2":{component:I.memo(I.lazy(H()(L()().mark(function s(){var a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D,M,E;return L()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return a=W.sent,o=a.default,W.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=W.sent,r=n.ConfigProvider,d=n.Tag,W.next=11,Promise.resolve().then(e.bind(e,67247));case 11:return l=W.sent,m=l.default,W.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return g=W.sent,f=g.sleep,W.next=19,Promise.resolve().then(e.bind(e,68666));case 19:return j=W.sent,y=j.default,W.next=23,Promise.resolve().then(e.bind(e,27164));case 23:return i=W.sent,S=i.default,W.next=27,Promise.resolve().then(e.bind(e,71856));case 27:return O=W.sent,C=O.default,b=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],D={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},M={code:function(U){var z=U.value;return I.createElement(o,{value:z,language:"js"})},"deploy-status":function(U){var z=U.value,Z=D[z];return I.createElement("div",null,I.createElement("span",{style:t()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},Z.style)}),Z.text)},"deploy-status-tag":function(U){var z=U.record,Z=z.deploy_status,w=D[Z];return I.createElement(d,{color:w.color},w.text)}},E=function(){return I.createElement(r,{locale:m},I.createElement(C,{search:{schema:y},table:{columns:b,showRowNumber:!0,sortMode:"local-all",registerValueType:M},request:function(){var U=H()(L()().mark(function Z(w){var X;return L()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,f();case 2:return X=S(w.pageSize),te.abrupt("return",{data:X,total:100});case 4:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()}))},W.abrupt("return",{default:E});case 34:case"end":return W.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":_,"./helpers/schema.ts":$,"@examples/components/SyntaxHighlighter":v,antd:N,"antd/locale/zh_CN":x,"@examples/utils":B,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var s=H()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},55983:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return o}});var t=e(5574),h=e.n(t),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),N=e.n(p),x=e(67294),B=e(8497),A=e(38959),$=e(71856),_=e(92114),T=e(68666),v=e(362),u=e(27164),s=e(6271),a=e(48201),o={"examples-search-table-react-100-columns-setting-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=b.sent,d=r.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=b.sent,m=l.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=b.sent,f=g.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=b.sent,y=j.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=b.sent,S=i.default,O=function(){return x.createElement(S,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var M=N()(I()().mark(function K(W){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,d();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},b.abrupt("return",{default:O});case 22:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,d=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=D.sent,m=l.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=D.sent,y=j.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=D.sent,S=i.default,O=f.map(function(M,E){var K=P()({},M);return E===0?K.fixed="left":E===f.length-1&&(K.fixed="right"),K}),C=function(){return x.createElement(S,{search:{schema:m},title:{showSetting:!0},table:{columns:O,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var E=N()(I()().mark(function W(V){var U;return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,d();case 2:return U=y(V.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},W)}));function K(W){return E.apply(this,arguments)}return K}()})},D.abrupt("return",{default:C});case 23:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C,b,D,M,E,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,d=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=U.sent,m=l.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,S=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,C=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=U.sent,D=b.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],W=function(){var Z=d("1"),w=h()(Z,2),X=w[0],se=w[1];return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:X,items:K,onChange:se}},table:{columns:X==="1"?y:S,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var te=N()(I()().mark(function xe(he){var ve,Pe;return I()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,m();case 2:return ve=X==="1"?C:D,Pe=ve(he.pageSize),ge.abrupt("return",{data:Pe,total:100});case 5:case"end":return ge.stop()}},xe)}));function ie(xe){return te.apply(this,arguments)}return ie}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":u,"./helpers/columns.ts":v,"./helpers/columns-value-type.ts":s,"./helpers/schema.ts":T,"./helpers/createDataSource.ts":_,react:R||(R=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-3":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C,b,D,M;return I()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=K.sent,d=r.useRef,K.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=K.sent,m=l.sleep,K.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=K.sent,f=g.default,K.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=K.sent,y=j.default,K.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return i=K.sent,S=i.default,K.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return O=K.sent,C=O.default,K.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return b=K.sent,D=b.Button,M=function(){var V=d(null),U=function(){var Z;(Z=V.current)===null||Z===void 0||Z.openSettingModal()};return x.createElement(C,{ref:V,search:{schema:f},titleTop:function(){return x.createElement(D,{type:"primary",onClick:U},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var z=N()(I()().mark(function w(X){var se;return I()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,m();case 2:return se=S(X.pageSize),ie.abrupt("return",{data:se,total:100});case 4:case"end":return ie.stop()}},w)}));function Z(w){return z.apply(this,arguments)}return Z}()})},K.abrupt("return",{default:M});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,react:R||(R=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,antd:a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-4":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,d=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=D.sent,m=l.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=D.sent,y=j.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=D.sent,S=i.default,O="save-setting-unique-id",C=function(){var E=function(){var W=N()(I()().mark(function V(U){return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,d();case 2:localStorage.setItem(O,JSON.stringify(U));case 3:case"end":return Z.stop()}},V)}));return function(U){return W.apply(this,arguments)}}(),K=function(){var W=N()(I()().mark(function V(){var U;return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,d();case 2:if(U=localStorage.getItem(O),!U){Z.next=5;break}return Z.abrupt("return",JSON.parse(U));case 5:case"end":return Z.stop()}},V)}));return function(){return W.apply(this,arguments)}}();return x.createElement(S,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:E,getSetting:K},request:function(){var W=N()(I()().mark(function U(z){var Z;return I()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,d();case 2:return Z=y(z.pageSize),X.abrupt("return",{data:Z,total:100});case 4:case"end":return X.stop()}},U)}));function V(U){return W.apply(this,arguments)}return V}()})},D.abrupt("return",{default:C});case 23:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-5":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C,b,D,M,E,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,d=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=U.sent,m=l.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,S=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,C=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=U.sent,D=b.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],W=function(){var Z=d("1"),w=h()(Z,2),X=w[0],se=w[1],te=function(){var xe=N()(I()().mark(function he(ve,Pe){return I()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,m();case 2:localStorage.setItem(Pe,JSON.stringify(ve));case 3:case"end":return ge.stop()}},he)}));return function(ve,Pe){return xe.apply(this,arguments)}}(),ie=function(){var xe=N()(I()().mark(function he(ve){var Pe;return I()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,m();case 2:if(Pe=localStorage.getItem(ve),!Pe){ge.next=5;break}return ge.abrupt("return",JSON.parse(Pe));case 5:case"end":return ge.stop()}},he)}));return function(ve){return xe.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:X,items:K,onChange:se}},table:{columns:X==="1"?y:S,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(X),onSettingChanged:te,getSetting:ie},request:function(){var xe=N()(I()().mark(function ve(Pe){var fe,ge;return I()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:return Oe.next=2,m();case 2:return fe=X==="1"?C:D,ge=fe(Pe.pageSize),Oe.abrupt("return",{data:ge,total:100});case 5:case"end":return Oe.stop()}},ve)}));function he(ve){return xe.apply(this,arguments)}return he}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":u,"./helpers/schema.ts":T,"./helpers/createDataSource.ts":_,"./helpers/columns-value-type.ts":s,"./helpers/columns.ts":v,react:R||(R=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-6":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,d,l,m,g,f,j,y,i,S,O,C,b,D,M,E,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,d=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=U.sent,m=l.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,S=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,C=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=U.sent,D=b.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],W=function(){var Z=d("1"),w=h()(Z,2),X=w[0],se=w[1],te=d([]),ie=h()(te,2),xe=ie[0],he=ie[1],ve=function(){var ge=N()(I()().mark(function Te(Oe,Ce){return I()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,m();case 2:localStorage.setItem(Ce,JSON.stringify(Oe));case 3:case"end":return Se.stop()}},Te)}));return function(Oe,Ce){return ge.apply(this,arguments)}}(),Pe=function(){var ge=N()(I()().mark(function Te(Oe){var Ce;return I()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,m();case 2:if(Ce=localStorage.getItem(Oe),!Ce){Se.next=5;break}return Se.abrupt("return",JSON.parse(Ce));case 5:case"end":return Se.stop()}},Te)}));return function(Oe){return ge.apply(this,arguments)}}(),fe=function(){var ge=N()(I()().mark(function Te(){return I()().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:return Ce.next=2,m(500);case 2:return Ce.abrupt("return",X==="1"?y:S);case 3:case"end":return Ce.stop()}},Te)}));return function(){return ge.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:X,items:K,onChange:se}},table:{columns:xe,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(X),onSettingChanged:ve,getSetting:Pe},request:function(){var ge=N()(I()().mark(function Oe(Ce){var Ae,Se,_e;return I()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,m();case 2:return Ae=X==="1"?C:D,Se=Ae(Ce.pageSize),Le.next=6,fe();case 6:return _e=Le.sent,he(_e),Le.abrupt("return",{data:Se,total:100});case 9:case"end":return Le.stop()}},Oe)}));function Te(Oe){return ge.apply(this,arguments)}return Te}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":T,"./helpers/createDataSource-vt.ts":u,"./helpers/columns.ts":v,"./helpers/createDataSource.ts":_,"./helpers/columns-value-type.ts":s,react:R||(R=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s},renderOpts:{compile:function(){var n=N()(I()().mark(function d(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},d)}));function r(){return n.apply(this,arguments)}return r}()}}}},47381:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return $}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(90749),I=e(71856),p=e(38959),N=e(74465),x=e(62244),B=e(34200),A=e(24534),$={"examples-search-table-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function _(){var T,v,u,s,a,o,n,r,d,l,m,g,f;return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,34200));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.bind(e,24534));case 6:return u=y.sent,s=u.default,y.next=10,Promise.resolve().then(e.bind(e,62244));case 10:return a=y.sent,o=a.default,y.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return n=y.sent,r=n.default,y.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return d=y.sent,l=d.sleep,y.next=22,Promise.resolve().then(e.bind(e,74465));case 22:return m=y.sent,g=m.default,f=function(){return P.createElement(r,{locale:g,search:{schema:v,labelWidth:"max-content"},title:{showRefresh:!0,showSetting:!0},table:{bordered:!0,columns:s,showRowNumber:!0,actionItems:function(){return[{text:"Edit"},{text:"View"},{text:"Delete",danger:!0}]},actionItemsColumnData:{width:150},summaryText:"Total"},request:function(){var S=L()(t()().mark(function C(b){var D,M;return t()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,l();case 2:return D=o(b.pageSize),M=D.reduce(function(W,V){return W+V.goods_price},0).toFixed(2),K.abrupt("return",{data:D,total:100,summaryData:{goods_price:M}});case 5:case"end":return K.stop()}},C)}));function O(C){return S.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 26:case"end":return y.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-search-table-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import schemaEn from './helpers/schema-en'
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

export default Demo`},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./helpers/createDataSource-en.ts":{type:"FILE",value:e(45876).Z},"./helpers/schema-en.ts":{type:"FILE",value:e(36556).Z},"./helpers/columns-en.ts":{type:"FILE",value:e(71091).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-en.ts":x,"./helpers/schema-en.ts":B,"./helpers/columns-en.ts":A,"@schema-render/search-table-react":I,"@examples/utils":p,"@schema-render/search-table-react/dist/esm/locale/en_US":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-en.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema-en.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-en.ts":A},renderOpts:{compile:function(){var _=L()(t()().mark(function v(){var u,s=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},81706:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(27490),h={}},62111:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(8906),h={}},44307:function(Y,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var t=e(15009),h=e.n(t),L=e(99289),P=e.n(L),H=e(67294),I=e(34451),p=e(38959),N=e(71856),x=e(48201),B=e(67247),A=e(92114),$=e(68666),_={"examples-search-table-react-900-table-editable-demo-0":{component:H.memo(H.lazy(P()(h()().mark(function T(){var v,u,s,a,o,n,r,d,l,m,g,f,j,y,i,S,O,C,b,D;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=E.sent,u=v.useRef,s=v.useMemo,E.next=7,Promise.resolve().then(e.bind(e,38959));case 7:return a=E.sent,o=a.sleep,E.next=11,Promise.resolve().then(e.bind(e,68666));case 11:return n=E.sent,r=n.default,E.next=15,Promise.resolve().then(e.bind(e,92114));case 15:return d=E.sent,l=d.default,E.next=19,Promise.resolve().then(e.bind(e,71856));case 19:return m=E.sent,g=m.default,E.next=23,Promise.resolve().then(e.bind(e,48201));case 23:return f=E.sent,j=f.ConfigProvider,E.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return y=E.sent,i=y.default,E.next=31,Promise.resolve().then(e.bind(e,48201));case 31:return S=E.sent,O=S.InputNumber,C=S.Button,b=S.message,D=function(){var W=u(null),V=s(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(Z,w){return H.createElement(O,{value:Z,onChange:function(se){var te;w.goods_price=se,(te=W.current)===null||te===void 0||te.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),U=function(){var Z;console.log("dataSource:",(Z=W.current)===null||Z===void 0?void 0:Z.getDataSource()),b.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return H.createElement(j,{locale:i},H.createElement(g,{ref:W,search:{schema:r},table:{columns:V},request:function(){var z=P()(h()().mark(function w(X){var se;return h()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,o();case 2:return se=l(X.pageSize),ie.abrupt("return",{data:se,total:100});case 4:case"end":return ie.stop()}},w)}));function Z(w){return z.apply(this,arguments)}return Z}()}),H.createElement(C,{type:"primary",onClick:U},"\u63D0\u4EA4"))},E.abrupt("return",{default:D});case 37:case"end":return E.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,react:R||(R=e.t(H,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:x,"antd/locale/zh_CN":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var T=P()(h()().mark(function u(){var s,a=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},13836:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(24311),h={}},9482:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),t=e(49409),h={}},28629:function(Y,c,e){e.r(c),e.d(c,{demos:function(){return B}});var R=e(15009),t=e.n(R),h=e(99289),L=e.n(h),P=e(67294),H=e(63710),I=e(38959),p=e(71856),N=e(92114),x=e(362),B={"examples-search-table-react-910-no-search-demo-0":{component:P.memo(P.lazy(L()(t()().mark(function A(){var $,_,T,v,u,s,a,o,n;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return $=d.sent,_=$.sleep,d.next=6,Promise.resolve().then(e.bind(e,362));case 6:return T=d.sent,v=T.default,d.next=10,Promise.resolve().then(e.bind(e,92114));case 10:return u=d.sent,s=u.default,d.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return a=d.sent,o=a.default,n=function(){return P.createElement(o,{search:!1,table:{columns:v},request:function(){var m=L()(t()().mark(function f(){var j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_();case 2:return j=s(),i.abrupt("return",{data:j,total:100});case 4:case"end":return i.stop()}},f)}));function g(){return m.apply(this,arguments)}return g}()})},d.abrupt("return",{default:n});case 18:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":N,"./helpers/columns.ts":x,"@examples/utils":I,"@schema-render/search-table-react":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":x},renderOpts:{compile:function(){var A=L()(t()().mark(function _(){var T,v=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function $(){return A.apply(this,arguments)}return $}()}}}},41989:function(Y,c,e){e.r(c),e.d(c,{default:function(){return P}});var R=e(42481),t=e(71353),h=e(85893),L=function(I){var p=I.value,N=I.language,x=N===void 0?"json":N,B=I.style;return(0,h.jsx)("div",{style:B,children:(0,h.jsx)(R.Z,{className:"example-hl",language:x,style:t.Z,children:x==="json"?JSON.stringify(p,null,2):p})})},P=L},78469:function(Y,c,e){e.r(c);var R=e(25035),t=e(55241),h=e(93967),L=e.n(h),P=e(59868),H=e(85893),I=function(N){var x=N.body,B=N.schema,A=N.validator,$=N.required,_=N.prefixClassNames;return(0,H.jsxs)("div",{className:L()(_("item-layout-horizontal"),P.horizontal),children:[(0,H.jsxs)("div",{className:L()(_("item-main"),P.main),children:[(0,H.jsxs)("div",{className:L()(_("item-header"),P.header),children:[$&&(0,H.jsx)("span",{className:L()(_("item-mark"),P.mark),children:"*"}),(0,H.jsx)("span",{className:L()(_("item-title"),P.title),children:B.title}),!!B.titleDescription&&(0,H.jsx)(t.Z,{placement:"top",trigger:"hover",content:B.titleDescription,children:(0,H.jsx)(R.Z,{className:L()(_("item-title-tooltip"),P.titleTooltip)})})]}),(0,H.jsx)("div",{className:L()(_("item-body"),P.body),children:x})]}),(0,H.jsxs)("div",{className:L()(_("item-footer"),P.footer),children:[A.status==="error"&&!!A.message&&(0,H.jsx)("div",{className:L()(_("item-error-msg"),P.errorMsg),children:A.message}),!!B.description&&(0,H.jsx)("div",{className:L()(_("item-desc"),P.desc),children:B.description})]})]})};c.default=I},59868:function(Y,c,e){e.r(c),e.d(c,{body:function(){return o},desc:function(){return r},errorMsg:function(){return d},footer:function(){return n},header:function(){return v},horizontal:function(){return _},main:function(){return T},mark:function(){return s},title:function(){return u},titleTooltip:function(){return a}});var R=e(68400),t=e.n(R),h=e(77525),L,P,H,I,p,N,x,B,A,$,_=(0,h.H)(L||(L=t()([""]))),T=(0,h.H)(P||(P=t()([`
  display: flex;
  align-items: center;
`]))),v=(0,h.H)(H||(H=t()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),u=(0,h.H)(I||(I=t()([`
  word-break: break-all;
`]))),s=(0,h.H)(p||(p=t()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),a=(0,h.H)(N||(N=t()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),o=(0,h.H)(x||(x=t()([`
  flex-grow: 1;
`]))),n=(0,h.H)(B||(B=t()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),r=(0,h.H)(A||(A=t()([`
  margin-top: 6px;
  color: #999;
`]))),d=(0,h.H)($||($=t()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},29298:function(Y,c,e){e.r(c),e.d(c,{desc:function(){return v},errorMsg:function(){return u},footer:function(){return T},header:function(){return B},mark:function(){return $},title:function(){return A},titleTooltip:function(){return _}});var R=e(68400),t=e.n(R),h=e(77525),L,P,H,I,p,N,x,B=(0,h.H)(L||(L=t()([`
  margin-bottom: 8px;
`]))),A=(0,h.H)(P||(P=t()([`
  word-break: break-all;
`]))),$=(0,h.H)(H||(H=t()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),_=(0,h.H)(I||(I=t()([`
  margin-left: 4px;
`]))),T=(0,h.H)(p||(p=t()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),v=(0,h.H)(N||(N=t()([`
  margin-top: 8px;
  color: #999;
`]))),u=(0,h.H)(x||(x=t()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))},2862:function(Y,c,e){e.r(c);var R=e(97857),t=e.n(R),h=e(25278),L=e(13457),P=e(41637),H=e(34041),I=e(55742),p=e(85893),N={InputText:{component:function(B){var A,$=B.schema,_=B.value,T=B.disabled,v=B.readonly,u=B.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(h.Z,t()(t()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:_!=null?_:"",disabled:T,onChange:function(a){return u(a.target.value)}}))}},InputNumber:{component:function(B){var A,$=B.schema,_=B.value,T=B.disabled,v=B.readonly,u=B.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(L.Z,t()(t()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:_,onChange:function(a){return u(a!=null?a:void 0)},disabled:T}))}},TextArea:{component:function(B){var A,$=B.schema,_=B.value,T=B.disabled,v=B.readonly,u=B.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(h.Z.TextArea,t()(t()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:_!=null?_:"",onChange:function(a){return u(a.target.value)},disabled:T}))}},Password:{component:function(B){var A,$=B.schema,_=B.value,T=B.disabled,v=B.readonly,u=B.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(h.Z.Password,t()(t()({placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:_!=null?_:"",onChange:function(a){return u(a.target.value)},disabled:T}))}},Switch:{component:function(B){var A=B.value,$=B.disabled,_=B.onChange;return(0,p.jsx)(P.Z,{checked:A,disabled:$,onChange:function(v){return _(v)}})}},Select:{component:function(B){var A,$,_,T=B.schema,v=B.value,u=B.disabled,s=B.readonly,a=B.onChange,o=(A=($=T.renderOptions)===null||$===void 0?void 0:$.options)!==null&&A!==void 0?A:[];if(s){var n=o.find(function(r){return r.value===v});return(0,p.jsx)("div",{children:n==null?void 0:n.label})}return(0,p.jsx)(H.default,t()(t()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((_=T.title)!==null&&_!==void 0?_:"")},T.renderOptions),{},{value:v,onChange:function(d){return a(d)},disabled:u}))}},Radio:{component:function(B){var A,$,_=B.schema,T=B.value,v=B.disabled,u=B.onChange,s=(A=($=_.renderOptions)===null||$===void 0?void 0:$.options)!==null&&A!==void 0?A:[];return(0,p.jsx)(I.ZP.Group,{value:T,disabled:v,onChange:function(o){return u(o.target.value)},children:s.map(function(a){return(0,p.jsx)(I.ZP,{value:a.value,disabled:a.disabled,children:a.label},a.value)})})}}};c.default=N},40644:function(Y,c,e){e.r(c);var R=e(5574),t=e.n(R),h=e(25035),L=e(52162),P=e(55241),H=e(47221),I=e(67294),p=e(85893),N=function(B){var A=B.schema,$=B.path,_=B.objectStyle,T=(0,I.useState)(!1),v=t()(T,2),u=v[0],s=v[1],a=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{children:A.title}),!!A.titleDescription&&(0,p.jsx)(P.Z,{placement:"top",trigger:"hover",content:A.titleDescription,children:(0,p.jsx)(h.Z,{style:{marginLeft:4}})})]});return(0,p.jsx)(H.Z,{bordered:!1,ghost:!0,activeKey:String(u),onChange:function(){return s(!u)},children:(0,p.jsx)(H.Z.Panel,{header:a,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,p.jsx)("div",{style:_,children:(0,p.jsx)(L.Z,{schema:A,path:$})})},"false")})};c.default={formItem:N}},33517:function(Y,c,e){e.r(c);var R=e(25035),t=e(52162),h=e(55241),L=e(85893),P={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},H=function(p){var N=p.schema,x=p.path,B=p.objectStyle;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{style:P,children:[(0,L.jsx)("span",{children:N.title}),!!N.titleDescription&&(0,L.jsx)(h.Z,{placement:"top",trigger:"hover",content:N.titleDescription,children:(0,L.jsx)(R.Z,{style:{marginLeft:4}})})]}),(0,L.jsx)("div",{style:B,children:(0,L.jsx)(t.Z,{schema:N,path:x})})]})};c.default={formItem:H}},47621:function(Y,c,e){e.r(c),c.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}},37418:function(Y,c,e){e.r(c),e.d(c,{default:function(){return H}});var R=e(67294),t=e(85893),h={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},L=function(p){var N=p.value,x=p.sPath,B=p.onChange,A=function(){var _=String(Math.random()).slice(2,6),T={bank_id:"id_".concat(_),bank_account:"111222333".concat(_),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(_),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(_,"\u652F\u884C")};B(T[x],{extra:T})};return(0,t.jsx)("div",{style:h,onClick:A,children:N?(0,t.jsx)("div",{children:N}):(0,t.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},P={component:L},H={BankSelect:P}},14953:function(Y,c,e){e.r(c);var R=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],t={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:R,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:R}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:R}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:R}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};c.default=t},97609:function(Y,c,e){e.r(c),e.d(c,{builtinRenderers:function(){return P}});var R=e(68400),t=e.n(R),h=e(77525),L,P=(0,h.H)(L||(L=t()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))},36641:function(Y,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];c.default=R},77095:function(Y,c,e){e.r(c),e.d(c,{default:function(){return h}});var R=e(27484),t=e.n(R);function h(){for(var L=[],P=0;P<10;P++){var H=String(Math.random()).slice(2,6),I=Math.random()>.5?1:2,p=t()().format("YYYY-MM-DD HH:mm:ss");L.push({key:Math.random(),supplier_name:"".concat(H,"\u6709\u9650\u516C\u53F8"),supplier_code:H,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:p,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:I===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:I===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:p})}return L}},35719:function(Y,c,e){e.r(c);var R=e(67294),t=e(85893),h={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},L=function(H){var I=H.value,p=H.sPath,N=H.onChange,x=function(){var A=String(Math.random()).slice(2,6),$={bank_id:"id_".concat(A),bank_account:"111222333".concat(A),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(A),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(A,"\u652F\u884C")};N($[p],{extra:$})};return(0,t.jsx)("div",{style:h,onClick:x,children:I?(0,t.jsx)("div",{children:I}):(0,t.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};c.default={component:L}},57864:function(Y,c,e){e.r(c);var R=e(52162),t=e(85893),h=function(P){var H=P.schema,I=P.path,p=P.objectStyle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"section-title",children:H.title}),(0,t.jsx)("div",{style:p,children:(0,t.jsx)(R.Z,{schema:H,path:I})})]})};c.default={formItem:h}},9680:function(Y,c,e){e.r(c);var R=e(85893),t=function(L){var P=L.schema;return(0,R.jsx)("div",{className:"section-title",children:P.title})};c.default={formItem:t}},24534:function(Y,c,e){e.r(c);var R=[{title:"Supplier Name",dataIndex:"supplier_name",width:150,fixed:"left"},{title:"Supplier Code",dataIndex:"supplier_code",width:150},{title:"Description",dataIndex:"description",valueType:function(){return{type:"long-text-modal",maxLength:20}}},{title:"Bill No",dataIndex:"bill_no",width:130},{title:"Bill Type",dataIndex:"bill_type"},{title:"Bill Date",dataIndex:"bill_date",width:120},{title:"Bill Status",dataIndex:"bill_status"},{title:"Operator",dataIndex:"operator"},{title:"Goods Name",dataIndex:"goods_name",width:130},{title:"Goods Price",dataIndex:"goods_price"},{title:"Goods Code",dataIndex:"goods_code",width:130},{title:"Goods Category",dataIndex:"goods_category"},{title:"Goods Date",dataIndex:"goods_date",width:120,fixed:"right"}];c.default=R},23786:function(Y,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];c.default=R},6271:function(Y,c,e){e.r(c);var R=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(h,L){return{type:"long-text",maxLength:20,color:L%2?"#1677ff":"#000"}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(){return{type:"long-text-modal",maxLength:20,width:500}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];c.default=R},362:function(Y,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];c.default=R},62244:function(Y,c,e){e.r(c),e.d(c,{default:function(){return h}});var R=e(27484),t=e.n(R);function h(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,P=[],H=0;H<L;H++){var I=String(Math.random()).slice(2,6),p=Math.random()>.5?1:2,N=t()().format("DD/MM/YYYY HH:mm:ss"),x="id_".concat(H);P.push({key:x,id:x,supplier_name:"".concat(I," Co.,Ltd."),supplier_code:I,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"Purchase Order":"Return Order",bill_date:N,bill_status:Math.random()>.5?"Submitted":"To be submitted",operator:Math.random()>.5?"Tom":"Lily",goods_name:p===1?"10 red roses":"Live bass",goods_code:"G".concat(Date.now()),goods_category:p===1?"Fruits & Flowers":"Aquatic Products",goods_date:N,goods_price:p===1?19.9:22.8,description:"SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems."})}return P}},27164:function(Y,c,e){e.r(c),e.d(c,{default:function(){return t}});function R(h,L){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,H=Math.random()*(L-h)+h;return P?Math.floor(H):H}function t(){for(var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,L=[],P=0;P<h;P++){var H="id_".concat(P);L.push({key:H,id:H,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:R(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?R(1e3,1e5):R(0,1e3),percent:R(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:R(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return L}},92114:function(Y,c,e){e.r(c),e.d(c,{default:function(){return h}});var R=e(27484),t=e.n(R);function h(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,P=arguments.length>1?arguments[1]:void 0,H=[],I=0;I<L;I++){var p=String(Math.random()).slice(2,6),N=Math.random()>.5?1:2,x=t()().format("YYYY-MM-DD HH:mm:ss"),B="id_".concat(I);H.push({key:B,id:B,supplier_name:"".concat(p,"\u6709\u9650\u516C\u53F8"),supplier_code:p,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:x,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:N===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:N===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:x,goods_price:N===1?19.9:22.8})}return P&&H.sort(function(A,$){var _=String(A[P.sort_field]),T=String($[P.sort_field]);return P.sort_order==="ascend"?_.localeCompare(T):T.localeCompare(_)}),H}},34200:function(Y,c,e){e.r(c);var R={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_type:{title:"Bill Type",renderType:"Select",renderOptions:{options:[{label:"Purchase Order",value:1},{label:"Inbound Order",value:2},{label:"Return Order",value:3}]}},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"},goods_category:{title:"Goods Category",renderType:"Select",renderOptions:{options:[{label:"Fruits & Flowers",value:1},{label:"Aquatic Products",value:2},{label:"Grains & Oils & Seasoning",value:3}]}}}};c.default=R},68666:function(Y,c,e){e.r(c);var R={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};c.default=R},77525:function(Y,c,e){e.d(c,{H:function(){return h}});var R=e(80834),t=(0,R.Z)({key:"schema-render"}),h=t.css},38959:function(Y,c,e){e.r(c),e.d(c,{sleep:function(){return R}});function R(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(h){return setTimeout(h,t)})}},57558:function(Y,c,e){var R=e(67294),t=(0,R.createContext)({});c.Z=t},57547:function(Y,c,e){e.d(c,{Z:function(){return v}});var R=e(12444),t=e.n(R),h=e(72004),L=e.n(h),P=e(25098),H=e.n(P),I=e(31996),p=e.n(I),N=e(26037),x=e.n(N),B=e(9783),A=e.n(B),$=e(67294),_=e(28e3),T=e(85893),v=function(u){p()(a,u);var s=x()(a);function a(){var o;t()(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return o=s.call.apply(s,[this].concat(r)),A()(H()(o),"state",{hasError:!1,error:Error()}),o}return L()(a,[{key:"getFallback",value:function(){var n,r=this.state.error,d=this.props.catchErrorTips;return d==="silent"?null:(0,_.mf)(d)?d(r):(0,T.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(n=r==null?void 0:r.stack)!==null&&n!==void 0?n:String(r)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0,error:n}}}]),a}($.Component)},95399:function(Y,c,e){e.d(c,{SY:function(){return h},f1:function(){return t},r6:function(){return R}});var R=function(L){return L.success="success",L.warning="warning",L.error="error",L}({}),t=[R.success,R.warning,R.error],h=function(L){return L.normal="normal",L.autoFill="autoFill",L.autoFit="autoFit",L}({})},16223:function(Y,c,e){var R=e(67294),t=e(38812),h=function(P,H){var I=(0,t.Z)(P);(0,R.useEffect)(function(){I.current()},H)};c.Z=h},56432:function(Y,c,e){var R=e(67294),t=e(23060),h=e(38812),L=e(37091);function P(H,I){var p,N=(0,h.Z)(H),x=(p=I==null?void 0:I.wait)!==null&&p!==void 0?p:1e3,B=(0,R.useMemo)(function(){return(0,t.Ds)(function(){return N.current.apply(N,arguments)},x)},[]);return(0,L.Z)(function(){return B.cancel()}),{run:B,cancel:B.cancel}}c.Z=P},4559:function(Y,c,e){e.d(c,{Z:function(){return L}});var R=e(5574),t=e.n(R),h=e(67294);function L(){var P=(0,h.useReducer)(function(N){return N+1},0),H=t()(P,2),I=H[0],p=H[1];return{forceUpdate:p}}},38812:function(Y,c,e){var R=e(67294);function t(h){var L=(0,R.useRef)(h);return L.current=h,L}c.Z=t},24317:function(Y,c,e){e.d(c,{Z:function(){return t}});var R=e(67294);function t(h){var L=(0,R.useRef)(h),P=(0,R.useRef)();return L.current=(0,R.useMemo)(function(){return h},[h]),P.current||(P.current=function(){for(var H=arguments.length,I=new Array(H),p=0;p<H;p++)I[p]=arguments[p];return L.current.apply(this,I)}),P.current}},85908:function(Y,c,e){var R=e(67294),t=function(L){(0,R.useEffect)(function(){return L()},[])};c.Z=t},90808:function(Y,c,e){e.d(c,{Z:function(){return h}});var R=e(67294),t=e(57558);function h(){var L=(0,R.useContext)(t.Z);return L}},37091:function(Y,c,e){var R=e(67294),t=e(38812),h=function(P){var H=(0,t.Z)(P);(0,R.useEffect)(function(){return function(){H.current()}},[])};c.Z=h},74072:function(Y,c,e){e.r(c),e.d(c,{RendererDistributor:function(){return E.Z},RendererExecutor:function(){return K.Z},RendererIterator:function(){return l.Z},default:function(){return U},useAsyncEffect:function(){return O.Z},useCoreValue:function(){return _},useDebounceFn:function(){return C.Z},useForceUpdate:function(){return x.Z},useLatest:function(){return b.Z},useMemoizedFn:function(){return B.Z},useMounted:function(){return D.Z},useUnmount:function(){return M.Z},utils:function(){return R}});var R={};e.r(R),e.d(R,{classNames:function(){return g.Z},classNamesWithPrefix:function(){return H.Rk},cloneDeep:function(){return N.Xh},debounce:function(){return N.Ds},dropRight:function(){return N.j7},find:function(){return N.sE},get:function(){return N.U2},hasOwnProperty:function(){return H.nr},isArray:function(){return I.kJ},isBoolean:function(){return I.jn},isFunction:function(){return I.mf},isMatch:function(){return N.BD},isNil:function(){return I.kK},isNull:function(){return I.Ft},isNumber:function(){return I.hj},isObject:function(){return I.Kn},isPlainObject:function(){return I.PO},isString:function(){return I.HD},isUndefined:function(){return I.o8},logger:function(){return W.Z},mapKeys:function(){return N.Cw},omit:function(){return N.CE},pick:function(){return N.ei},positionedOffset:function(){return s},set:function(){return N.t8},templateCompiled:function(){return H.dr},toLower:function(){return N.t$},traverseSchema:function(){return V.Z},typeChecking:function(){return I.DN}});var t=e(97857),h=e.n(t),L=e(67294),P=e(57547),H=e(52038),I=e(28e3),p=e(49552),N=e(23060),x=e(4559),B=e(24317),A=function(){var Z=(0,L.useRef)(!1);return(0,L.useEffect)(function(){return Z.current=!1,function(){Z.current=!0}},[]),Z},$=A;function _(z){var Z,w=(0,L.useRef)((Z=z.defaultValue)!==null&&Z!==void 0?Z:{}),X=$(),se=(0,x.Z)(),te=se.forceUpdate,ie=(0,H.nr)(z,"value");if(ie){var xe;w.current=(xe=z.value)!==null&&xe!==void 0?xe:{}}var he=(0,B.Z)(function(Te,Oe){if(!X.current){var Ce,Ae,Se,_e=(0,p.P)(Oe.path),je=h()(h()({},Oe),{},{sPath:_e}),Le=(Ce=z.watch)===null||Ce===void 0?void 0:Ce[_e];(0,I.mf)(Le)&&Le(Te,je),w.current=Te,ie||te(),(Ae=z.onItemChange)===null||Ae===void 0||Ae.call(z,je),(Se=z.onChange)===null||Se===void 0||Se.call(z,Te,je)}}),ve=(0,B.Z)(function(Te){var Oe=(0,N.t8)(h()({},w.current),Te.path,Te.value);he(Oe,Te)}),Pe=(0,B.Z)(function(){return w.current}),fe=(0,B.Z)(function(Te){he(Te,{path:[],value:void 0})}),ge=(0,B.Z)(function(){fe({})});return{value:w.current,valueRef:w,onChange:ve,getValue:Pe,setValue:fe,resetValue:ge}}var T=e(95399),v=["320px","1fr"];function u(z){var Z=z.layout,w=z.layoutMinMax,X=z.layoutColumnGap,se=z.layoutRowGap,te=w==null?void 0:w[0],ie=w==null?void 0:w[1],xe=(0,L.useMemo)(function(){if(Z===T.SY.normal)return"repeat(24, 1fr)";var ve=Z===T.SY.autoFill?"auto-fill":"auto-fit",Pe=(0,p.e)(te!=null?te:v[0]),fe=(0,p.e)(ie!=null?ie:v[1]);return"repeat(".concat(ve,", minmax(").concat(Pe,", ").concat(fe,"))")},[Z,te,ie]),he={display:"grid",gridTemplateColumns:xe,columnGap:X,rowGap:se};return he}function s(z,Z){if(!z||!Z)return{left:0,top:0};for(var w=0,X=0,se=z;se&&se!==Z;)w+=se.offsetLeft,X+=se.offsetTop,se=se.offsetParent;return{left:w,top:X}}var a=e(36578);function o(z,Z){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(z){var X=w.positionedElement,se=w.xAxis,te=w.yAxis,ie=w.behavior,xe=ie===void 0?"smooth":ie,he=w.gap,ve=he===void 0?0:he,Pe=X||Z;if(Pe){var fe=s(z,Pe);Pe.scrollTo({left:se===!1?void 0:fe.left+ve,top:te===!1?void 0:fe.top+ve,behavior:xe})}}}function n(z){var Z=z.ref,w=z.rootElementRef,X=z.rootContextRef,se=z.getValue,te=z.setValue,ie=z.resetValue,xe=(0,B.Z)(function(){return(0,a.Ze)((0,N.ei)(X.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),he=(0,B.Z)(function(ge){var Te,Oe=(Te=X.current)===null||Te===void 0?void 0:Te.rendererStorage;if(Oe&&ge){var Ce=(0,I.kJ)(ge)?(0,p.P)(ge):ge;return Oe[Ce]}}),ve=(0,B.Z)(function(ge){var Te,Oe=(Te=X.current)===null||Te===void 0?void 0:Te.rendererStorage;if(Oe){var Ce=ge?(0,I.HD)(ge)?[ge]:ge:Object.keys(Oe);Ce.forEach(function(Ae){var Se;(Se=Oe[Ae])===null||Se===void 0||Se.setValidatorState({status:T.r6.success})})}}),Pe=(0,B.Z)(function(){return w.current}),fe=(0,B.Z)(function(ge,Te){var Oe;return o((Oe=he(ge))===null||Oe===void 0?void 0:Oe.getRootElement(),Pe(),Te)});(0,L.useImperativeHandle)(Z,function(){return{validate:xe,resetError:ve,setValue:te,resetValue:ie,getValue:se,getRootElement:Pe,scrollTo:fe,findItem:he}},[])}var r=e(39214),d=e(57558),l=e(52162),m=e(97192),g=e(18474),f=e(85893),j={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:v,disabled:!1,readonly:!1,validators:{},userCtx:{}},y=(0,L.forwardRef)(function(z,Z){m.Z.falsy(z.schema,"missing schema."),m.Z.falsy(z.itemLayout,"missing itemLayout.");var w=h()(h()({},j),z),X=(0,L.useRef)(null),se=(0,L.useRef)({}),te=_(w),ie=te.value,xe=te.onChange,he=te.getValue,ve=te.setValue,Pe=te.resetValue,fe=(0,L.useMemo)(function(){return h()(h()({},r.Z),w.locale)},[w.locale]),ge=(0,L.useMemo)(function(){return(0,N.Cw)(w.renderers,function(Ce,Ae){return Ae.toLowerCase()})},[w.renderers]),Te=u(w),Oe=se.current=h()(h()({},(0,N.ei)(w,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:Te,renderers:ge,rootSchema:w.schema,rootValue:ie,locale:fe,rendererStorage:{},onChange:xe,prefixClassNames:function(){for(var Ae=arguments.length,Se=new Array(Ae),_e=0;_e<Ae;_e++)Se[_e]=arguments[_e];return H.Rk.apply(void 0,[w.prefixCls].concat(Se))}});return n({ref:Z,rootElementRef:X,rootContextRef:se,getValue:he,setValue:ve,resetValue:Pe}),(0,f.jsx)(d.Z.Provider,{value:Oe,children:(0,f.jsx)("div",{className:(0,g.Z)(Oe.prefixCls,w.className,{"is-disabled":Oe.disabled,"is-readonly":Oe.readonly}),ref:X,style:h()(h()({position:"relative"},Te),w.style),children:(0,f.jsx)(l.Z,{schema:Oe.rootSchema,path:[]})})})}),i=(0,L.forwardRef)(function(z,Z){return(0,f.jsx)(P.Z,{catchErrorTips:z.catchErrorTips,children:(0,f.jsx)(y,h()(h()({},z),{},{ref:Z}))})}),S=i,O=e(16223),C=e(56432),b=e(38812),D=e(85908),M=e(37091),E=e(82535),K=e(94963),W=e(93047),V=e(44081),U=S},78484:function(Y,c,e){e.r(c),c.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}},39214:function(Y,c){c.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},82535:function(Y,c,e){var R=e(97857),t=e.n(R),h=e(90808),L=e(97192),P=e(8465),H=e(94963),I=e(85893),p=function(x){var B=(0,h.Z)(),A=x.schema;L.Z.falsy(A,"schema is required in RendererDistributor Props.");var $=(0,P.j)(B.renderers,A.renderType);return $?(0,I.jsx)(H.Z,t()(t()({},x),{},{renderer:$})):null};c.Z=p},94963:function(Y,c,e){var R=e(15009),t=e.n(R),h=e(97857),L=e.n(h),P=e(99289),H=e.n(P),I=e(5574),p=e.n(I),N=e(67294),x=e(57547),B=e(95399),A=e(56432),$=e(24317),_=e(90808),T=e(18474),v=e(49552),u=e(23060),s=e(36578),a=e(85893),o=function(r){var d=r.schema,l=r.path,m=r.renderer,g=r.gridColumn,f=(0,_.Z)(),j=(0,N.useState)({status:B.r6.success}),y=p()(j,2),i=y[0],S=y[1],O=(0,v.P)(l),C=(0,N.useRef)(null);f.rendererStorage[O]=(0,N.useMemo)(function(){return{setValidatorState:function(z){return S(z)},getRootElement:function(){return C.current}}},[S]);var b=(0,A.Z)(function(){var U=H()(t()().mark(function z(Z){var w;return t()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,(0,s.Q7)({schema:d,rootValue:f.rootValue,userCtx:f.userCtx,path:l,value:Z,locale:f.locale,globalValidators:f.validators,rendererValidator:m.validator,rendererValidatorParams:E});case 2:w=se.sent,S(L()({},w));case 4:case"end":return se.stop()}},z)}));return function(z){return U.apply(this,arguments)}}(),{wait:300}),D=b.run,M=(0,$.Z)(function(){var U=H()(t()().mark(function z(Z){var w,X=arguments;return t()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:w=X.length>1&&X[1]!==void 0?X[1]:{},f.onChange({path:l,value:Z,extra:w.extra}),w.triggerValidator!==!1?D(Z):S({status:B.r6.success});case 3:case"end":return te.stop()}},z)}));return function(z){return U.apply(this,arguments)}}()),E=(0,s.cy)(L()({schema:d,path:l,value:(0,u.U2)(f.rootValue,l)},(0,u.ei)(f,"disabled","readonly","rootValue","userCtx","locale"))),K=L()(L()({},E),{},{validator:i,objectStyle:f.objectStyle,onChange:M}),W=K,V=function(){var z=L()(L()({},(0,u.ei)(K,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:f.prefixClassNames});if(K.readonly){if(m.readonlyFormItem)return(0,N.createElement)(m.readonlyFormItem,W);if(m.readonlyComponent)return(0,N.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(m.readonlyComponent,K)}))}if(K.disabled){if(m.disabledFormItem)return(0,N.createElement)(m.disabledFormItem,W);if(m.disabledComponent)return(0,N.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(m.disabledComponent,K)}))}if(m.formItem)return(0,N.createElement)(m.formItem,W);if(m.component)return(0,N.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(m.component,K)}))};return(0,a.jsx)("div",{ref:C,className:(0,T.Z)(f.prefixClassNames("form-item","item-".concat(d.renderType)),d.className,{"is-required":K.required,"is-disabled":K.disabled,"is-readonly":K.readonly}),style:L()({gridColumn:g},d.style),children:(0,a.jsx)(x.Z,{catchErrorTips:f.catchErrorTips,children:V()})})};c.Z=o},52162:function(Y,c,e){var R=e(97857),t=e.n(R),h=e(19632),L=e.n(h),P=e(67294),H=e(95399),I=e(90808),p=e(28e3),N=e(49552),x=e(27597),B=e(23060),A=e(82535),$=e(85893),_=function(v){var u=v.schema,s=v.path,a=(0,I.Z)(),o=a.rootValue,n=a.userCtx,r=s.length?(0,B.U2)(o,s):o,d=1,l=Object.keys(u.properties).map(function(m){var g=u.properties[m],f=(0,x.A)({statement:g.hidden,parentValue:r,rootValue:o,userCtx:n});if(f)return null;var j=[].concat(L()(s),[m]),y=(0,N.P)(j),i;if(a.layout===H.SY.normal){var S=d,O=25;!(0,p.hj)(g.span)&&!(0,p.hj)(g.spanStart)?S=d=1:(g.spanStart&&(S=g.spanStart,d=S),g.span&&(O=S+g.span,d=O)),i="".concat(S,"/").concat(O)}else(0,p.hj)(g.spanStart)&&(i="".concat(g.spanStart,"/auto"));var C={schema:g,path:j,gridColumn:i};return(0,$.jsx)(A.Z,t()({},C),y)});return(0,$.jsx)(P.Fragment,{children:l})};c.Z=_},97192:function(Y,c){function e(h,L){h&&t(L)}function R(h,L){!h&&t(L)}function t(h){throw new Error("[AssertionError]: ".concat(h!=null?h:"Failed"))}c.Z={truthy:e,falsy:R,fail:t}},52038:function(Y,c,e){e.d(c,{RI:function(){return P},Rk:function(){return I},dr:function(){return H},nr:function(){return p}});var R=e(28e3),t=e(18474),h=e(93047);function L(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function P(x){if(!(0,R.HD)(x))return null;try{return new RegExp(x)}catch(B){h.Z.warn(B)}return null}function H(x){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return x?x.replace(/\$\{((\s|.)+?)?\}/g,function(){var A,$=(A=arguments.length<=1?void 0:arguments[1])===null||A===void 0?void 0:A.trim();if(!$)return"";var _=B[$];return _!=null?_:""}):""}function I(x){for(var B=arguments.length,A=new Array(B>1?B-1:0),$=1;$<B;$++)A[$-1]=arguments[$];if(!A.length)return"";var _=t.Z.apply(void 0,A).trim();if(!_)return"";var T=_.split(" ").map(function(v){return"".concat(x,"-").concat(v)});return T.join(" ")}function p(x,B){return Object.prototype.hasOwnProperty.call(x,B)}function N(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(B){return setTimeout(B,x)})}},28e3:function(Y,c,e){e.d(c,{DN:function(){return P},Ft:function(){return _},HD:function(){return x},Kn:function(){return p},PO:function(){return N},hj:function(){return B},jn:function(){return A},kJ:function(){return I},kK:function(){return T},mf:function(){return H},o8:function(){return $}});var R=e(52677),t=e.n(R),h=Function.prototype.toString,L=h.call(Object);function P(v,u){return Object.prototype.toString.call(v)===u}function H(v){return P(v,"[object Function]")||P(v,"[object AsyncFunction]")}function I(v){return Array.isArray(v)}function p(v){var u=t()(v);return v!==null&&(u==="object"||u==="function")}function N(v){if(!P(v,"[object Object]"))return!1;var u=Object.getPrototypeOf(v);if(u===null)return!0;var s=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return typeof s=="function"&&s instanceof s&&h.call(s)===L}function x(v){return typeof v=="string"}function B(v){return typeof v=="number"}function A(v){return typeof v=="boolean"}function $(v){return v===void 0}function _(v){return v===null}function T(v){return $(v)||_(v)}},18474:function(Y,c,e){var R=e(52677),t=e.n(R),h={}.hasOwnProperty;function L(){for(var P=[],H=0;H<arguments.length;H++){var I=arguments[H];if(I){var p=t()(I);if(p==="string"||p==="number")P.push(I);else if(Array.isArray(I)){if(I.length){var N=L.apply(null,I);N&&P.push(N)}}else if(p==="object"){if(I.toString!==Object.prototype.toString&&!I.toString.toString().includes("[native code]")){P.push(I.toString());continue}for(var x in I)h.call(I,x)&&I[x]&&P.push(x)}}}return P.join(" ")}c.Z=L},93047:function(Y,c){var e={warn:function(){var t;(t=console).warn.apply(t,arguments)}};c.Z=e},49552:function(Y,c,e){e.d(c,{P:function(){return t},e:function(){return h}});var R=e(28e3);function t(L){return L.join(".")}function h(L){return(0,R.hj)(L)?"".concat(String(L),"px"):L}},8465:function(Y,c,e){e.d(c,{j:function(){return R}});function R(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1?arguments[1]:void 0;if(h){var L=t[h.toLowerCase()];if(L&&(L.formItem||L.component))return L}}},27597:function(Y,c,e){e.d(c,{A:function(){return L},o:function(){return P}});var R=e(23060),t=e(28e3),h=e(93047);function L(H){var I=H.statement,p=H.parentValue,N=p===void 0?{}:p,x=H.rootValue,B=x===void 0?{}:x,A=H.userCtx,$=A===void 0?{}:A;if((0,t.jn)(I))return I;if((0,t.HD)(I))try{var _=new Function("$","$root","$userCtx","return ".concat(I));return!!_(N,B,$)}catch(T){h.Z.warn(T)}return!1}function P(H){var I=H.statement,p=H.path,N=H.rootValue,x=H.userCtx,B=(0,R.j7)(p);return L({statement:I,parentValue:B.length?(0,R.U2)(N,B):N,rootValue:N,userCtx:x})}},23060:function(Y,c,e){e.d(c,{BD:function(){return _},CE:function(){return B},Cw:function(){return N},Ds:function(){return a},U2:function(){return T},Xh:function(){return p},ei:function(){return x},j7:function(){return A},sE:function(){return $},t$:function(){return o},t8:function(){return s}});var R=e(97857),t=e.n(R),h=e(52677),L=e.n(h),P=e(97192),H=e(52038),I=e(28e3);function p(n){var r,d,l;if(Array.isArray(n)){for(d=Array(r=n.length);r--;)d[r]=(l=n[r])&&L()(l)==="object"?p(l):l;return d}if(Object.prototype.toString.call(n)==="[object Object]"){d={};for(r in n)r==="__proto__"?Object.defineProperty(d,r,{value:p(n[r]),configurable:!0,enumerable:!0,writable:!0}):d[r]=(l=n[r])&&L()(l)==="object"?p(l):l;return d}return n}function N(n,r){if(!(0,I.PO)(n)||!(0,I.mf)(r))return{};var d=Object.keys(n),l={};return d.map(function(m){var g=n[m],f=r(g,m);l[f]=g}),l}function x(n){var r={};if(!(0,I.PO)(n))return r;for(var d=arguments.length,l=new Array(d>1?d-1:0),m=1;m<d;m++)l[m-1]=arguments[m];return l.map(function(g){(0,H.nr)(n,g)&&(r[g]=n[g])}),r}function B(n){if(!(0,I.PO)(n))return{};for(var r=t()({},n),d=arguments.length,l=new Array(d>1?d-1:0),m=1;m<d;m++)l[m-1]=arguments[m];return l.map(function(g){(0,H.nr)(n,g)&&delete r[g]}),r}function A(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,I.kJ)(n)?n.slice(0,r>0?r*-1:n.length):[]}function $(n,r){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,I.kJ)(n))for(var l=n.length,m=d;m<l;m++){var g=n[m];if((0,I.mf)(r)){if(r(g))return g}else if((0,I.PO)(r)&&_(g,r))return g}}function _(n,r){if(!(0,I.PO)(n))return!0;for(var d=Object.keys(r),l=0;l<d.length;l++){var m=d[l];if(!(0,H.nr)(n,m)||r[m]!==n[m])return!1}return!0}function T(n,r){if(!(!(0,I.PO)(n)||!(0,I.kJ)(r))){for(var d=n,l=0;l<r.length;l++){var m=r[l];if(d)d=d[m];else return}return d}}var v=/^(?:0|[1-9]\d*)$/;function u(n){return(0,I.hj)(n)||v.test(n)}function s(n,r,d){if(!(0,I.PO)(n))return n;for(var l=r.length,m=l-1,g=-1,f=n;f!==null&&++g<l;){var j=r[g],y=d;if(g!==m){var i=f[j];y=(0,I.Kn)(i)?i:u(r[g+1])?[]:{}}f[j]=y,f=f[j]}return n}function a(n,r){(0,I.mf)(n)||P.Z.fail("Expected a function");var d;function l(){for(var m=this,g=arguments.length,f=new Array(g),j=0;j<g;j++)f[j]=arguments[j];clearTimeout(d),d=setTimeout(function(){return n.apply(m,f)},r)}return l.cancel=function(){clearTimeout(d)},l}function o(n){return(0,I.HD)(n)?n.toLowerCase():""}},44081:function(Y,c,e){e.d(c,{Z:function(){return N}});var R=e(19632),t=e.n(R),h=e(97857),L=e.n(h),P=e(52677),H=e.n(P),I=e(23060);function p(x){var B=x.properties;return!B||H()(B)!=="object"||Array.isArray(B)}function N(x,B,A){var $=L()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},A),_=$.clone?(0,I.Xh)(x):x;B=(0,I.Cw)(B,function(v,u){return u.toLowerCase()});var T=function v(u){var s=u.schema,a=u.path,o=u.state,n=u.store;p(s)||Object.keys(s.properties).forEach(function(r){var d,l,m,g,f,j,y,i,S,O=s.properties[r],C=[].concat(t()(a),[r]),b=(0,I.Xh)(o),D={schema:O,parentSchema:s,path:C,field:r,state:b,store:n},M=function(w){v(L()(L()({schema:O,path:C,state:b},w),{},{store:n}))},E=(d=B.$$)!==null&&d!==void 0?d:{},K=(l=B.$$object)!==null&&l!==void 0?l:{};(m=E.enter)===null||m===void 0||m.call(E,L()(L()({},D),{},{traverse:M}));var W=(g=O[$.mapKey])!==null&&g!==void 0?g:"";W=$.ignoreCase?(0,I.t$)(W):W;var V=(0,I.t$)(W).startsWith("object");if(V){var U;(U=K.enter)===null||U===void 0||U.call(K,L()(L()({},D),{},{traverse:M}))}var z=(f=B[W])!==null&&f!==void 0?f:{};(j=z.enter)===null||j===void 0||j.call(z,L()(L()({},D),{},{traverse:M})),(y=E.exit)===null||y===void 0||y.call(E,D),V&&((i=K.exit)===null||i===void 0||i.call(K,D)),(S=z.exit)===null||S===void 0||S.call(z,D)})};return T({schema:_,path:[],state:$.initialState,store:$.initialStore}),_}},36578:function(Y,c,e){e.d(c,{cy:function(){return b},Q7:function(){return i},Ze:function(){return j}});var R=e(97857),t=e.n(R),h=e(15009),L=e.n(h),P=e(19632),H=e.n(P),I=e(99289),p=e.n(I),N=e(95399),x=e(23060),B=e(52038),A=e(28e3),$=e(49552),_=e(8465),T=e(12444),v=e.n(T),u=e(72004),s=e.n(u),a=e(9783),o=e.n(a),n=function(){function D(M){v()(this,D),o()(this,"value",void 0),o()(this,"rules",void 0),o()(this,"locale",void 0),o()(this,"globalValidators",void 0),o()(this,"globalValidatorParams",void 0),Object.assign(this,M)}return s()(D,[{key:"setValue",value:function(E){this.value=E}},{key:"validate",value:function(){var M=p()(L()().mark(function K(){return L()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,this.validateRules(this.rules);case 2:return V.abrupt("return",V.sent);case 3:case"end":return V.stop()}},K,this)}));function E(){return M.apply(this,arguments)}return E}()},{key:"validateRules",value:function(){var M=p()(L()().mark(function K(W){var V,U,z,Z;return L()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:X.prev=0,V=l(W),U=0,z=V;case 3:if(!(U<z.length)){X.next=12;break}if(Z=z[U],!(0,A.PO)(Z)){X.next=9;break}return this.validateRuleItem(Z),X.next=9,this.validateGlobal(Z);case 9:U++,X.next=3;break;case 12:X.next=19;break;case 14:if(X.prev=14,X.t0=X.catch(0),!D.isValidationError(X.t0)){X.next=18;break}return X.abrupt("return",(0,x.ei)(X.t0,"status","message","extra"));case 18:return X.abrupt("return",{status:N.r6.error,message:X.t0!==null&&X.t0!==void 0&&X.t0.message?X.t0.message:"CatchError"});case 19:return X.abrupt("return",{status:N.r6.success});case 20:case"end":return X.stop()}},K,this,[[0,14]])}));function E(K){return M.apply(this,arguments)}return E}()},{key:"validateRuleItem",value:function(E){var K=(0,A.jn)(E.required)?E.required:void 0,W=(0,A.hj)(E.len)?E.len:void 0,V=(0,A.hj)(E.min)?E.min:void 0,U=(0,A.hj)(E.max)?E.max:void 0,z=D.fail,Z=this.value,w=this.locale;if(K&&[void 0,null].includes(Z)&&D.fail(E.message),(E.type==="string"&&!(0,A.HD)(Z)||E.type==="number"&&!(0,A.hj)(Z)||E.type==="boolean"&&!(0,A.jn)(Z)||E.type==="object"&&!(0,A.PO)(Z)||E.type==="array"&&!(0,A.kJ)(Z))&&z((0,B.dr)(w.typeError,{type:E.type})),(0,A.HD)(Z)){var X=(0,B.RI)(E.pattern);(K&&Z===""||W&&Z.length!==W||V&&Z.length<V||U&&Z.length>U||X&&!X.test(Z))&&z(E.message)}(0,A.hj)(Z)&&(W&&Z!==W||V&&Z<V||U&&Z>U)&&z(E.message),(0,A.kJ)(Z)&&(K&&Z.length===0||W&&Z.length!==W||V&&Z.length<V||U&&Z.length>U)&&z(E.message)}},{key:"validateGlobal",value:function(){var M=p()(L()().mark(function K(W){var V,U,z,Z,w,X,se,te,ie;return L()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(V=W.validator,U=this.globalValidators,z=this.globalValidatorParams,!(!V||!U||!z)){he.next=4;break}return he.abrupt("return");case 4:if(Z=U[V],w=function(Pe){Pe.status!==N.r6.success&&D.fail(Pe)},!d(Z)){he.next=11;break}return he.next=9,this.validateRules(Z.filter(function(ve){return!ve.validator}));case 9:X=he.sent,w(X);case 11:if(!(0,A.mf)(Z)){he.next=21;break}return he.next=14,Z(t()(t()({},z),{},{value:this.value}));case 14:if(se=he.sent,!d(se)){he.next=20;break}return he.next=18,this.validateRules(se.filter(function(ve){return!ve.validator}));case 18:te=he.sent,w(te);case 20:r(se)&&w({status:se.status,message:(ie=W.message)!==null&&ie!==void 0?ie:se.message,extra:se.extra});case 21:case"end":return he.stop()}},K,this)}));function E(K){return M.apply(this,arguments)}return E}()}],[{key:"isValidationError",value:function(E){return(0,A.PO)(E)&&(0,B.nr)(E,D.failUK)}},{key:"fail",value:function(E){var K=o()({},D.failUK,!0);throw(0,A.HD)(E)?K.message=E:(0,A.PO)(E)&&Object.assign(K,(0,x.ei)(E,"status","message","extra")),K.status||(K.status=N.r6.error),K}}]),D}();o()(n,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function r(D){return N.f1.includes(D==null?void 0:D.status)}function d(D){return(0,A.kJ)(D)&&!!D.length}function l(D){var M=[];return(0,A.PO)(D)?M.push(D):(0,A.kJ)(D)&&M.push.apply(M,H()(D)),M}function m(D){var M=new n(D);return M.validate()}var g=e(27597),f=e(44081);function j(D){return y.apply(this,arguments)}function y(){return y=p()(L()().mark(function D(M){var E,K,W,V,U,z,Z,w,X,se,te,ie,xe;return L()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return E=M.rootSchema,K=M.rootValue,W=M.disabled,V=M.readonly,U=M.locale,z=M.renderers,Z=M.rendererStorage,w=M.validators,X=M.userCtx,se=[],(0,f.Z)(E,{$$:{enter:function(fe){var ge=fe.schema,Te=fe.path,Oe=(0,g.o)({statement:ge.hidden,rootValue:K,path:Te,userCtx:X});if(!Oe){var Ce=(0,_.j)(z,ge.renderType);if(Ce){var Ae=function(){var Se=p()(L()().mark(function _e(){var je,Le,ze,Be,Ge,He;return L()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:return je=(0,x.U2)(K,Te),Le=b({schema:ge,value:je,path:Te,disabled:W,readonly:V,rootValue:K,locale:U,userCtx:X}),$e.prev=2,$e.next=5,i({schema:ge,rootValue:K,userCtx:X,path:Te,locale:U,value:je,globalValidators:w,rendererValidator:Ce.validator,rendererValidatorParams:Le});case 5:if(ze=$e.sent,Be=ze.status,Ge=ze.message,He=ze.extra,Be===N.r6.success){$e.next=11;break}return $e.abrupt("return",{path:Te,value:je,status:Be,message:Ge,extra:He});case 11:$e.next=16;break;case 13:return $e.prev=13,$e.t0=$e.catch(2),$e.abrupt("return",{path:Te,value:je,status:N.r6.error,message:"[CatchError]: ".concat($e.t0===null||$e.t0===void 0?void 0:$e.t0.message)});case 16:case"end":return $e.stop()}},_e,null,[[2,13]])}));return function(){return Se.apply(this,arguments)}}();se.push(Ae())}}}},$$Object:{enter:function(fe){var ge=fe.traverse;ge()}}},{clone:!1}),te=[],ie=[],ve.next=7,Promise.all(se).then(function(Pe){return Pe.filter(function(fe){return(fe==null?void 0:fe.status)===N.r6.error?te.push(fe):(fe==null?void 0:fe.status)===N.r6.warning&&ie.push(fe),!!fe})});case 7:return xe=ve.sent,xe.forEach(function(Pe){var fe=Pe.status,ge=Pe.path,Te=Pe.message,Oe=Pe.extra,Ce=Z[(0,$.P)(ge)];Ce==null||Ce.setValidatorState({status:fe,message:Te,extra:Oe})}),ve.abrupt("return",{hasError:!!te.length,hasWarning:!!ie.length,errorList:te,warningList:ie});case 10:case"end":return ve.stop()}},D)})),y.apply(this,arguments)}function i(D){return S.apply(this,arguments)}function S(){return S=p()(L()().mark(function D(M){var E,K,W,V,U,z,Z,w,X,se,te,ie,xe,he,ve;return L()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:if(E=M.schema,K=M.rootValue,W=M.userCtx,V=M.path,U=M.locale,z=M.value,Z=M.globalValidators,w=M.rendererValidator,X=M.rendererValidatorParams,se=O({schema:E,rootValue:K,path:V,locale:U,userCtx:W}),te={value:z,globalValidators:Z,globalValidatorParams:X,locale:U.validation},!d(se)){fe.next=9;break}return fe.next=6,m(t()(t()({},te),{},{rules:se}));case 6:if(ie=fe.sent,ie.status===N.r6.success){fe.next=9;break}return fe.abrupt("return",ie);case 9:if(!d(w)){fe.next=14;break}return fe.next=12,m(t()(t()({},te),{},{rules:w}));case 12:return xe=fe.sent,fe.abrupt("return",xe);case 14:if(!(0,A.mf)(w)){fe.next=25;break}return fe.next=17,w(t()(t()({},X),{},{value:z}));case 17:if(he=fe.sent,!d(he)){fe.next=23;break}return fe.next=21,m(t()(t()({},te),{},{rules:he}));case 21:return ve=fe.sent,fe.abrupt("return",ve);case 23:if(!r(he)){fe.next=25;break}return fe.abrupt("return",{status:he.status,message:he.message,extra:he.extra});case 25:return fe.abrupt("return",{status:N.r6.success});case 26:case"end":return fe.stop()}},D)})),S.apply(this,arguments)}function O(D){var M=D.schema,E=D.rootValue,K=D.path,W=D.locale,V=D.userCtx,U=l(M.rules),z=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:V});return z&&!(0,x.sE)(M.rules,{required:!0})&&U.unshift({required:!0,message:(0,B.dr)(W.validation.required,{label:M.title})}),U}function C(D){var M=D.schema,E=D.rootValue,K=D.path,W=D.userCtx,V=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:W});return!!(V||(0,x.sE)(l(M.rules),{required:!0}))}function b(D){var M=D.schema,E=D.value,K=D.path,W=D.disabled,V=D.readonly,U=D.rootValue,z=D.locale,Z=D.userCtx,w=!!W,X=!!V;w||(w=(0,g.o)({statement:M.disabled,rootValue:U,path:K,userCtx:Z})),X||(X=(0,g.o)({statement:M.readonly,rootValue:U,path:K,userCtx:Z}));var se=C({schema:M,path:K,rootValue:U,userCtx:Z});return{schema:M,value:E,path:H()(K),sPath:(0,$.P)(K),required:se,disabled:w,readonly:X,rootValue:U,locale:z,userCtx:Z}}},21222:function(Y,c,e){e.d(c,{H:function(){return L}});var R=e(80834),t=Math.random().toString(36).substring(7).replace(/\d/g,"x"),h=(0,R.Z)({key:"schema-render-".concat(t)}),L=h.css},74311:function(Y,c,e){e.r(c),e.d(c,{cij:function(){return Z.H},default:function(){return oe}});var R=e(97857),t=e.n(R),h=e(23060),L=e(18474),P=e(74072),H=e(52038),I=e(67294),p=e(13769),N=e.n(p),x=e(9783),B=e.n(x),A=e(28e3),$=e(14726),_=e(42075),T={submit:"submit",reset:"reset"},v={normal:"normal",formItem:"formItem"},u={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[T.submit,T.reset],actionsRenderMode:v.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},s=B()(B()({},T.submit,!1),T.reset,!1),a="__FORM_RENDER_ACTIONS__",o="YYYY-MM-DD",n="YYYY-MM-DD HH:mm:ss",r=(0,I.createContext)({}),d=r;function l(){var k=(0,I.useContext)(d);return k}var m=e(85893),g=["disabled"],f=B()(B()({},T.submit,function(k){var F,G=k.loading,Q=k.locale,J=k.disabled,ee=k.submitText;return(0,m.jsx)($.ZP,{type:"primary",htmlType:"submit",disabled:G.submit?!1:J||G.reset,loading:G.submit,children:ee||(Q==null||(F=Q.FormRender)===null||F===void 0?void 0:F.submit)})}),T.reset,function(k){var F,G=k.handleReset,Q=k.loading,J=k.locale,ee=k.disabled,ne=k.resetText;return(0,m.jsx)($.ZP,{htmlType:"button",disabled:Q.reset?!1:ee||Q.submit,loading:Q.reset,onClick:G,children:ne||(J==null||(F=J.FormRender)===null||F===void 0?void 0:F.reset)})}),j=function(F){var G=F.disabled,Q=N()(F,g),J=l(),ee=J.actions,ne=J.actionsLoading,le=J.registerActions,me=J.handleReset,ce=J.handleSubmit,pe=J.layoutColumnGap,ue=J.locale,de=J.submitText,ye=J.resetText,Ee=A.kJ(ee)&&ee.length>0;if(!Ee)return null;var Ie=t()(t()({},f),le);return(0,m.jsx)(_.Z,t()(t()({size:pe},Q),{},{children:ee.map(function(De){var be={locale:ue,disabled:G,loading:ne,submitText:de,resetText:ye};De===T.submit?be.handleSubmit=ce:De===T.reset&&(be.handleReset=me);var Me=Ie[De];return Me?(0,m.jsx)(I.Fragment,{children:Me==null?void 0:Me(be)},De):null})}))},y=j,i=e(15009),S=e.n(i),O=e(99289),C=e.n(O),b=e(5574),D=e.n(b),M=e(24317),E=e(93047);function K(k){var F=k.props,G=k.coreRef,Q=(0,I.useState)(s),J=D()(Q,2),ee=J[0],ne=J[1],le=(0,M.Z)(function(){var ue=C()(S()().mark(function de(ye,Ee){return S()().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:return ne(function(be){return t()(t()({},be),{},B()({},ye,!0))}),De.next=3,Ee().catch(function(be){E.Z.warn(be)});case 3:ne(function(be){return t()(t()({},be),{},B()({},ye,!1))});case 4:case"end":return De.stop()}},de)}));return function(de,ye){return ue.apply(this,arguments)}}()),me=(0,M.Z)(function(){le(T.submit,C()(S()().mark(function ue(){var de,ye;return S()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:if(G.current){Ie.next=2;break}return Ie.abrupt("return");case 2:if(!F.validateFormOnSubmit){Ie.next=8;break}return Ie.next=5,G.current.validate();case 5:if(ye=Ie.sent,!(ye.hasError||ye.hasWarning)){Ie.next=8;break}return Ie.abrupt("return");case 8:return Ie.next=10,(de=F.onSubmit)===null||de===void 0?void 0:de.call(F,G.current.getValue());case 10:case"end":return Ie.stop()}},ue)})))}),ce=(0,M.Z)(function(ue){ue.preventDefault(),ue.stopPropagation(),me()}),pe=(0,M.Z)(function(){le(T.reset,C()(S()().mark(function ue(){var de,ye,Ee,Ie;return S()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:if(G.current){be.next=2;break}return be.abrupt("return");case 2:return be.next=4,(de=F.onBeforeReset)===null||de===void 0?void 0:de.call(F,G.current.getValue());case 4:return Ee=be.sent,Ie=t()({},Ee),G.current.setValue(Ie),G.current.resetError(),be.next=10,(ye=F.onReset)===null||ye===void 0?void 0:ye.call(F,Ie);case 10:case"end":return be.stop()}},ue)})))});return{handleFormSubmit:ce,handleSubmit:me,handleReset:pe,actionsLoading:ee,isLoading:ee.submit||ee.reset}}var W=e(25035),V=e(55241),U=e(68400),z=e.n(U),Z=e(21222),w,X,se,te,ie,xe,he,ve,Pe,fe,ge=(0,Z.H)(w||(w=z()([`
  display: flex;
  align-items: center;
`]))),Te=(0,Z.H)(X||(X=z()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),Oe=(0,Z.H)(se||(se=z()([`
  word-break: break-all;
`]))),Ce=(0,Z.H)(te||(te=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),Ae=(0,Z.H)(ie||(ie=z()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),Se=(0,Z.H)(xe||(xe=z()([`
  flex-grow: 1;
`]))),_e=(0,Z.H)(he||(he=z()([`
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
`]))),ze=(0,Z.H)(fe||(fe=z()([`
  color: var(--schema-render-color-warning);
`]))),Be=L.Z,Ge=function(F){var G=F.schema,Q=F.required,J=F.prefixClassNames,ee=F.labelColon,ne=!!ee;return(0,m.jsxs)(m.Fragment,{children:[Q&&(0,m.jsx)("span",{className:Be(J("item-mark"),Ce),children:"*"}),(0,m.jsx)("span",{className:Be(J("item-title"),Oe),children:G.title}),!!G.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:G.titleDescription,children:(0,m.jsx)(W.Z,{className:Be(J("item-title-tooltip"),Ae),style:{marginRight:ne?4:void 0}})}),ne&&(0,m.jsx)("span",{className:Be(J("item-colon")),children:ee})]})},He=function(F){var G=F.body,Q=F.schema,J=F.validator,ee=F.required,ne=F.disabled,le=F.readonly,me=F.userCtx,ce=F.prefixClassNames,pe=l(),ue=pe.labelWidth,de=pe.labelColon,ye=pe.labelGap,Ee=pe.labelRender,Ie=pe.locale,De=Ee||Ge,be={schema:Q,required:ee,disabled:ne,readonly:le,userCtx:me,prefixClassNames:ce,labelWidth:ue,labelColon:de,labelGap:ye,locale:Ie};return(0,m.jsxs)("div",{className:Be(ce("item-layout-horizontal")),children:[(0,m.jsxs)("div",{className:Be(ce("item-main"),ge),children:[(0,m.jsx)("div",{className:Be(ce("item-header"),Te),style:{flexBasis:ue,marginRight:ye},children:De(be)}),(0,m.jsx)("div",{className:Be(ce("item-body"),Se),children:G})]}),(0,m.jsxs)("div",{className:Be(ce("item-footer"),_e),style:{paddingLeft:A.hj(ue)?ue+ye:0},children:[J.status==="error"&&!!J.message&&(0,m.jsx)("div",{className:Be(ce("item-error-msg"),Le),children:J.message}),J.status==="warning"&&!!J.message&&(0,m.jsx)("div",{className:Be(ce("item-warning-msg"),ze),children:J.message}),!!Q.description&&(0,m.jsx)("div",{className:Be(ce("item-description"),je),children:Q.description})]})]})},Ye=He,$e,Ze,vn,nn,In,tn,fn,qe,Bn=(0,Z.H)($e||($e=z()([`
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
`]))),Je=L.Z,zn=function(F){var G=F.schema,Q=F.required,J=F.prefixClassNames,ee=F.labelColon,ne=!!ee;return(0,m.jsxs)(m.Fragment,{children:[Q&&(0,m.jsx)("span",{className:Je(J("item-mark"),$n),children:"*"}),(0,m.jsx)("span",{className:Je(J("item-title"),an),children:G.title}),!!G.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:G.titleDescription,children:(0,m.jsx)(W.Z,{className:Je(J("item-title-tooltip"),Kn),style:{marginRight:ne?4:void 0}})}),ne&&(0,m.jsx)("span",{className:Je(J("item-colon")),children:ee})]})},Qe=function(F){var G=F.body,Q=F.schema,J=F.validator,ee=F.required,ne=F.disabled,le=F.readonly,me=F.userCtx,ce=F.prefixClassNames,pe=l(),ue=pe.labelWidth,de=pe.labelColon,ye=pe.labelGap,Ee=pe.labelRender,Ie=pe.locale,De=Ee||zn,be={schema:Q,required:ee,disabled:ne,readonly:le,userCtx:me,prefixClassNames:ce,labelWidth:ue,labelColon:de,labelGap:ye,locale:Ie};return(0,m.jsxs)("div",{className:ce("item-layout-vertical"),children:[(0,m.jsx)("div",{className:Je(ce("item-header"),Bn),children:De(be)}),(0,m.jsx)("div",{className:ce("item-body"),children:G}),(0,m.jsxs)("div",{className:Je(ce("item-footer"),Nn),children:[J.status==="error"&&!!J.message&&(0,m.jsx)("div",{className:Je(ce("item-error-msg"),Un),children:J.message}),J.status==="warning"&&!!J.message&&(0,m.jsx)("div",{className:Je(ce("item-warning-msg"),Fn),children:J.message}),!!Q.description&&(0,m.jsx)("div",{className:Je(ce("item-description"),Wn),children:Q.description})]})]})},Xe=Qe;function yn(k){var F=k.itemLayout,G=(0,I.useMemo)(function(){return!F||F==="horizontal"?Ye:F==="vertical"?Xe:F},[F]);return G}var rn=A.kJ,dn=A.kK,xn=A.Kn;function gn(k,F){var G="".concat(a,"_").concat(Date.now());return t()(t()({},k),{},{properties:t()(t()({},k==null?void 0:k.properties),{},B()({},G,t()(t()({},F),{},{renderType:a})))})}function En(k){var F=k.itemLayout,G=k.labelWidth,Q=k.labelGap;return F==="horizontal"&&A.hj(G)?G+Q:0}function un(){for(var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],F=arguments.length>1?arguments[1]:void 0,G=0;G<k.length;G++){var Q=k[G],J=xn(Q)?Q:{label:Q,value:Q},ee=F(J);if(ee)return}}function sn(k,F){var G=[];return!rn(k)||!rn(F)||F.forEach(function(Q){dn(Q)||un(k,function(J){if(Q===J.value)return G.push(J.label),!0})}),G}function Hn(k,F){var G=[];return!rn(k)||!rn(F)||un(k,function(Q){F.includes(Q.value)&&G.push(Q)}),G}function Zn(k){return!!(dn(k)||k==="")}function Vn(k){var F=k.schema,G=k.actionsRestSchema,Q=k.actionsRenderMode;return(0,I.useMemo)(function(){return Q===v.normal?F:gn(F,G)},[F,G,Q])}var Pn,Tn=(0,Z.H)(Pn||(Pn=z()([`
  --schema-render-color-description: #999;
  --schema-render-color-required-mark: #ff4d4f;
  --schema-render-color-warning: #faad14;
  --schema-render-color-error: #ff4d4f;

  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
`]))),Gn=e(28403),on=e(84567),Yn=function(F){var G=F.children,Q=l(),J=Q.readonlyPlaceholder;return(0,m.jsx)(m.Fragment,{children:Zn(G)?J:G})},Ve=Yn,Jn=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=(0,M.Z)(function(le){var me;ee(le,{extra:{checkedOptions:Hn((me=G.renderOptions)===null||me===void 0?void 0:me.options,le)}})});return(0,m.jsx)(on.Z.Group,t()(t()({},G.renderOptions),{},{value:J,onChange:ne,disabled:Q}))},Qn=function(F){var G,Q=F.schema,J=F.value,ee=F.locale,ne=sn((G=Q.renderOptions)===null||G===void 0?void 0:G.options,J);return(0,m.jsx)(Ve,{children:ne.join(ee.FormRender.comma)})},Xn={component:Jn,readonlyComponent:Qn},Dn=e(88760),wn=e(27484),we=e.n(wn),kn=function(F){var G=F.schema,Q=F.value,J=F.onChange,ee=F.disabled,ne=F.locale,le=F.validator,me=(0,I.useMemo)(function(){return H.dr(ne.FormRender.placeholderSelect,{title:G.title})},[G.title,ne.FormRender.placeholderSelect]);return(0,m.jsx)(Dn.default,t()(t()({allowClear:!0,placeholder:me,style:{width:"100%"}},G.renderOptions),{},{status:le.status,value:Q?we()(Q):null,onChange:function(pe){return J(pe?we()(pe).toISOString():void 0)},disabled:ee}))},qn=function(F){var G,Q,J=F.schema,ee=F.value;return(0,m.jsx)(Ve,{children:ee?we()(ee).format(((G=J.renderOptions)===null||G===void 0?void 0:G.format)||((Q=J.renderOptions)!==null&&Q!==void 0&&Q.showTime?n:o)):""})},er={component:kn,readonlyComponent:qn};function mn(k){return we()(k).toISOString()}var nr=function(F){var G=F.schema,Q=F.value,J=F.onChange,ee=F.disabled,ne=F.validator,le=G.renderOptions||{},me=le.showTime;return(0,m.jsx)(Dn.default.RangePicker,t()(t()({allowClear:!0,allowEmpty:!0,style:{width:"100%"}},G.renderOptions),{},{disabled:ee,status:ne.status,value:Q?[we()(Q[0]),we()(Q[1])]:null,onChange:function(pe){if(pe&&pe[0]&&pe[1]){var ue=me?pe[0]:pe[0].startOf("day"),de=me?pe[1]:pe[1].endOf("day");J([mn(ue),mn(de)])}else J(void 0)}}))},rr=function(F){var G=F.schema,Q=F.value,J=F.locale,ee="";if(A.kJ(Q)&&Q[0]&&Q[1]){var ne,le,me,ce=(ne=G.renderOptions)!==null&&ne!==void 0&&ne.showTime?n:o,pe=((le=G.renderOptions)===null||le===void 0?void 0:le.format)||ce,ue=((me=G.renderOptions)===null||me===void 0?void 0:me.displayTextTemplate)||J.FormRender.displayDateRange;ee=H.dr(ue,{start:we()(Q[0]).format(pe),end:we()(Q[1]).format(pe)})}return(0,m.jsx)(Ve,{children:ee})},tr={component:nr,readonlyComponent:rr},ar=function(F){var G=F.value;return(0,m.jsx)(Ve,{children:G})},bn={component:ar},sr=function(F){var G=F.disabled;return(0,m.jsx)(y,{disabled:G})},or={formItem:sr},lr=e(13457),dr=["validateOnBlur"],cn=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,me=G.renderOptions||{},ce=me.validateOnBlur,pe=N()(me,dr),ue=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:G.title})},[G.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(Ee){ee(Ee!=null?Ee:void 0,{triggerValidator:!ce})}),ye=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(lr.Z,t()(t()({style:{width:"100%"},placeholder:ue},pe),{},{status:ne.status,value:J,onChange:de,onBlur:ce?ye:void 0,disabled:Q}))},ur=function(F){var G=F.value;return(0,m.jsx)(Ve,{children:G})},mr={component:cn,readonlyComponent:ur},ln=e(25278),cr=["validateOnBlur"],On=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,me=G.renderOptions||{},ce=me.validateOnBlur,pe=N()(me,cr),ue=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:G.title})},[G.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(Ee){var Ie=Ee.target.value;Ie!==J&&ee(Ie,{triggerValidator:!ce})}),ye=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(ln.Z,t()(t()({placeholder:ue},pe),{},{status:ne.status,value:J!=null?J:"",onChange:de,onBlur:ce?ye:void 0,disabled:Q}))},ir=function(F){var G=F.value;return(0,m.jsx)(Ve,{children:G})},pr={component:On,readonlyComponent:ir},Cn=e(52162),Sn=e(47221),hr=function(F){var G,Q,J=F.schema,ee=F.path,ne=F.objectStyle,le=(0,I.useState)(!1),me=D()(le,2),ce=me[0],pe=me[1],ue=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:J.title}),!!J.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:J.titleDescription,children:(0,m.jsx)(W.Z,{style:{marginLeft:4}})})]});return(0,m.jsx)(Sn.Z,t()(t()({},(G=J.renderOptions)===null||G===void 0?void 0:G.headerOptions),{},{activeKey:String(ce),onChange:function(){return pe(!ce)},children:(0,I.createElement)(Sn.Z.Panel,t()(t()({},(Q=J.renderOptions)===null||Q===void 0?void 0:Q.panelOptions),{},{header:ue,key:"false"}),(0,m.jsx)("div",{style:ne,children:(0,m.jsx)(Cn.Z,{schema:J,path:ee})}))}))},vr={formItem:hr},Rn=function(F){var G=F.schema,Q=F.path,J=F.objectStyle;return(0,m.jsx)("div",{style:J,children:(0,m.jsx)(Cn.Z,{schema:G,path:Q})})},Ir={formItem:Rn},fr=["validateOnBlur"],yr=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,me=G.renderOptions||{},ce=me.validateOnBlur,pe=N()(me,fr),ue=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:G.title})},[G.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(Ee){var Ie=Ee.target.value;Ie!==J&&ee(Ie,{triggerValidator:!ce})}),ye=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(ln.Z.Password,t()(t()({placeholder:ue},pe),{},{status:ne.status,value:J!=null?J:"",onChange:de,onBlur:ce?ye:void 0,disabled:Q}))},xr=function(F){var G=F.value;return(0,m.jsx)(Ve,{children:G})},gr={component:yr,readonlyComponent:xr},Er=e(55742),Mn=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange;return(0,m.jsx)(Er.ZP.Group,t()(t()({},G.renderOptions),{},{value:J,onChange:function(le){return ee(le.target.value)},disabled:Q}))},Pr=function(F){var G,Q=F.schema,J=F.value,ee=sn((G=Q.renderOptions)===null||G===void 0?void 0:G.options,[J]);return(0,m.jsx)(Ve,{children:ee[0]})},Tr={component:Mn,readonlyComponent:Pr},Dr=e(67002),br=function(F){var G=F.schema,Q=F.disabled,J=F.readonly,ee=F.value,ne=F.onChange;return(0,m.jsx)(Dr.Z,t()(t()({},G.renderOptions),{},{value:ee!=null?ee:0,onChange:ne,disabled:Q||J}))},Or={component:br},_n=e(34041),Cr=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.locale,le=F.validator,me=(0,I.useMemo)(function(){return H.dr(ne.FormRender.placeholderSelect,{title:G.title})},[G.title,ne.FormRender.placeholderSelect]);return(0,m.jsx)(_n.default,t()(t()({allowClear:!0,style:{width:"100%"},placeholder:me},G.renderOptions),{},{status:le.status,mode:void 0,value:J!=null?J:null,onChange:function(pe){return ee(pe)},disabled:Q}))},Sr=function(F){var G,Q,J=F.schema,ee=F.value,ne=F.locale,le=sn((G=J.renderOptions)===null||G===void 0?void 0:G.options,[ee]);return(0,m.jsx)(Ve,{children:le.join((Q=ne.FormRender)===null||Q===void 0?void 0:Q.comma)})},Rr={component:Cr,readonlyComponent:Sr},Mr=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,me=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderSelect,{title:G.title})},[G.title,le.FormRender.placeholderSelect]),ce=(0,M.Z)(function(pe,ue){ee(pe,{extra:{selectedOptions:ue}})});return(0,m.jsx)(_n.default,t()(t()({allowClear:!0,style:{width:"100%"},placeholder:me},G.renderOptions),{},{status:ne.status,mode:"multiple",value:J,onChange:ce,disabled:Q}))},_r=function(F){var G,Q,J=F.schema,ee=F.value,ne=F.locale,le=sn((G=J.renderOptions)===null||G===void 0?void 0:G.options,ee);return(0,m.jsx)(Ve,{children:le.join((Q=ne.FormRender)===null||Q===void 0?void 0:Q.comma)})},Ln={component:Mr,readonlyComponent:_r},Lr=e(41637),Ar=function(F){var G=F.schema,Q=F.disabled,J=F.readonly,ee=F.value,ne=F.onChange;return(0,m.jsx)(Lr.Z,t()(t()({},G.renderOptions),{},{checked:ee,onChange:function(me){return ne(me)},disabled:Q||J}))},jr={component:Ar},Br=function(F){var G,Q=F.schema,J=F.disabled,ee=F.readonly,ne=F.value,le=F.onChange;return(0,m.jsx)(on.Z,t()(t()({},Q.renderOptions),{},{checked:ne,onChange:function(ce){return le(ce.target.checked)},disabled:J||ee,children:(G=Q.renderOptions)===null||G===void 0?void 0:G.text}))},$r={component:Br},Kr=["validateOnBlur"],Nr=function(F){var G=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,me=G.renderOptions||{},ce=me.validateOnBlur,pe=N()(me,Kr),ue=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:G.title})},[G.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(Ee){var Ie=Ee.target.value;Ie!==J&&ee(Ie,{triggerValidator:!ce})}),ye=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(ln.Z.TextArea,t()(t()({rows:3,placeholder:ue},pe),{},{status:ne.status,value:J!=null?J:"",onChange:de,onBlur:ce?ye:void 0,disabled:Q}))},Wr=function(F){var G=F.value;return(0,m.jsx)(Ve,{children:G})},Ur={component:Nr,readonlyComponent:Wr},pn,Fr=(pn={},B()(B()(B()(B()(B()(B()(B()(B()(B()(B()(pn,a,or),"Object",vr),"ObjectNull",Ir),"InputText",pr),"InputNumber",mr),"Password",gr),"TextArea",Ur),"Radio",Tr),"Checkbox",Xn),"Switch",jr),B()(B()(B()(B()(B()(B()(B()(pn,"SwitchBox",$r),"DatePicker",er),"DateRangePicker",tr),"Description",bn),"Rate",Or),"Select",Rr),"SelectMultiple",Ln)),re=Fr,q=function(F,G){var Q=t()(t()({},u),F),J=(0,I.useRef)(null);(0,I.useImperativeHandle)(G,function(){return J.current});var ee=(0,I.useMemo)(function(){return t()(t()({},re),Q.renderers)},[Q.renderers]),ne=(0,I.useMemo)(function(){return t()(t()({},Gn.Z),Q.locale)},[Q.locale]),le=yn(Q),me=K({props:Q,coreRef:J}),ce=me.handleFormSubmit,pe=me.handleSubmit,ue=me.handleReset,de=me.actionsLoading,ye=me.isLoading,Ee=Vn(h.ei(Q,"schema","actionsRestSchema","actionsRenderMode")),Ie=t()(t()({},h.ei(Q,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder","submitText","resetText")),{},{locale:ne,actionsLoading:de,handleSubmit:pe,handleReset:ue}),De=Q.disableFormOnActionLoading?Q.disabled||ye:Q.disabled;return(0,m.jsx)(d.Provider,{value:Ie,children:(0,m.jsxs)("form",{onSubmit:ce,className:L.Z(Q.rootClassName,Tn),style:Q.rootStyle,children:[(0,m.jsx)(P.default,t()(t()({},Q),{},{ref:J,schema:Ee,locale:ne,renderers:ee,itemLayout:le,disabled:De})),Q.actionsRenderMode===v.normal&&(0,m.jsx)(y,{disabled:De,className:H.Rk(Q.prefixCls,"form-actions"),style:{marginTop:Q.layoutRowGap,marginLeft:En(Q)}})]})})},ae=(0,I.forwardRef)(q),oe=ae},35804:function(Y,c,e){e.r(c);var R=e(97857),t=e.n(R),h=e(78484);c.default=t()(t()({},h.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})},28403:function(Y,c,e){var R=e(97857),t=e.n(R),h=e(39214);c.Z=t()(t()({},h.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},36116:function(Y,c,e){e.r(c),e.d(c,{default:function(){return O}});var R=e(97857),t=e.n(R),h=e(68795),L=e(48689),P=e(74311),H=e(14726),I=e(67294),p={submit:"submit",reset:"reset",collapse:"collapse"},N={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[p.reset,p.submit,p.collapse],defaultCollapsed:!0,collapsedRows:2},x=e(5574),B=e.n(x),A=e(80882),$=e(48115),_=e(24317);function T(C,b,D){var M;if(D)return D(C);if(!C)return 5;var E=C.clientWidth,K=((M=C.firstElementChild)===null||M===void 0||(M=M.getBoundingClientRect())===null||M===void 0?void 0:M.width)||320;return Math.floor(E/K)*b-1}var v=e(64599),u=e.n(v);function s(C,b){var D={},M=Object.keys(C.properties).slice(0,b),E=u()(M),K;try{for(E.s();!(K=E.n()).done;){var W=K.value;D[W]=C.properties[W]}}catch(V){E.e(V)}finally{E.f()}return{renderType:"Root",properties:D}}function a(C){var b=C.isCollapsed,D=C.rawSchema,M=C.collapsedNumber;return b?s(D,M):D}var o=e(28e3);function n(C){return o.PO(C)?Object.keys(C).length:o.kJ(C)||o.HD(C)?C.length:0}var r=e(38812);function d(C,b){var D=(0,r.Z)(b),M=(0,I.useRef)(-1);(0,I.useEffect)(function(){var E,K=(E=C.current)===null||E===void 0?void 0:E.getRootElement();if(K){var W=new ResizeObserver(function(V){var U=V[0].contentRect.width;M.current!==U&&(M.current=U,D.current(K))});return W.observe(K),function(){return W.disconnect()}}},[])}var l=e(85893);function m(C,b){var D=C.schema,M=(0,I.useState)(C.defaultCollapsed),E=B()(M,2),K=E[0],W=E[1],V=(0,I.useState)(function(){var ie;return T((ie=b.current)===null||ie===void 0?void 0:ie.getRootElement(),C.collapsedRows,C.calcCollapsedNumber)}),U=B()(V,2),z=U[0],Z=U[1],w=(0,I.useRef)(D);(0,I.useMemo)(function(){w.current=a({isCollapsed:K,collapsedNumber:z,rawSchema:D})},[z,K,D]),d(b,function(ie){Z(T(ie,C.collapsedRows,C.calcCollapsedNumber))});var X=(0,_.Z)(function(ie){var xe;W(ie),(xe=C.onToggleCollapsed)===null||xe===void 0||xe.call(C,ie)}),se=(0,_.Z)(function(ie){var xe,he=ie.locale;if(n(D.properties)<=z)return null;if(K){var ve;return(0,l.jsxs)(H.ZP,{type:"link",onClick:function(){return X(!1)},style:{padding:0},children:[he==null||(ve=he.Search)===null||ve===void 0?void 0:ve.expand,(0,l.jsx)(A.Z,{})]})}return(0,l.jsxs)(H.ZP,{type:"link",onClick:function(){return X(!0)},style:{padding:0},children:[he==null||(xe=he.Search)===null||xe===void 0?void 0:xe.collapse,(0,l.jsx)($.Z,{})]})}),te=t()({collapse:se},C.registerActions);return{schema:w.current,registerActions:te}}var g=e(6386),f=e(52038);function j(C){return{className:f.Rk(C,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var y={submit:function(b){var D=b.loading,M=b.locale,E=b.submitText,K=b.disabled;return(0,l.jsx)(H.ZP,{type:"primary",htmlType:"submit",icon:(0,l.jsx)(h.Z,{}),loading:D.submit,disabled:D.submit?!1:K||D.reset,children:E||M.FormRender.submit})},reset:function(b){var D=b.loading,M=b.locale,E=b.handleReset,K=b.resetText,W=b.disabled;return(0,l.jsx)(H.ZP,{htmlType:"button",icon:(0,l.jsx)(L.Z,{}),loading:D.reset,disabled:D.reset?!1:W||D.submit,onClick:E,children:K||M.FormRender.reset})}},i=function(b,D){var M=t()(t()({},N),b),E=(0,I.useRef)(null),K=(0,I.useMemo)(function(){return t()(t()({},g.Z),M.locale)},[M.locale]),W=m(M,E),V=W.schema,U=W.registerActions,z=(0,I.useMemo)(function(){return j(M.prefixCls)},[M.prefixCls]);return(0,I.useImperativeHandle)(D,function(){return E.current}),(0,l.jsx)(P.default,t()(t()({layout:"autoFill"},M),{},{ref:E,locale:K,schema:V,registerActions:t()(t()({},y),U),actionsRestSchema:z,actionsRenderMode:"formItem"}))},S=(0,I.forwardRef)(i),O=S},9686:function(Y,c,e){e.r(c);var R=e(97857),t=e.n(R),h=e(35804);c.default=t()(t()({},h.default),{},{FormRender:t()(t()({},h.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})},6386:function(Y,c,e){var R=e(97857),t=e.n(R),h=e(28403);c.Z=t()(t()({},h.Z),{},{FormRender:t()(t()({},h.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}})},71856:function(Y,c,e){e.r(c),e.d(c,{default:function(){return Fr}});var R=e(97857),t=e.n(R),h=e(18474),L=e(28e3),P=e(24317),H=e(85908),I=e(95511),p=e(67294),N=L.kJ,x=L.PO,B=L.HD,A=L.kK,$=function(q){return N(q)?!q.length:x(q)?!Object.keys(q).length:B(q)?q.trim()==="":A(q)};function _(re,q){return N(re)?re.map(q):[]}function T(re,q){if(re)for(var ae=re.length,oe=0;oe<ae;oe++){var k=q==null?void 0:q(re[oe],oe,re);if(k)return}}function v(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var u=v(),s=function(re){return re.actions="__actions__",re.rowNumber="__row-number__",re}({}),a={table:"st-table-".concat(u),pagination:"st-pagination-".concat(u)},o=e(23060),n=e(13769),r=e.n(n),d=e(41637),l=e(66309),m=e(67002),g=e(5574),f=e.n(g),j=e(57020),y=e(42075),i=e(85893),S=function(q){var ae=q.imgList,oe=q.imgProps,k=q.groupProps,F=(0,p.useState)(!1),G=f()(F,2),Q=G[0],J=G[1],ee=(0,p.useState)(0),ne=f()(ee,2),le=ne[0],me=ne[1],ce=function(ue){me(ue),J(!0)};return(0,i.jsx)(j.Z.PreviewGroup,t()(t()({},k),{},{items:ae,preview:{visible:Q,current:le,onChange:function(ue){return me(ue)},onVisibleChange:function(ue){return J(ue)}},children:(0,i.jsx)(y.Z,{children:ae.map(function(pe,ue){return(0,p.createElement)(j.Z,t()(t()({width:60},oe),{},{src:pe,key:ue,onClick:function(){return ce(ue)}}))})})}))},O=S,C={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},b=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),D=function(q){var ae=q.value;return $(ae)?"-":isNaN(Number(ae))?ae:String(ae).replace(b,",")},M=D,E=e(83062),K=["maxLength"],W=function(q){var ae=q.value,oe=q.options,k=oe===void 0?{}:oe,F=$(ae)?"-":String(ae),G=k.maxLength,Q=G===void 0?10:G,J=r()(k,K);return F.length>Q?(0,i.jsxs)(E.Z,t()(t()({title:F},J),{},{children:[F.slice(0,Q-1),"..."]})):(0,i.jsx)(i.Fragment,{children:F})},V=W,U=e(14726),z=e(85576),Z=(0,p.createContext)({}),w=Z;function X(){var re=(0,p.useContext)(w);return re}var se=["maxLength"],te=function(q){var ae=q.value,oe=q.options,k=oe===void 0?{}:oe,F=$(ae)?"-":String(ae),G=k.maxLength,Q=G===void 0?10:G,J=r()(k,se),ee=(0,p.useState)(!1),ne=f()(ee,2),le=ne[0],me=ne[1],ce=X();return F.length>Q?(0,i.jsxs)(i.Fragment,{children:[F.slice(0,Q-3),"...",(0,i.jsx)(U.ZP,{type:"link",style:{padding:0},onClick:function(){return me(!0)},children:ce.locale.SearchTable.longTextModalLabel}),(0,i.jsx)(z.Z,t()(t()({width:600,title:ce.locale.SearchTable.longTextModalTitle,footer:null},J),{},{open:le,onCancel:function(){return me(!1)},children:F}))]}):(0,i.jsx)(i.Fragment,{children:F})},ie=te,xe=["groupProps"],he=L.kJ,ve={code:function(q){var ae=q.value,oe=q.options;return(0,i.jsx)("pre",{style:t()(t()({},C),oe.style),children:(0,i.jsx)("code",{children:ae})})},percent:function(q){var ae=q.value;return $(ae)?"-":"".concat(ae,"%")},switch:function(q){var ae=q.value,oe=q.options;return(0,i.jsx)(d.Z,t()(t()({},oe),{},{checked:!!ae}))},tags:function(q){var ae=q.value,oe=q.options,k=he(ae)?ae:[ae];return k.map(function(F,G){return(0,p.createElement)(l.Z,t()(t()({},oe),{},{key:G}),F)})},rate:function(q){var ae=q.value,oe=q.options;return(0,i.jsx)(m.Z,t()(t()({style:{width:134}},oe),{},{disabled:!0,value:ae}))},"comma-number":function(q){return(0,i.jsx)(M,t()({},q))},images:function(q){var ae=q.value,oe=q.options;if($(ae))return"-";var k=he(ae)?ae:[ae],F=oe.groupProps,G=r()(oe,xe);return(0,i.jsx)(O,{imgList:k,imgProps:G,groupProps:F})},"long-text":function(q){return(0,i.jsx)(V,t()({},q))},"long-text-modal":function(q){return(0,i.jsx)(ie,t()({},q))}},Pe=e(27484),fe=e.n(Pe),ge=o.U2,Te=L.kJ,Oe=L.PO;function Ce(re,q){return re===q?0:re>q?1:-1}var Ae=function(q,ae,oe){var k=oe.sortType,F=oe.sortOrder,G=oe.arrDataIndex,Q=oe.sortDataExtractor,J=oe.sortStringValueTransform,ee=Q?Q(q):ge(q,G),ne=Q?Q(ae):ge(ae,G);return Oe(ee)||Oe(ne)?0:(Te(ee)&&(ee=ee.join("")),Te(ne)&&(ne=ne.join("")),ee=String(ee).trim(),ne=String(ne).trim(),$(ee)?F==="ascend"?1:-1:$(ne)?F==="ascend"?-1:1:k==="string"?(J&&(ee=J(ee),ne=J(ne)),Ce("@".concat(ee).toLowerCase(),"@".concat(ne).toLowerCase())):k==="date"?Ce(new Date(ee),new Date(ne)):!isNaN(Number(ee))&&!isNaN(Number(ne))?Ce(Number(ee),Number(ne)):fe()(ee).isValid()&&fe()(ne).isValid()?Ce(new Date(ee),new Date(ne)):(J&&(ee=J(ee),ne=J(ne)),Ce(ee,ne)))},Se=["title","dataIndex","children","valueType"],_e=["type"],je=o.U2,Le=L.kJ,ze=L.HD,Be=L.mf;function Ge(re,q,ae){return re.map(function(oe){var k=oe.title,F=oe.dataIndex,G=oe.children,Q=oe.valueType,J=r()(oe,Se);Le(G)&&(G=Ge(G,q,ae));var ee=Le(F)?F.join("."):F,ne=Le(F)?F:[F],le=q.sortMode==="local-all"||q.sortMode==="service-all",me=!!J.sorter||!!J.sortType||le,ce=!1;G||(J.sorter?ce=J.sorter:(le||J.sortType)&&(ce=q.sortMode==="service-all"?!0:function(ue,de,ye){return Ae(ue,de,{arrDataIndex:ne,sortOrder:ye,sortType:J.sortType,sortDataExtractor:J.sortDataExtractor,sortStringValueTransform:q.sortStringValueTransform})}));var pe=function(de,ye,Ee){var Ie=je(ye,ne),De="",be=void 0;if(Q)if(Be(Q)){var Me=Q(ye,Ee),Re=Me.type,Ke=r()(Me,_e);De=Re,be=Ke}else De=Q;var Ne=ae[De];return Ne?Ne({value:Ie,record:ye,options:be||{},index:Ee}):$(Ie)?"-":Ie};return t()(t()({align:"center",key:ee,width:ze(k)?k.length*16+(me?50:30):void 0,render:pe},J),{},{title:k,dataIndex:F,children:G,sorter:ce})})}var He=o.Cw;function Ye(re){var q=re.table,ae=re.globalStateRef,oe=(0,p.useRef)([]),k=ae.current.isTabChanging;(0,p.useMemo)(function(){k||(oe.current=q.columns||[])},[q.columns,k]);var F=(0,p.useMemo)(function(){var Q=t()(t()({},ve),q.registerValueType);return He(Q,function(J,ee){return ee.toLowerCase()})},[q.registerValueType]),G=(0,p.useMemo)(function(){return Ge(oe.current,q,F)},[oe.current]);return{rawColumns:oe.current,baseColumns:G}}var $e=e(15009),Ze=e.n($e),vn=e(99289),nn=e.n(vn),In=e(19632),tn=e.n(In),fn=e(16223),qe=e(60887),Bn=e(32339),an=e(45587),$n=e(24285),Kn=function(q){var ae=q.items,oe=ae===void 0?[]:ae,k=q.onChange,F=q.itemClassName,G=q.overlayClassName,Q=q.renderItem,J=(0,qe.Dy)((0,qe.VT)(qe.MA)),ee=(0,p.useState)(null),ne=f()(ee,2),le=ne[0],me=ne[1],ce=(0,P.Z)(function(pe){var ue=pe.active,de=pe.over;if(ue.id!==de.id){var ye=oe.findIndex(function(Ie){return Ie.id===ue.id}),Ee=oe.findIndex(function(Ie){return Ie.id===de.id});k==null||k((0,an.Rp)(oe,ye,Ee))}me(null)});return(0,i.jsxs)(qe.LB,{sensors:J,collisionDetection:qe.pE,onDragStart:function(ue){var de=ue.active;return me(de.id)},onDragEnd:ce,modifiers:[Bn.DL],children:[(0,i.jsx)(an.Fo,{items:oe,strategy:an.qw,children:oe.map(function(pe,ue){return(0,i.jsx)(Nn,{className:F,id:pe.id,itemData:pe,itemIndex:ue,renderItem:Q},pe.id)})}),(0,i.jsx)(qe.y9,{zIndex:9999,children:le?(0,i.jsx)("div",{className:G,children:Q==null?void 0:Q(oe.find(function(pe){return pe.id===le}),oe.findIndex(function(pe){return pe.id===le}))}):null})]})};function Nn(re){var q=re.className,ae=re.id,oe=re.itemData,k=re.itemIndex,F=re.renderItem,G=(0,an.nB)({id:ae}),Q={transform:$n.ux.Transform.toString(G.transform),transition:G.transition,opacity:G.isDragging?0:void 0};return(0,i.jsx)("div",{className:q,ref:G.setNodeRef,style:Q,children:F==null?void 0:F(oe,k,G)})}var Wn=Kn,Un=e(29751),Fn=e(13457);function Je(re){var q=re.locale,ae=q.SearchTable.settingModalColumnEnum,oe=q.SearchTable.settingModalColumnSortEnum,k=[{title:ae[0],dataIndex:"name",width:200},{title:ae[1],dataIndex:"hidden",width:90,render:function(G,Q){return(0,i.jsx)(d.Z,{checked:!G,onChange:function(J){function ee(ne){return J.apply(this,arguments)}return ee.toString=function(){return J.toString()},ee}(function(J){return Q(!J)})})}},{title:ae[2],dataIndex:"width",width:100,render:function(G,Q){return(0,i.jsx)(Fn.Z,{min:1,value:G,onChange:function(J){function ee(ne){return J.apply(this,arguments)}return ee.toString=function(){return J.toString()},ee}(function(J){J&&Q(J)})})}},{title:ae[3],dataIndex:"fixed",width:60,algin:"center",render:function(G){var Q=G?G==="left"?oe[0]:oe[1]:oe[2],J=G?G==="left"?"orange":"blue":void 0;return(0,i.jsx)(l.Z,{color:J,style:{margin:0},children:Q})}},{title:ae[4],dataIndex:"sort",width:50,algin:"center",render:function(){return(0,i.jsx)(U.ZP,{type:"text",size:"small",icon:(0,i.jsx)(Un.Z,{}),style:{cursor:"move"}})}}];return k}var zn=e(68400),Qe=e.n(zn),Xe=e(21222),yn,rn,dn,xn,gn,En,un,sn=(0,Xe.H)(yn||(yn=Qe()([`
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
`])));function on(re){return re.map(function(q){return{id:String(q.dataIndex),name:q.title,hidden:q.hidden,width:q.width,fixed:q.fixed}})}var Yn=function(q){var ae=q.defaultColumns,oe=q.sortColumns,k=q.onOk,F=X(),G=(0,p.useState)(function(){return on(oe)}),Q=f()(G,2),J=Q[0],ee=Q[1],ne=(0,p.useMemo)(function(){return Je({locale:F.locale})},[F.locale]),le=(0,P.Z)(function(de,ye,Ee){var Ie=tn()(J);Ie[de][ye]=Ee,ee(Ie)}),me=(0,P.Z)(function(de){ee(de)}),ce=(0,P.Z)(function(){ee(on(oe))}),pe=(0,P.Z)(function(){ee(on(ae))}),ue=(0,P.Z)(function(){var de=[];J.forEach(function(ye){var Ee=ye.id,Ie=ye.width,De=ye.hidden,be=ae.find(function(Me){return String(Me.dataIndex)===Ee});be&&de.push(t()(t()({},be),{},{width:Ie,hidden:De}))}),k==null||k(de)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:sn,children:ne.map(function(de,ye){return(0,i.jsx)("div",{className:Tn,style:{width:de.width,justifyContent:de.algin},children:de.title},ye)})}),(0,i.jsx)("div",{className:Hn,children:(0,i.jsx)(Wn,{items:J,onChange:me,itemClassName:Zn,overlayClassName:Vn,renderItem:function(ye,Ee,Ie){return(0,i.jsx)("div",{className:Pn,children:ne.map(function(De,be){var Me=ye[De.dataIndex],Re=De.dataIndex==="sort"?Ie==null?void 0:Ie.listeners:{};return(0,i.jsx)("div",t()(t()({className:Tn,style:{width:De.width,justifyContent:De.algin}},Re),{},{children:De.render?De.render(Me,function(Ke){return le(Ee,De.dataIndex,Ke)}):Me}),"".concat(Ee).concat(be))})},Ee)}})}),(0,i.jsx)("div",{className:Gn,children:(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(U.ZP,{onClick:pe,children:F.locale.SearchTable.settingModalResetDefault}),(0,i.jsx)(U.ZP,{onClick:ce,children:F.locale.SearchTable.settingModalReset}),(0,i.jsx)(U.ZP,{type:"primary",onClick:ue,children:F.locale.SearchTable.settingModalOk})]})})]})},Ve=Yn,Jn=["sortColumns","defaultColumns","onOk"],Qn=function(q){var ae=q.sortColumns,oe=q.defaultColumns,k=q.onOk,F=r()(q,Jn),G=X();return(0,i.jsx)(z.Z,t()(t()({title:G.locale.SearchTable.settingModalTitle,width:"auto",centered:!0,destroyOnClose:!0,footer:null},F),{},{children:(0,i.jsx)(Ve,{sortColumns:ae,defaultColumns:oe,onOk:k})}))},Xn=Qn,Dn=function(q,ae){var oe=[],k={};q.forEach(function(J){k[String(J.dataIndex)]=J}),ae.forEach(function(J){var ee=String(J.dataIndex),ne=k[ee];if(ne){var le,me,ce;oe.push(t()(t()({},ne),{},{width:(le=J.width)!==null&&le!==void 0?le:ne.width,hidden:(me=J.hidden)!==null&&me!==void 0?me:ne.hidden,fixed:(ce=J.fixed)!==null&&ce!==void 0?ce:ne.fixed})),delete k[ee]}});for(var F=0,G=Object.values(k);F<G.length;F++){var Q=G[F];oe.push(Q)}return oe},wn=o.ei;function we(re){var q=re.baseColumns,ae=re.table,oe=re.globalStateRef,k=(0,p.useRef)([]),F=(0,p.useState)(!1),G=f()(F,2),Q=G[0],J=G[1],ee=(0,p.useState)([]),ne=f()(ee,2),le=ne[0],me=ne[1],ce=oe.current.isTabChanging;(0,p.useMemo)(function(){if(!ce)if(le.length){var Ee=ae.settingColumnsMergeAlgo||Dn;k.current=Ee(q,le)}else k.current=tn()(q)},[q,le]);var pe=(0,P.Z)(function(){J(!0)}),ue=(0,P.Z)(function(){J(!1)}),de=(0,P.Z)(function(Ee){var Ie;k.current=Ee,ue();var De=Ee.map(function(be){return wn(be,"title","dataIndex","width","hidden","fixed")});(Ie=ae.onSettingChanged)===null||Ie===void 0||Ie.call(ae,{columns:De},ae.settingId)}),ye=(0,i.jsx)(Xn,{open:Q,sortColumns:k.current,defaultColumns:q,onCancel:ue,onOk:de});return(0,fn.Z)(nn()(Ze()().mark(function Ee(){var Ie,De,be;return Ze()().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:return Re.next=2,(Ie=ae.getSetting)===null||Ie===void 0?void 0:Ie.call(ae,ae.settingId);case 2:be=Re.sent,be!=null&&(De=be.columns)!==null&&De!==void 0&&De.length&&me(be.columns);case 4:case"end":return Re.stop()}},Ee)})),[ae.settingId]),{sortColumns:k.current,sortModalHolder:ye,openSettingModal:pe,closeSettingModal:ue}}var kn=e(80882),qn=e(86738),er=e(85418),mn=e(93047),nr=["children","onClick","noLoading"],rr=mn.Z;function tr(re){var q=re.children,ae=re.onClick,oe=re.noLoading,k=oe===void 0?!1:oe,F=r()(re,nr),G=(0,p.useState)(!1),Q=f()(G,2),J=Q[0],ee=Q[1],ne=(0,P.Z)(function(){var le=nn()(Ze()().mark(function me(ce){return Ze()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(!k){ue.next=3;break}return ae==null||ae(ce),ue.abrupt("return");case 3:return ee(!0),ue.prev=4,ue.next=7,ae==null?void 0:ae(ce);case 7:ue.next=12;break;case 9:ue.prev=9,ue.t0=ue.catch(4),rr.warn(ue.t0);case 12:ee(!1);case 13:case"end":return ue.stop()}},me,null,[[4,9]])}));return function(me){return le.apply(this,arguments)}}());return(0,i.jsx)(U.ZP,t()(t()({loading:J},F),{},{onClick:ne,children:q}))}var ar=["text","confirmAgain","confirmProps","onClick"],bn,sr=L.kJ,or=L.HD,lr=o.CE,dr=(0,Xe.H)(bn||(bn=Qe()([`
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
`])));function cn(re,q){var ae=re.text,oe=re.confirmAgain,k=re.confirmProps,F=re.onClick,G=r()(re,ar),Q=or(ae)?(0,i.jsx)(tr,t()(t()({type:"link",size:"small"},lr(G,"isShow")),{},{onClick:function(ee){return!oe&&(F==null?void 0:F(ee))},children:ae}),q):ae;return oe?(0,i.jsx)(qn.Z,t()(t()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},k),{},{onConfirm:F,children:Q}),q):Q}function ur(re){var q=re.record,ae=re.index,oe=re.actionItems,k=re.actionItemsCount,F=re.actionItemsDropdownProps,G=re.locale,Q=oe==null?void 0:oe(q,ae);if(!sr(Q))return null;var J=Q.filter(function(me){return me.isShow!==!1}),ee;if(J.length>k){var ne=[],le=[];return J.forEach(function(me,ce){ce<k-1?ne.push(me):le.push(cn(me,ce))}),(0,i.jsxs)(i.Fragment,{children:[ne.map(function(me,ce){return cn(me,ce)}),(0,i.jsx)(er.Z,t()(t()({placement:"bottomRight"},F),{},{dropdownRender:function(){return(0,i.jsx)("div",{className:dr,children:le.map(function(ce,pe){return(0,i.jsx)(p.Fragment,{children:ce},pe)})})},children:(0,i.jsxs)(U.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:[G.SearchTable.more," ",(0,i.jsx)(kn.Z,{style:{margin:0}})]})}))]})}else ee=J.map(function(me,ce){return cn(me,ce)});return ee}function mr(re){var q=re.table,ae=re.sortColumns,oe=re.locale,k=q.showRowNumber,F=k===void 0?!1:k,G=q.rowNumberColumnData,Q=G===void 0?{}:G,J=q.actionItems,ee=q.actionItemsCount,ne=ee===void 0?2:ee,le=q.actionItemsColumnData,me=le===void 0?{}:le,ce=q.actionItemsDropdownProps,pe=(0,P.Z)(function(ye,Ee,Ie){return ur({record:Ee,index:Ie,actionItems:J,actionItemsCount:ne,actionItemsDropdownProps:ce,locale:oe})}),ue=(0,p.useMemo)(function(){return ae.filter(function(ye){return!ye.hidden})},[ae]),de=(0,p.useMemo)(function(){var ye=tn()(ue);return F&&ye.unshift(t()({title:oe.SearchTable.serialColumnName,align:"center",width:70,fixed:"left",render:function(Ie,De,be){return be+1},key:s.rowNumber},Q)),J&&ye.push(t()({title:oe.SearchTable.actionColumnName,align:"center",fixed:"right",width:134,render:pe,key:s.actions},me)),ye},[ue]);return{finalColumns:de}}var ln=e(4559);function cr(re){var q=re.ref,ae=re.rootElemRef,oe=re.searchRef,k=re.requestParamsRef,F=re.requestExtraParamsRef,G=re.searchValueRef,Q=re.dataSource,J=re.updateDataSource,ee=re.updateSummaryData,ne=re.updateScrollY,le=re.openSettingModal,me=re.runRequest,ce=(0,ln.Z)(),pe=ce.forceUpdate;(0,p.useImperativeHandle)(q,function(){return{refresh:me,getRootElement:function(){return ae.current},getSearchRef:function(){return oe.current},getRequestParams:function(){return k.current},getRequestExtraParams:function(){return F.current},getSearchValue:function(){return G.current},setSearchValue:function(de,ye){var Ee,Ie=ye!=null&&ye.overwrite?de:t()(t()({},G.current),de);(Ee=oe.current)===null||Ee===void 0||Ee.setValue(Ie)},clearSearchValue:function(){var de;return(de=oe.current)===null||de===void 0?void 0:de.resetValue()},getDataSource:function(){return Q},setDataSource:function(de){J(de),pe()},setSummaryData:function(de){ee(de),pe()},updateScrollY:ne,openSettingModal:le,rerender:pe}})}var On=e(52038),ir=mn.Z,pr=o.ei,Cn=h.Z,Sn=On.dr;function hr(re){var q,ae=re.request,oe=re.updateScrollY,k=re.table,F=re.searchValueRef,G=re.locale,Q=(0,p.useRef)({current:1,pageSize:(k.pagination!==!1?(q=k.pagination)===null||q===void 0?void 0:q.defaultPageSize:10)||10,total:0}),J=(0,p.useRef)({}),ee=(0,p.useRef)({}),ne=(0,p.useRef)([]),le=(0,p.useRef)({}),me=(0,p.useState)(!1),ce=f()(me,2),pe=ce[0],ue=ce[1];k.pagination===!1&&(Q.current={});var de=(0,P.Z)(function(){var Me=nn()(Ze()().mark(function Re(Ke,Ne){var Ue,Fe,en;return Ze()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(Ue={data:[],total:0},!pe){We.next=3;break}return We.abrupt("return",Ue);case 3:if(ue(!0),We.prev=4,!ae){We.next=18;break}return Fe={},Ne!=null&&Ne.overwrite?Fe=Ke||{}:Fe=t()(t()(t()({},F.current),pr(Q.current,"current","pageSize")),Ke),We.next=10,ae(Fe,ee.current);case 10:en=We.sent,J.current=Fe,Fe.current&&(Q.current.current=Fe.current),Fe.pageSize&&(Q.current.pageSize=Fe.pageSize),Q.current.total=en.total||0,ne.current=en.data||[],le.current=en.summaryData||{},Ue=t()(t()({},en),{},{data:ne.current,total:Q.current.total});case 18:We.next=23;break;case 20:We.prev=20,We.t0=We.catch(4),ir.warn(We.t0);case 23:return ue(!1),k.autoScrollY&&oe(),We.abrupt("return",Ue);case 26:case"end":return We.stop()}},Re,null,[[4,20]])}));return function(Re,Ke){return Me.apply(this,arguments)}}()),ye=!1;if(k.pagination!==!1){var Ee;ye=t()(t()(t()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(Re){var Ke=Q.current,Ne=Ke.current,Ue=Ke.pageSize,Fe=(Ne-1)*Ue,en=Fe+ne.current.length;return Sn(G.SearchTable.paginationTotal,{start:Fe||1,end:en,total:Re})}},k.pagination),Q.current),{},{onChange:function(Re,Ke){var Ne,Ue;(Ne=k.pagination)===null||Ne===void 0||(Ue=Ne.onChange)===null||Ue===void 0||Ue.call(Ne,Re,Ke),Object.assign(Q.current,{current:Re,pageSize:Ke}),de()},className:Cn((Ee=k.pagination)===null||Ee===void 0?void 0:Ee.className,a.pagination)})}var Ie=(0,P.Z)(function(Me){ne.current=Me}),De=(0,P.Z)(function(Me){le.current=Me}),be=(0,P.Z)(function(Me){ee.current=Me});return{loading:pe,dataSource:ne.current,updateDataSource:Ie,summaryData:le.current,updateSummaryData:De,requestParamsRef:J,requestExtraParamsRef:ee,updateRequestExtraParams:be,finalPagination:ye,runRequest:de}}var vr=L.HD;function Rn(re){if(!re)return 0;var q=window.getComputedStyle(re,null),ae=parseFloat(q.marginTop)+parseFloat(q.marginBottom);return re.offsetHeight+ae}function Ir(re,q){if(!re||!q)return 0;var ae=window.getComputedStyle(re,null),oe=ae[q];return vr(oe)&&oe.match(/^\d+/)?parseFloat(oe):0}var fr=L.o8;function yr(re){var q=re.table,ae=re.rootElemRef,oe=(0,p.useState)(q.virtual?0:void 0),k=f()(oe,2),F=k[0],G=k[1],Q=(0,p.useRef)(),J=(0,P.Z)(function(){var ne;if(!(!ae.current||!fr((ne=q.scroll)===null||ne===void 0?void 0:ne.y))){var le=ae.current.querySelector(".".concat(a.table)),me=le==null?void 0:le.querySelector("thead"),ce=le==null?void 0:le.querySelector("tfoot"),pe=le==null?void 0:le.querySelector(".".concat(a.pagination)),ue=[me,ce,pe],de=0;T(ae.current.children,function(ye){ye!==le&&(de+=Rn(ye))}),de+=Ir(le,"marginTop"),T(ue,function(ye){de+=Rn(ye)}),G(ae.current.clientHeight-de)}}),ee=(0,P.Z)(function(){var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;le&&!q.autoScrollY||(clearTimeout(Q.current),Q.current=setTimeout(J,ne))});return(0,H.Z)(function(){var ne=function(){return ee(0,!0)};return window.addEventListener("resize",ne),function(){return window.removeEventListener("resize",ne)}}),{scrollY:F,updateScrollY:ee}}var xr=e(36116),gr=On.nr;function Er(re){var q=re.locale,ae=re.loading,oe=re.search,k=re.searchValueRef,F=re.runRequest,G=re.updateScrollY,Q=oe===!1?{}:oe,J=(0,p.useRef)(null),ee=(0,ln.Z)(),ne=ee.forceUpdate,le=gr(Q,"value");if(le){var me;k.current=(me=Q.value)!==null&&me!==void 0?me:{}}var ce=(0,P.Z)(function(Ee,Ie){var De;k.current=t()({},Ee),le||ne(),(De=Q.onChange)===null||De===void 0||De.call(Q,Ee,Ie)}),pe=(0,P.Z)(function(){var Ee=nn()(Ze()().mark(function Ie(De){var be;return Ze()().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:return k.current=t()({},De),Re.next=3,(be=Q.onReset)===null||be===void 0?void 0:be.call(Q,De);case 3:return Re.next=5,F({current:1});case 5:case"end":return Re.stop()}},Ie)}));return function(Ie){return Ee.apply(this,arguments)}}()),ue=(0,P.Z)(function(){var Ee=nn()(Ze()().mark(function Ie(De){var be;return Ze()().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:return Re.next=2,(be=Q.onSubmit)===null||be===void 0?void 0:be.call(Q,De);case 2:return Re.next=4,F();case 4:case"end":return Re.stop()}},Ie)}));return function(Ie){return Ee.apply(this,arguments)}}()),de=(0,P.Z)(function(Ee){var Ie;(Ie=Q.onToggleCollapsed)===null||Ie===void 0||Ie.call(Q,Ee),G(0,!0)}),ye=oe?(0,i.jsx)(xr.default,t()(t()({},oe),{},{locale:oe.locale||q,rootStyle:t()({marginBottom:16},oe.rootStyle),ref:J,disabled:oe.disabled||ae,value:k.current,onChange:ce,onReset:pe,onSubmit:ue,onToggleCollapsed:de})):null;return{searchNodeHolder:ye,searchRef:J}}var Mn=L.kJ,Pr=L.kK;function Tr(re,q){return re===s.rowNumber?q:re===s.actions?"":"-"}function Dr(re){var q=[];function ae(oe){T(oe,function(k){Mn(k.children)?ae(k.children):q.push(k)})}return ae(re),q}function br(re){var q=re.flattenedColumns,ae=re.summaryData,oe=re.summaryText,k=oe===void 0?"\u5408\u8BA1":oe,F=re.hasRowNumber,G=F===void 0?!1:F,Q=re.hasRowSelection,J=Q===void 0?!1:Q,ee=[],ne=-1;return J&&(ne++,ee.push({index:ne,text:G?"":k})),T(q,function(le){var me=le.key,ce=le.dataIndex,pe=Mn(ce)?ce.join("."):ce,ue=String(me||pe),de=ae[ue];ne++,ee.push({index:ne,text:Pr(de)?Tr(ue,k):de})}),ee}function Or(re){var q=br(re);return(0,i.jsx)(I.Z.Summary,{fixed:"bottom",children:(0,i.jsx)(I.Z.Summary.Row,{children:q.map(function(ae){return(0,i.jsx)(I.Z.Summary.Cell,{align:"center",index:ae.index,colSpan:ae.colSpan,children:ae.text},ae.index)})})})}function _n(re){var q=re.table,ae=re.finalColumns,oe=re.summaryData,k=(0,p.useMemo)(function(){return Dr(ae)},[ae]),F=(0,P.Z)(function(){return Or({flattenedColumns:k,summaryData:oe,summaryText:q.summaryText,hasRowSelection:!!q.rowSelection,hasRowNumber:q.showRowNumber})}),G=q.summary?q.summary:$(oe)?void 0:function(){return F()};return{finalSummary:G}}var Cr=e(9783),Sr=e.n(Cr),Rr=e(42952),Mr=e(98165),_r=e(56140),Ln,Lr=h.Z,Ar=(0,Xe.H)(Ln||(Ln=Qe()([`
  > div::before {
    content: none !important;
  }
`])));function jr(re){var q,ae,oe,k,F,G=re.locale,Q=re.title,J=Q===void 0?{}:Q,ee=re.loading,ne=re.globalStateRef,le=re.runRequest,me=re.openSettingModal,ce=(0,P.Z)(function(Ke){var Ne,Ue;ee||(ne.current.isTabChanging=!0,(Ne=J.tabs)===null||Ne===void 0||(Ue=Ne.onChange)===null||Ue===void 0||Ue.call(Ne,Ke),setTimeout(function(){return le({current:1}).finally(function(){return ne.current.isTabChanging=!1})},0))}),pe={loading:ee},ue=(q=J.leftExtraContent)===null||q===void 0?void 0:q.call(J,pe),de=(ae=J.rightExtraContent)===null||ae===void 0?void 0:ae.call(J,pe),ye=null,Ee=null,Ie=J.showSetting?(0,i.jsx)(E.Z,{title:G.SearchTable.settingTips,children:(0,i.jsx)(U.ZP,{icon:(0,i.jsx)(Rr.Z,{}),disabled:ee,onClick:me})}):null,De=J.showRefresh?(0,i.jsx)(E.Z,{title:G.SearchTable.refreshTips,children:(0,i.jsx)(U.ZP,{icon:(0,i.jsx)(Mr.Z,{}),disabled:ee,onClick:function(){return le()}})}):null;if((oe=J.tabs)!==null&&oe!==void 0&&oe.tabBarExtraContent)if((0,p.isValidElement)(J.tabs.tabBarExtraContent))Ee=J.tabs.tabBarExtraContent;else{var be=J.tabs.tabBarExtraContent;ye=be.left,Ee=be.right}var Me={left:ye||ue?(0,i.jsxs)(y.Z,{size:10,style:{marginRight:16},children:[ye,ue]}):null,right:Ee||de||De||Ie?(0,i.jsxs)(y.Z,{size:10,children:[Ee,de,De,Ie]}):null},Re=Me.left||Me.right||J.tabs?(0,i.jsx)(_r.Z,t()(t()({},J.tabs),{},{className:Lr(J.className,(k=J.tabs)===null||k===void 0?void 0:k.className,Sr()({},Ar,!J.tabs)),style:J.style||((F=J.tabs)===null||F===void 0?void 0:F.style),tabBarExtraContent:Me,onChange:ce})):null;return{titleNodeHolder:Re}}var Br=e(6386),$r=t()(t()({},Br.Z),{},{SearchTable:{serialColumnName:"\u5E8F\u53F7",actionColumnName:"\u64CD\u4F5C",more:"\u66F4\u591A",paginationTotal:"\u5171 ${total} \u6761\u6570\u636E",refreshTips:"\u5237\u65B0",settingTips:"\u5217\u8BBE\u7F6E",settingModalTitle:"\u5217\u8BBE\u7F6E",settingModalOk:"\u786E\u5B9A",settingModalReset:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E",settingModalResetDefault:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",settingModalColumnEnum:["\u5217\u540D\u79F0","\u663E\u793A\u5217","\u5BBD\u5EA6","\u56FA\u5B9A\u65B9\u5F0F","\u6392\u5E8F"],settingModalColumnSortEnum:["\u5DE6","\u53F3","\u65E0"],longTextModalLabel:"\u5168\u90E8",longTextModalTitle:"\u5168\u90E8"}}),Kr=h.Z,Nr=L.PO,Wr=L.kK,Ur=function(q,ae){var oe=q.className,k=q.style,F=q.locale,G=q.request,Q=q.requestOnMounted,J=Q===void 0?!0:Q,ee=q.header,ne=q.search,le=q.titleTop,me=q.title,ce=me===void 0?{}:me,pe=q.titleBottom,ue=q.table,de=ue===void 0?{}:ue,ye=q.footer,Ee=(0,p.useRef)(null),Ie=(0,p.useRef)(ne===!1?{}:ne.defaultValue||{}),De=(0,p.useMemo)(function(){return t()(t()({},$r),F)},[F]);de.rowSelection&&Wr(de.rowSelection.columnWidth)&&(de.rowSelection=t()(t()({},de.rowSelection),{},{columnWidth:32}));var be=(0,p.useRef)({isTabChanging:!1}),Me=Ye({table:de,globalStateRef:be}),Re=Me.baseColumns,Ke=we({table:de,baseColumns:Re,globalStateRef:be}),Ne=Ke.sortColumns,Ue=Ke.sortModalHolder,Fe=Ke.openSettingModal,en=mr({table:de,sortColumns:Ne,locale:De}),zr=en.finalColumns,We=yr({table:de,rootElemRef:Ee}),Qr=We.scrollY,Hr=We.updateScrollY,ke=hr({searchValueRef:Ie,table:de,request:G,updateScrollY:Hr,locale:De}),An=ke.loading,Vr=ke.dataSource,Xr=ke.updateDataSource,wr=ke.summaryData,kr=ke.updateSummaryData,qr=ke.finalPagination,hn=ke.runRequest,et=ke.requestParamsRef,nt=ke.requestExtraParamsRef,rt=ke.updateRequestExtraParams,Gr=Er({locale:De,loading:An,search:ne,searchValueRef:Ie,runRequest:hn,updateScrollY:Hr}),tt=Gr.searchNodeHolder,at=Gr.searchRef,st=jr({locale:De,title:ce,loading:An,globalStateRef:be,runRequest:hn,openSettingModal:Fe}),ot=st.titleNodeHolder,lt=_n({table:de,finalColumns:zr,summaryData:wr}),dt=lt.finalSummary,jn={loading:An},ut=(0,P.Z)(function(mt,Yr,Jr,ct){var Zr;(de.sortMode==="service"||de.sortMode==="service-all")&&(rt({filter:Yr,sorter:Jr}),hn()),(Zr=de.onChange)===null||Zr===void 0||Zr.call(de,mt,Yr,Jr,ct)});return(0,H.Z)(function(){J&&hn()}),cr({ref:ae,rootElemRef:Ee,searchRef:at,requestParamsRef:et,requestExtraParamsRef:nt,searchValueRef:Ie,dataSource:Vr,updateDataSource:Xr,updateSummaryData:kr,updateScrollY:Hr,openSettingModal:Fe,runRequest:hn}),(0,i.jsx)(w.Provider,{value:{locale:De},children:(0,i.jsxs)("div",{ref:Ee,className:oe,style:k,children:[ee==null?void 0:ee(jn),tt,le==null?void 0:le(jn),ot,pe==null?void 0:pe(jn),(0,i.jsx)(I.Z,t()(t()({tableLayout:"fixed"},de),{},{className:Kr(de.className,a.table),columns:zr,dataSource:Vr,loading:t()({spinning:An},Nr(de==null?void 0:de.loading)?de.loading:void 0),scroll:t()({scrollToFirstRowOnChange:!0,x:"max-content",y:Qr},de==null?void 0:de.scroll),summary:dt,pagination:qr,onChange:ut})),ye==null?void 0:ye(jn),Ue]})})},pn=(0,p.forwardRef)(Ur),Fr=pn},74465:function(Y,c,e){e.r(c);var R=e(97857),t=e.n(R),h=e(9686);c.default=t()(t()({},h.default),{},{SearchTable:{serialColumnName:"Rank",actionColumnName:"Actions",more:"More",paginationTotal:"Showing ${start} to ${end} of ${total} entries",refreshTips:"Refresh",settingTips:"Columns Setting",settingModalTitle:"Columns Setting",settingModalOk:"Ok",settingModalReset:"Reset Current Setting",settingModalResetDefault:"Restore Defaults",settingModalColumnEnum:["Name","Display","Width","Fixed","Sort"],settingModalColumnSortEnum:["left","right","-"],longTextModalLabel:"All",longTextModalTitle:"All"}})},88442:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(63917);const t=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\uFF0C\u652F\u6301 SSR(Server-Side Rendering)\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search \u6CA1\u6709\u5F88\u597D\u7684\u652F\u6301 SSR\uFF0C\u5982\u679C\u662F Next.js \u9879\u76EE\uFF0C\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u5E76\u914D\u7F6E ssr \u4E3A\u4E0D\u542F\u7528\uFF0C\u5982\u4E0B\u793A\u4F8B\u3002",paraId:5},{value:`import dynamic from 'next/dynamic'

const FormRender = dynamic(() => import('@schema-render/form-render-react'), {
  ssr: false,
})
`,paraId:6},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:7,tocIndex:2},{value:"itemLayout",paraId:7,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:7,tocIndex:2},{value:"Renderers",paraId:7,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:7,tocIndex:2},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:8,tocIndex:2},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:9,tocIndex:2},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:10,tocIndex:2},{value:"\u3002",paraId:9,tocIndex:2},{value:"\u7B80\u6D01\u6613\u7528",paraId:9,tocIndex:2},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:9,tocIndex:2},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u4E0E\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u4E1A\u52A1\u81EA\u8EAB\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:9,tocIndex:2},{value:"\u8F7B\u91CF\u7EA7",paraId:9,tocIndex:2},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:9,tocIndex:2}]},87351:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(59869);const t=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u52A0\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}]},43504:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(76777);const t=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
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
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}]},12157:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(84894);const t=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}]},14569:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(23382);const t=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}]},49116:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(86131);const t=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}]},44272:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(15208);const t=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}]},19520:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(233);const t=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}]},53671:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(39008);const t=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}]},71905:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(37424);const t=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}]},73148:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(48966);const t=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},12875:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(92436);const t=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}]},15727:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(86685);const t=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}]},59865:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(43315);const t=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}]},63021:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(46715);const t=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}]},727:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(35786);const t=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},71789:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(69708);const t=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}]},49961:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(96687);const t=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},47468:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(85105);const t=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}]},73890:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(2755);const t=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},21979:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(88485);const t=[]},98008:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(97024);const t=[]},15672:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(92311);const t=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}]},3215:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(78593);const t=[]},72624:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(25105);const t=[]},38319:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(35170);const t=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}]},23352:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(12727);const t=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}]},17139:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(53143);const t=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}]},44878:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(65063);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}]},8706:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(30761);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},39263:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(25937);const t=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}]},43811:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(91260);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"submitText",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"resetText",paraId:15,tocIndex:9},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}]},14590:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(90261);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:6,tocIndex:4},{value:"extra.checkedOptions",paraId:6,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:6,tocIndex:4},{value:"options",paraId:6,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:6,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:7,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"v1.4.0",paraId:8,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:9,tocIndex:5},{value:"extra.selectedOptions",paraId:9,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:9,tocIndex:5},{value:"options",paraId:9,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:9,tocIndex:5},{value:"v1.4.0",paraId:10,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:11,tocIndex:6},{value:"ISOString",paraId:11,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u66F4\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:11,tocIndex:6},{value:"\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:12,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:13,tocIndex:7},{value:"locale",paraId:13,tocIndex:7},{value:" \u7684 ",paraId:13,tocIndex:7},{value:"FormRender.displayDateRange",paraId:13,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:13,tocIndex:7},{value:"renderOptions.headerOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"renderOptions.panelOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse.Panel",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:15,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:16,tocIndex:9},{value:"className",paraId:16,tocIndex:9},{value:" \u548C ",paraId:16,tocIndex:9},{value:"style",paraId:16,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:16,tocIndex:9}]},93076:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(4123);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},24426:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(74624);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"submitText",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"resetText",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},64092:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(83140);const t=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}]},75796:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(34877);const t=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}]},2131:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(45011);const t=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}]},98685:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(6168);const t=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}]},7669:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(88358);const t=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}]},15577:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(73888);const t=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}]},2531:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(73914);const t=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},26875:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(64768);const t=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}]},18335:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(87004);const t=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}]},9034:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(43895);const t=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}]},23652:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(67342);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}]},26138:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(27885);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},51001:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(10122);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},13086:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(84123);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},31626:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(24197);const t=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}]},60031:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(69306);const t=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}]},12952:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(72106);const t=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}]},10198:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(17258);const t=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}]},51184:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(73865);const t=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}]},59418:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(81535);const t=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}]},49329:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(18899);const t=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showRefresh",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5237\u65B0\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u663E\u793A\u5217\u8BBE\u7F6E\u4E0E\u5237\u65B0\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6DFB\u52A0\u7C7B\u540D\u5220\u9664\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"leftExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6309\u9700\u5220\u9664\u3002",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"rightExtraContent",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\u3002",paraId:4,tocIndex:6}]},78323:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(87922);const t=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u5F69\u8272\u6807\u7B7E\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Tag \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Modal \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}]},66376:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(8497);const t=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}]},5664:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(90749);const t=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},95378:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(27490);const t=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showRefresh",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5237\u65B0\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"leftExtraContent",paraId:2,tocIndex:2},{value:"\u5DE6\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rightExtraContent",paraId:2,tocIndex:2},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}]},39168:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(8906);const t=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}]},9382:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(34451);const t=[]},93283:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(24311);const t=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
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
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}]},85162:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(49409);const t=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",paraId:1,tocIndex:0}]},92724:function(Y,c,e){e.r(c),e.d(c,{texts:function(){return t}});var R=e(63710);const t=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}]},36005:function(Y,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},52551:function(Y,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

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
`},29758:function(Y,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

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
`},19970:function(Y,c){c.Z=`import type { IRenderers, ISchema } from '@schema-render/core-react'
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
`},93635:function(Y,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},3116:function(Y,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},12967:function(Y,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
`},540:function(Y,c){c.Z=`import BankSelect from './BankSelect'

export default {
  BankSelect,
}
`},71525:function(Y,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
`},24127:function(Y,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

export const builtinRenderers = cij\`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
\`
`},96390:function(Y,c){c.Z=`import type { TableProps } from 'antd'

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
`},77538:function(Y,c){c.Z=`import dayjs from 'dayjs'

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
`},19150:function(Y,c){c.Z=`import type { IOpenComponentParams } from '@schema-render/core-react'
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
`},97395:function(Y,c){c.Z=`import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
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
`},5038:function(Y,c){c.Z=`import type { IOpenFormItemParams } from '@schema-render/core-react'
import type { FC } from 'react'

const SectionTitle: FC<IOpenFormItemParams<never>> = ({ schema }) => {
  return <div className="section-title">{schema.title}</div>
}

export default {
  formItem: SectionTitle as never,
}
`},71091:function(Y,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},29449:function(Y,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},17261:function(Y,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},34569:function(Y,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},45876:function(Y,c){c.Z=`import dayjs from 'dayjs'

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
`},90887:function(Y,c){c.Z=`function rangeNumber(min: number, max: number, toInt = true) {
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
`},37343:function(Y,c){c.Z=`import dayjs from 'dayjs'

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
`},36556:function(Y,c){c.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
`},22452:function(Y,c){c.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
