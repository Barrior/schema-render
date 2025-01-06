"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[768],{40492:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(63917),h={}},42254:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(5574),h=e.n(a),A=e(15009),P=e.n(A),z=e(97857),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(59869),L=e(74072),j=e(48201),_={"examples-core-react-002-quick-start-demo-0":{component:x.memo(x.lazy(U()(P()().mark(function T(){var v,m,s,t,o,n,r,l;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=u.sent,m=v.default,u.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=u.sent,t=s.Input,o=function(f){var B=f.schema,y=f.body;return x.createElement("div",null,x.createElement("h3",null,B.title),x.createElement("div",null,y))},n={InputText:{component:function(f){var B=f.schema,y=f.value,i=f.onChange;return x.createElement(t,I()(I()({},B.renderOptions),{},{value:y,onChange:function(O){return i(O.target.value)}}))}},Textarea:{component:function(f){var B=f.schema,y=f.value,i=f.onChange;return x.createElement(t.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(B.title)},B.renderOptions),{},{value:y,onChange:function(O){return i(O.target.value)}}))}}},r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return x.createElement(m,{itemLayout:o,renderers:n,schema:r})},u.abrupt("return",{default:l});case 13:case"end":return u.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,antd:j},renderOpts:{compile:function(){var T=U()(P()().mark(function m(){var s,t=arguments;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-002-quick-start-demo-1":{component:x.memo(x.lazy(U()(P()().mark(function T(){var v,m,s,t,o,n,r,l,d,u;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=f.sent,m=v.default,f.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=f.sent,t=s.Input,f.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return o=f.sent,n=o.useState,r=function(y){var i=y.schema,C=y.body;return x.createElement("div",null,x.createElement("h3",null,i.title),x.createElement("div",null,C))},l={InputText:{component:function(y){var i=y.schema,C=y.value,O=y.onChange;return x.createElement(t,I()(I()({},i.renderOptions),{},{value:C,onChange:function(D){return O(D.target.value)}}))}},Textarea:{component:function(y){var i=y.schema,C=y.value,O=y.onChange;return x.createElement(t.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(i.title)},i.renderOptions),{},{value:C,onChange:function(D){return O(D.target.value)}}))}}},d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},u=function(){var y=n({}),i=h()(y,2),C=i[0],O=i[1];return x.createElement("div",null,x.createElement(m,{itemLayout:r,renderers:l,schema:d,onChange:O}),x.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),x.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(C,null,2)))},f.abrupt("return",{default:u});case 17:case"end":return f.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,antd:j,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var T=U()(P()().mark(function m(){var s,t=arguments;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},28070:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return j}});var a=e(5574),h=e.n(a),A=e(15009),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(76777),x=e(74072),$=e(2862),L=e(78469),j={"examples-core-react-003-schema-demo-0":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,m,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,s=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var m,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-1":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,m,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,s=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var m,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-2":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,m,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,s=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var m,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-3":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,m,s,t,o,n,r,l,d;return P()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return T=g.sent,v=T.useState,g.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return m=g.sent,s=m.default,g.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return t=g.sent,o=t.default,g.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return n=g.sent,r=n.default,l={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},d=function(){var B=v({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),y=h()(B,2),i=y[0],C=y[1];return p.createElement(s,{value:i,schema:l,onChange:C,itemLayout:o,renderers:r})},g.abrupt("return",{default:d});case 19:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,react:R||(R=e.t(p,2)),"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var m,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-4":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,m,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,s=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var m,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-5":{component:p.memo(p.lazy(I()(P()().mark(function _(){var T,v,m,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,s=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":L,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var _=I()(P()().mark(function v(){var m,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},58970:function(V,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(84894),I=e(74072),p=e(2862),U=e(78469),x={"examples-core-react-100-layout-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(j,{layout:"normal",schema:s,itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":U,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-1":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},t=function(){return P.createElement(j,{layout:"normal",schema:s,itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":U,"./renderers/common.tsx":p,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-2":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(j,{schema:s,layout:"autoFill",itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":U,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-3":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(j,{schema:s,layout:"autoFit",itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":U,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}},"examples-core-react-100-layout-demo-4":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(j,{schema:s,layout:"autoFill",layoutMinMax:[230,230],itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":U,"./renderers/common.tsx":p,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}}}},61985:function(V,c,e){e.r(c),e.d(c,{demos:function(){return T}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(23382),I=e(74072),p=e(69581),U=e(48201),x=e(93967),$=e.n(x),L=e(29298),j=e(2862),_=e(59868),T={"examples-core-react-101-item-layout-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i;return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return m=O.sent,s=m.default,O.next=6,Promise.resolve().then(e.bind(e,69581));case 6:return t=O.sent,o=t.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=O.sent,r=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return u=O.sent,g=u.default,O.next=22,Promise.resolve().then(e.bind(e,29298));case 22:return f=O.sent,B=function(D){var b=D.body,M=D.schema,E=D.validator,K=D.required,N=D.prefixClassNames;return P.createElement("div",{className:N("item-layout-vertical")},P.createElement("div",{className:d(N("item-header"),f.header)},K&&P.createElement("span",{className:d(N("item-mark"),f.mark)},"*"),P.createElement("span",{className:d(N("item-title"),f.title)},M.title),!!M.titleDescription&&P.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},P.createElement(o,{className:d(N("item-title-tooltip"),f.titleTooltip)}))),P.createElement("div",{className:N("item-body")},b),P.createElement("div",{className:d(N("item-footer"),f.footer)},E.status==="error"&&!!E.message&&P.createElement("div",{className:d(N("item-error-msg"),f.errorMsg)},E.message),!!M.description&&P.createElement("div",{className:d(N("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return P.createElement(s,{schema:y,itemLayout:B,renderers:g})},O.abrupt("return",{default:i});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(29758).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Vertical/styles.ts":L,"./renderers/common.tsx":j,"@schema-render/core-react":I,"@ant-design/icons":p,antd:U,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var v=A()(a()().mark(function s(){var t,o=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-core-react-101-item-layout-demo-1":{component:P.memo(P.lazy(A()(a()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i;return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return m=O.sent,s=m.default,O.next=6,Promise.resolve().then(e.bind(e,69581));case 6:return t=O.sent,o=t.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=O.sent,r=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return u=O.sent,g=u.default,O.next=22,Promise.resolve().then(e.bind(e,59868));case 22:return f=O.sent,B=function(D){var b=D.body,M=D.schema,E=D.validator,K=D.required,N=D.prefixClassNames;return P.createElement("div",{className:d(N("item-layout-horizontal"),f.horizontal)},P.createElement("div",{className:d(N("item-main"),f.main)},P.createElement("div",{className:d(N("item-header"),f.header)},K&&P.createElement("span",{className:d(N("item-mark"),f.mark)},"*"),P.createElement("span",{className:d(N("item-title"),f.title)},M.title),!!M.titleDescription&&P.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},P.createElement(o,{className:d(N("item-title-tooltip"),f.titleTooltip)}))),P.createElement("div",{className:d(N("item-body"),f.body)},b)),P.createElement("div",{className:d(N("item-footer"),f.footer)},E.status==="error"&&!!E.message&&P.createElement("div",{className:d(N("item-error-msg"),f.errorMsg)},E.message),!!M.description&&P.createElement("div",{className:d(N("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return P.createElement(s,{schema:y,itemLayout:B,renderers:g})},O.abrupt("return",{default:i});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(52551).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal/styles.ts":_,"./renderers/common.tsx":j,"@schema-render/core-react":I,"@ant-design/icons":p,antd:U,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var v=A()(a()().mark(function s(){var t,o=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},83222:function(V,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(86131),I=e(74072),p=e(2862),U=e(78469),x={"examples-core-react-102-prefix-cls-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(j,{schema:s,itemLayout:T,renderers:m,prefixCls:"my-cls"})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":U,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}}}},81235:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return m}});var a=e(97857),h=e.n(a),A=e(15009),P=e.n(A),z=e(5574),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(15208),L=e(74072),j=e(41989),_=e(78469),T=e(2862),v=e(48201),m={"examples-core-react-200-change-event-demo-0":{component:x.memo(x.lazy(U()(P()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=O.sent,o=t.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=O.sent,g=u.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,B=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var D=o({}),b=I()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:B,renderers:g,value:M,onChange:function(N){return E(N)}}),x.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=U()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-1":{component:x.memo(x.lazy(U()(P()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=O.sent,o=t.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=O.sent,g=u.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,B=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var D=o({}),b=I()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:B,renderers:g,onChange:function(N,H){return E(H)}}),x.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=U()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-2":{component:x.memo(x.lazy(U()(P()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=O.sent,o=t.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=O.sent,g=u.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,B=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var D=o({}),b=I()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:B,renderers:g,onItemChange:function(N){return E(N)}}),x.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=U()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-3":{component:x.memo(x.lazy(U()(P()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D;return P()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=M.sent,o=t.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=M.sent,r=n.Input,M.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return l=M.sent,d=l.default,M.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return u=M.sent,g=u.default,M.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return f=M.sent,B=f.default,M.next=22,Promise.resolve().then(e.bind(e,78469));case 22:return y=M.sent,i=y.default,C={component:function(K){var N,H=K.schema,W=K.value,F=K.disabled,Z=K.onChange;return x.createElement(r,h()(h()({placeholder:"\u8BF7\u8F93\u5165".concat((N=H.title)!==null&&N!==void 0?N:"")},H.renderOptions),{},{value:W,disabled:F,onChange:function(Y){Z(Y.target.value,{extra:Math.random()})}}))}},O=h()({InputTextWithExtra:C},B),S={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},D=function(){var K=o({}),N=I()(K,2),H=N[0],W=N[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(d,{schema:S,itemLayout:i,renderers:O,onItemChange:function(Z){return W(Z)}}),x.createElement(g,{value:H}))},M.abrupt("return",{default:D});case 29:case"end":return M.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),antd:v,"@schema-render/core-react":L,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=U()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}}}},58297:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(233),x=e(74072),$=e(41989),L=e(78469),j=e(2862),_=e(48201),T={"examples-core-react-210-relation-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,s=m.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return u=i.sent,g=u.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},B=function(){var O=s({}),S=P()(O,2),D=S[0],b=S[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:d,value:D,onChange:function(E,K){(K.sPath==="width"||K.sPath==="height")&&(E.width=K.value,E.height=K.value),b(E)}}),p.createElement(r,{value:D}))},i.abrupt("return",{default:B});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-core-react-210-relation-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,s=m.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return u=i.sent,g=u.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},B=function(){var O=s({}),S=P()(O,2),D=S[0],b=S[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:d,watch:{width:function(E){E.height=E.width},height:function(E){E.width=E.height}},value:D,onChange:b}),p.createElement(r,{value:D}))},i.abrupt("return",{default:B});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-core-react-210-relation-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=O.sent,s=m.useState,O.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=O.sent,o=t.Button,O.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return n=O.sent,r=n.default,O.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return u=O.sent,g=u.default,f={BankSelect:{component:function(D){var b=D.value,M=D.sPath,E=D.onChange,K=function(){var W=String(Math.random()).slice(2,6),F={bank_id:"id_".concat(W),bank_account:"111222333".concat(W),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(W),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(W,"\u652F\u884C")};E(F[M],{extra:F})},N={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return p.createElement("div",{style:{display:"flex"}},p.createElement("div",{style:N},b),p.createElement(o,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},B={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},y=function(D,b){D.bank_id=b.extra.bank_id,D.bank_account=b.extra.bank_account,D.bank_name=b.extra.bank_name,D.bank_branch_name=b.extra.bank_branch_name},i=function(){var D=s({}),b=P()(D,2),M=b[0],E=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:B,itemLayout:g,renderers:f,watch:{bank_account:y,bank_name:y,bank_branch_name:y},value:M,onChange:E}),p.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 25:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":L,react:R||(R=e.t(p,2)),antd:_,"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},33632:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(5574),h=e.n(a),A=e(97857),P=e.n(A),z=e(15009),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(39008),L=e(48201),j=e(74072),_=e(78469),T={"examples-core-react-220-renderer-demo-0":{component:x.memo(x.lazy(U()(I()().mark(function v(){var m,s,t,o,n,r,l,d,u;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return m=f.sent,s=m.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=f.sent,o=t.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,l={MyRate:{component:function(y){var i=y.disabled,C=y.value,O=y.onChange;return x.createElement(s,{disabled:i,value:C,onChange:O})}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},u=function(){return x.createElement(o,{schema:d,itemLayout:r,renderers:l})},f.abrupt("return",{default:u});case 16:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,antd:L,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=U()(I()().mark(function s(){var t,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-core-react-220-renderer-demo-1":{component:x.memo(x.lazy(U()(I()().mark(function v(){var m,s,t,o,n,r,l,d,u;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return m=f.sent,s=m.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=f.sent,o=t.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,l={MyRate:{formItem:function(y){var i=y.schema,C=y.disabled,O=y.value,S=y.onChange;return x.createElement("div",null,x.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",i.title,"\u3011"),x.createElement(s,{disabled:C,value:O,onChange:S}))}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},u=function(){return x.createElement(o,{schema:d,itemLayout:r,renderers:l})},f.abrupt("return",{default:u});case 16:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,antd:L,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=U()(I()().mark(function s(){var t,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-core-react-220-renderer-demo-2":{component:x.memo(x.lazy(U()(I()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,s=m.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=i.sent,d=l.Button,u=l.Input,g={InputText:{component:function(O){var S,D=O.schema,b=O.value,M=O.disabled,E=O.readonly,K=O.onChange;return E?x.createElement("div",null,b):x.createElement(u,P()(P()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:"")},D.renderOptions),{},{value:b!=null?b:"",disabled:M,onChange:function(H){return K(H.target.value)}}))}},TextArea:{component:function(O){var S,D=O.schema,b=O.value,M=O.disabled,E=O.onChange;return x.createElement(u.TextArea,P()(P()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:"")},D.renderOptions),{},{value:b!=null?b:"",onChange:function(N){return E(N.target.value)},disabled:M}))},readonlyComponent:function(O){var S=O.value;return x.createElement("div",null,S)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},B=function(){var O=s(!1),S=h()(O,2),D=S[0],b=S[1],M=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),E=h()(M,2),K=E[0],N=E[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:K,onChange:N,readonly:D}),x.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return b(!D)}},D?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:B});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":_,react:R||(R=e.t(x,2)),"@schema-render/core-react":j,antd:L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=U()(I()().mark(function s(){var t,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},95902:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var a=e(15009),h=e.n(a),A=e(97857),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(37424),x=e(48201),$=e(74072),L=e(47621),j=e(33517),_=e(78469),T=e(40644),v={"examples-core-react-221-renderer-object-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C;return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=S.sent,t=s.Input,S.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=S.sent,n=o.default,S.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=S.sent,l=r.default,S.next=14,Promise.resolve().then(e.bind(e,47621));case 14:return d=S.sent,u=d.default,S.next=18,Promise.resolve().then(e.bind(e,40644));case 18:return g=S.sent,f=g.default,S.next=22,Promise.resolve().then(e.bind(e,33517));case 22:return B=S.sent,y=B.default,i={Object:y,ObjectCollapse:f,InputText:{component:function(b){var M,E=b.schema,K=b.value,N=b.disabled,H=b.onChange;return p.createElement(t,P()(P()({placeholder:"\u8BF7\u8F93\u5165".concat((M=E.title)!==null&&M!==void 0?M:"")},E.renderOptions),{},{value:K,disabled:N,onChange:function(F){return H(F.target.value)}}))}}},C=function(){return p.createElement(n,{schema:u,itemLayout:l,renderers:i})},S.abrupt("return",{default:C});case 27:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.jsx"},context:{"./schemas/object.ts":L,"./renderers/object/ObjectNormal.tsx":j,"./item-layout/Horizontal.tsx":_,"./renderers/object/ObjectCollapse.tsx":T,antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":T},renderOpts:{compile:function(){var m=I()(h()().mark(function t(){var o,n=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-core-react-221-renderer-object-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b,M;return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=K.sent,t=s.Input,K.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return o=K.sent,n=o.useRef,K.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return r=K.sent,l=r.default,K.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return d=K.sent,u=d.Button,g=d.message,K.next=19,Promise.resolve().then(e.bind(e,78469));case 19:return f=K.sent,B=f.default,K.next=23,Promise.resolve().then(e.bind(e,47621));case 23:return y=K.sent,i=y.default,K.next=27,Promise.resolve().then(e.bind(e,40644));case 27:return C=K.sent,O=C.default,K.next=31,Promise.resolve().then(e.bind(e,33517));case 31:return S=K.sent,D=S.default,b={Object:D,ObjectCollapse:O,InputText:{component:function(H){var W,F=H.schema,Z=H.value,J=H.disabled,Y=H.onChange;return p.createElement(t,P()(P()({placeholder:"\u8BF7\u8F93\u5165".concat((W=F.title)!==null&&W!==void 0?W:"")},F.renderOptions),{},{value:Z,disabled:J,onChange:function(w){return Y(w.target.value)}}))}}},M=function(){var H=n(null),W=function(){var F=I()(h()().mark(function Z(){var J,Y,q;return h()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,(J=H.current)===null||J===void 0?void 0:J.validate();case 2:Y=ae.sent,q=Y.hasError,q||g.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return ae.stop()}},Z)}));return function(){return F.apply(this,arguments)}}();return p.createElement("div",null,p.createElement(l,{ref:H,schema:i,itemLayout:B,renderers:b}),p.createElement(u,{type:"primary",onClick:W,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:M});case 36:case"end":return K.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":j,"./item-layout/Horizontal.tsx":_,"./schemas/object.ts":L,"./renderers/object/ObjectCollapse.tsx":T,antd:x,react:R||(R=e.t(p,2)),"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":T},renderOpts:{compile:function(){var m=I()(h()().mark(function t(){var o,n=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}}}},93609:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(48966),h={}},90239:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var a=e(5574),h=e.n(a),A=e(97857),P=e.n(A),z=e(15009),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(92436),L=e(74072),j=e(2862),_=e(78469),T=e(48201),v={"examples-core-react-223-validator-demo-0":{component:x.memo(x.lazy(U()(I()().mark(function m(){var s,t,o,n,r,l,d,u;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=f.sent,n=o.default,f.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=f.sent,l=r.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},u=function(){return x.createElement(t,{schema:d,itemLayout:n,renderers:l})},f.abrupt("return",{default:u});case 15:case"end":return f.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":_,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var m=U()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-1":{component:x.memo(x.lazy(U()(I()().mark(function m(){var s,t,o,n,r,l,d,u,g,f;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=y.sent,t=s.default,y.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=y.sent,n=o.default,y.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=y.sent,l=r.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},u=function(){var i=U()(I()().mark(function C(O){return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",new Promise(function(b){setTimeout(function(){return b({ok:!1})},200)}));case 1:case"end":return D.stop()}},C)}));return function(O){return i.apply(this,arguments)}}(),g={detectSensitiveWord:function(){var i=U()(I()().mark(function O(S){var D,b;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return D=S.value,E.next=3,u(D);case 3:if(b=E.sent,b.ok){E.next=6;break}return E.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return E.stop()}},O)}));function C(O){return i.apply(this,arguments)}return C}()},f=function(){return x.createElement(t,{schema:d,itemLayout:n,renderers:l,validators:g})},y.abrupt("return",{default:f});case 17:case"end":return y.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":_,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var m=U()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-2":{component:x.memo(x.lazy(U()(I()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,t=s.Rate,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=C.sent,n=o.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=C.sent,l=r.default,C.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return d=C.sent,u=d.default,g={component:function(S){var D=S.schema,b=S.value,M=S.disabled,E=S.onChange;return x.createElement(t,P()(P()({},D.renderOptions),{},{value:b,disabled:M,onChange:function(N){return E(N)}}))},validator:function(S){var D=S.value;return D===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:D<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},B=P()(P()({},u),{},{Rate:g}),y=function(){return x.createElement(n,{schema:f,itemLayout:l,renderers:B})},C.abrupt("return",{default:y});case 21:case"end":return C.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":_,antd:T,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var m=U()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-3":{component:x.memo(x.lazy(U()(I()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C;return I()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=S.sent,t=s.useState,o=s.useRef,S.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return n=S.sent,r=n.Button,l=n.message,S.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return d=S.sent,u=d.default,S.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return g=S.sent,f=g.default,S.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return B=S.sent,y=B.default,i={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},C=function(){var b=t({}),M=h()(b,2),E=M[0],K=M[1],N=o(null);function H(){return W.apply(this,arguments)}function W(){return W=U()(I()().mark(function F(){var Z,J,Y;return I()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,N.current.validate();case 2:if(Z=w.sent,J=Z.hasError,Y=Z.errorList,console.log("[validate] hasError: ",J),console.log("[validate] errorList: ",Y),!J){w.next=9;break}return w.abrupt("return",l.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:l.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return w.stop()}},F)})),W.apply(this,arguments)}return x.createElement("div",null,x.createElement(u,{ref:N,schema:i,value:E,onChange:K,itemLayout:y,renderers:f}),x.createElement(r,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:H},"\u63D0\u4EA4"))},S.abrupt("return",{default:C});case 25:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":_,"./renderers/common.tsx":j,react:R||(R=e.t(x,2)),antd:T,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var m=U()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}}}},61022:function(V,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(86685),I=e(74072),p=e(2862),U=e(78469),x={"examples-core-react-230-global-status-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return P.createElement(j,{disabled:!0,schema:s,itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":U,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}}}},61650:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return m}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(97857),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(43315),L=e(48201),j=e(74072),_=e(33517),T=e(2862),v=e(78469),m={"examples-core-react-250-scroll-demo-0":{component:x.memo(x.lazy(U()(h()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=E.sent,o=t.useState,n=t.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,l=r.Button,d=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return u=E.sent,g=u.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,B=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,O=C.default,S=I()(I()({},B),{},{Object:O}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},b=function(){var N=o({}),H=P()(N,2),W=H[0],F=H[1],Z=n(null);return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:Z,schema:D,value:W,onChange:F,itemLayout:i,renderers:S}),x.createElement(d,{direction:"vertical"},x.createElement(l,{onClick:function(){var Y;return(Y=Z.current)===null||Y===void 0?void 0:Y.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(l,{onClick:function(){var Y;(Y=Z.current)===null||Y===void 0||Y.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(l,{onClick:function(){var Y;(Y=Z.current)===null||Y===void 0||Y.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},E.abrupt("return",{default:b});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":_,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:R||(R=e.t(x,2)),antd:L,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=U()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-250-scroll-demo-1":{component:x.memo(x.lazy(U()(h()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=E.sent,o=t.useState,n=t.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,l=r.Button,d=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return u=E.sent,g=u.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,B=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,O=C.default,S=I()(I()({},B),{},{Object:O}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},b=function(){var N=o({}),H=P()(N,2),W=H[0],F=H[1],Z=n(null),J=n(null);return x.createElement("div",{ref:J,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:D,value:W,onChange:F,itemLayout:i,renderers:S}),x.createElement("div",{style:{position:"sticky",top:0}},x.createElement(d,{direction:"vertical"},x.createElement(l,{onClick:function(){var q;(q=Z.current)===null||q===void 0||q.scrollTo("object_basic",{positionedElement:J.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(l,{onClick:function(){var q;(q=Z.current)===null||q===void 0||q.scrollTo(["object_spec","title"],{positionedElement:J.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(l,{onClick:function(){var q;(q=Z.current)===null||q===void 0||q.scrollTo("object_other.content",{positionedElement:J.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:b});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":_,"./item-layout/Horizontal.tsx":v,"./renderers/common.tsx":T,react:R||(R=e.t(x,2)),antd:L,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=U()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-250-scroll-demo-2":{component:x.memo(x.lazy(U()(h()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=E.sent,o=t.useState,n=t.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,l=r.Button,d=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return u=E.sent,g=u.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,B=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,O=C.default,S=I()(I()({},B),{},{Object:O}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},b=function(){var N=o({}),H=P()(N,2),W=H[0],F=H[1],Z=n(null),J=function(q){var w,ae,pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(w=Z.current)===null||w===void 0||w.scrollTo(q,{positionedElement:window,gap:-76+pe,behavior:"instant"});var le=(ae=Z.current)===null||ae===void 0||(ae=ae.findItem(q))===null||ae===void 0?void 0:ae.getRootElement();le==null||le.classList.add("focus-out"),setTimeout(function(){le==null||le.classList.remove("focus-out")},1e3)};return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:D,value:W,onChange:F,itemLayout:i,renderers:S}),x.createElement("div",null,x.createElement(d,{direction:"vertical"},x.createElement(l,{onClick:function(){return J("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(l,{onClick:function(){return J(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(l,{onClick:function(){return J("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:b});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":T,"./renderers/object/ObjectNormal.tsx":_,"./item-layout/Horizontal.tsx":v,react:R||(R=e.t(x,2)),antd:L,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":_,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=U()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}}}},49669:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(46715),x=e(48201),$=e(74072),L=e(78469),j=e(2862),_={"examples-core-react-280-open-api-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=C.sent,m=v.useState,s=v.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return t=C.sent,o=t.Button,n=t.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=C.sent,l=r.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return d=C.sent,u=d.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=C.sent,f=g.default,B={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var S=m({}),D=P()(S,2),b=D[0],M=D[1],E=s(null);function K(){return N.apply(this,arguments)}function N(){return N=I()(h()().mark(function H(){var W,F,Z;return h()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,E.current.validate();case 2:if(W=Y.sent,F=W.hasError,Z=W.errorList,console.log("[validate] hasError: ",F),console.log("[validate] errorList: ",Z),!F){Y.next=9;break}return Y.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return Y.stop()}},H)})),N.apply(this,arguments)}return p.createElement("div",null,p.createElement(l,{ref:E,schema:B,value:b,onChange:M,itemLayout:f,renderers:u}),p.createElement(o,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=C.sent,m=v.useState,s=v.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return t=C.sent,o=t.Button,n=t.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=C.sent,l=r.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return d=C.sent,u=d.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=C.sent,f=g.default,B={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var S=m({}),D=P()(S,2),b=D[0],M=D[1],E=s(null);function K(){return N.apply(this,arguments)}function N(){return N=I()(h()().mark(function W(){var F,Z;return h()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,E.current.validate();case 2:if(F=Y.sent,Z=F.hasError,!Z){Y.next=6;break}return Y.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return Y.stop()}},W)})),N.apply(this,arguments)}var H=function(){E.current.resetError()};return p.createElement("div",null,p.createElement(l,{ref:E,schema:B,value:b,onChange:M,itemLayout:f,renderers:u}),p.createElement(o,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),p.createElement(o,{onClick:H},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,m=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,u=d.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=m(null),O=function(){C.current.resetValue()};return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:u,renderers:l}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},onClick:O},"\u91CD\u7F6E"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,m=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,u=d.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=m(null);return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:u,renderers:l}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var S,D=(S=C.current)===null||S===void 0?void 0:S.getRootElement();console.log("rootElement:",D)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,m=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,u=d.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=m(null);return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:u,renderers:l}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var S,D=(S=C.current)===null||S===void 0||(S=S.findItem("title"))===null||S===void 0?void 0:S.getRootElement();console.log("formItemRootElement:",D)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":L,"./renderers/common.tsx":j,react:R||(R=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},68642:function(V,c,e){e.r(c),e.d(c,{demos:function(){return x}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(35786),I=e(74072),p=e(2862),U=e(78469),x={"examples-core-react-300-default-value-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function $(){var L,j,_,T,v,m,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return L=n.sent,j=L.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return _=n.sent,T=_.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,m=v.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return P.createElement(j,{schema:s,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:T,renderers:m})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":U,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":U},renderOpts:{compile:function(){var $=A()(a()().mark(function j(){var _,T=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(_=m.sent).default.apply(_,T));case 3:case"end":return m.stop()}},j)}));function L(){return $.apply(this,arguments)}return L}()}}}},95206:function(V,c,e){e.r(c),e.d(c,{demos:function(){return L}});var R=e(15009),a=e.n(R),h=e(97857),A=e.n(h),P=e(99289),z=e.n(P),I=e(67294),p=e(69708),U=e(74072),x=e(48201),$=e(78469),L={"examples-core-react-600-catch-error-tips-demo-0":{component:I.memo(I.lazy(z()(a()().mark(function j(){var _,T,v,m,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return _=d.sent,T=_.default,d.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=d.sent,m=v.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=d.sent,t=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,B=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(m.TextArea,A()(A()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=B.title)!==null&&f!==void 0?f:"")},B.renderOptions),{},{value:y,onChange:function(S){return C(S.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{schema:n,itemLayout:t,renderers:o})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":U,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var j=z()(a()().mark(function T(){var v,m=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}},"examples-core-react-600-catch-error-tips-demo-1":{component:I.memo(I.lazy(z()(a()().mark(function j(){var _,T,v,m,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return _=d.sent,T=_.default,d.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=d.sent,m=v.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=d.sent,t=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,B=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(m.TextArea,A()(A()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=B.title)!==null&&f!==void 0?f:"")},B.renderOptions),{},{value:y,onChange:function(S){return C(S.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{catchErrorTips:"silent",schema:n,itemLayout:t,renderers:o})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":U,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var j=z()(a()().mark(function T(){var v,m=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}},"examples-core-react-600-catch-error-tips-demo-2":{component:I.memo(I.lazy(z()(a()().mark(function j(){var _,T,v,m,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return _=d.sent,T=_.default,d.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=d.sent,m=v.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=d.sent,t=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,B=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(m.TextArea,A()(A()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=B.title)!==null&&f!==void 0?f:"")},B.renderOptions),{},{value:y,onChange:function(S){return C(S.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{catchErrorTips:function(){return I.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:t,renderers:o})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":U,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var j=z()(a()().mark(function T(){var v,m=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}}}},35963:function(V,c,e){e.r(c),e.d(c,{demos:function(){return $}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(96687),I=e(74072),p=e(78484),U=e(2862),x=e(78469),$={"examples-core-react-700-locale-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function L(){var j,_,T,v,m,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return j=d.sent,_=j.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return T=d.sent,v=T.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return m=d.sent,s=m.default,d.next=14,Promise.resolve().then(e.bind(e,78484));case 14:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},r=function(){return P.createElement(_,{style:{maxWidth:600},schema:n,itemLayout:v,renderers:s,locale:o})},d.abrupt("return",{default:r});case 19:case"end":return d.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":U,"./item-layout/Horizontal.tsx":x,"@schema-render/core-react":I,"@schema-render/core-react/src/locale/en_US":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":U,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":x},renderOpts:{compile:function(){var L=A()(a()().mark(function _(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function j(){return L.apply(this,arguments)}return j}()}}}},82440:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(85105),h={}},95491:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return j}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(19632),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(2755),L=e(74072),j={"examples-core-react-890-benchmark-demo-0":{component:x.memo(x.lazy(U()(h()().mark(function _(){var T,v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=y.sent,s=m.useState,t=m.Profiler,o=function(C){var O=C.schema,S=C.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,O.title),x.createElement("div",null,S))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(C){var O=C.schema,S=C.value,D=C.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:S||"",onChange:function(M){return D(M.target.value)}}))}}},l=600,d={renderType:"Root",properties:{}},u=I()(Array(l).keys()),u.forEach(function(i){var C="field_".concat(i);d.properties[C]={title:C,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var C=s({}),O=P()(C,2),S=O[0],D=O[1],b=s(""),M=P()(b,2),E=M[0],K=M[1],N=function(W,F){var Z=parseInt(F.sPath.slice(6)),J=Z-1,Y=Z+1,q="field_".concat(Y>=l?J:Y);W[q]=F.value,D(W)};return x.createElement(t,{id:"sr",onRender:function(W,F,Z,J,Y,q){var w="\u64CD\u4F5C: ".concat(F,", \u6E32\u67D3\u8017\u65F6: ").concat(Z," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),ae=document.getElementById("profile");ae&&(ae.innerHTML=w),console.log("===> ".concat(w)),console.log("phase: ".concat(F,", actualDuration: ").concat(Z,", baseDuration: ").concat(J,", startTime: ").concat(Y,", commitTime: ").concat(q))}},x.createElement("h3",{id:"profile"},E),x.createElement(v,{layout:"autoFill",layoutMinMax:g,schema:d,itemLayout:o,renderers:r,value:S,onChange:N}))},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=U()(h()().mark(function v(){var m,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-core-react-890-benchmark-demo-1":{component:x.memo(x.lazy(U()(h()().mark(function _(){var T,v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=y.sent,s=m.useState,t=m.Profiler,o=function(C){var O=C.schema,S=C.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,O.title),x.createElement("div",null,S))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(C){var O=C.schema,S=C.value,D=C.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:S||"",onChange:function(M){return D(M.target.value)}}))}}},l=1800,d={renderType:"Root",properties:{}},u=I()(Array(l).keys()),u.forEach(function(i){var C="field_".concat(i);d.properties[C]={title:C,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var C=s({}),O=P()(C,2),S=O[0],D=O[1],b=function(E,K){var N=parseInt(K.sPath.slice(6)),H=N-1,W=N+1,F="field_".concat(W>=l?H:W);E[F]=K.value,D(E)};return x.createElement(v,{layout:"autoFill",layoutMinMax:g,schema:d,itemLayout:o,renderers:r,value:S,onChange:b})},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":L,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=U()(h()().mark(function v(){var m,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},50142:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(88485),h={}},67941:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(97024),h={}},50094:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(92311),h={}},79584:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(78593),h={}},75916:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(25105),x=e(74072),$=e(48201),L=e(2862),j=e(78469),_={"examples-core-react-950-async-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=i.sent,m=v.default,i.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=i.sent,t=s.default,i.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=i.sent,l=r.useState,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return d=i.sent,u=d.Button,g=d.Space,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},B=function(){var O=l({}),S=P()(O,2),D=S[0],b=S[1],M=function(){setTimeout(function(){b({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},E=function(){return b({})};return p.createElement(p.Fragment,null,p.createElement(m,{style:{marginBottom:15},schema:f,value:D,onChange:function(N){return b(N)},itemLayout:t,renderers:n}),p.createElement(g,null,p.createElement(u,{type:"primary",onClick:M},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),p.createElement(u,{onClick:E},"\u91CD\u7F6E")))},i.abrupt("return",{default:B});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":j,"@schema-render/core-react":x,react:R||(R=e.t(p,2)),antd:$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},58177:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(35170),x=e(41989),$=e(74072),L=e(2862),j=e(78469),_={"examples-core-react-951-controllable-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,m=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=u({}),O=P()(C,2),S=O[0],D=O[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,value:S,onChange:function(M){return D(M)}}),p.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":j,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,m=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=u({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=P()(C,1),S=O[0];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,value:S}),p.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":j,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,m=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=u({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=P()(C,1),S=O[0],D=u(1),b=P()(D,2),M=b[0],E=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,value:S,onChange:function(){E(function(N){return N+1})}}),p.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":j,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=u.sent,m=v.default,u.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=u.sent,t=s.default,u.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=u.sent,n=o.default,r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return p.createElement(m,{schema:r,itemLayout:t,renderers:n})},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":j,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,m=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=u({}),O=P()(C,2),S=O[0],D=O[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,onChange:function(M){return D(M)}}),p.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":L,"./item-layout/Horizontal.tsx":j,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},30266:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(12727),x=e(41989),$=e(74072),L=e(48201),j=e(78469),_={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=C.sent,m=v.default,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=C.sent,t=s.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=C.sent,n=o.default,C.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=C.sent,l=r.useState,d=r.useEffect,C.next=19,Promise.resolve().then(e.bind(e,48201));case 19:return u=C.sent,g=u.Input,f={InputOrg:{component:function(S){var D,b=S.schema,M=S.value,E=S.rootValue,K=S.onChange;return console.log("==== InputOrg ===="),console.log("value:",M),console.log("rootValue:",E),d(function(){K("\u673A\u6784 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((D=b.title)!==null&&D!==void 0?D:""),value:M!=null?M:"",onChange:function(H){return K(H.target.value)}})}},InputSupplier:{component:function(S){var D,b=S.schema,M=S.value,E=S.rootValue,K=S.onChange;return console.log("==== InputSupplier ===="),console.log("value:",M),console.log("rootValue:",E),d(function(){K("\u4F9B\u5E94\u5546 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((D=b.title)!==null&&D!==void 0?D:""),value:M!=null?M:"",onChange:function(H){return K(H.target.value)}})}},InputBill:{component:function(S){var D,b=S.schema,M=S.value,E=S.rootValue,K=S.onChange;return console.log("==== InputBill ===="),console.log("value:",M),console.log("rootValue:",E),d(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((D=b.title)!==null&&D!==void 0?D:""),value:M!=null?M:"",onChange:function(H){return K(H.target.value)}})}}},B={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},y=function(){var S=l({}),D=P()(S,2),b=D[0],M=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:B,itemLayout:n,renderers:f,value:b,onChange:function(K,N){console.log("***** updateBy ".concat(N.sPath," *****")),console.log("value:",K),console.log("e:",N),M(K)}}),p.createElement(m,{value:b}))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":j,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:R||(R=e.t(p,2)),antd:L,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},23450:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(97857),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(53143),L=e(74072),j=e(48201),_=e(78469),T={"examples-core-react-953-disabled-component-demo-0":{component:x.memo(x.lazy(U()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,s=m.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=i.sent,d=l.Button,u=l.Input,g={InputText:{component:function(O){var S,D=O.schema,b=O.value,M=O.disabled,E=O.readonly,K=O.onChange;return x.createElement(u,I()(I()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:"")},D.renderOptions),{},{value:b!=null?b:"",disabled:M,onChange:function(H){return K(H.target.value)}}))},readonlyComponent:function(O){var S=O.value;return x.createElement(x.Fragment,null,S)},disabledComponent:function(O){var S=O.value;return x.createElement(x.Fragment,null,"Disabled: ",S)}},TextArea:{component:function(O){var S,D=O.schema,b=O.value,M=O.disabled,E=O.onChange;return x.createElement(u.TextArea,I()(I()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:"")},D.renderOptions),{},{value:b!=null?b:"",onChange:function(N){return E(N.target.value)},disabled:M}))},readonlyComponent:function(O){var S=O.value;return x.createElement("div",null,S)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},B=function(){var O=s(!1),S=P()(O,2),D=S[0],b=S[1],M=s(!1),E=P()(M,2),K=E[0],N=E[1],H=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),W=P()(H,2),F=W[0],Z=W[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:F,onChange:Z,readonly:D,disabled:K}),x.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return N(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),x.createElement(d,{style:{margin:"20px 0 0 115px"},onClick:function(){return b(!D)}},D?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:B});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":_,react:R||(R=e.t(x,2)),"@schema-render/core-react":L,antd:j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var v=U()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},17571:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return j}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(65063),x=e(41989),$=e(48201),L=e(96714),j={"examples-form-render-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function _(){var T,v,m,s,t,o,n,r,l,d;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return T=g.sent,v=T.default,g.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=g.sent,s=m.useState,g.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return t=g.sent,o=t.message,g.next=14,Promise.resolve().then(e.bind(e,96714));case 14:return n=g.sent,r=n.default,l={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},d=function(){var B=s({}),y=P()(B,2),i=y[0],C=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:l,value:i,onChange:C,onSubmit:function(){o.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(v,{value:i}))},g.abrupt("return",{default:d});case 19:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:R||(R=e.t(p,2)),antd:$,"@schema-render/form-render-react":L},renderOpts:{compile:function(){var _=I()(h()().mark(function v(){var m,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},8266:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return L}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(30761),x=e(41989),$=e(96714),L={"examples-form-render-react-100-item-layout-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function j(){var _,T,v,m,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=l.sent,T=_.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,m=v.default,l.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var u=T({}),g=P()(u,2),f=g[0],B=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{itemLayout:"vertical",schema:o,value:f,onChange:B}),p.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var j=I()(h()().mark(function T(){var v,m=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}},"examples-form-render-react-100-item-layout-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function j(){var _,T,v,m,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=l.sent,T=_.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,m=v.default,l.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var u=T({}),g=P()(u,2),f=g[0],B=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{itemLayout:"horizontal",schema:o,value:f,onChange:B}),p.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var j=I()(h()().mark(function T(){var v,m=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}}}},86799:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(25937),x=e(41989),$=e(96714),L=e(69581),j=e(48201),_={"examples-form-render-react-200-label-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=u.sent,m=v.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=u.sent,t=s.default,u.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return o=u.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=m({}),B=P()(f,2),y=B[0],i=B[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=u.sent,m=v.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=u.sent,t=s.default,u.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return o=u.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=m({}),B=P()(f,2),y=B[0],i=B[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:"max-content",schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=u.sent,m=v.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=u.sent,t=s.default,u.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return o=u.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=m({}),B=P()(f,2),y=B[0],i=B[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,m=v.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,t=s.default,i.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,69581));case 14:return r=i.sent,l=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return d=i.sent,u=d.Popover,g={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var S=O.schema,D=O.required,b=O.prefixClassNames;return p.createElement("div",null,S.title,!!S.titleDescription&&p.createElement(u,{placement:"top",trigger:"hover",content:S.titleDescription},p.createElement(l,{className:b("item-title-tooltip"),style:{marginLeft:4}})),!D&&" (\u53EF\u9009)")},B=function(){var O=m({}),S=P()(O,2),D=S[0],b=S[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelRender:f,schema:g,value:D,onChange:b}),p.createElement(t,{value:D}))},i.abrupt("return",{default:B});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$,"@ant-design/icons":L,antd:j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},41393:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(91260),x=e(48201),$=e(41989),L=e(38959),j=e(96714),_=e(69581),T={"examples-form-render-react-300-actions-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=C.sent,s=m.useState,t=m.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=C.sent,n=o.message,C.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=C.sent,l=r.default,C.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return d=C.sent,u=d.sleep,C.next=19,Promise.resolve().then(e.bind(e,96714));case 19:return g=C.sent,f=g.default,B={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var S=s({}),D=P()(S,2),b=D[0],M=D[1],E=t(null),K=function(){var N=I()(h()().mark(function H(){var W,F;return h()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,E.current.validate();case 2:if(W=J.sent,F=W.hasError,!F){J.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),J.abrupt("return");case 7:return J.next=9,u();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return J.stop()}},H)}));return function(){return N.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{ref:E,schema:B,value:b,onChange:M,onSubmit:K}),p.createElement(l,{value:b}))},C.abrupt("return",{default:y});case 24:case"end":return C.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":$,"@examples/utils":L,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g;return h()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=B.sent,s=m.useState,B.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=B.sent,o=t.message,B.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=B.sent,r=n.default,B.next=14,Promise.resolve().then(e.bind(e,96714));case 14:return l=B.sent,d=l.default,u={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),C=P()(i,2),O=C[0],S=C[1],D=function(){o.success("\u91CD\u7F6E\u5B8C\u6210")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(d,{schema:u,value:O,onChange:S,onReset:D}),p.createElement(r,{value:O}))},B.abrupt("return",{default:g});case 19:case"end":return B.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,s=m.useState,i.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=i.sent,o=t.message,i.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return n=i.sent,r=n.sleep,i.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,96714));case 18:return u=i.sent,g=u.default,f={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},B=function(){var O=s({}),S=P()(O,2),D=S[0],b=S[1],M=function(){var E=I()(h()().mark(function K(){return h()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,r();case 2:o.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return H.stop()}},K)}));return function(){return E.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(g,{schema:f,value:D,onChange:b,onReset:M}),p.createElement(d,{value:D}))},i.abrupt("return",{default:B});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/utils":L,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g;return h()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=B.sent,s=m.useState,B.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=B.sent,o=t.sleep,B.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=B.sent,r=n.default,B.next=14,Promise.resolve().then(e.bind(e,96714));case 14:return l=B.sent,d=l.default,u={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),C=P()(i,2),O=C[0],S=C[1],D=function(){var b=I()(h()().mark(function M(){return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},M)}));return function(){return b.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(d,{schema:u,value:O,onChange:S,onBeforeReset:D,onReset:function(M){console.log("formData:",M)}}),p.createElement(r,{value:O}))},B.abrupt("return",{default:g});case 19:case"end":return B.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/utils":L,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=g.sent,s=m.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=g.sent,o=t.default,g.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return n=g.sent,r=n.default,l={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var B=s({}),y=P()(B,2),i=y[0],C=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:l,value:i,onChange:C,actions:["reset","submit"]}),p.createElement(o,{value:i}))},g.abrupt("return",{default:d});case 15:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-5":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=C.sent,s=m.useState,C.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=C.sent,o=t.message,n=t.Button,C.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return r=C.sent,l=r.sleep,C.next=15,Promise.resolve().then(e.bind(e,41989));case 15:return d=C.sent,u=d.default,C.next=19,Promise.resolve().then(e.bind(e,96714));case 19:return g=C.sent,f=g.default,B={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var S=s({}),D=P()(S,2),b=D[0],M=D[1],E=function(){var N=I()(h()().mark(function H(){return h()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:o.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return F.stop()}},H)}));return function(){return N.apply(this,arguments)}}(),K=function(){o.success("\u5BFC\u51FA\u6210\u529F")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{schema:B,value:b,onChange:M,onSubmit:E,actions:["submit","reset","export"],registerActions:{export:function(H){var W=H.loading;return p.createElement(n,{type:"primary",disabled:W.submit||W.reset,onClick:K},"\u5BFC\u51FA")}}}),p.createElement(u,{value:b}))},C.abrupt("return",{default:y});case 24:case"end":return C.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@examples/utils":L,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-6":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=E.sent,s=m.useState,t=m.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=E.sent,n=o.message,r=o.Button,l=o.Popconfirm,E.next=13,Promise.resolve().then(e.bind(e,69581));case 13:return d=E.sent,u=d.DeleteOutlined,g=d.UploadOutlined,E.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return f=E.sent,B=f.sleep,E.next=22,Promise.resolve().then(e.bind(e,41989));case 22:return y=E.sent,i=y.default,E.next=26,Promise.resolve().then(e.bind(e,96714));case 26:return C=E.sent,O=C.default,S={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},D={submit:function(N){var H=N.handleSubmit,W=N.loading;return p.createElement(l,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:H},p.createElement(r,{loading:W.submit,type:"primary",icon:p.createElement(g,null)},"\u63D0\u4EA4"))},reset:function(N){var H=N.handleReset,W=N.loading;return p.createElement(r,{loading:W.reset,onClick:H,icon:p.createElement(u,null)},"\u91CD\u7F6E")}},b=function(){var N=s({}),H=P()(N,2),W=H[0],F=H[1],Z=t(null),J=function(){var Y=I()(h()().mark(function q(){var w,ae;return h()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,Z.current.validate();case 2:if(w=le.sent,ae=w.hasError,!ae){le.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),le.abrupt("return");case 7:return le.next=9,B();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return le.stop()}},q)}));return function(){return Y.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(O,{ref:Z,schema:S,value:W,onChange:F,onSubmit:J,registerActions:D}),p.createElement(i,{value:W}))},E.abrupt("return",{default:b});case 32:case"end":return E.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),antd:x,"@ant-design/icons":_,"@examples/utils":L,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},39820:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(90261),x=e(48201),$=e(41989),L=e(96714),j=e(14953),_=e(97609),T={"examples-form-render-react-500-builtin-renderers-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=C.sent,s=m.useState,t=m.useMemo,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=C.sent,n=o.Button,C.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=C.sent,l=r.default,C.next=15,Promise.resolve().then(e.bind(e,96714));case 15:return d=C.sent,u=d.default,C.next=19,Promise.resolve().then(e.bind(e,97609));case 19:return g=C.sent,C.next=22,Promise.resolve().then(e.bind(e,14953));case 22:return f=C.sent,B=f.default,y=function(){var S=s(!1),D=P()(S,2),b=D[0],M=D[1],E=s(!1),K=P()(E,2),N=K[0],H=K[1],W=s({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),F=P()(W,2),Z=F[0],J=F[1],Y=t(function(){return{disable:function(){return p.createElement(n,{type:"dashed",onClick:function(){return M(!b)}},b?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return p.createElement(n,{type:"dashed",onClick:function(){return H(!N)}},N?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[N,b]);return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(u,{rootClassName:g.builtinRenderers,labelWidth:230,schema:B,value:Z,onChange:J,actions:["submit","reset","disable","readonly"],registerActions:Y,disabled:b,readonly:N,readonlyPlaceholder:p.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),p.createElement(l,{value:Z}))},C.abrupt("return",{default:y});case 26:case"end":return C.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"./schemas/all.ts":{type:"FILE",value:e(71525).Z},"./styles.ts":{type:"FILE",value:e(24127).Z}},entry:"index.tsx"},context:{"./schemas/all.ts":j,"./styles.ts":_,react:R||(R=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":L,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.ts":j,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":_},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},28680:function(V,c,e){e.r(c),e.d(c,{demos:function(){return U}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(4123),I=e(96714),p=e(35804),U={"examples-form-render-react-700-locale-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function x(){var $,L,j,_,T,v;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,96714));case 2:return $=s.sent,L=$.default,s.next=6,Promise.resolve().then(e.bind(e,35804));case 6:return j=s.sent,_=j.default,T={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},v=function(){return P.createElement(L,{rootStyle:{maxWidth:500},schema:T,locale:_})},s.abrupt("return",{default:v});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{"@schema-render/form-render-react":I,"@schema-render/form-render-react/src/locale/en_US":p},renderOpts:{compile:function(){var x=A()(a()().mark(function L(){var j,_=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",(j=v.sent).default.apply(j,_));case 3:case"end":return v.stop()}},L)}));function $(){return x.apply(this,arguments)}return $}()}}}},47023:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(74624),h={}},48167:function(V,c,e){e.r(c),e.d(c,{demos:function(){return U}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(83140),I=e(96714),p=e(37418),U={"examples-form-render-react-850-position-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function x(){var $,L,j,_,T,v,m;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,96714));case 2:return $=t.sent,L=$.default,t.next=6,Promise.resolve().then(e.bind(e,37418));case 6:return j=t.sent,_=j.default,T={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},v=function(n,r){n.bank_id=r.extra.bank_id,n.bank_account=r.extra.bank_account,n.bank_name=r.extra.bank_name,n.bank_branch_name=r.extra.bank_branch_name},m=function(){return P.createElement(L,{schema:T,renderers:_,watch:{bank_account:v,bank_name:v,bank_branch_name:v}})},t.abrupt("return",{default:m});case 12:case"end":return t.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"./renderers.tsx":{type:"FILE",value:e(540).Z}},entry:"index.tsx"},context:{"./renderers.tsx":p,"@schema-render/form-render-react":I,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":p},renderOpts:{compile:function(){var x=A()(a()().mark(function L(){var j,_=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",(j=v.sent).default.apply(j,_));case 3:case"end":return v.stop()}},L)}));function $(){return x.apply(this,arguments)}return $}()}}}},68170:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var a=e(9783),h=e.n(a),A=e(97857),P=e.n(A),z=e(15009),I=e.n(z),p=e(5574),U=e.n(p),x=e(99289),$=e.n(x),L=e(67294),j=e(34877),_=e(96714),T=e(48201),v={"examples-form-render-react-851-steps-demo-0":{component:L.memo(L.lazy($()(I()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=i.sent,t=s.useState,o=s.useMemo,n=s.useRef,i.next=8,Promise.resolve().then(e.bind(e,96714));case 8:return r=i.sent,l=r.default,i.next=12,Promise.resolve().then(e.bind(e,48201));case 12:return d=i.sent,u=d.Steps,g=d.Button,f={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},B=function(){var O=t(0),S=U()(O,2),D=S[0],b=S[1],M=t({}),E=U()(M,2),K=E[0],N=E[1],H=n(null),W=function(){b(function(w){return w-1})},F=function(){var q=$()(I()().mark(function w(){var ae,pe,le,ue;return I()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,(ae=H.current)===null||ae===void 0?void 0:ae.validate();case 2:if(pe=de.sent,!(pe!=null&&pe.hasError||pe!=null&&pe.hasWarning)){de.next=8;break}if(le="step".concat(D+1),ue=pe.errorList.some(function(xe){return xe.path[0]===le}),!ue){de.next=8;break}return de.abrupt("return");case 8:b(D+1);case 9:case"end":return de.stop()}},w)}));return function(){return q.apply(this,arguments)}}(),Z=function(){var w;N(P()(P()({},K),{},h()({},"step".concat(D+1),{}))),(w=H.current)===null||w===void 0||w.resetError()},J=o(function(){return{prev:function(){return L.createElement(g,{onClick:W},"\u4E0A\u4E00\u6B65")},next:function(){return L.createElement(g,{type:"primary",onClick:F},"\u4E0B\u4E00\u6B65")},reset:function(){return L.createElement(g,{onClick:Z},"\u91CD\u7F6E")}}},[]),Y=function(){var q=$()(I()().mark(function w(){var ae,pe;return I()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,(ae=H.current)===null||ae===void 0?void 0:ae.validate();case 2:if(pe=ue.sent,!(pe!=null&&pe.hasError||pe!=null&&pe.hasWarning)){ue.next=5;break}return ue.abrupt("return");case 5:case"end":return ue.stop()}},w)}));return function(){return q.apply(this,arguments)}}();return L.createElement("div",{style:{maxWidth:800}},L.createElement(u,{size:"small",current:D,onChange:b,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),L.createElement(l,{ref:H,schema:f,value:K,onChange:N,userCtx:{step:D},actions:D===0?["next","reset"]:D===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:J,onSubmit:Y}))},i.abrupt("return",{default:B});case 18:case"end":return i.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(L,2)),"@schema-render/form-render-react":_,antd:T},renderOpts:{compile:function(){var m=$()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}}}},62127:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(97857),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(45011),L=e(41989),j=e(96714),_=e(48201),T={"examples-form-render-react-852-audit-renderer-demo-0":{component:x.memo(x.lazy(U()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=O.sent,s=m.useState,O.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=O.sent,o=t.default,O.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return n=O.sent,r=n.default,O.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=O.sent,d=l.Input,u=l.Radio,g=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],f=function(D){var b,M=D.disabled,E=D.value,K=D.onChange,N=D.validator,H=function(Z){K(I()(I()({},E),Z),{triggerValidator:!Z.hasOwnProperty("type")})},W=(E==null?void 0:E.type)===2;return x.createElement("div",null,x.createElement(u.Group,{options:g,value:(b=E==null?void 0:E.type)!==null&&b!==void 0?b:null,onChange:function(Z){return H({type:Z.target.value})},disabled:M}),x.createElement("div",{style:{marginTop:W?5:0}},W&&x.createElement(d.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:N.status,disabled:M,value:E.failReason,onChange:function(Z){return H({failReason:Z.target.value})}})))},B={Audit:{component:f,validator:function(D){var b=D.value;if((b==null?void 0:b.type)===2&&!b.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},i=function(){var D=s({}),b=P()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,value:M,onChange:E,renderers:B}),x.createElement(o,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(x,2)),"@examples/components/SyntaxHighlighter":L,"@schema-render/form-render-react":j,antd:_},renderOpts:{compile:function(){var v=U()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},42087:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return L}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(6168),x=e(41989),$=e(96714),L={"examples-form-render-react-853-validate-on-blur-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function j(){var _,T,v,m,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=l.sent,T=_.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,m=v.default,l.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var u=T({}),g=P()(u,2),f=g[0],B=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:o,value:f,onChange:B}),p.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var j=I()(h()().mark(function T(){var v,m=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}}}},19658:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return L}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(6882),x=e(41989),$=e(96714),L={"examples-form-render-react-854-scroll-to-first-error-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function j(){var _,T,v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return n=function(){for(var f={renderType:"Root",properties:{}},B=1;B<=30;B++){var y="field_".concat(B);f.properties[y]={title:"\u6807\u9898_".concat(B),renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}return f},u.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return _=u.sent,T=_.useState,v=_.useRef,u.next=8,Promise.resolve().then(e.bind(e,41989));case 8:return m=u.sent,s=m.default,u.next=12,Promise.resolve().then(e.bind(e,96714));case 12:return t=u.sent,o=t.default,r=n(),l=function(){var f=T({}),B=P()(f,2),y=B[0],i=B[1],C=v(null),O=function(){var S=I()(h()().mark(function D(){var b,M,E;return h()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(b=C.current)===null||b===void 0?void 0:b.validate();case 2:M=N.sent,M!=null&&M.hasError&&((E=C.current)===null||E===void 0||E.scrollTo(M.errorList[0].path,{gap:-76,positionedElement:window}));case 4:case"end":return N.stop()}},D)}));return function(){return S.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{ref:C,schema:r,value:y,onChange:i,onSubmit:O,validateFormOnSubmit:!1}),p.createElement(s,{value:y}))},u.abrupt("return",{default:l});case 17:case"end":return u.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-form-render-react-854-scroll-to-first-error-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var j=I()(h()().mark(function T(){var v,m=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}}}},55850:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(97857),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(88358),L=e(41989),j=e(96714),_=e(48201),T={"examples-form-render-react-880-relation-checkbox-demo-0":{component:x.memo(x.lazy(U()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,s=m.useState,t=m.useRef,i.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return o=i.sent,n=o.default,i.next=11,Promise.resolve().then(e.bind(e,96714));case 11:return r=i.sent,l=r.default,i.next=15,Promise.resolve().then(e.bind(e,48201));case 15:return d=i.sent,u=d.Select,g={component:function(O){var S,D=O.schema,b=O.value,M=O.disabled,E=O.validator,K=O.onChange,N=O.userCtx,H=N.cityList||((S=D.renderOptions)===null||S===void 0?void 0:S.options);return x.createElement(u,I()(I()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(D.title)},D.renderOptions),{},{options:H,status:E.status,mode:void 0,value:b,onChange:function(F){return K(F)},disabled:M}))}},f={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},B=function(){var O=s({}),S=P()(O,2),D=S[0],b=S[1],M=t({});return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(l,{labelWidth:180,actions:[],schema:f,value:D,onChange:b,renderers:{AvailableCities:g},watch:{cities:function(K,N){M.current.cityList=N.extra.checkedOptions,N.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:M.current}),x.createElement(n,{value:D}))},i.abrupt("return",{default:B});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{react:R||(R=e.t(x,2)),"@examples/components/SyntaxHighlighter":L,"@schema-render/form-render-react":j,antd:_},renderOpts:{compile:function(){var v=U()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:x.memo(x.lazy(U()(h()().mark(function v(){var m,s,t,o,n,r,l,d;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=g.sent,s=m.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=g.sent,o=t.default,g.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return n=g.sent,r=n.default,l={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},d=function(){var B=s({}),y=P()(B,2),i=y[0],C=y[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{labelWidth:180,actions:[],schema:l,value:i,onChange:C,watch:{cities:function(S,D){l.properties.available_cities.renderOptions.options=D.extra.checkedOptions,D.value.includes(S.available_cities)||(S.available_cities=void 0)}}}),x.createElement(o,{value:i}))},g.abrupt("return",{default:d});case 15:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{react:R||(R=e.t(x,2)),"@examples/components/SyntaxHighlighter":L,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var v=U()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},54811:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return L}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(73888),x=e(41989),$=e(96714),L={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function j(){var _,T,v,m,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:u}}}};return g},l.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return _=l.sent,T=_.useState,l.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return v=l.sent,m=v.default,l.next=11,Promise.resolve().then(e.bind(e,96714));case 11:return s=l.sent,t=s.default,n=function(){var u=T({}),g=P()(u,2),f=g[0],B=g[1],y=T(function(){return o()}),i=P()(y,2),C=i[0],O=i[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{labelWidth:180,actions:[],schema:C,value:f,onChange:B,watch:{cities:function(D,b){O(o(b.extra.selectedOptions)),b.value.includes(D.available_cities)||(D.available_cities=void 0)}}}),p.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var j=I()(h()().mark(function T(){var v,m=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}}}},37531:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return j}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(19632),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(73914),L=e(96714),j={"examples-form-render-react-890-benchmark-demo-0":{component:x.memo(x.lazy(U()(h()().mark(function _(){var T,v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,96714));case 2:return T=u.sent,v=T.default,u.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=u.sent,s=m.useState,t=100,o={renderType:"Root",properties:{}},n=I()(Array(t).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],l=function(){var f=s({}),B=P()(f,2),y=B[0],i=B[1],C=function(S,D){var b=parseInt(D.sPath.slice(6)),M=b-1,E=b+1,K="field_".concat(E>=t?M:E);S[K]=D.value,i(S)};return x.createElement(v,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:C})},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":L,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=U()(h()().mark(function v(){var m,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}},"examples-form-render-react-890-benchmark-demo-1":{component:x.memo(x.lazy(U()(h()().mark(function _(){var T,v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,96714));case 2:return T=u.sent,v=T.default,u.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=u.sent,s=m.useState,t=300,o={renderType:"Root",properties:{}},n=I()(Array(t).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],l=function(){var f=s({}),B=P()(f,2),y=B[0],i=B[1],C=function(S,D){var b=parseInt(D.sPath.slice(6)),M=b-1,E=b+1,K="field_".concat(E>=t?M:E);S[K]=D.value,i(S)};return x.createElement(v,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:C})},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":L,react:R||(R=e.t(x,2))},renderOpts:{compile:function(){var _=U()(h()().mark(function v(){var m,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},53775:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return L}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(64768),x=e(41989),$=e(96714),L={"examples-form-render-react-900-renderers-warning-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function j(){var _,T,v,m,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return _=l.sent,T=_.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,m=v.default,l.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var u=T({}),g=P()(u,2),f=g[0],B=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:o,value:f,onChange:B}),p.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var j=I()(h()().mark(function T(){var v,m=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,m));case 3:case"end":return t.stop()}},T)}));function _(){return j.apply(this,arguments)}return _}()}}}},88642:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(87004),x=e(41989),$=e(96714),L=e(69581),j=e(48201),_={"examples-form-render-react-901-label-vertical-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=u.sent,m=v.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=u.sent,t=s.default,u.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return o=u.sent,n=o.default,r={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},l=function(){var f=m({}),B=P()(f,2),y=B[0],i=B[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-901-label-vertical-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,m=v.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,t=s.default,i.next=10,Promise.resolve().then(e.bind(e,96714));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,69581));case 14:return r=i.sent,l=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return d=i.sent,u=d.Popover,g={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var S=O.schema,D=O.required,b=O.prefixClassNames;return p.createElement("div",null,S.title,!!S.titleDescription&&p.createElement(u,{placement:"top",trigger:"hover",content:S.titleDescription},p.createElement(l,{className:b("item-title-tooltip"),style:{marginLeft:4}})),!D&&" (\u53EF\u9009)")},B=function(){var O=m({}),S=P()(O,2),D=S[0],b=S[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:f,schema:g,value:D,onChange:b}),p.createElement(t,{value:D}))},i.abrupt("return",{default:B});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:R||(R=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$,"@ant-design/icons":L,antd:j},renderOpts:{compile:function(){var T=I()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},94270:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return r}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(43895),x=e(41989),$=e(48201),L=e(74072),j=e(2862),_=e(78469),T=e(96714),v=e(38959),m=e(36116),s=e(22846),t=e(92114),o=e(68666),n=e(362),r={"examples-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,u,g,f,B,y,i,C,O,S,D,b,M,E,K,N;return h()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return d=W.sent,u=d.default,W.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=W.sent,f=g.useState,B=g.useRef,W.next=11,Promise.resolve().then(e.bind(e,48201));case 11:return y=W.sent,i=y.Button,C=y.message,W.next=16,Promise.resolve().then(e.bind(e,74072));case 16:return O=W.sent,S=O.default,W.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return D=W.sent,b=D.default,W.next=24,Promise.resolve().then(e.bind(e,2862));case 24:return M=W.sent,E=M.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},N=function(){var Z=f({}),J=P()(Z,2),Y=J[0],q=J[1],w=B(),ae=function(){var pe=I()(h()().mark(function le(){var ue;return h()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,w.current.validate();case 2:ue=de.sent,ue.hasError||C.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return de.stop()}},le)}));return function(){return pe.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement("div",null,p.createElement(S,{ref:w,schema:K,value:Y,onChange:q,itemLayout:b,renderers:E}),p.createElement(i,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:ae},"\u63D0\u4EA4")),p.createElement(u,{value:Y}))},W.abrupt("return",{default:N});case 29:case"end":return W.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./core-react/renderers/common.tsx":j,"./core-react/item-layout/Horizontal.tsx":_,"@examples/components/SyntaxHighlighter":x,react:R||(R=e.t(p,2)),antd:$,"@schema-render/core-react":L,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":_},renderOpts:{compile:function(){var l=I()(h()().mark(function u(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,u,g,f,B,y,i,C,O,S;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return d=b.sent,u=d.default,b.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=b.sent,f=g.useState,b.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return B=b.sent,y=B.message,b.next=14,Promise.resolve().then(e.bind(e,96714));case 14:return i=b.sent,C=i.default,O={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},S=function(){var E=f({}),K=P()(E,2),N=K[0],H=K[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(C,{schema:O,value:N,onChange:H,onSubmit:function(){return y.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(u,{value:N}))},b.abrupt("return",{default:S});case 19:case"end":return b.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:R||(R=e.t(p,2)),antd:$,"@schema-render/form-render-react":T},renderOpts:{compile:function(){var l=I()(h()().mark(function u(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,u,g,f,B,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=C.sent,u=d.sleep,C.next=6,Promise.resolve().then(e.bind(e,36116));case 6:return g=C.sent,f=g.default,B={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},y=function(){var S=function(){var D=I()(h()().mark(function b(M){return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",M),K.next=3,u();case 3:case"end":return K.stop()}},b)}));return function(M){return D.apply(this,arguments)}}();return p.createElement(f,{schema:B,onSubmit:S,onReset:S})},C.abrupt("return",{default:y});case 11:case"end":return C.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

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

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/utils":v,"@schema-render/search-react":m},renderOpts:{compile:function(){var l=I()(h()().mark(function u(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,u,g,f,B,y,i,C,O,S,D;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=M.sent,u=d.sleep,M.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return g=M.sent,f=g.default,M.next=10,Promise.resolve().then(e.bind(e,362));case 10:return B=M.sent,y=B.default,M.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return i=M.sent,C=i.default,M.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return O=M.sent,S=O.default,D=function(){return p.createElement(S,{search:{schema:f},table:{columns:y,showRowNumber:!0},request:function(){var K=I()(h()().mark(function H(W){var F;return h()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return console.log("searchParams:",W),J.next=3,u();case 3:return F=C(),J.abrupt("return",{data:F,total:100});case 5:case"end":return J.stop()}},H)}));function N(H){return K.apply(this,arguments)}return N}()})},M.abrupt("return",{default:D});case 22:case"end":return M.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./search-table-react/helpers/createDataSource.ts":t,"./search-table-react/helpers/schema.ts":o,"./search-table-react/helpers/columns.ts":n,"@examples/utils":v,"@schema-render/search-table-react":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:function(){var l=I()(h()().mark(function u(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}}}},11124:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return v}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(67342),x=e(48201),$=e(38959),L=e(67247),j=e(36116),_=e(77095),T=e(36641),v={"examples-search-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=M.sent,t=s.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return o=M.sent,n=o.ConfigProvider,r=o.Table,M.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return l=M.sent,d=l.sleep,M.next=15,Promise.resolve().then(e.bind(e,67247));case 15:return u=M.sent,g=u.default,M.next=19,Promise.resolve().then(e.bind(e,36641));case 19:return f=M.sent,B=f.default,M.next=23,Promise.resolve().then(e.bind(e,77095));case 23:return y=M.sent,i=y.default,M.next=27,Promise.resolve().then(e.bind(e,36116));case 27:return C=M.sent,O=C.default,S={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},D=function(){var K=t(function(){return i()}),N=P()(K,2),H=N[0],W=N[1],F=function(){var Z=I()(h()().mark(function J(Y){return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("searchParams:",Y),w.next=3,d();case 3:W(i());case 4:case"end":return w.stop()}},J)}));return function(Y){return Z.apply(this,arguments)}}();return p.createElement(n,{locale:g},p.createElement(O,{schema:S,onSubmit:F,onReset:F}),p.createElement(r,{style:{marginTop:20},columns:B,dataSource:H,scroll:{x:1500}}))},M.abrupt("return",{default:D});case 32:case"end":return M.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(77538).Z},"./helpers/columns.ts":{type:"FILE",value:e(96390).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/columns.ts":T,react:R||(R=e.t(p,2)),antd:x,"@examples/utils":$,"antd/locale/zh_CN":L,"@schema-render/search-react":j,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":T},renderOpts:{compile:function(){var m=I()(h()().mark(function t(){var o,n=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}}}},79899:function(V,c,e){e.r(c),e.d(c,{demos:function(){return $}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(27885),I=e(48201),p=e(38959),U=e(67247),x=e(36116),$={"examples-search-react-300-actions-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function L(){var j,_,T,v,m,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return j=d.sent,_=j.ConfigProvider,d.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return T=d.sent,v=T.sleep,d.next=10,Promise.resolve().then(e.bind(e,67247));case 10:return m=d.sent,s=m.default,d.next=14,Promise.resolve().then(e.bind(e,36116));case 14:return t=d.sent,o=t.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},r=function(){var g=function(){var B=A()(a()().mark(function y(i){return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("searchParams:",i),O.next=3,v();case 3:case"end":return O.stop()}},y)}));return function(i){return B.apply(this,arguments)}}(),f=function(y){console.log("isCollapsed:",y)};return P.createElement(_,{locale:s},P.createElement(o,{schema:n,onSubmit:g,onReset:g,onToggleCollapsed:f}))},d.abrupt("return",{default:r});case 19:case"end":return d.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{antd:I,"@examples/utils":p,"antd/locale/zh_CN":U,"@schema-render/search-react":x},renderOpts:{compile:function(){var L=A()(a()().mark(function _(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function j(){return L.apply(this,arguments)}return j}()}}}},49469:function(V,c,e){e.r(c),e.d(c,{demos:function(){return U}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(10122),I=e(36116),p=e(9686),U={"examples-search-react-700-locale-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function x(){var $,L,j,_,T,v;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=s.sent,L=$.default,s.next=6,Promise.resolve().then(e.bind(e,9686));case 6:return j=s.sent,_=j.default,T={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},v=function(){return P.createElement(L,{schema:T,labelWidth:120,locale:_})},s.abrupt("return",{default:v});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{"@schema-render/search-react":I,"@schema-render/search-react/src/locale/en_US":p},renderOpts:{compile:function(){var x=A()(a()().mark(function L(){var j,_=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",(j=v.sent).default.apply(j,_));case 3:case"end":return v.stop()}},L)}));function $(){return x.apply(this,arguments)}return $}()}}}},90712:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(84123),h={}},11973:function(V,c,e){e.r(c),e.d(c,{demos:function(){return $}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(24197),I=e(36116),p=e(57864),U=e(35719),x=e(9680),$={"examples-search-react-850-category-title-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function L(){var j,_,T,v,m,s,t,o,n,r,l,d;return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return j=g.sent,_=j.default,g.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return T=g.sent,v=T.default,g.next=10,Promise.resolve().then(e.bind(e,57864));case 10:return m=g.sent,s=m.default,t={BankSelect:v,ObjectSectionTitle:s},o={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(B){var y=function(C,O){C[B].bank_id=O.extra.bank_id,C[B].bank_account=O.extra.bank_account,C[B].bank_name=O.extra.bank_name,C[B].bank_branch_name=O.extra.bank_branch_name};return y},r=n("payment"),l=n("collection"),d=function(){return P.createElement(_,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:o,renderers:t,actions:["collapse"],watch:{"payment.bank_account":r,"payment.bank_name":r,"payment.bank_branch_name":r,"collection.bank_account":l,"collection.bank_name":l,"collection.bank_branch_name":l}})},g.abrupt("return",{default:d});case 19:case"end":return g.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(97395).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/ObjectSectionTitle.tsx":p,"./renderers/BankSelect.tsx":U,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":p,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":U},renderOpts:{compile:function(){var L=A()(a()().mark(function _(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function j(){return L.apply(this,arguments)}return j}()}},"examples-search-react-850-category-title-demo-1":{component:P.memo(P.lazy(A()(a()().mark(function L(){var j,_,T,v,m,s,t,o,n,r,l,d,u;return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return j=f.sent,_=j.default,f.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return T=f.sent,v=T.default,f.next=10,Promise.resolve().then(e.bind(e,9680));case 10:return m=f.sent,s=m.default,t={BankSelect:v,SectionTitle:s},o={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(y){var i=function(O,S){O["".concat(y,"_bank_id")]=S.extra.bank_id,O["".concat(y,"_bank_account")]=S.extra.bank_account,O["".concat(y,"_bank_name")]=S.extra.bank_name,O["".concat(y,"_bank_branch_name")]=S.extra.bank_branch_name};return i},r=n("payment"),l=n("collection"),d=function(y){var i;if(!y)return 5;var C=y.clientWidth,O=((i=y.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||i===void 0||(i=i.getBoundingClientRect())===null||i===void 0?void 0:i.width)||320;return Math.floor(C/O)*2},u=function(){return P.createElement(_,{defaultCollapsed:!1,schema:o,renderers:t,actions:["collapse"],watch:{payment_bank_account:r,payment_bank_name:r,payment_bank_branch_name:r,collection_bank_account:l,collection_bank_name:l,collection_bank_branch_name:l},calcCollapsedNumber:d})},f.abrupt("return",{default:u});case 20:case"end":return f.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(5038).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/SectionTitle.tsx":x,"./renderers/BankSelect.tsx":U,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":x,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":U},renderOpts:{compile:function(){var L=A()(a()().mark(function _(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function j(){return L.apply(this,arguments)}return j}()}}}},79181:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return o}});var a=e(5574),h=e.n(a),A=e(97857),P=e.n(A),z=e(15009),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(69306),L=e(38959),j=e(22846),_=e(92114),T=e(68666),v=e(362),m=e(48201),s=e(67247),t=e(91845),o={"examples-search-table-react-001-intro-demo-0":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,l=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=D.sent,u=d.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=D.sent,y=B.default,D.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return i=D.sent,C=i.default,O=function(){return x.createElement(C,{search:{schema:u},table:{columns:f},request:function(){var M=U()(I()().mark(function K(N){var H;return I()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return console.log("searchParams:",N),F.next=3,l();case 3:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 5:case"end":return F.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 22:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-001-intro-demo-1":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S,D,b,M,E,K,N,H,W,F,Z,J,Y,q,w,ae,pe;return I()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=ue.sent,l=r.sleep,ue.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=ue.sent,u=d.default,ue.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=ue.sent,f=g.default,ue.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=ue.sent,y=B.default,ue.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return i=ue.sent,C=i.default,ue.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return O=ue.sent,S=O.useState,D=O.useRef,ue.next=27,Promise.resolve().then(e.bind(e,48201));case 27:return b=ue.sent,M=b.ConfigProvider,E=b.message,K=b.Button,N=b.Tag,ue.next=34,Promise.resolve().then(e.bind(e,67247));case 34:return H=ue.sent,W=H.default,ue.next=38,Promise.resolve().then(e.bind(e,91845));case 38:return F=ue.sent,Z=F.pinyin,J=/[\u4e00-\u9fa5]/,Y=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],q=f.map(function(Pe,de){var xe=P()({},Pe);return de===0?xe.fixed="left":de===f.length-1&&(xe.fixed="right"),xe}),w={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},ae=function(de){return l()},pe=function(){var de=S("1"),xe=h()(de,2),Oe=xe[0],Le=xe[1],$e=D(null),Ye=function(Ve,Xe){return[{text:"\u7F16\u8F91",onClick:function(){E.success("\u70B9\u51FB\u4E86\u7B2C ".concat(Xe," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Qe=U()(I()().mark(function sn(){var on;return I()().wrap(function(dn){for(;;)switch(dn.prev=dn.next){case 0:return dn.next=2,ae(Ve.id);case 2:(on=$e.current)===null||on===void 0||on.refresh();case 3:case"end":return dn.stop()}},sn)}));function an(){return Qe.apply(this,arguments)}return an}()}]};return x.createElement(M,{locale:W},x.createElement(C,{ref:$e,search:{schema:u,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:Oe,items:Y,onChange:Le},leftExtraContent:function(Ve){var Xe=Ve.loading;return x.createElement(K,{disabled:Xe},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(Ve){var Xe=Ve.loading;return x.createElement(K,{disabled:Xe},"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")}},titleTop:function(){return x.createElement("div",{style:w},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return x.createElement("div",{style:w},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},header:function(){return x.createElement("div",{style:w},"Header \u5185\u5BB9\u81EA\u5B9A\u4E49")},footer:function(){return x.createElement("div",{style:P()(P()({},w),{},{marginTop:16})},"Footer \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:q,showRowNumber:!0,actionItems:Ye,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(Ve){return J.test(Ve)?Z(Ve,{toneType:"none"}):Ve}},request:function(){var Ke=U()(I()().mark(function Xe(Qe){var an,sn;return I()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,l();case 2:return an=y(Qe.pageSize),sn=an.reduce(function(dn,ke){return dn+ke.goods_price},0).toFixed(2),we.abrupt("return",{data:an,total:100,summaryData:{supplier_code:x.createElement(N,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:sn}});case 5:case"end":return we.stop()}},Xe)}));function Ve(Xe){return Ke.apply(this,arguments)}return Ve}()}))},ue.abrupt("return",{default:pe});case 47:case"end":return ue.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":L,"@schema-render/search-table-react":j,react:R||(R=e.t(x,2)),antd:m,"antd/locale/zh_CN":s,"pinyin-pro":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}}}},37629:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),A=e(99289),P=e.n(A),z=e(67294),I=e(72106),p=e(38959),U=e(22846),x=e(92114),$=e(68666),L=e(362),j=e(48201),_=e(67247),T={"examples-search-table-react-010-table-actions-demo-0":{component:z.memo(z.lazy(P()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return m=y.sent,s=m.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=y.sent,o=t.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=y.sent,r=n.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=y.sent,d=l.default,y.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return u=y.sent,g=u.default,f=function(){return z.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0},request:function(){var C=P()(h()().mark(function S(D){var b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,s();case 2:return b=d(D.pageSize),E.abrupt("return",{data:b,total:100});case 4:case"end":return E.stop()}},S)}));function O(S){return C.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 22:case"end":return y.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-1":{component:z.memo(z.lazy(P()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return m=i.sent,s=m.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return u=i.sent,g=u.default,f=function(O,S,D){return z.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},D+1)},B=function(){return z.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0,rowNumberColumnData:{width:80,render:f}},request:function(){var O=P()(h()().mark(function D(b){var M;return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return M=d(b.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},D)}));function S(D){return O.apply(this,arguments)}return S}()})},i.abrupt("return",{default:B});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-2":{component:z.memo(z.lazy(P()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i,C,O;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return m=D.sent,s=m.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=D.sent,o=t.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=D.sent,r=n.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=D.sent,d=l.default,D.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return u=D.sent,g=u.default,D.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return f=D.sent,B=f.ConfigProvider,y=f.message,D.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return i=D.sent,C=i.default,O=function(){var M=function(K,N){return[{text:"\u7F16\u8F91",onClick:function(){y.success("\u70B9\u51FB\u4E86\u7B2C ".concat(N," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return z.createElement(B,{locale:C},z.createElement(g,{search:{schema:o},table:{columns:r,actionItems:M},request:function(){var E=P()(h()().mark(function N(H){var W;return h()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,s();case 2:return W=d(H.pageSize),Z.abrupt("return",{data:W,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return E.apply(this,arguments)}return K}()}))},D.abrupt("return",{default:O});case 31:case"end":return D.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":$,"./helpers/createDataSource.ts":x,"./helpers/columns.ts":L,"@examples/utils":p,"@schema-render/search-table-react":U,antd:j,"antd/locale/zh_CN":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-3":{component:z.memo(z.lazy(P()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=E.sent,s=m.useRef,E.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=E.sent,o=t.sleep,E.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=E.sent,r=n.default,E.next=14,Promise.resolve().then(e.bind(e,362));case 14:return l=E.sent,d=l.default,E.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return u=E.sent,g=u.default,E.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return f=E.sent,B=f.default,E.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=E.sent,i=y.ConfigProvider,C=y.message,E.next=31,Promise.resolve().then(e.bind(e,67247));case 31:return O=E.sent,S=O.default,D=function(N){return o()},b=function(){var N=s(null),H=function(F,Z){return[{text:"\u7F16\u8F91",onClick:function(){C.success("\u70B9\u51FB\u7B2C ".concat(Z," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var J=P()(h()().mark(function q(){var w;return h()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,D(F.id);case 2:(w=N.current)===null||w===void 0||w.refresh();case 3:case"end":return pe.stop()}},q)}));function Y(){return J.apply(this,arguments)}return Y}()}]};return z.createElement(i,{locale:S},z.createElement(B,{ref:N,search:{schema:r},table:{columns:d,actionItems:H,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:function(){var W=P()(h()().mark(function Z(J){var Y;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,o();case 2:return Y=g(J.pageSize),w.abrupt("return",{data:Y,total:100});case 4:case"end":return w.stop()}},Z)}));function F(Z){return W.apply(this,arguments)}return F}()}))},E.abrupt("return",{default:b});case 36:case"end":return E.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/columns.ts":L,"./helpers/schema.ts":$,react:R||(R=e.t(z,2)),"@examples/utils":p,"@schema-render/search-table-react":U,antd:j,"antd/locale/zh_CN":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-4":{component:z.memo(z.lazy(P()(h()().mark(function v(){var m,s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=M.sent,s=m.useRef,M.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=M.sent,o=t.sleep,M.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=M.sent,r=n.default,M.next=14,Promise.resolve().then(e.bind(e,362));case 14:return l=M.sent,d=l.default,M.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return u=M.sent,g=u.default,M.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return f=M.sent,B=f.default,M.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=M.sent,i=y.ConfigProvider,M.next=30,Promise.resolve().then(e.bind(e,67247));case 30:return C=M.sent,O=C.default,S=function(K){return o()},D=function(){var K=s(null),N=function(W,F){return[{text:z.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(F)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(W.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:function(){var Z=P()(h()().mark(function Y(){var q;return h()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,S(W.id);case 2:(q=K.current)===null||q===void 0||q.refresh();case 3:case"end":return ae.stop()}},Y)}));function J(){return Z.apply(this,arguments)}return J}()}]};return z.createElement(i,{locale:O},z.createElement(B,{ref:K,search:{schema:r},table:{columns:d,actionItems:N,actionItemsCount:3,actionItemsColumnData:{width:180}},request:function(){var H=P()(h()().mark(function F(Z){var J;return h()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,o();case 2:return J=g(Z.pageSize),q.abrupt("return",{data:J,total:100});case 4:case"end":return q.stop()}},F)}));function W(F){return H.apply(this,arguments)}return W}()}))},M.abrupt("return",{default:D});case 35:case"end":return M.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,react:R||(R=e.t(z,2)),"@examples/utils":p,"@schema-render/search-table-react":U,antd:j,"antd/locale/zh_CN":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function m(){return v.apply(this,arguments)}return m}()}}}},89588:function(V,c,e){e.r(c),e.d(c,{demos:function(){return _}});var R=e(97857),a=e.n(R),h=e(15009),A=e.n(h),P=e(99289),z=e.n(P),I=e(67294),p=e(17258),U=e(38959),x=e(22846),$=e(92114),L=e(68666),j=e(362),_={"examples-search-table-react-020-table-height-demo-0":{component:I.memo(I.lazy(z()(A()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g;return A()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return v=B.sent,m=v.sleep,B.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=B.sent,t=s.default,B.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=B.sent,n=o.default,B.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=B.sent,l=r.default,B.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return d=B.sent,u=d.default,g=function(){return I.createElement(u,{style:{height:500,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:function(){var i=z()(A()().mark(function O(S){var D;return A()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,m();case 2:return D=l(S.pageSize),M.abrupt("return",{data:D,total:100});case 4:case"end":return M.stop()}},O)}));function C(O){return i.apply(this,arguments)}return C}()})},B.abrupt("return",{default:g});case 22:case"end":return B.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,"./helpers/columns.ts":j,"@examples/utils":U,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":j},renderOpts:{compile:function(){var T=z()(A()().mark(function m(){var s,t=arguments;return A()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-020-table-height-demo-1":{component:I.memo(I.lazy(z()(A()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f;return A()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return v=y.sent,m=v.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return d=y.sent,u=d.default,g={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},f=function(){return I.createElement(u,{style:{height:700,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:function(){var C=z()(A()().mark(function S(D){var b;return A()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,m();case 2:return b=l(D.pageSize),E.abrupt("return",{data:b,total:100});case 4:case"end":return E.stop()}},S)}));function O(S){return C.apply(this,arguments)}return O}(),header:function(){return I.createElement("div",{style:a()(a()({},g),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return I.createElement("div",{style:g},"Title Top")},titleBottom:function(){return I.createElement("div",{style:g},"Title Bottom")},footer:function(){return I.createElement("div",{style:g},"Footer")}})},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,"./helpers/columns.ts":j,"@examples/utils":U,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":j},renderOpts:{compile:function(){var T=z()(A()().mark(function m(){var s,t=arguments;return A()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},64929:function(V,c,e){e.r(c),e.d(c,{demos:function(){return _}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(73865),I=e(48201),p=e(38959),U=e(22846),x=e(92114),$=e(68666),L=e(362),j=e(23786),_={"examples-search-table-react-030-table-summay-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,m=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,u=d.default,i.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return g=i.sent,f=g.default,B=function(){return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300}},request:function(){var O=A()(a()().mark(function D(b){var M,E;return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,t();case 2:return M=u(b.pageSize),E=M.reduce(function(H,W){return H+W.goods_price},0).toFixed(2),N.abrupt("return",{data:M,total:100,summaryData:{supplier_code:P.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:E}});case 5:case"end":return N.stop()}},D)}));function S(D){return O.apply(this,arguments)}return S}()})},i.abrupt("return",{default:B});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var T=A()(a()().mark(function m(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-1":{component:P.memo(P.lazy(A()(a()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,m=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,u=d.default,i.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return g=i.sent,f=g.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},S=P.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,summaryText:S,actionItems:O},request:function(){var D=A()(a()().mark(function M(E){var K,N;return a()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,t();case 2:return K=u(E.pageSize),N=K.reduce(function(F,Z){return F+Z.goods_price},0).toFixed(2),W.abrupt("return",{data:K,total:100,summaryData:{supplier_code:P.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:N}});case 5:case"end":return W.stop()}},M)}));function b(M){return D.apply(this,arguments)}return b}()})},i.abrupt("return",{default:B});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var T=A()(a()().mark(function m(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-2":{component:P.memo(P.lazy(A()(a()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,m=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,u=d.default,i.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return g=i.sent,f=g.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},actionItems:O,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:function(){var S=A()(a()().mark(function b(M){var E,K;return a()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:return E=u(M.pageSize),K=E.reduce(function(W,F){return W+F.goods_price},0).toFixed(2),H.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},b)}));function D(b){return S.apply(this,arguments)}return D}()})},i.abrupt("return",{default:B});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var T=A()(a()().mark(function m(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-3":{component:P.memo(P.lazy(A()(a()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,m=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,u=d.default,i.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return g=i.sent,f=g.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,actionItems:O,rowSelection:{type:"checkbox"}},request:function(){var S=A()(a()().mark(function b(M){var E,K;return a()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:return E=u(M.pageSize),K=E.reduce(function(W,F){return W+F.goods_price},0).toFixed(2),H.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},b)}));function D(b){return S.apply(this,arguments)}return D}()})},i.abrupt("return",{default:B});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var T=A()(a()().mark(function m(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-4":{component:P.memo(P.lazy(A()(a()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B,y;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=C.sent,m=v.Tag,C.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=C.sent,t=s.sleep,C.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=C.sent,n=o.default,C.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=C.sent,l=r.default,C.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=C.sent,u=d.default,C.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return g=C.sent,f=g.default,B={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},y=function(){var S=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},D=P.createElement("div",{style:B},"\u5408\u8BA1");return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:D,actionItems:S,rowSelection:{type:"checkbox"}},request:function(){var b=A()(a()().mark(function E(K){var N,H;return a()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,t();case 2:return N=u(K.pageSize),H=N.reduce(function(Z,J){return Z+J.goods_price},0).toFixed(2),F.abrupt("return",{data:N,total:100,summaryData:{supplier_code:P.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:H}});case 5:case"end":return F.stop()}},E)}));function M(E){return b.apply(this,arguments)}return M}()})},C.abrupt("return",{default:y});case 27:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":L,antd:I,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":L},renderOpts:{compile:function(){var T=A()(a()().mark(function m(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-5":{component:P.memo(P.lazy(A()(a()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,m=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,23786));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,u=d.default,i.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return g=i.sent,f=g.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:O},request:function(){var S=A()(a()().mark(function b(M){var E,K;return a()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:return E=u(M.pageSize),K=E.reduce(function(W,F){return W+F.goods_price},0).toFixed(2),H.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},b)}));function D(b){return S.apply(this,arguments)}return D}()})},i.abrupt("return",{default:B});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns-tree.ts":j,antd:I,"@examples/utils":p,"@schema-render/search-table-react":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":j},renderOpts:{compile:function(){var T=A()(a()().mark(function m(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},35955:function(V,c,e){e.r(c),e.d(c,{demos:function(){return v}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(81535),I=e(48201),p=e(67247),U=e(38959),x=e(22846),$=e(92114),L=e(68666),j=e(362),_=e(23786),T=e(91845),v={"examples-search-table-react-040-table-sort-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C;return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=S.sent,t=s.ConfigProvider,S.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=S.sent,n=o.default,S.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=S.sent,l=r.sleep,S.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=S.sent,u=d.default,S.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=S.sent,f=g.default,S.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return B=S.sent,y=B.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(b){return b.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],C=function(){return P.createElement(t,{locale:n},P.createElement(y,{search:{schema:u},table:{columns:i},request:function(){var b=A()(a()().mark(function E(K){var N;return a()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,l();case 2:return N=f(K.pageSize),W.abrupt("return",{data:N,total:100});case 4:case"end":return W.stop()}},E)}));function M(E){return b.apply(this,arguments)}return M}()}))},S.abrupt("return",{default:C});case 27:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,antd:I,"antd/locale/zh_CN":p,"@examples/utils":U,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L},renderOpts:{compile:function(){var m=A()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-1":{component:P.memo(P.lazy(A()(a()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C,O;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=D.sent,t=s.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=D.sent,n=o.default,D.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=D.sent,l=r.sleep,D.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=D.sent,u=d.default,D.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=D.sent,f=g.default,D.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return B=D.sent,y=B.default,D.next=26,Promise.resolve().then(e.bind(e,22846));case 26:return i=D.sent,C=i.default,O=function(){return P.createElement(t,{locale:n},P.createElement(C,{search:{schema:u},table:{columns:f,sortMode:"local-all"},request:function(){var M=A()(a()().mark(function K(N){var H;return a()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},D.abrupt("return",{default:O});case 30:case"end":return D.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,"./helpers/columns.ts":j,antd:I,"antd/locale/zh_CN":p,"@examples/utils":U,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":j},renderOpts:{compile:function(){var m=A()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-2":{component:P.memo(P.lazy(A()(a()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C,O;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=D.sent,t=s.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=D.sent,n=o.default,D.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=D.sent,l=r.sleep,D.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=D.sent,u=d.default,D.next=18,Promise.resolve().then(e.bind(e,23786));case 18:return g=D.sent,f=g.default,D.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return B=D.sent,y=B.default,D.next=26,Promise.resolve().then(e.bind(e,22846));case 26:return i=D.sent,C=i.default,O=function(){return P.createElement(t,{locale:n},P.createElement(C,{search:{schema:u},table:{columns:f,bordered:!0,sortMode:"local-all"},request:function(){var M=A()(a()().mark(function K(N){var H;return a()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},D.abrupt("return",{default:O});case 30:case"end":return D.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,"./helpers/columns-tree.ts":_,antd:I,"antd/locale/zh_CN":p,"@examples/utils":U,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":_},renderOpts:{compile:function(){var m=A()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-3":{component:P.memo(P.lazy(A()(a()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=E.sent,t=s.ConfigProvider,E.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=E.sent,n=o.default,E.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=E.sent,l=r.sleep,E.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=E.sent,u=d.default,E.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=E.sent,f=g.default,E.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return B=E.sent,y=B.default,E.next=26,Promise.resolve().then(e.bind(e,22846));case 26:return i=E.sent,C=i.default,E.next=30,Promise.resolve().then(e.bind(e,91845));case 30:return O=E.sent,S=O.pinyin,D=/[\u4e00-\u9fa5]/,b=function(){return P.createElement(t,{locale:n},P.createElement(C,{search:{schema:u},table:{columns:f,sortMode:"local-all",sortStringValueTransform:function(H){return D.test(H)?S(H,{toneType:"none"}):H}},request:function(){var N=A()(a()().mark(function W(F){var Z;return a()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,l();case 2:return Z=y(F.pageSize),Y.abrupt("return",{data:Z,total:100});case 4:case"end":return Y.stop()}},W)}));function H(W){return N.apply(this,arguments)}return H}()}))},E.abrupt("return",{default:b});case 35:case"end":return E.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,"./helpers/columns.ts":j,antd:I,"antd/locale/zh_CN":p,"@examples/utils":U,"@schema-render/search-table-react":x,"pinyin-pro":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":j},renderOpts:{compile:function(){var m=A()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-4":{component:P.memo(P.lazy(A()(a()().mark(function m(){var s,t,o,n,r,l,d,u,g,f,B,y,i,C;return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=S.sent,t=s.ConfigProvider,S.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=S.sent,n=o.default,S.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=S.sent,l=r.sleep,S.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=S.sent,u=d.default,S.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=S.sent,f=g.default,S.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return B=S.sent,y=B.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],C=function(){return P.createElement(t,{locale:n},P.createElement(y,{search:{schema:u},table:{columns:i,sortMode:"service"},request:function(){var b=A()(a()().mark(function E(K,N){var H,W,F;return a()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return H=N.sorter,W=H,J.next=4,l();case 4:return F=f(K.pageSize,{sort_field:W==null?void 0:W.field,sort_order:W==null?void 0:W.order}),J.abrupt("return",{data:F,total:100});case 6:case"end":return J.stop()}},E)}));function M(E,K){return b.apply(this,arguments)}return M}()}))},S.abrupt("return",{default:C});case 27:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":L,antd:I,"antd/locale/zh_CN":p,"@examples/utils":U,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L},renderOpts:{compile:function(){var m=A()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return m.apply(this,arguments)}return s}()}}}},66725:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return s}});var a=e(15009),h=e.n(a),A=e(5574),P=e.n(A),z=e(99289),I=e.n(z),p=e(67294),U=e(18899),x=e(38959),$=e(22846),L=e(92114),j=e(68666),_=e(362),T=e(27164),v=e(6271),m=e(48201),s={"examples-search-table-react-050-tabs-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i,C,O,S;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,l=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=b.sent,u=d.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return B=b.sent,y=B.default,b.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=b.sent,C=i.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],S=function(){var E=C("1"),K=P()(E,2),N=K[0],H=K[1];return p.createElement(y,{search:{schema:l,labelWidth:80},title:{tabs:{activeKey:N,items:O,onChange:H}},table:{columns:u},request:function(){var W=I()(h()().mark(function Z(J){var Y;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("activeKey:",N),w.next=3,n();case 3:return Y=f(J.pageSize),w.abrupt("return",{data:Y,total:100});case 5:case"end":return w.stop()}},Z)}));function F(Z){return W.apply(this,arguments)}return F}()})},b.abrupt("return",{default:S});case 27:case"end":return b.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":$,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b,M,E;return h()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=N.sent,n=o.useState,N.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return r=N.sent,l=r.sleep,N.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return d=N.sent,u=d.default,N.next=14,Promise.resolve().then(e.bind(e,362));case 14:return g=N.sent,f=g.default,N.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return B=N.sent,y=B.default,N.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return i=N.sent,C=i.default,N.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return O=N.sent,S=O.default,N.next=30,Promise.resolve().then(e.bind(e,22846));case 30:return D=N.sent,b=D.default,M=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],E=function(){var W=n("1"),F=P()(W,2),Z=F[0],J=F[1];return p.createElement(b,{search:{schema:u},title:{showSetting:!0,tabs:{activeKey:Z,items:M,onChange:J}},table:{columns:Z==="1"?f:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var Y=I()(h()().mark(function w(ae){var pe,le;return h()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,l();case 2:if(pe=Z==="1"?C:S,le=pe(ae.pageSize),!(Math.random()>.7)){Pe.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return Pe.abrupt("return",{data:le,total:100});case 7:case"end":return Pe.stop()}},w)}));function q(w){return Y.apply(this,arguments)}return q}()})},N.abrupt("return",{default:E});case 35:case"end":return N.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":T,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"./helpers/columns-value-type.ts":v,"./helpers/createDataSource.ts":L,react:R||(R=e.t(p,2)),"@examples/utils":x,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i,C,O,S;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,l=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=b.sent,u=d.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return B=b.sent,y=B.default,b.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=b.sent,C=i.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],S=function(){var E=C("1"),K=P()(E,2),N=K[0],H=K[1];return p.createElement(y,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0,tabs:{activeKey:N,items:O,onChange:H}},table:{columns:u},request:function(){var W=I()(h()().mark(function Z(J){var Y;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("activeKey:",N),w.next=3,n();case 3:return Y=f(J.pageSize),w.abrupt("return",{data:Y,total:100});case 5:case"end":return w.stop()}},Z)}));function F(Z){return W.apply(this,arguments)}return F}()})},b.abrupt("return",{default:S});case 27:case"end":return b.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":$,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=O.sent,n=o.sleep,O.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=O.sent,l=r.default,O.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=O.sent,u=d.default,O.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=O.sent,f=g.default,O.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return B=O.sent,y=B.default,i=function(){return p.createElement(y,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0},table:{columns:u},request:function(){var D=I()(h()().mark(function M(E){var K;return h()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,n();case 2:return K=f(E.pageSize),H.abrupt("return",{data:K,total:100});case 4:case"end":return H.stop()}},M)}));function b(M){return D.apply(this,arguments)}return b}()})},O.abrupt("return",{default:i});case 22:case"end":return O.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i,C,O;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,l=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=D.sent,u=d.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return B=D.sent,y=B.default,D.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=D.sent,C=i.Button,O=function(){return p.createElement(y,{search:{schema:l,labelWidth:80},title:{leftExtraContent:function(E){var K=E.loading;return p.createElement(p.Fragment,null,p.createElement(C,{type:"primary",disabled:K},"\u5BFC\u5165"),p.createElement(C,{disabled:K},"\u5BFC\u51FA"))}},table:{columns:u},request:function(){var M=I()(h()().mark(function K(N){var H;return h()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,n();case 2:return H=f(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 26:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":$,antd:m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-5":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i,C,O;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,l=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=D.sent,u=d.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return B=D.sent,y=B.default,D.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=D.sent,C=i.Button,O=function(){return p.createElement(y,{search:{schema:l,labelWidth:80},title:{rightExtraContent:function(E){var K=E.loading;return p.createElement(C,{disabled:K},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:u},request:function(){var M=I()(h()().mark(function K(N){var H;return h()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,n();case 2:return H=f(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 26:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":$,antd:m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-6":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=E.sent,n=o.sleep,E.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=E.sent,l=r.default,E.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=E.sent,u=d.default,E.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=E.sent,f=g.default,E.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return B=E.sent,y=B.default,E.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=E.sent,C=i.Button,E.next=26,Promise.resolve().then(e.t.bind(e,67294,19));case 26:return O=E.sent,S=O.useState,D=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],b=function(){var N=S("1"),H=P()(N,2),W=H[0],F=H[1];return p.createElement(y,{search:{schema:l,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:W,items:D,onChange:F},leftExtraContent:function(J){var Y=J.loading;return p.createElement(C,{disabled:Y},"\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(J){var Y=J.loading;return p.createElement(C,{disabled:Y},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:u},request:function(){var Z=I()(h()().mark(function Y(q){var w;return h()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,n();case 2:return w=f(q.pageSize),pe.abrupt("return",{data:w,total:100});case 4:case"end":return pe.stop()}},Y)}));function J(Y){return Z.apply(this,arguments)}return J}()})},E.abrupt("return",{default:b});case 31:case"end":return E.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":L,"./helpers/schema.ts":j,"./helpers/columns.ts":_,"@examples/utils":x,"@schema-render/search-table-react":$,antd:m,react:R||(R=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":_},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(r=u.sent).default.apply(r,l));case 3:case"end":return u.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}}}},23915:function(V,c,e){e.r(c),e.d(c,{demos:function(){return m}});var R=e(97857),a=e.n(R),h=e(15009),A=e.n(h),P=e(99289),z=e.n(P),I=e(67294),p=e(87922),U=e(48201),x=e(67247),$=e(38959),L=e(22846),j=e(27164),_=e(68666),T=e(6271),v=e(41989),m={"examples-search-table-react-060-value-type-demo-0":{component:I.memo(I.lazy(z()(A()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i,C,O,S;return A()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return t=b.sent,o=t.ConfigProvider,b.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return n=b.sent,r=n.default,b.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return l=b.sent,d=l.sleep,b.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return u=b.sent,g=u.default,b.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return f=b.sent,B=f.default,b.next=22,Promise.resolve().then(e.bind(e,27164));case 22:return y=b.sent,i=y.default,b.next=26,Promise.resolve().then(e.bind(e,22846));case 26:return C=b.sent,O=C.default,S=function(){return I.createElement(o,{locale:r},I.createElement(O,{search:{schema:g},table:{columns:B,showRowNumber:!0,sortMode:"local-all"},request:function(){var E=z()(A()().mark(function N(H){var W;return A()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,d();case 2:return W=i(H.pageSize),Z.abrupt("return",{data:W,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return E.apply(this,arguments)}return K}()}))},b.abrupt("return",{default:S});case 30:case"end":return b.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":j,"./helpers/schema.ts":_,"./helpers/columns-value-type.ts":T,antd:U,"antd/locale/zh_CN":x,"@examples/utils":$,"@schema-render/search-table-react":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":T},renderOpts:{compile:function(){var s=z()(A()().mark(function o(){var n,r=arguments;return A()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-search-table-react-060-value-type-demo-1":{component:I.memo(I.lazy(z()(A()().mark(function s(){var t,o,n,r,l,d,u,g,f,B;return A()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=i.sent,o=t.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return n=i.sent,r=n.default,i.next=10,Promise.resolve().then(e.bind(e,27164));case 10:return l=i.sent,d=l.default,i.next=14,Promise.resolve().then(e.bind(e,22846));case 14:return u=i.sent,g=u.default,f=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u5F69\u8272\u6807\u7B7E",dataIndex:"tags",valueType:function(O){return{type:"tags",color:Array.isArray(O.tags)?"blue":"green"}}}],B=function(){return I.createElement(g,{search:{schema:r},table:{columns:f,sortMode:"local-all"},request:function(){var O=z()(A()().mark(function D(b){var M;return A()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return M=d(b.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},D)}));function S(D){return O.apply(this,arguments)}return S}()})},i.abrupt("return",{default:B});case 19:case"end":return i.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":j,"./helpers/schema.ts":_,"@examples/utils":$,"@schema-render/search-table-react":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":_},renderOpts:{compile:function(){var s=z()(A()().mark(function o(){var n,r=arguments;return A()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-search-table-react-060-value-type-demo-2":{component:I.memo(I.lazy(z()(A()().mark(function s(){var t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b,M,E;return A()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return t=N.sent,o=t.default,N.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=N.sent,r=n.ConfigProvider,l=n.Tag,N.next=11,Promise.resolve().then(e.bind(e,67247));case 11:return d=N.sent,u=d.default,N.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return g=N.sent,f=g.sleep,N.next=19,Promise.resolve().then(e.bind(e,68666));case 19:return B=N.sent,y=B.default,N.next=23,Promise.resolve().then(e.bind(e,27164));case 23:return i=N.sent,C=i.default,N.next=27,Promise.resolve().then(e.bind(e,22846));case 27:return O=N.sent,S=O.default,D=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],b={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},M={code:function(W){var F=W.value;return I.createElement(o,{value:F,language:"js"})},"deploy-status":function(W){var F=W.value,Z=b[F];return I.createElement("div",null,I.createElement("span",{style:a()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},Z.style)}),Z.text)},"deploy-status-tag":function(W){var F=W.record,Z=F.deploy_status,J=b[Z];return I.createElement(l,{color:J.color},J.text)}},E=function(){return I.createElement(r,{locale:u},I.createElement(S,{search:{schema:y},table:{columns:D,showRowNumber:!0,sortMode:"local-all",registerValueType:M},request:function(){var W=z()(A()().mark(function Z(J){var Y;return A()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,f();case 2:return Y=C(J.pageSize),w.abrupt("return",{data:Y,total:100});case 4:case"end":return w.stop()}},Z)}));function F(Z){return W.apply(this,arguments)}return F}()}))},N.abrupt("return",{default:E});case 34:case"end":return N.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":j,"./helpers/schema.ts":_,"@examples/components/SyntaxHighlighter":v,antd:U,"antd/locale/zh_CN":x,"@examples/utils":$,"@schema-render/search-table-react":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":_},renderOpts:{compile:function(){var s=z()(A()().mark(function o(){var n,r=arguments;return A()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}}}},55983:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return o}});var a=e(5574),h=e.n(a),A=e(97857),P=e.n(A),z=e(15009),I=e.n(z),p=e(99289),U=e.n(p),x=e(67294),$=e(8497),L=e(38959),j=e(22846),_=e(92114),T=e(68666),v=e(362),m=e(27164),s=e(6271),t=e(48201),o={"examples-search-table-react-100-columns-setting-demo-0":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,l=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=D.sent,u=d.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=D.sent,y=B.default,D.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return i=D.sent,C=i.default,O=function(){return x.createElement(C,{search:{schema:u},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var M=U()(I()().mark(function K(N){var H;return I()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 22:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-1":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=b.sent,l=r.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=b.sent,u=d.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=b.sent,f=g.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=b.sent,y=B.default,b.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return i=b.sent,C=i.default,O=f.map(function(M,E){var K=P()({},M);return E===0?K.fixed="left":E===f.length-1&&(K.fixed="right"),K}),S=function(){return x.createElement(C,{search:{schema:u},title:{showSetting:!0},table:{columns:O,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var E=U()(I()().mark(function N(H){var W;return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:return W=y(H.pageSize),Z.abrupt("return",{data:W,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return E.apply(this,arguments)}return K}()})},b.abrupt("return",{default:S});case 23:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-2":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S,D,b,M,E,K,N;return I()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=W.sent,l=r.useState,W.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=W.sent,u=d.sleep,W.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=W.sent,f=g.default,W.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=W.sent,y=B.default,W.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=W.sent,C=i.default,W.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=W.sent,S=O.default,W.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=W.sent,b=D.default,W.next=30,Promise.resolve().then(e.bind(e,22846));case 30:return M=W.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),J=h()(Z,2),Y=J[0],q=J[1];return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:q}},table:{columns:Y==="1"?y:C,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var w=U()(I()().mark(function pe(le){var ue,Pe;return I()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:return ue=Y==="1"?S:b,Pe=ue(le.pageSize),xe.abrupt("return",{data:Pe,total:100});case 5:case"end":return xe.stop()}},pe)}));function ae(pe){return w.apply(this,arguments)}return ae}()})},W.abrupt("return",{default:N});case 35:case"end":return W.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":m,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":_,react:R||(R=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-3":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S,D,b,M;return I()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=K.sent,l=r.useRef,K.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=K.sent,u=d.sleep,K.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=K.sent,f=g.default,K.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=K.sent,y=B.default,K.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return i=K.sent,C=i.default,K.next=22,Promise.resolve().then(e.bind(e,22846));case 22:return O=K.sent,S=O.default,K.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return D=K.sent,b=D.Button,M=function(){var H=l(null),W=function(){var Z;(Z=H.current)===null||Z===void 0||Z.openSettingModal()};return x.createElement(S,{ref:H,search:{schema:f},titleTop:function(){return x.createElement(b,{type:"primary",onClick:W},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var F=U()(I()().mark(function J(Y){var q;return I()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,u();case 2:return q=C(Y.pageSize),ae.abrupt("return",{data:q,total:100});case 4:case"end":return ae.stop()}},J)}));function Z(J){return F.apply(this,arguments)}return Z}()})},K.abrupt("return",{default:M});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":_,"./helpers/schema.ts":T,"./helpers/columns.ts":v,react:R||(R=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":j,antd:t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-4":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=b.sent,l=r.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=b.sent,u=d.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=b.sent,f=g.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=b.sent,y=B.default,b.next=18,Promise.resolve().then(e.bind(e,22846));case 18:return i=b.sent,C=i.default,O="save-setting-unique-id",S=function(){var E=function(){var N=U()(I()().mark(function H(W){return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:localStorage.setItem(O,JSON.stringify(W));case 3:case"end":return Z.stop()}},H)}));return function(W){return N.apply(this,arguments)}}(),K=function(){var N=U()(I()().mark(function H(){var W;return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:if(W=localStorage.getItem(O),!W){Z.next=5;break}return Z.abrupt("return",JSON.parse(W));case 5:case"end":return Z.stop()}},H)}));return function(){return N.apply(this,arguments)}}();return x.createElement(C,{search:{schema:u},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:E,getSetting:K},request:function(){var N=U()(I()().mark(function W(F){var Z;return I()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,l();case 2:return Z=y(F.pageSize),Y.abrupt("return",{data:Z,total:100});case 4:case"end":return Y.stop()}},W)}));function H(W){return N.apply(this,arguments)}return H}()})},b.abrupt("return",{default:S});case 23:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":T,"./helpers/createDataSource.ts":_,"./helpers/columns.ts":v,"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-5":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S,D,b,M,E,K,N;return I()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=W.sent,l=r.useState,W.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=W.sent,u=d.sleep,W.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=W.sent,f=g.default,W.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=W.sent,y=B.default,W.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=W.sent,C=i.default,W.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=W.sent,S=O.default,W.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=W.sent,b=D.default,W.next=30,Promise.resolve().then(e.bind(e,22846));case 30:return M=W.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),J=h()(Z,2),Y=J[0],q=J[1],w=function(){var pe=U()(I()().mark(function le(ue,Pe){return I()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:localStorage.setItem(Pe,JSON.stringify(ue));case 3:case"end":return xe.stop()}},le)}));return function(ue,Pe){return pe.apply(this,arguments)}}(),ae=function(){var pe=U()(I()().mark(function le(ue){var Pe;return I()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:if(Pe=localStorage.getItem(ue),!Pe){xe.next=5;break}return xe.abrupt("return",JSON.parse(Pe));case 5:case"end":return xe.stop()}},le)}));return function(ue){return pe.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:q}},table:{columns:Y==="1"?y:C,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(Y),onSettingChanged:w,getSetting:ae},request:function(){var pe=U()(I()().mark(function ue(Pe){var de,xe;return I()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,u();case 2:return de=Y==="1"?S:b,xe=de(Pe.pageSize),Le.abrupt("return",{data:xe,total:100});case 5:case"end":return Le.stop()}},ue)}));function le(ue){return pe.apply(this,arguments)}return le}()})},W.abrupt("return",{default:N});case 35:case"end":return W.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":m,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":_,react:R||(R=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-6":{component:x.memo(x.lazy(U()(I()().mark(function n(){var r,l,d,u,g,f,B,y,i,C,O,S,D,b,M,E,K,N;return I()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=W.sent,l=r.useState,W.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=W.sent,u=d.sleep,W.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=W.sent,f=g.default,W.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=W.sent,y=B.default,W.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=W.sent,C=i.default,W.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=W.sent,S=O.default,W.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=W.sent,b=D.default,W.next=30,Promise.resolve().then(e.bind(e,22846));case 30:return M=W.sent,E=M.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),J=h()(Z,2),Y=J[0],q=J[1],w=l([]),ae=h()(w,2),pe=ae[0],le=ae[1],ue=function(){var xe=U()(I()().mark(function Oe(Le,$e){return I()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ke.next=2,u();case 2:localStorage.setItem($e,JSON.stringify(Le));case 3:case"end":return Ke.stop()}},Oe)}));return function(Le,$e){return xe.apply(this,arguments)}}(),Pe=function(){var xe=U()(I()().mark(function Oe(Le){var $e;return I()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ke.next=2,u();case 2:if($e=localStorage.getItem(Le),!$e){Ke.next=5;break}return Ke.abrupt("return",JSON.parse($e));case 5:case"end":return Ke.stop()}},Oe)}));return function(Le){return xe.apply(this,arguments)}}(),de=function(){var xe=U()(I()().mark(function Oe(){return I()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:return $e.next=2,u(500);case 2:return $e.abrupt("return",Y==="1"?y:C);case 3:case"end":return $e.stop()}},Oe)}));return function(){return xe.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:q}},table:{columns:pe,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(Y),onSettingChanged:ue,getSetting:Pe},request:function(){var xe=U()(I()().mark(function Le($e){var Ye,Ke,Ve;return I()().wrap(function(Qe){for(;;)switch(Qe.prev=Qe.next){case 0:return Qe.next=2,u();case 2:return Ye=Y==="1"?S:b,Ke=Ye($e.pageSize),Qe.next=6,de();case 6:return Ve=Qe.sent,le(Ve),Qe.abrupt("return",{data:Ke,total:100});case 9:case"end":return Qe.stop()}},Le)}));function Oe(Le){return xe.apply(this,arguments)}return Oe}()})},W.abrupt("return",{default:N});case 35:case"end":return W.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":m,"./helpers/columns.ts":v,"./helpers/schema.ts":T,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":_,react:R||(R=e.t(x,2)),"@examples/utils":L,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":_},renderOpts:{compile:function(){var n=U()(I()().mark(function l(){var d,u=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}}}},47381:function(V,c,e){e.r(c),e.d(c,{demos:function(){return j}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(90749),I=e(22846),p=e(38959),U=e(74465),x=e(62244),$=e(34200),L=e(24534),j={"examples-search-table-react-700-locale-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function _(){var T,v,m,s,t,o,n,r,l,d,u,g,f;return a()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,34200));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.bind(e,24534));case 6:return m=y.sent,s=m.default,y.next=10,Promise.resolve().then(e.bind(e,62244));case 10:return t=y.sent,o=t.default,y.next=14,Promise.resolve().then(e.bind(e,22846));case 14:return n=y.sent,r=n.default,y.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return l=y.sent,d=l.sleep,y.next=22,Promise.resolve().then(e.bind(e,74465));case 22:return u=y.sent,g=u.default,f=function(){return P.createElement(r,{locale:g,search:{schema:v,labelWidth:"max-content"},title:{showRefresh:!0,showSetting:!0},table:{bordered:!0,columns:s,showRowNumber:!0,actionItems:function(){return[{text:"Edit"},{text:"View"},{text:"Delete",danger:!0}]},actionItemsColumnData:{width:150},summaryText:"Total"},request:function(){var C=A()(a()().mark(function S(D){var b,M;return a()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,d();case 2:return b=o(D.pageSize),M=b.reduce(function(N,H){return N+H.goods_price},0).toFixed(2),K.abrupt("return",{data:b,total:100,summaryData:{goods_price:M}});case 5:case"end":return K.stop()}},S)}));function O(S){return C.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 26:case"end":return y.stop()}},_)})))),asset:{type:"BLOCK",id:"examples-search-table-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import schemaEn from './helpers/schema-en'
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

export default Demo`},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./helpers/createDataSource-en.ts":{type:"FILE",value:e(45876).Z},"./helpers/schema-en.ts":{type:"FILE",value:e(36556).Z},"./helpers/columns-en.ts":{type:"FILE",value:e(71091).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-en.ts":x,"./helpers/schema-en.ts":$,"./helpers/columns-en.ts":L,"@schema-render/search-table-react":I,"@examples/utils":p,"@schema-render/search-table-react/src/locale/en_US":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-en.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema-en.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-en.ts":L},renderOpts:{compile:function(){var _=A()(a()().mark(function v(){var m,s=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,s));case 3:case"end":return o.stop()}},v)}));function T(){return _.apply(this,arguments)}return T}()}}}},81706:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(27490),h={}},62111:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(8906),h={}},44307:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return _}});var a=e(15009),h=e.n(a),A=e(99289),P=e.n(A),z=e(67294),I=e(34451),p=e(38959),U=e(22846),x=e(48201),$=e(67247),L=e(68666),j=e(92114),_={"examples-search-table-react-900-table-editable-demo-0":{component:z.memo(z.lazy(P()(h()().mark(function T(){var v,m,s,t,o,n,r,l,d,u,g,f,B,y,i,C,O,S,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=E.sent,m=v.useRef,s=v.useMemo,E.next=7,Promise.resolve().then(e.bind(e,38959));case 7:return t=E.sent,o=t.sleep,E.next=11,Promise.resolve().then(e.bind(e,68666));case 11:return n=E.sent,r=n.default,E.next=15,Promise.resolve().then(e.bind(e,92114));case 15:return l=E.sent,d=l.default,E.next=19,Promise.resolve().then(e.bind(e,22846));case 19:return u=E.sent,g=u.default,E.next=23,Promise.resolve().then(e.bind(e,48201));case 23:return f=E.sent,B=f.ConfigProvider,E.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return y=E.sent,i=y.default,E.next=31,Promise.resolve().then(e.bind(e,48201));case 31:return C=E.sent,O=C.InputNumber,S=C.Button,D=C.message,b=function(){var N=m(null),H=s(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(Z,J){return z.createElement(O,{value:Z,onChange:function(q){var w;J.goods_price=q,(w=N.current)===null||w===void 0||w.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),W=function(){var Z;console.log("dataSource:",(Z=N.current)===null||Z===void 0?void 0:Z.getDataSource()),D.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return z.createElement(B,{locale:i},z.createElement(g,{ref:N,search:{schema:r},table:{columns:H},request:function(){var F=P()(h()().mark(function J(Y){var q;return h()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,o();case 2:return q=d(Y.pageSize),ae.abrupt("return",{data:q,total:100});case 4:case"end":return ae.stop()}},J)}));function Z(J){return F.apply(this,arguments)}return Z}()}),z.createElement(S,{type:"primary",onClick:W},"\u63D0\u4EA4"))},E.abrupt("return",{default:b});case 37:case"end":return E.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":L,"./helpers/createDataSource.ts":j,react:R||(R=e.t(z,2)),"@examples/utils":p,"@schema-render/search-table-react":U,antd:x,"antd/locale/zh_CN":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":L,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j},renderOpts:{compile:function(){var T=P()(h()().mark(function m(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},m)}));function v(){return T.apply(this,arguments)}return v}()}}}},13836:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(24311),h={}},9482:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(67294),a=e(49409),h={}},28629:function(V,c,e){e.r(c),e.d(c,{demos:function(){return $}});var R=e(15009),a=e.n(R),h=e(99289),A=e.n(h),P=e(67294),z=e(63710),I=e(38959),p=e(22846),U=e(92114),x=e(362),$={"examples-search-table-react-910-no-search-demo-0":{component:P.memo(P.lazy(A()(a()().mark(function L(){var j,_,T,v,m,s,t,o,n;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return j=l.sent,_=j.sleep,l.next=6,Promise.resolve().then(e.bind(e,362));case 6:return T=l.sent,v=T.default,l.next=10,Promise.resolve().then(e.bind(e,92114));case 10:return m=l.sent,s=m.default,l.next=14,Promise.resolve().then(e.bind(e,22846));case 14:return t=l.sent,o=t.default,n=function(){return P.createElement(o,{search:!1,table:{columns:v},request:function(){var u=A()(a()().mark(function f(){var B;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_();case 2:return B=s(),i.abrupt("return",{data:B,total:100});case 4:case"end":return i.stop()}},f)}));function g(){return u.apply(this,arguments)}return g}()})},l.abrupt("return",{default:n});case 18:case"end":return l.stop()}},L)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":U,"./helpers/columns.ts":x,"@examples/utils":I,"@schema-render/search-table-react":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":U,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":x},renderOpts:{compile:function(){var L=A()(a()().mark(function _(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},_)}));function j(){return L.apply(this,arguments)}return j}()}}}},41989:function(V,c,e){e.r(c),e.d(c,{default:function(){return P}});var R=e(42481),a=e(71353),h=e(85893),A=function(I){var p=I.value,U=I.language,x=U===void 0?"json":U,$=I.style;return(0,h.jsx)("div",{style:$,children:(0,h.jsx)(R.Z,{className:"example-hl",language:x,style:a.Z,children:x==="json"?JSON.stringify(p,null,2):p})})},P=A},78469:function(V,c,e){e.r(c);var R=e(25035),a=e(55241),h=e(93967),A=e.n(h),P=e(59868),z=e(85893),I=function(U){var x=U.body,$=U.schema,L=U.validator,j=U.required,_=U.prefixClassNames;return(0,z.jsxs)("div",{className:A()(_("item-layout-horizontal"),P.horizontal),children:[(0,z.jsxs)("div",{className:A()(_("item-main"),P.main),children:[(0,z.jsxs)("div",{className:A()(_("item-header"),P.header),children:[j&&(0,z.jsx)("span",{className:A()(_("item-mark"),P.mark),children:"*"}),(0,z.jsx)("span",{className:A()(_("item-title"),P.title),children:$.title}),!!$.titleDescription&&(0,z.jsx)(a.Z,{placement:"top",trigger:"hover",content:$.titleDescription,children:(0,z.jsx)(R.Z,{className:A()(_("item-title-tooltip"),P.titleTooltip)})})]}),(0,z.jsx)("div",{className:A()(_("item-body"),P.body),children:x})]}),(0,z.jsxs)("div",{className:A()(_("item-footer"),P.footer),children:[L.status==="error"&&!!L.message&&(0,z.jsx)("div",{className:A()(_("item-error-msg"),P.errorMsg),children:L.message}),!!$.description&&(0,z.jsx)("div",{className:A()(_("item-desc"),P.desc),children:$.description})]})]})};c.default=I},59868:function(V,c,e){e.r(c),e.d(c,{body:function(){return o},desc:function(){return r},errorMsg:function(){return l},footer:function(){return n},header:function(){return v},horizontal:function(){return _},main:function(){return T},mark:function(){return s},title:function(){return m},titleTooltip:function(){return t}});var R=e(68400),a=e.n(R),h=e(77525),A,P,z,I,p,U,x,$,L,j,_=(0,h.H)(A||(A=a()([""]))),T=(0,h.H)(P||(P=a()([`
  display: flex;
  align-items: center;
`]))),v=(0,h.H)(z||(z=a()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),m=(0,h.H)(I||(I=a()([`
  word-break: break-all;
`]))),s=(0,h.H)(p||(p=a()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),t=(0,h.H)(U||(U=a()([`
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
`]))),r=(0,h.H)(L||(L=a()([`
  margin-top: 6px;
  color: #999;
`]))),l=(0,h.H)(j||(j=a()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},29298:function(V,c,e){e.r(c),e.d(c,{desc:function(){return v},errorMsg:function(){return m},footer:function(){return T},header:function(){return $},mark:function(){return j},title:function(){return L},titleTooltip:function(){return _}});var R=e(68400),a=e.n(R),h=e(77525),A,P,z,I,p,U,x,$=(0,h.H)(A||(A=a()([`
  margin-bottom: 8px;
`]))),L=(0,h.H)(P||(P=a()([`
  word-break: break-all;
`]))),j=(0,h.H)(z||(z=a()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),_=(0,h.H)(I||(I=a()([`
  margin-left: 4px;
`]))),T=(0,h.H)(p||(p=a()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),v=(0,h.H)(U||(U=a()([`
  margin-top: 8px;
  color: #999;
`]))),m=(0,h.H)(x||(x=a()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))},2862:function(V,c,e){e.r(c);var R=e(97857),a=e.n(R),h=e(25278),A=e(13457),P=e(41637),z=e(34041),I=e(55742),p=e(85893),U={InputText:{component:function($){var L,j=$.schema,_=$.value,T=$.disabled,v=$.readonly,m=$.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(h.Z,a()(a()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((L=j.title)!==null&&L!==void 0?L:"")},j.renderOptions),{},{value:_!=null?_:"",disabled:T,onChange:function(t){return m(t.target.value)}}))}},InputNumber:{component:function($){var L,j=$.schema,_=$.value,T=$.disabled,v=$.readonly,m=$.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(A.Z,a()(a()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((L=j.title)!==null&&L!==void 0?L:"")},j.renderOptions),{},{value:_,onChange:function(t){return m(t!=null?t:void 0)},disabled:T}))}},TextArea:{component:function($){var L,j=$.schema,_=$.value,T=$.disabled,v=$.readonly,m=$.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(h.Z.TextArea,a()(a()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((L=j.title)!==null&&L!==void 0?L:"")},j.renderOptions),{},{value:_!=null?_:"",onChange:function(t){return m(t.target.value)},disabled:T}))}},Password:{component:function($){var L,j=$.schema,_=$.value,T=$.disabled,v=$.readonly,m=$.onChange;return v?(0,p.jsx)("div",{children:_}):(0,p.jsx)(h.Z.Password,a()(a()({placeholder:"\u8BF7\u8F93\u5165".concat((L=j.title)!==null&&L!==void 0?L:"")},j.renderOptions),{},{value:_!=null?_:"",onChange:function(t){return m(t.target.value)},disabled:T}))}},Switch:{component:function($){var L=$.value,j=$.disabled,_=$.onChange;return(0,p.jsx)(P.Z,{checked:L,disabled:j,onChange:function(v){return _(v)}})}},Select:{component:function($){var L,j,_,T=$.schema,v=$.value,m=$.disabled,s=$.readonly,t=$.onChange,o=(L=(j=T.renderOptions)===null||j===void 0?void 0:j.options)!==null&&L!==void 0?L:[];if(s){var n=o.find(function(r){return r.value===v});return(0,p.jsx)("div",{children:n==null?void 0:n.label})}return(0,p.jsx)(z.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((_=T.title)!==null&&_!==void 0?_:"")},T.renderOptions),{},{value:v,onChange:function(l){return t(l)},disabled:m}))}},Radio:{component:function($){var L,j,_=$.schema,T=$.value,v=$.disabled,m=$.onChange,s=(L=(j=_.renderOptions)===null||j===void 0?void 0:j.options)!==null&&L!==void 0?L:[];return(0,p.jsx)(I.ZP.Group,{value:T,disabled:v,onChange:function(o){return m(o.target.value)},children:s.map(function(t){return(0,p.jsx)(I.ZP,{value:t.value,disabled:t.disabled,children:t.label},t.value)})})}}};c.default=U},40644:function(V,c,e){e.r(c);var R=e(5574),a=e.n(R),h=e(25035),A=e(52162),P=e(55241),z=e(47221),I=e(67294),p=e(85893),U=function($){var L=$.schema,j=$.path,_=$.objectStyle,T=(0,I.useState)(!1),v=a()(T,2),m=v[0],s=v[1],t=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{children:L.title}),!!L.titleDescription&&(0,p.jsx)(P.Z,{placement:"top",trigger:"hover",content:L.titleDescription,children:(0,p.jsx)(h.Z,{style:{marginLeft:4}})})]});return(0,p.jsx)(z.Z,{bordered:!1,ghost:!0,activeKey:String(m),onChange:function(){return s(!m)},children:(0,p.jsx)(z.Z.Panel,{header:t,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,p.jsx)("div",{style:_,children:(0,p.jsx)(A.Z,{schema:L,path:j})})},"false")})};c.default={formItem:U}},33517:function(V,c,e){e.r(c);var R=e(25035),a=e(52162),h=e(55241),A=e(85893),P={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},z=function(p){var U=p.schema,x=p.path,$=p.objectStyle;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:P,children:[(0,A.jsx)("span",{children:U.title}),!!U.titleDescription&&(0,A.jsx)(h.Z,{placement:"top",trigger:"hover",content:U.titleDescription,children:(0,A.jsx)(R.Z,{style:{marginLeft:4}})})]}),(0,A.jsx)("div",{style:$,children:(0,A.jsx)(a.Z,{schema:U,path:x})})]})};c.default={formItem:z}},47621:function(V,c,e){e.r(c),c.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}},37418:function(V,c,e){e.r(c),e.d(c,{default:function(){return z}});var R=e(67294),a=e(85893),h={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},A=function(p){var U=p.value,x=p.sPath,$=p.onChange,L=function(){var _=String(Math.random()).slice(2,6),T={bank_id:"id_".concat(_),bank_account:"111222333".concat(_),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(_),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(_,"\u652F\u884C")};$(T[x],{extra:T})};return(0,a.jsx)("div",{style:h,onClick:L,children:U?(0,a.jsx)("div",{children:U}):(0,a.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},P={component:A},z={BankSelect:P}},14953:function(V,c,e){e.r(c);var R=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],a={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:R,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:R}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:R}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:R}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};c.default=a},97609:function(V,c,e){e.r(c),e.d(c,{builtinRenderers:function(){return P}});var R=e(68400),a=e.n(R),h=e(77525),A,P=(0,h.H)(A||(A=a()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))},36641:function(V,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];c.default=R},77095:function(V,c,e){e.r(c),e.d(c,{default:function(){return h}});var R=e(27484),a=e.n(R);function h(){for(var A=[],P=0;P<10;P++){var z=String(Math.random()).slice(2,6),I=Math.random()>.5?1:2,p=a()().format("YYYY-MM-DD HH:mm:ss");A.push({key:Math.random(),supplier_name:"".concat(z,"\u6709\u9650\u516C\u53F8"),supplier_code:z,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:p,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:I===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:I===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:p})}return A}},35719:function(V,c,e){e.r(c);var R=e(67294),a=e(85893),h={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},A=function(z){var I=z.value,p=z.sPath,U=z.onChange,x=function(){var L=String(Math.random()).slice(2,6),j={bank_id:"id_".concat(L),bank_account:"111222333".concat(L),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(L),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(L,"\u652F\u884C")};U(j[p],{extra:j})};return(0,a.jsx)("div",{style:h,onClick:x,children:I?(0,a.jsx)("div",{children:I}):(0,a.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};c.default={component:A}},57864:function(V,c,e){e.r(c);var R=e(52162),a=e(85893),h=function(P){var z=P.schema,I=P.path,p=P.objectStyle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"section-title",children:z.title}),(0,a.jsx)("div",{style:p,children:(0,a.jsx)(R.Z,{schema:z,path:I})})]})};c.default={formItem:h}},9680:function(V,c,e){e.r(c);var R=e(85893),a=function(A){var P=A.schema;return(0,R.jsx)("div",{className:"section-title",children:P.title})};c.default={formItem:a}},24534:function(V,c,e){e.r(c);var R=[{title:"Supplier Name",dataIndex:"supplier_name",width:150,fixed:"left"},{title:"Supplier Code",dataIndex:"supplier_code",width:150},{title:"Description",dataIndex:"description",valueType:function(){return{type:"long-text-modal",maxLength:20}}},{title:"Bill No",dataIndex:"bill_no",width:130},{title:"Bill Type",dataIndex:"bill_type"},{title:"Bill Date",dataIndex:"bill_date",width:120},{title:"Bill Status",dataIndex:"bill_status"},{title:"Operator",dataIndex:"operator"},{title:"Goods Name",dataIndex:"goods_name",width:130},{title:"Goods Price",dataIndex:"goods_price"},{title:"Goods Code",dataIndex:"goods_code",width:130},{title:"Goods Category",dataIndex:"goods_category"},{title:"Goods Date",dataIndex:"goods_date",width:120,fixed:"right"}];c.default=R},23786:function(V,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];c.default=R},6271:function(V,c,e){e.r(c);var R=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(h,A){return{type:"long-text",maxLength:20,color:A%2?"#1677ff":"#000"}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(){return{type:"long-text-modal",maxLength:20,width:500}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];c.default=R},362:function(V,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];c.default=R},62244:function(V,c,e){e.r(c),e.d(c,{default:function(){return h}});var R=e(27484),a=e.n(R);function h(){for(var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,P=[],z=0;z<A;z++){var I=String(Math.random()).slice(2,6),p=Math.random()>.5?1:2,U=a()().format("DD/MM/YYYY HH:mm:ss"),x="id_".concat(z);P.push({key:x,id:x,supplier_name:"".concat(I," Co.,Ltd."),supplier_code:I,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"Purchase Order":"Return Order",bill_date:U,bill_status:Math.random()>.5?"Submitted":"To be submitted",operator:Math.random()>.5?"Tom":"Lily",goods_name:p===1?"10 red roses":"Live bass",goods_code:"G".concat(Date.now()),goods_category:p===1?"Fruits & Flowers":"Aquatic Products",goods_date:U,goods_price:p===1?19.9:22.8,description:"SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems."})}return P}},27164:function(V,c,e){e.r(c),e.d(c,{default:function(){return a}});function R(h,A){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,z=Math.random()*(A-h)+h;return P?Math.floor(z):z}function a(){for(var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,A=[],P=0;P<h;P++){var z="id_".concat(P);A.push({key:z,id:z,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:R(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?R(1e3,1e5):R(0,1e3),percent:R(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:R(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return A}},92114:function(V,c,e){e.r(c),e.d(c,{default:function(){return h}});var R=e(27484),a=e.n(R);function h(){for(var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,P=arguments.length>1?arguments[1]:void 0,z=[],I=0;I<A;I++){var p=String(Math.random()).slice(2,6),U=Math.random()>.5?1:2,x=a()().format("YYYY-MM-DD HH:mm:ss"),$="id_".concat(I);z.push({key:$,id:$,supplier_name:"".concat(p,"\u6709\u9650\u516C\u53F8"),supplier_code:p,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:x,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:U===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:U===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:x,goods_price:U===1?19.9:22.8})}return P&&z.sort(function(L,j){var _=String(L[P.sort_field]),T=String(j[P.sort_field]);return P.sort_order==="ascend"?_.localeCompare(T):T.localeCompare(_)}),z}},34200:function(V,c,e){e.r(c);var R={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_type:{title:"Bill Type",renderType:"Select",renderOptions:{options:[{label:"Purchase Order",value:1},{label:"Inbound Order",value:2},{label:"Return Order",value:3}]}},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"},goods_category:{title:"Goods Category",renderType:"Select",renderOptions:{options:[{label:"Fruits & Flowers",value:1},{label:"Aquatic Products",value:2},{label:"Grains & Oils & Seasoning",value:3}]}}}};c.default=R},68666:function(V,c,e){e.r(c);var R={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};c.default=R},77525:function(V,c,e){e.d(c,{H:function(){return h}});var R=e(80834),a=(0,R.Z)({key:"schema-render"}),h=a.css},38959:function(V,c,e){e.r(c),e.d(c,{sleep:function(){return R}});function R(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(h){return setTimeout(h,a)})}},57558:function(V,c,e){var R=e(67294),a=(0,R.createContext)({});c.Z=a},57547:function(V,c,e){e.d(c,{Z:function(){return v}});var R=e(12444),a=e.n(R),h=e(72004),A=e.n(h),P=e(25098),z=e.n(P),I=e(31996),p=e.n(I),U=e(26037),x=e.n(U),$=e(9783),L=e.n($),j=e(67294),_=e(28e3),T=e(85893),v=function(m){p()(t,m);var s=x()(t);function t(){var o;a()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return o=s.call.apply(s,[this].concat(r)),L()(z()(o),"state",{hasError:!1,error:Error()}),o}return A()(t,[{key:"getFallback",value:function(){var n,r=this.state.error,l=this.props.catchErrorTips;return l==="silent"?null:(0,_.mf)(l)?l(r):(0,T.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(n=r==null?void 0:r.stack)!==null&&n!==void 0?n:String(r)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0,error:n}}}]),t}(j.Component)},95399:function(V,c,e){e.d(c,{SY:function(){return h},f1:function(){return a},r6:function(){return R}});var R=function(A){return A.success="success",A.warning="warning",A.error="error",A}({}),a=[R.success,R.warning,R.error],h=function(A){return A.normal="normal",A.autoFill="autoFill",A.autoFit="autoFit",A}({})},16223:function(V,c,e){var R=e(67294),a=e(38812),h=function(P,z){var I=(0,a.Z)(P);(0,R.useEffect)(function(){I.current()},z)};c.Z=h},56432:function(V,c,e){var R=e(67294),a=e(23060),h=e(38812),A=e(37091);function P(z,I){var p,U=(0,h.Z)(z),x=(p=I==null?void 0:I.wait)!==null&&p!==void 0?p:1e3,$=(0,R.useMemo)(function(){return(0,a.Ds)(function(){return U.current.apply(U,arguments)},x)},[]);return(0,A.Z)(function(){return $.cancel()}),{run:$,cancel:$.cancel}}c.Z=P},4559:function(V,c,e){e.d(c,{Z:function(){return A}});var R=e(5574),a=e.n(R),h=e(67294);function A(){var P=(0,h.useReducer)(function(U){return U+1},0),z=a()(P,2),I=z[0],p=z[1];return{forceUpdate:p}}},38812:function(V,c,e){var R=e(67294);function a(h){var A=(0,R.useRef)(h);return A.current=h,A}c.Z=a},24317:function(V,c,e){e.d(c,{Z:function(){return a}});var R=e(67294);function a(h){var A=(0,R.useRef)(h),P=(0,R.useRef)();return A.current=(0,R.useMemo)(function(){return h},[h]),P.current||(P.current=function(){for(var z=arguments.length,I=new Array(z),p=0;p<z;p++)I[p]=arguments[p];return A.current.apply(this,I)}),P.current}},85908:function(V,c,e){var R=e(67294),a=function(A){(0,R.useEffect)(function(){return A()},[])};c.Z=a},90808:function(V,c,e){e.d(c,{Z:function(){return h}});var R=e(67294),a=e(57558);function h(){var A=(0,R.useContext)(a.Z);return A}},37091:function(V,c,e){var R=e(67294),a=e(38812),h=function(P){var z=(0,a.Z)(P);(0,R.useEffect)(function(){return function(){z.current()}},[])};c.Z=h},74072:function(V,c,e){e.r(c),e.d(c,{RendererDistributor:function(){return E.Z},RendererExecutor:function(){return K.Z},RendererIterator:function(){return d.Z},default:function(){return W},useAsyncEffect:function(){return O.Z},useCoreValue:function(){return _},useDebounceFn:function(){return S.Z},useForceUpdate:function(){return x.Z},useLatest:function(){return D.Z},useMemoizedFn:function(){return $.Z},useMounted:function(){return b.Z},useUnmount:function(){return M.Z},utils:function(){return R}});var R={};e.r(R),e.d(R,{classNames:function(){return g.Z},classNamesWithPrefix:function(){return z.Rk},cloneDeep:function(){return U.Xh},debounce:function(){return U.Ds},dropRight:function(){return U.j7},find:function(){return U.sE},get:function(){return U.U2},hasOwnProperty:function(){return z.nr},isArray:function(){return I.kJ},isBoolean:function(){return I.jn},isFunction:function(){return I.mf},isMatch:function(){return U.BD},isNil:function(){return I.kK},isNull:function(){return I.Ft},isNumber:function(){return I.hj},isObject:function(){return I.Kn},isPlainObject:function(){return I.PO},isString:function(){return I.HD},isUndefined:function(){return I.o8},logger:function(){return N.Z},mapKeys:function(){return U.Cw},omit:function(){return U.CE},pick:function(){return U.ei},positionedOffset:function(){return s},set:function(){return U.t8},templateCompiled:function(){return z.dr},toLower:function(){return U.t$},traverseSchema:function(){return H.Z},typeChecking:function(){return I.DN}});var a=e(97857),h=e.n(a),A=e(67294),P=e(57547),z=e(52038),I=e(28e3),p=e(49552),U=e(23060),x=e(4559),$=e(24317),L=function(){var Z=(0,A.useRef)(!1);return(0,A.useEffect)(function(){return Z.current=!1,function(){Z.current=!0}},[]),Z},j=L;function _(F){var Z,J=(0,A.useRef)((Z=F.defaultValue)!==null&&Z!==void 0?Z:{}),Y=j(),q=(0,x.Z)(),w=q.forceUpdate,ae=(0,z.nr)(F,"value");if(ae){var pe;J.current=(pe=F.value)!==null&&pe!==void 0?pe:{}}var le=(0,$.Z)(function(Oe,Le){if(!Y.current){var $e,Ye,Ke,Ve=(0,p.P)(Le.path),Xe=h()(h()({},Le),{},{sPath:Ve}),Qe=($e=F.watch)===null||$e===void 0?void 0:$e[Ve];(0,I.mf)(Qe)&&Qe(Oe,Xe),J.current=Oe,ae||w(),(Ye=F.onItemChange)===null||Ye===void 0||Ye.call(F,Xe),(Ke=F.onChange)===null||Ke===void 0||Ke.call(F,Oe,Xe)}}),ue=(0,$.Z)(function(Oe){var Le=(0,U.t8)(h()({},J.current),Oe.path,Oe.value);le(Le,Oe)}),Pe=(0,$.Z)(function(){return J.current}),de=(0,$.Z)(function(Oe){le(Oe,{path:[],value:void 0})}),xe=(0,$.Z)(function(){de({})});return{value:J.current,valueRef:J,onChange:ue,getValue:Pe,setValue:de,resetValue:xe}}var T=e(95399),v=["320px","1fr"];function m(F){var Z=F.layout,J=F.layoutMinMax,Y=F.layoutColumnGap,q=F.layoutRowGap,w=J==null?void 0:J[0],ae=J==null?void 0:J[1],pe=(0,A.useMemo)(function(){if(Z===T.SY.normal)return"repeat(24, 1fr)";var ue=Z===T.SY.autoFill?"auto-fill":"auto-fit",Pe=(0,p.e)(w!=null?w:v[0]),de=(0,p.e)(ae!=null?ae:v[1]);return"repeat(".concat(ue,", minmax(").concat(Pe,", ").concat(de,"))")},[Z,w,ae]),le={display:"grid",gridTemplateColumns:pe,columnGap:Y,rowGap:q};return le}function s(F,Z){if(!F||!Z)return{left:0,top:0};for(var J=0,Y=0,q=F;q&&q!==Z;)J+=q.offsetLeft,Y+=q.offsetTop,q=q.offsetParent;return{left:J,top:Y}}var t=e(36578);function o(F,Z){var J=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(F){var Y=J.positionedElement,q=J.xAxis,w=J.yAxis,ae=J.behavior,pe=ae===void 0?"smooth":ae,le=J.gap,ue=le===void 0?0:le,Pe=Y||Z;if(Pe){var de=s(F,Pe);Pe.scrollTo({left:q===!1?void 0:de.left+ue,top:w===!1?void 0:de.top+ue,behavior:pe})}}}function n(F){var Z=F.ref,J=F.rootElementRef,Y=F.rootContextRef,q=F.getValue,w=F.setValue,ae=F.resetValue,pe=(0,$.Z)(function(){return(0,t.Ze)((0,U.ei)(Y.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),le=(0,$.Z)(function(xe){var Oe,Le=(Oe=Y.current)===null||Oe===void 0?void 0:Oe.rendererStorage;if(Le&&xe){var $e=(0,I.kJ)(xe)?(0,p.P)(xe):xe;return Le[$e]}}),ue=(0,$.Z)(function(xe){var Oe,Le=(Oe=Y.current)===null||Oe===void 0?void 0:Oe.rendererStorage;if(Le){var $e=xe?(0,I.HD)(xe)?[xe]:xe:Object.keys(Le);$e.forEach(function(Ye){var Ke;(Ke=Le[Ye])===null||Ke===void 0||Ke.setValidatorState({status:T.r6.success})})}}),Pe=(0,$.Z)(function(){return J.current}),de=(0,$.Z)(function(xe,Oe){var Le;return o((Le=le(xe))===null||Le===void 0?void 0:Le.getRootElement(),Pe(),Oe)});(0,A.useImperativeHandle)(Z,function(){return{validate:pe,resetError:ue,setValue:w,resetValue:ae,getValue:q,getRootElement:Pe,scrollTo:de,findItem:le}},[])}var r=e(39214),l=e(57558),d=e(52162),u=e(97192),g=e(18474),f=e(85893),B={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:v,disabled:!1,readonly:!1,validators:{},userCtx:{}},y=(0,A.forwardRef)(function(F,Z){u.Z.falsy(F.schema,"missing schema."),u.Z.falsy(F.itemLayout,"missing itemLayout.");var J=h()(h()({},B),F),Y=(0,A.useRef)(null),q=(0,A.useRef)({}),w=_(J),ae=w.value,pe=w.onChange,le=w.getValue,ue=w.setValue,Pe=w.resetValue,de=(0,A.useMemo)(function(){return h()(h()({},r.Z),J.locale)},[J.locale]),xe=(0,A.useMemo)(function(){return(0,U.Cw)(J.renderers,function($e,Ye){return Ye.toLowerCase()})},[J.renderers]),Oe=m(J),Le=q.current=h()(h()({},(0,U.ei)(J,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:Oe,renderers:xe,rootSchema:J.schema,rootValue:ae,locale:de,rendererStorage:{},onChange:pe,prefixClassNames:function(){for(var Ye=arguments.length,Ke=new Array(Ye),Ve=0;Ve<Ye;Ve++)Ke[Ve]=arguments[Ve];return z.Rk.apply(void 0,[J.prefixCls].concat(Ke))}});return n({ref:Z,rootElementRef:Y,rootContextRef:q,getValue:le,setValue:ue,resetValue:Pe}),(0,f.jsx)(l.Z.Provider,{value:Le,children:(0,f.jsx)("div",{className:(0,g.Z)(Le.prefixCls,J.className,{"is-disabled":Le.disabled,"is-readonly":Le.readonly}),ref:Y,style:h()(h()({position:"relative"},Oe),J.style),children:(0,f.jsx)(d.Z,{schema:Le.rootSchema,path:[]})})})}),i=(0,A.forwardRef)(function(F,Z){return(0,f.jsx)(P.Z,{catchErrorTips:F.catchErrorTips,children:(0,f.jsx)(y,h()(h()({},F),{},{ref:Z}))})}),C=i,O=e(16223),S=e(56432),D=e(38812),b=e(85908),M=e(37091),E=e(82535),K=e(94963),N=e(93047),H=e(44081),W=C},78484:function(V,c,e){e.r(c),c.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}},39214:function(V,c){c.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},82535:function(V,c,e){var R=e(97857),a=e.n(R),h=e(90808),A=e(97192),P=e(8465),z=e(94963),I=e(85893),p=function(x){var $=(0,h.Z)(),L=x.schema;A.Z.falsy(L,"schema is required in RendererDistributor Props.");var j=(0,P.j)($.renderers,L.renderType);return j?(0,I.jsx)(z.Z,a()(a()({},x),{},{renderer:j})):null};c.Z=p},94963:function(V,c,e){var R=e(15009),a=e.n(R),h=e(97857),A=e.n(h),P=e(99289),z=e.n(P),I=e(5574),p=e.n(I),U=e(67294),x=e(57547),$=e(95399),L=e(56432),j=e(24317),_=e(90808),T=e(18474),v=e(49552),m=e(23060),s=e(36578),t=e(85893),o=function(r){var l=r.schema,d=r.path,u=r.renderer,g=r.gridColumn,f=(0,_.Z)(),B=(0,U.useState)({status:$.r6.success}),y=p()(B,2),i=y[0],C=y[1],O=(0,v.P)(d),S=(0,U.useRef)(null);f.rendererStorage[O]=(0,U.useMemo)(function(){return{setValidatorState:function(F){return C(F)},getRootElement:function(){return S.current}}},[C]);var D=(0,L.Z)(function(){var W=z()(a()().mark(function F(Z){var J;return a()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,(0,s.Q7)({schema:l,rootValue:f.rootValue,userCtx:f.userCtx,path:d,value:Z,locale:f.locale,globalValidators:f.validators,rendererValidator:u.validator,rendererValidatorParams:E});case 2:J=q.sent,C(A()({},J));case 4:case"end":return q.stop()}},F)}));return function(F){return W.apply(this,arguments)}}(),{wait:300}),b=D.run,M=(0,j.Z)(function(){var W=z()(a()().mark(function F(Z){var J,Y=arguments;return a()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:J=Y.length>1&&Y[1]!==void 0?Y[1]:{},f.onChange({path:d,value:Z,extra:J.extra}),J.triggerValidator!==!1?b(Z):C({status:$.r6.success});case 3:case"end":return w.stop()}},F)}));return function(F){return W.apply(this,arguments)}}()),E=(0,s.cy)(A()({schema:l,path:d,value:(0,m.U2)(f.rootValue,d)},(0,m.ei)(f,"disabled","readonly","rootValue","userCtx","locale"))),K=A()(A()({},E),{},{validator:i,objectStyle:f.objectStyle,onChange:M}),N=K,H=function(){var F=A()(A()({},(0,m.ei)(K,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:f.prefixClassNames});if(K.readonly){if(u.readonlyFormItem)return(0,U.createElement)(u.readonlyFormItem,N);if(u.readonlyComponent)return(0,U.createElement)(f.itemLayout,A()(A()({},F),{},{body:(0,U.createElement)(u.readonlyComponent,K)}))}if(K.disabled){if(u.disabledFormItem)return(0,U.createElement)(u.disabledFormItem,N);if(u.disabledComponent)return(0,U.createElement)(f.itemLayout,A()(A()({},F),{},{body:(0,U.createElement)(u.disabledComponent,K)}))}if(u.formItem)return(0,U.createElement)(u.formItem,N);if(u.component)return(0,U.createElement)(f.itemLayout,A()(A()({},F),{},{body:(0,U.createElement)(u.component,K)}))};return(0,t.jsx)("div",{ref:S,className:(0,T.Z)(f.prefixClassNames("form-item","item-".concat(l.renderType)),l.className,{"is-required":K.required,"is-disabled":K.disabled,"is-readonly":K.readonly}),style:A()({gridColumn:g},l.style),children:(0,t.jsx)(x.Z,{catchErrorTips:f.catchErrorTips,children:H()})})};c.Z=o},52162:function(V,c,e){var R=e(97857),a=e.n(R),h=e(19632),A=e.n(h),P=e(67294),z=e(95399),I=e(90808),p=e(28e3),U=e(49552),x=e(27597),$=e(23060),L=e(82535),j=e(85893),_=function(v){var m=v.schema,s=v.path,t=(0,I.Z)(),o=t.rootValue,n=t.userCtx,r=s.length?(0,$.U2)(o,s):o,l=1,d=Object.keys(m.properties).map(function(u){var g=m.properties[u],f=(0,x.A)({statement:g.hidden,parentValue:r,rootValue:o,userCtx:n});if(f)return null;var B=[].concat(A()(s),[u]),y=(0,U.P)(B),i;if(t.layout===z.SY.normal){var C=l,O=25;!(0,p.hj)(g.span)&&!(0,p.hj)(g.spanStart)?C=l=1:(g.spanStart&&(C=g.spanStart,l=C),g.span&&(O=C+g.span,l=O)),i="".concat(C,"/").concat(O)}else(0,p.hj)(g.spanStart)&&(i="".concat(g.spanStart,"/auto"));var S={schema:g,path:B,gridColumn:i};return(0,j.jsx)(L.Z,a()({},S),y)});return(0,j.jsx)(P.Fragment,{children:d})};c.Z=_},97192:function(V,c){function e(h,A){h&&a(A)}function R(h,A){!h&&a(A)}function a(h){throw new Error("[AssertionError]: ".concat(h!=null?h:"Failed"))}c.Z={truthy:e,falsy:R,fail:a}},52038:function(V,c,e){e.d(c,{RI:function(){return P},Rk:function(){return I},dr:function(){return z},nr:function(){return p}});var R=e(28e3),a=e(18474),h=e(93047);function A(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function P(x){if(!(0,R.HD)(x))return null;try{return new RegExp(x)}catch($){h.Z.warn($)}return null}function z(x){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return x?x.replace(/\$\{((\s|.)+?)?\}/g,function(){var L,j=(L=arguments.length<=1?void 0:arguments[1])===null||L===void 0?void 0:L.trim();if(!j)return"";var _=$[j];return _!=null?_:""}):""}function I(x){for(var $=arguments.length,L=new Array($>1?$-1:0),j=1;j<$;j++)L[j-1]=arguments[j];if(!L.length)return"";var _=a.Z.apply(void 0,L).trim();if(!_)return"";var T=_.split(" ").map(function(v){return"".concat(x,"-").concat(v)});return T.join(" ")}function p(x,$){return Object.prototype.hasOwnProperty.call(x,$)}function U(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function($){return setTimeout($,x)})}},28e3:function(V,c,e){e.d(c,{DN:function(){return P},Ft:function(){return _},HD:function(){return x},Kn:function(){return p},PO:function(){return U},hj:function(){return $},jn:function(){return L},kJ:function(){return I},kK:function(){return T},mf:function(){return z},o8:function(){return j}});var R=e(52677),a=e.n(R),h=Function.prototype.toString,A=h.call(Object);function P(v,m){return Object.prototype.toString.call(v)===m}function z(v){return P(v,"[object Function]")||P(v,"[object AsyncFunction]")}function I(v){return Array.isArray(v)}function p(v){var m=a()(v);return v!==null&&(m==="object"||m==="function")}function U(v){if(!P(v,"[object Object]"))return!1;var m=Object.getPrototypeOf(v);if(m===null)return!0;var s=Object.hasOwnProperty.call(m,"constructor")&&m.constructor;return typeof s=="function"&&s instanceof s&&h.call(s)===A}function x(v){return typeof v=="string"}function $(v){return typeof v=="number"}function L(v){return typeof v=="boolean"}function j(v){return v===void 0}function _(v){return v===null}function T(v){return j(v)||_(v)}},18474:function(V,c,e){var R=e(52677),a=e.n(R),h={}.hasOwnProperty;function A(){for(var P=[],z=0;z<arguments.length;z++){var I=arguments[z];if(I){var p=a()(I);if(p==="string"||p==="number")P.push(I);else if(Array.isArray(I)){if(I.length){var U=A.apply(null,I);U&&P.push(U)}}else if(p==="object"){if(I.toString!==Object.prototype.toString&&!I.toString.toString().includes("[native code]")){P.push(I.toString());continue}for(var x in I)h.call(I,x)&&I[x]&&P.push(x)}}}return P.join(" ")}c.Z=A},93047:function(V,c){var e={warn:function(){var a;(a=console).warn.apply(a,arguments)}};c.Z=e},49552:function(V,c,e){e.d(c,{P:function(){return a},e:function(){return h}});var R=e(28e3);function a(A){return A.join(".")}function h(A){return(0,R.hj)(A)?"".concat(String(A),"px"):A}},8465:function(V,c,e){e.d(c,{j:function(){return R}});function R(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1?arguments[1]:void 0;if(h){var A=a[h.toLowerCase()];if(A&&(A.formItem||A.component))return A}}},27597:function(V,c,e){e.d(c,{A:function(){return A},o:function(){return P}});var R=e(23060),a=e(28e3),h=e(93047);function A(z){var I=z.statement,p=z.parentValue,U=p===void 0?{}:p,x=z.rootValue,$=x===void 0?{}:x,L=z.userCtx,j=L===void 0?{}:L;if((0,a.jn)(I))return I;if((0,a.HD)(I))try{var _=new Function("$","$root","$userCtx","return ".concat(I));return!!_(U,$,j)}catch(T){h.Z.warn(T)}return!1}function P(z){var I=z.statement,p=z.path,U=z.rootValue,x=z.userCtx,$=(0,R.j7)(p);return A({statement:I,parentValue:$.length?(0,R.U2)(U,$):U,rootValue:U,userCtx:x})}},23060:function(V,c,e){e.d(c,{BD:function(){return _},CE:function(){return $},Cw:function(){return U},Ds:function(){return t},U2:function(){return T},Xh:function(){return p},ei:function(){return x},j7:function(){return L},sE:function(){return j},t$:function(){return o},t8:function(){return s}});var R=e(97857),a=e.n(R),h=e(52677),A=e.n(h),P=e(97192),z=e(52038),I=e(28e3);function p(n){var r,l,d;if(Array.isArray(n)){for(l=Array(r=n.length);r--;)l[r]=(d=n[r])&&A()(d)==="object"?p(d):d;return l}if(Object.prototype.toString.call(n)==="[object Object]"){l={};var u=n;for(r in u)r==="__proto__"?Object.defineProperty(l,r,{value:p(u[r]),configurable:!0,enumerable:!0,writable:!0}):l[r]=(d=u[r])&&A()(d)==="object"?p(d):d;return l}return n}function U(n,r){if(!(0,I.PO)(n)||!(0,I.mf)(r))return{};var l=Object.keys(n),d={};return l.map(function(u){var g=n[u],f=r(g,u);d[f]=g}),d}function x(n){var r={};if(!(0,I.PO)(n))return r;for(var l=arguments.length,d=new Array(l>1?l-1:0),u=1;u<l;u++)d[u-1]=arguments[u];return d.map(function(g){(0,z.nr)(n,g)&&(r[g]=n[g])}),r}function $(n){if(!(0,I.PO)(n))return{};for(var r=a()({},n),l=arguments.length,d=new Array(l>1?l-1:0),u=1;u<l;u++)d[u-1]=arguments[u];return d.map(function(g){(0,z.nr)(n,g)&&delete r[g]}),r}function L(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,I.kJ)(n)?n.slice(0,r>0?r*-1:n.length):[]}function j(n,r){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,I.kJ)(n))for(var d=n.length,u=l;u<d;u++){var g=n[u];if((0,I.mf)(r)){if(r(g))return g}else if((0,I.PO)(r)&&_(g,r))return g}}function _(n,r){if(!(0,I.PO)(n))return!0;for(var l=Object.keys(r),d=0;d<l.length;d++){var u=l[d];if(!(0,z.nr)(n,u)||r[u]!==n[u])return!1}return!0}function T(n,r){if(!(!(0,I.PO)(n)||!(0,I.kJ)(r))){for(var l=n,d=0;d<r.length;d++){var u=r[d];if(l)l=l[u];else return}return l}}var v=/^(?:0|[1-9]\d*)$/;function m(n){return(0,I.hj)(n)||v.test(n)}function s(n,r,l){if(!(0,I.PO)(n))return n;for(var d=r.length,u=d-1,g=-1,f=n;f!==null&&++g<d;){var B=r[g],y=l;if(g!==u){var i=f[B];y=(0,I.Kn)(i)?i:m(r[g+1])?[]:{}}f[B]=y,f=f[B]}return n}function t(n,r){(0,I.mf)(n)||P.Z.fail("Expected a function");var l;function d(){for(var u=this,g=arguments.length,f=new Array(g),B=0;B<g;B++)f[B]=arguments[B];clearTimeout(l),l=setTimeout(function(){return n.apply(u,f)},r)}return d.cancel=function(){clearTimeout(l)},d}function o(n){return(0,I.HD)(n)?n.toLowerCase():""}},44081:function(V,c,e){e.d(c,{Z:function(){return U}});var R=e(19632),a=e.n(R),h=e(97857),A=e.n(h),P=e(52677),z=e.n(P),I=e(23060);function p(x){var $=x.properties;return!$||z()($)!=="object"||Array.isArray($)}function U(x,$,L){var j=A()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},L),_=j.clone?(0,I.Xh)(x):x;$=(0,I.Cw)($,function(v,m){return m.toLowerCase()});var T=function v(m){var s=m.schema,t=m.path,o=m.state,n=m.store;p(s)||Object.keys(s.properties).forEach(function(r){var l,d,u,g,f,B,y,i,C,O=s.properties[r],S=[].concat(a()(t),[r]),D=(0,I.Xh)(o),b={schema:O,parentSchema:s,path:S,field:r,state:D,store:n},M=function(J){v(A()(A()({schema:O,path:S,state:D},J),{},{store:n}))},E=(l=$.$$)!==null&&l!==void 0?l:{},K=(d=$.$$object)!==null&&d!==void 0?d:{};(u=E.enter)===null||u===void 0||u.call(E,A()(A()({},b),{},{traverse:M}));var N=(g=O[j.mapKey])!==null&&g!==void 0?g:"";N=j.ignoreCase?(0,I.t$)(N):N;var H=(0,I.t$)(N).startsWith("object");if(H){var W;(W=K.enter)===null||W===void 0||W.call(K,A()(A()({},b),{},{traverse:M}))}var F=(f=$[N])!==null&&f!==void 0?f:{};(B=F.enter)===null||B===void 0||B.call(F,A()(A()({},b),{},{traverse:M})),(y=E.exit)===null||y===void 0||y.call(E,b),H&&((i=K.exit)===null||i===void 0||i.call(K,b)),(C=F.exit)===null||C===void 0||C.call(F,b)})};return T({schema:_,path:[],state:j.initialState,store:j.initialStore}),_}},36578:function(V,c,e){e.d(c,{cy:function(){return D},Q7:function(){return i},Ze:function(){return B}});var R=e(97857),a=e.n(R),h=e(15009),A=e.n(h),P=e(19632),z=e.n(P),I=e(99289),p=e.n(I),U=e(95399),x=e(23060),$=e(52038),L=e(28e3),j=e(49552),_=e(8465),T=e(12444),v=e.n(T),m=e(72004),s=e.n(m),t=e(9783),o=e.n(t),n=function(){function b(M){v()(this,b),o()(this,"value",void 0),o()(this,"rules",void 0),o()(this,"locale",void 0),o()(this,"globalValidators",void 0),o()(this,"globalValidatorParams",void 0),Object.assign(this,M)}return s()(b,[{key:"setValue",value:function(E){this.value=E}},{key:"validate",value:function(){var M=p()(A()().mark(function K(){return A()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,this.validateRules(this.rules);case 2:return H.abrupt("return",H.sent);case 3:case"end":return H.stop()}},K,this)}));function E(){return M.apply(this,arguments)}return E}()},{key:"validateRules",value:function(){var M=p()(A()().mark(function K(N){var H,W,F,Z;return A()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:Y.prev=0,H=d(N),W=0,F=H;case 3:if(!(W<F.length)){Y.next=12;break}if(Z=F[W],!(0,L.PO)(Z)){Y.next=9;break}return this.validateRuleItem(Z),Y.next=9,this.validateGlobal(Z);case 9:W++,Y.next=3;break;case 12:Y.next=19;break;case 14:if(Y.prev=14,Y.t0=Y.catch(0),!b.isValidationError(Y.t0)){Y.next=18;break}return Y.abrupt("return",(0,x.ei)(Y.t0,"status","message","extra"));case 18:return Y.abrupt("return",{status:U.r6.error,message:Y.t0!==null&&Y.t0!==void 0&&Y.t0.message?Y.t0.message:"CatchError"});case 19:return Y.abrupt("return",{status:U.r6.success});case 20:case"end":return Y.stop()}},K,this,[[0,14]])}));function E(K){return M.apply(this,arguments)}return E}()},{key:"validateRuleItem",value:function(E){var K=(0,L.jn)(E.required)?E.required:void 0,N=(0,L.hj)(E.len)?E.len:void 0,H=(0,L.hj)(E.min)?E.min:void 0,W=(0,L.hj)(E.max)?E.max:void 0,F=b.fail,Z=this.value,J=this.locale;if(K&&[void 0,null].includes(Z)&&b.fail(E.message),(E.type==="string"&&!(0,L.HD)(Z)||E.type==="number"&&!(0,L.hj)(Z)||E.type==="boolean"&&!(0,L.jn)(Z)||E.type==="object"&&!(0,L.PO)(Z)||E.type==="array"&&!(0,L.kJ)(Z))&&F((0,$.dr)(J.typeError,{type:E.type})),(0,L.HD)(Z)){var Y=(0,$.RI)(E.pattern);(K&&Z===""||N&&Z.length!==N||H&&Z.length<H||W&&Z.length>W||Y&&!Y.test(Z))&&F(E.message)}(0,L.hj)(Z)&&(N&&Z!==N||H&&Z<H||W&&Z>W)&&F(E.message),(0,L.kJ)(Z)&&(K&&Z.length===0||N&&Z.length!==N||H&&Z.length<H||W&&Z.length>W)&&F(E.message)}},{key:"validateGlobal",value:function(){var M=p()(A()().mark(function K(N){var H,W,F,Z,J,Y,q,w,ae;return A()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(H=N.validator,W=this.globalValidators,F=this.globalValidatorParams,!(!H||!W||!F)){le.next=4;break}return le.abrupt("return");case 4:if(Z=W[H],J=function(Pe){Pe.status!==U.r6.success&&b.fail(Pe)},!l(Z)){le.next=11;break}return le.next=9,this.validateRules(Z.filter(function(ue){return!ue.validator}));case 9:Y=le.sent,J(Y);case 11:if(!(0,L.mf)(Z)){le.next=21;break}return le.next=14,Z(a()(a()({},F),{},{value:this.value}));case 14:if(q=le.sent,!l(q)){le.next=20;break}return le.next=18,this.validateRules(q.filter(function(ue){return!ue.validator}));case 18:w=le.sent,J(w);case 20:r(q)&&J({status:q.status,message:(ae=N.message)!==null&&ae!==void 0?ae:q.message,extra:q.extra});case 21:case"end":return le.stop()}},K,this)}));function E(K){return M.apply(this,arguments)}return E}()}],[{key:"isValidationError",value:function(E){return(0,L.PO)(E)&&(0,$.nr)(E,b.failUK)}},{key:"fail",value:function(E){var K=o()({},b.failUK,!0);throw(0,L.HD)(E)?K.message=E:(0,L.PO)(E)&&Object.assign(K,(0,x.ei)(E,"status","message","extra")),K.status||(K.status=U.r6.error),K}}]),b}();o()(n,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function r(b){return U.f1.includes(b==null?void 0:b.status)}function l(b){return(0,L.kJ)(b)&&!!b.length}function d(b){var M=[];return(0,L.PO)(b)?M.push(b):(0,L.kJ)(b)&&M.push.apply(M,z()(b)),M}function u(b){var M=new n(b);return M.validate()}var g=e(27597),f=e(44081);function B(b){return y.apply(this,arguments)}function y(){return y=p()(A()().mark(function b(M){var E,K,N,H,W,F,Z,J,Y,q,w,ae,pe;return A()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return E=M.rootSchema,K=M.rootValue,N=M.disabled,H=M.readonly,W=M.locale,F=M.renderers,Z=M.rendererStorage,J=M.validators,Y=M.userCtx,q=[],(0,f.Z)(E,{$$:{enter:function(de){var xe=de.schema,Oe=de.path,Le=(0,g.o)({statement:xe.hidden,rootValue:K,path:Oe,userCtx:Y});if(!Le){var $e=(0,_.j)(F,xe.renderType);if($e){var Ye=function(){var Ke=p()(A()().mark(function Ve(){var Xe,Qe,an,sn,on,we;return A()().wrap(function(ke){for(;;)switch(ke.prev=ke.next){case 0:return Xe=(0,x.U2)(K,Oe),Qe=D({schema:xe,value:Xe,path:Oe,disabled:N,readonly:H,rootValue:K,locale:W,userCtx:Y}),ke.prev=2,ke.next=5,i({schema:xe,rootValue:K,userCtx:Y,path:Oe,locale:W,value:Xe,globalValidators:J,rendererValidator:$e.validator,rendererValidatorParams:Qe});case 5:if(an=ke.sent,sn=an.status,on=an.message,we=an.extra,sn===U.r6.success){ke.next=11;break}return ke.abrupt("return",{path:Oe,value:Xe,status:sn,message:on,extra:we});case 11:ke.next=16;break;case 13:return ke.prev=13,ke.t0=ke.catch(2),ke.abrupt("return",{path:Oe,value:Xe,status:U.r6.error,message:"[CatchError]: ".concat(ke.t0===null||ke.t0===void 0?void 0:ke.t0.message)});case 16:case"end":return ke.stop()}},Ve,null,[[2,13]])}));return function(){return Ke.apply(this,arguments)}}();q.push(Ye())}}}},$$Object:{enter:function(de){var xe=de.traverse;xe()}}},{clone:!1}),w=[],ae=[],ue.next=7,Promise.all(q).then(function(Pe){return Pe.filter(function(de){return(de==null?void 0:de.status)===U.r6.error?w.push(de):(de==null?void 0:de.status)===U.r6.warning&&ae.push(de),!!de})});case 7:return pe=ue.sent,pe.forEach(function(Pe){var de=Pe.status,xe=Pe.path,Oe=Pe.message,Le=Pe.extra,$e=Z[(0,j.P)(xe)];$e==null||$e.setValidatorState({status:de,message:Oe,extra:Le})}),ue.abrupt("return",{hasError:!!w.length,hasWarning:!!ae.length,errorList:w,warningList:ae});case 10:case"end":return ue.stop()}},b)})),y.apply(this,arguments)}function i(b){return C.apply(this,arguments)}function C(){return C=p()(A()().mark(function b(M){var E,K,N,H,W,F,Z,J,Y,q,w,ae,pe,le,ue;return A()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:if(E=M.schema,K=M.rootValue,N=M.userCtx,H=M.path,W=M.locale,F=M.value,Z=M.globalValidators,J=M.rendererValidator,Y=M.rendererValidatorParams,q=O({schema:E,rootValue:K,path:H,locale:W,userCtx:N}),w={value:F,globalValidators:Z,globalValidatorParams:Y,locale:W.validation},!l(q)){de.next=9;break}return de.next=6,u(a()(a()({},w),{},{rules:q}));case 6:if(ae=de.sent,ae.status===U.r6.success){de.next=9;break}return de.abrupt("return",ae);case 9:if(!l(J)){de.next=14;break}return de.next=12,u(a()(a()({},w),{},{rules:J}));case 12:return pe=de.sent,de.abrupt("return",pe);case 14:if(!(0,L.mf)(J)){de.next=25;break}return de.next=17,J(a()(a()({},Y),{},{value:F}));case 17:if(le=de.sent,!l(le)){de.next=23;break}return de.next=21,u(a()(a()({},w),{},{rules:le}));case 21:return ue=de.sent,de.abrupt("return",ue);case 23:if(!r(le)){de.next=25;break}return de.abrupt("return",{status:le.status,message:le.message,extra:le.extra});case 25:return de.abrupt("return",{status:U.r6.success});case 26:case"end":return de.stop()}},b)})),C.apply(this,arguments)}function O(b){var M=b.schema,E=b.rootValue,K=b.path,N=b.locale,H=b.userCtx,W=d(M.rules),F=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:H});return F&&!(0,x.sE)(M.rules,{required:!0})&&W.unshift({required:!0,message:(0,$.dr)(N.validation.required,{label:M.title})}),W}function S(b){var M=b.schema,E=b.rootValue,K=b.path,N=b.userCtx,H=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:N});return!!(H||(0,x.sE)(d(M.rules),{required:!0}))}function D(b){var M=b.schema,E=b.value,K=b.path,N=b.disabled,H=b.readonly,W=b.rootValue,F=b.locale,Z=b.userCtx,J=!!N,Y=!!H;J||(J=(0,g.o)({statement:M.disabled,rootValue:W,path:K,userCtx:Z})),Y||(Y=(0,g.o)({statement:M.readonly,rootValue:W,path:K,userCtx:Z}));var q=S({schema:M,path:K,rootValue:W,userCtx:Z});return{schema:M,value:E,path:z()(K),sPath:(0,j.P)(K),required:q,disabled:J,readonly:Y,rootValue:W,locale:F,userCtx:Z}}},96714:function(V,c,e){e.r(c),e.d(c,{default:function(){return Tr}});var R=e(97857),a=e.n(R),h=e(23060),A=e(18474),P=e(74072),z=e(52038),I=e(67294),p=e(13769),U=e.n(p),x=e(9783),$=e.n(x),L=e(28e3),j=e(14726),_=e(42075),T={submit:"submit",reset:"reset"},v={normal:"normal",formItem:"formItem"},m={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[T.submit,T.reset],actionsRenderMode:v.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},s=$()($()({},T.submit,!1),T.reset,!1),t="__FORM_RENDER_ACTIONS__",o="YYYY-MM-DD",n="YYYY-MM-DD HH:mm:ss",r=(0,I.createContext)({}),l=r;function d(){var he=(0,I.useContext)(l);return he}var u=e(85893),g=["disabled"],f=$()($()({},T.submit,function(he){var G,k=he.loading,ne=he.locale,re=he.disabled,fe=he.submitText;return(0,u.jsx)(j.ZP,{type:"primary",htmlType:"submit",disabled:k.submit?!1:re||k.reset,loading:k.submit,children:fe||(ne==null||(G=ne.FormRender)===null||G===void 0?void 0:G.submit)})}),T.reset,function(he){var G,k=he.handleReset,ne=he.loading,re=he.locale,fe=he.disabled,Te=he.resetText;return(0,u.jsx)(j.ZP,{htmlType:"button",disabled:ne.reset?!1:fe||ne.submit,loading:ne.reset,onClick:k,children:Te||(re==null||(G=re.FormRender)===null||G===void 0?void 0:G.reset)})}),B=function(G){var k=G.disabled,ne=U()(G,g),re=d(),fe=re.actions,Te=re.actionsLoading,De=re.registerActions,be=re.handleReset,Ce=re.handleSubmit,je=re.layoutColumnGap,We=re.locale,He=re.submitText,Ze=re.resetText,Ge=L.kJ(fe)&&fe.length>0;if(!Ge)return null;var Ue=a()(a()({},f),De);return(0,u.jsx)(_.Z,a()(a()({size:je},ne),{},{children:fe.map(function(X){var Q={locale:We,disabled:k,loading:Te,submitText:He,resetText:Ze};X===T.submit?Q.handleSubmit=Ce:X===T.reset&&(Q.handleReset=be);var ee=Ue[X];return ee?(0,u.jsx)(I.Fragment,{children:ee==null?void 0:ee(Q)},X):null})}))},y=B,i=e(15009),C=e.n(i),O=e(99289),S=e.n(O),D=e(5574),b=e.n(D),M=e(24317),E=e(93047);function K(he){var G=he.props,k=he.coreRef,ne=(0,I.useState)(s),re=b()(ne,2),fe=re[0],Te=re[1],De=(0,M.Z)(function(){var We=S()(C()().mark(function He(Ze,Ge){return C()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return Te(function(Q){return a()(a()({},Q),{},$()({},Ze,!0))}),X.next=3,Ge().catch(function(Q){E.Z.warn(Q)});case 3:Te(function(Q){return a()(a()({},Q),{},$()({},Ze,!1))});case 4:case"end":return X.stop()}},He)}));return function(He,Ze){return We.apply(this,arguments)}}()),be=(0,M.Z)(function(){De(T.submit,S()(C()().mark(function We(){var He,Ze;return C()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:if(k.current){Ue.next=2;break}return Ue.abrupt("return");case 2:if(!G.validateFormOnSubmit){Ue.next=8;break}return Ue.next=5,k.current.validate();case 5:if(Ze=Ue.sent,!(Ze.hasError||Ze.hasWarning)){Ue.next=8;break}return Ue.abrupt("return");case 8:return Ue.next=10,(He=G.onSubmit)===null||He===void 0?void 0:He.call(G,k.current.getValue());case 10:case"end":return Ue.stop()}},We)})))}),Ce=(0,M.Z)(function(We){We.preventDefault(),We.stopPropagation(),be()}),je=(0,M.Z)(function(){De(T.reset,S()(C()().mark(function We(){var He,Ze,Ge,Ue;return C()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:if(k.current){Q.next=2;break}return Q.abrupt("return");case 2:return Q.next=4,(He=G.onBeforeReset)===null||He===void 0?void 0:He.call(G,k.current.getValue());case 4:return Ge=Q.sent,Ue=a()({},Ge),k.current.setValue(Ue),k.current.resetError(),Q.next=10,(Ze=G.onReset)===null||Ze===void 0?void 0:Ze.call(G,Ue);case 10:case"end":return Q.stop()}},We)})))});return{handleFormSubmit:Ce,handleSubmit:be,handleReset:je,actionsLoading:fe,isLoading:fe.submit||fe.reset}}var N=e(25035),H=e(55241),W={main:"KJktzdbIf6ks6VzJokOi",header:"W1VzXHn16gct5GcAQzAJ",title:"u9uqtcpUufcUHpxoTX8i",mark:"nTrbqAVZyQszXeIv0c0x",titleTooltip:"PJv9lp7OIAhz09e0Mzc4",body:"rcElCiD94RYg1EDwB1Ks",footer:"Or0SQj4yW5w2FsZNGqSx",description:"Ar4nHGzakHcHpxyEgDsm",errorMsg:"Uboc8A0zOlwiit1DFVUs",warningMsg:"bBWNfGgbPgIM39mCuAv5"},F=A.Z,Z=function(G){var k=G.schema,ne=G.required,re=G.prefixClassNames,fe=G.labelColon,Te=!!fe;return(0,u.jsxs)(u.Fragment,{children:[ne&&(0,u.jsx)("span",{className:F(re("item-mark"),W.mark),children:"*"}),(0,u.jsx)("span",{className:F(re("item-title"),W.title),children:k.title}),!!k.titleDescription&&(0,u.jsx)(H.Z,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,u.jsx)(N.Z,{className:F(re("item-title-tooltip"),W.titleTooltip),style:{marginRight:Te?4:void 0}})}),Te&&(0,u.jsx)("span",{className:F(re("item-colon")),children:fe})]})},J=function(G){var k=G.body,ne=G.schema,re=G.validator,fe=G.required,Te=G.disabled,De=G.readonly,be=G.userCtx,Ce=G.prefixClassNames,je=d(),We=je.labelWidth,He=je.labelColon,Ze=je.labelGap,Ge=je.labelRender,Ue=je.locale,X=Ge||Z,Q={schema:ne,required:fe,disabled:Te,readonly:De,userCtx:be,prefixClassNames:Ce,labelWidth:We,labelColon:He,labelGap:Ze,locale:Ue};return(0,u.jsxs)("div",{className:F(Ce("item-layout-horizontal")),children:[(0,u.jsxs)("div",{className:F(Ce("item-main"),W.main),children:[(0,u.jsx)("div",{className:F(Ce("item-header"),W.header),style:{flexBasis:We,marginRight:Ze},children:X(Q)}),(0,u.jsx)("div",{className:F(Ce("item-body"),W.body),children:k})]}),(0,u.jsxs)("div",{className:F(Ce("item-footer"),W.footer),style:{paddingLeft:L.hj(We)?We+Ze:0},children:[re.status==="error"&&!!re.message&&(0,u.jsx)("div",{className:F(Ce("item-error-msg"),W.errorMsg),children:re.message}),re.status==="warning"&&!!re.message&&(0,u.jsx)("div",{className:F(Ce("item-warning-msg"),W.warningMsg),children:re.message}),!!ne.description&&(0,u.jsx)("div",{className:F(Ce("item-description"),W.description),children:ne.description})]})]})},Y=J,q={header:"cXgCcSVvNlsIaSBsMlHM",title:"Q3eNxjI6cLAZBBW2_yas",mark:"BuWsBZA0kykyRHVVzIdZ",titleTooltip:"hJ0d8TOr3t8ohz2ebCeX",footer:"evsVbV8JQZUkwdzenShU",description:"E03i6p7KIc4amADSI9O2",errorMsg:"XpfzMTzdt2UStOnYDFHa",warningMsg:"GfBuXM4GhVwvjTHc_dZO"},w=A.Z,ae=function(G){var k=G.schema,ne=G.required,re=G.prefixClassNames,fe=G.labelColon,Te=!!fe;return(0,u.jsxs)(u.Fragment,{children:[ne&&(0,u.jsx)("span",{className:w(re("item-mark"),q.mark),children:"*"}),(0,u.jsx)("span",{className:w(re("item-title"),q.title),children:k.title}),!!k.titleDescription&&(0,u.jsx)(H.Z,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,u.jsx)(N.Z,{className:w(re("item-title-tooltip"),q.titleTooltip),style:{marginRight:Te?4:void 0}})}),Te&&(0,u.jsx)("span",{className:w(re("item-colon")),children:fe})]})},pe=function(G){var k=G.body,ne=G.schema,re=G.validator,fe=G.required,Te=G.disabled,De=G.readonly,be=G.userCtx,Ce=G.prefixClassNames,je=d(),We=je.labelWidth,He=je.labelColon,Ze=je.labelGap,Ge=je.labelRender,Ue=je.locale,X=Ge||ae,Q={schema:ne,required:fe,disabled:Te,readonly:De,userCtx:be,prefixClassNames:Ce,labelWidth:We,labelColon:He,labelGap:Ze,locale:Ue};return(0,u.jsxs)("div",{className:Ce("item-layout-vertical"),children:[(0,u.jsx)("div",{className:w(Ce("item-header"),q.header),children:X(Q)}),(0,u.jsx)("div",{className:Ce("item-body"),children:k}),(0,u.jsxs)("div",{className:w(Ce("item-footer"),q.footer),children:[re.status==="error"&&!!re.message&&(0,u.jsx)("div",{className:w(Ce("item-error-msg"),q.errorMsg),children:re.message}),re.status==="warning"&&!!re.message&&(0,u.jsx)("div",{className:w(Ce("item-warning-msg"),q.warningMsg),children:re.message}),!!ne.description&&(0,u.jsx)("div",{className:w(Ce("item-description"),q.description),children:ne.description})]})]})},le=pe;function ue(he){var G=he.itemLayout,k=(0,I.useMemo)(function(){return!G||G==="horizontal"?Y:G==="vertical"?le:G},[G]);return k}var Pe=L.kJ,de=L.kK,xe=L.Kn;function Oe(he,G){var k="".concat(t,"_").concat(Date.now());return a()(a()({},he),{},{properties:a()(a()({},he==null?void 0:he.properties),{},$()({},k,a()(a()({},G),{},{renderType:t})))})}function Le(he){var G=he.itemLayout,k=he.labelWidth,ne=he.labelGap;return G==="horizontal"&&L.hj(k)?k+ne:0}function $e(){for(var he=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],G=arguments.length>1?arguments[1]:void 0,k=0;k<he.length;k++){var ne=he[k],re=xe(ne)?ne:{label:ne,value:ne},fe=G(re);if(fe)return}}function Ye(he,G){var k=[];return!Pe(he)||!Pe(G)||G.forEach(function(ne){de(ne)||$e(he,function(re){if(ne===re.value)return k.push(re.label),!0})}),k}function Ke(he,G){var k=[];return!Pe(he)||!Pe(G)||$e(he,function(ne){G.includes(ne.value)&&k.push(ne)}),k}function Ve(he){return!!(de(he)||he==="")}function Xe(he){var G=he.schema,k=he.actionsRestSchema,ne=he.actionsRenderMode;return(0,I.useMemo)(function(){return ne===v.normal?G:Oe(G,k)},[G,k,ne])}var Qe={formRender:"y_rJEiPMcFoaaCwgDsVT"},an=e(28403),sn=e(84567),on=function(G){var k=G.children,ne=d(),re=ne.readonlyPlaceholder;return(0,u.jsx)(u.Fragment,{children:Ve(k)?re:k})},we=on,dn=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=(0,M.Z)(function(De){var be;fe(De,{extra:{checkedOptions:Ke((be=k.renderOptions)===null||be===void 0?void 0:be.options,De)}})});return(0,u.jsx)(sn.Z.Group,a()(a()({},k.renderOptions),{},{value:re,onChange:Te,disabled:ne}))},ke=function(G){var k,ne=G.schema,re=G.value,fe=G.locale,Te=Ye((k=ne.renderOptions)===null||k===void 0?void 0:k.options,re);return(0,u.jsx)(we,{children:Te.join(fe.FormRender.comma)})},ln={component:dn,readonlyComponent:ke},Tn=e(88760),vn=e(27484),un=e.n(vn),fn=function(G){var k=G.schema,ne=G.value,re=G.onChange,fe=G.disabled,Te=G.locale,De=G.validator,be=(0,I.useMemo)(function(){return z.dr(Te.FormRender.placeholderSelect,{title:k.title})},[k.title,Te.FormRender.placeholderSelect]);return(0,u.jsx)(Tn.default,a()(a()({allowClear:!0,placeholder:be,style:{width:"100%"}},k.renderOptions),{},{status:De.status,value:ne?un()(ne):null,onChange:function(je){return re(je?un()(je).toISOString():void 0)},disabled:fe}))},jn=function(G){var k,ne,re=G.schema,fe=G.value;return(0,u.jsx)(we,{children:fe?un()(fe).format(((k=re.renderOptions)===null||k===void 0?void 0:k.format)||((ne=re.renderOptions)!==null&&ne!==void 0&&ne.showTime?n:o)):""})},hn={component:fn,readonlyComponent:jn};function Dn(he){return un()(he).toISOString()}var In=function(G){var k=G.schema,ne=G.value,re=G.onChange,fe=G.disabled,Te=G.validator,De=k.renderOptions||{},be=De.showTime;return(0,u.jsx)(Tn.default.RangePicker,a()(a()({allowClear:!0,allowEmpty:!0,style:{width:"100%"}},k.renderOptions),{},{disabled:fe,status:Te.status,value:ne?[un()(ne[0]),un()(ne[1])]:null,onChange:function(je){if(je&&je[0]&&je[1]){var We=be?je[0]:je[0].startOf("day"),He=be?je[1]:je[1].endOf("day");re([Dn(We),Dn(He)])}else re(void 0)}}))},$n=function(G){var k=G.schema,ne=G.value,re=G.locale,fe="";if(L.kJ(ne)&&ne[0]&&ne[1]){var Te,De,be,Ce=(Te=k.renderOptions)!==null&&Te!==void 0&&Te.showTime?n:o,je=((De=k.renderOptions)===null||De===void 0?void 0:De.format)||Ce,We=((be=k.renderOptions)===null||be===void 0?void 0:be.displayTextTemplate)||re.FormRender.displayDateRange;fe=z.dr(We,{start:un()(ne[0]).format(je),end:un()(ne[1]).format(je)})}return(0,u.jsx)(we,{children:fe})},Kn={component:In,readonlyComponent:$n},Nn=function(G){var k=G.value;return(0,u.jsx)(we,{children:k})},Wn={component:Nn},Un=function(G){var k=G.disabled;return(0,u.jsx)(y,{disabled:k})},Fn={formItem:Un},zn=e(13457),mn=["validateOnBlur"],yn=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=G.validator,De=G.locale,be=k.renderOptions||{},Ce=be.validateOnBlur,je=U()(be,mn),We=(0,I.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),He=(0,M.Z)(function(Ge){fe(Ge!=null?Ge:void 0,{triggerValidator:!Ce})}),Ze=(0,M.Z)(function(){fe(re,{triggerValidator:!0})});return(0,u.jsx)(zn.Z,a()(a()({style:{width:"100%"},placeholder:We},je),{},{status:Te.status,value:re,onChange:He,onBlur:Ce?Ze:void 0,disabled:ne}))},Hn=function(G){var k=G.value;return(0,u.jsx)(we,{children:k})},Zn={component:yn,readonlyComponent:Hn},xn=e(25278),Vn=["validateOnBlur"],Gn=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=G.validator,De=G.locale,be=k.renderOptions||{},Ce=be.validateOnBlur,je=U()(be,Vn),We=(0,I.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),He=(0,M.Z)(function(Ge){var Ue=Ge.target.value;Ue!==re&&fe(Ue,{triggerValidator:!Ce})}),Ze=(0,M.Z)(function(){fe(re,{triggerValidator:!0})});return(0,u.jsx)(xn.Z,a()(a()({placeholder:We},je),{},{status:Te.status,value:re!=null?re:"",onChange:He,onBlur:Ce?Ze:void 0,disabled:ne}))},Yn=function(G){var k=G.value;return(0,u.jsx)(we,{children:k})},Jn={component:Gn,readonlyComponent:Yn},bn=e(52162),On=e(47221),Qn=function(G){var k,ne,re=G.schema,fe=G.path,Te=G.objectStyle,De=(0,I.useState)(!1),be=b()(De,2),Ce=be[0],je=be[1],We=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{children:re.title}),!!re.titleDescription&&(0,u.jsx)(H.Z,{placement:"top",trigger:"hover",content:re.titleDescription,children:(0,u.jsx)(N.Z,{style:{marginLeft:4}})})]});return(0,u.jsx)(On.Z,a()(a()({},(k=re.renderOptions)===null||k===void 0?void 0:k.headerOptions),{},{activeKey:String(Ce),onChange:function(){return je(!Ce)},children:(0,I.createElement)(On.Z.Panel,a()(a()({},(ne=re.renderOptions)===null||ne===void 0?void 0:ne.panelOptions),{},{header:We,key:"false"}),(0,u.jsx)("div",{style:Te,children:(0,u.jsx)(bn.Z,{schema:re,path:fe})}))}))},Xn={formItem:Qn},Cn=function(G){var k=G.schema,ne=G.path,re=G.objectStyle;return(0,u.jsx)("div",{style:re,children:(0,u.jsx)(bn.Z,{schema:k,path:ne})})},wn={formItem:Cn},kn=["validateOnBlur"],qn=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=G.validator,De=G.locale,be=k.renderOptions||{},Ce=be.validateOnBlur,je=U()(be,kn),We=(0,I.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),He=(0,M.Z)(function(Ge){var Ue=Ge.target.value;Ue!==re&&fe(Ue,{triggerValidator:!Ce})}),Ze=(0,M.Z)(function(){fe(re,{triggerValidator:!0})});return(0,u.jsx)(xn.Z.Password,a()(a()({placeholder:We},je),{},{status:Te.status,value:re!=null?re:"",onChange:He,onBlur:Ce?Ze:void 0,disabled:ne}))},er=function(G){var k=G.value;return(0,u.jsx)(we,{children:k})},nr={component:qn,readonlyComponent:er},rr=e(55742),tr=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange;return(0,u.jsx)(rr.ZP.Group,a()(a()({},k.renderOptions),{},{value:re,onChange:function(De){return fe(De.target.value)},disabled:ne}))},ar=function(G){var k,ne=G.schema,re=G.value,fe=Ye((k=ne.renderOptions)===null||k===void 0?void 0:k.options,[re]);return(0,u.jsx)(we,{children:fe[0]})},gn={component:tr,readonlyComponent:ar},sr=e(67002),or=function(G){var k=G.schema,ne=G.disabled,re=G.readonly,fe=G.value,Te=G.onChange;return(0,u.jsx)(sr.Z,a()(a()({},k.renderOptions),{},{value:fe!=null?fe:0,onChange:Te,disabled:ne||re}))},Sn={component:or},Rn=e(34041),_n=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=G.locale,De=G.validator,be=(0,I.useMemo)(function(){return z.dr(Te.FormRender.placeholderSelect,{title:k.title})},[k.title,Te.FormRender.placeholderSelect]);return(0,u.jsx)(Rn.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:be},k.renderOptions),{},{status:De.status,mode:void 0,value:re!=null?re:null,onChange:function(je){return fe(je)},disabled:ne}))},lr=function(G){var k,ne,re=G.schema,fe=G.value,Te=G.locale,De=Ye((k=re.renderOptions)===null||k===void 0?void 0:k.options,[fe]);return(0,u.jsx)(we,{children:De.join((ne=Te.FormRender)===null||ne===void 0?void 0:ne.comma)})},dr={component:_n,readonlyComponent:lr},ur=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=G.validator,De=G.locale,be=(0,I.useMemo)(function(){return z.dr(De.FormRender.placeholderSelect,{title:k.title})},[k.title,De.FormRender.placeholderSelect]),Ce=(0,M.Z)(function(je,We){fe(je,{extra:{selectedOptions:We}})});return(0,u.jsx)(Rn.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:be},k.renderOptions),{},{status:Te.status,mode:"multiple",value:re,onChange:Ce,disabled:ne}))},mr=function(G){var k,ne,re=G.schema,fe=G.value,Te=G.locale,De=Ye((k=re.renderOptions)===null||k===void 0?void 0:k.options,fe);return(0,u.jsx)(we,{children:De.join((ne=Te.FormRender)===null||ne===void 0?void 0:ne.comma)})},cr={component:ur,readonlyComponent:mr},ir=e(41637),Mn=function(G){var k=G.schema,ne=G.disabled,re=G.readonly,fe=G.value,Te=G.onChange;return(0,u.jsx)(ir.Z,a()(a()({},k.renderOptions),{},{checked:fe,onChange:function(be){return Te(be)},disabled:ne||re}))},pr={component:Mn},hr=function(G){var k,ne=G.schema,re=G.disabled,fe=G.readonly,Te=G.value,De=G.onChange;return(0,u.jsx)(sn.Z,a()(a()({},ne.renderOptions),{},{checked:Te,onChange:function(Ce){return De(Ce.target.checked)},disabled:re||fe,children:(k=ne.renderOptions)===null||k===void 0?void 0:k.text}))},vr={component:hr},Ir=["validateOnBlur"],fr=function(G){var k=G.schema,ne=G.disabled,re=G.value,fe=G.onChange,Te=G.validator,De=G.locale,be=k.renderOptions||{},Ce=be.validateOnBlur,je=U()(be,Ir),We=(0,I.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),He=(0,M.Z)(function(Ge){var Ue=Ge.target.value;Ue!==re&&fe(Ue,{triggerValidator:!Ce})}),Ze=(0,M.Z)(function(){fe(re,{triggerValidator:!0})});return(0,u.jsx)(xn.Z.TextArea,a()(a()({rows:3,placeholder:We},je),{},{status:Te.status,value:re!=null?re:"",onChange:He,onBlur:Ce?Ze:void 0,disabled:ne}))},yr=function(G){var k=G.value;return(0,u.jsx)(we,{children:k})},Ln={component:fr,readonlyComponent:yr},En,xr=(En={},$()($()($()($()($()($()($()($()($()($()(En,t,Fn),"Object",Xn),"ObjectNull",wn),"InputText",Jn),"InputNumber",Zn),"Password",nr),"TextArea",Ln),"Radio",gn),"Checkbox",ln),"Switch",pr),$()($()($()($()($()($()($()(En,"SwitchBox",vr),"DatePicker",hn),"DateRangePicker",Kn),"Description",Wn),"Rate",Sn),"Select",dr),"SelectMultiple",cr)),gr=xr,Er=function(G,k){var ne=a()(a()({},m),G),re=(0,I.useRef)(null);(0,I.useImperativeHandle)(k,function(){return re.current});var fe=(0,I.useMemo)(function(){return a()(a()({},gr),ne.renderers)},[ne.renderers]),Te=(0,I.useMemo)(function(){return a()(a()({},an.Z),ne.locale)},[ne.locale]),De=ue(ne),be=K({props:ne,coreRef:re}),Ce=be.handleFormSubmit,je=be.handleSubmit,We=be.handleReset,He=be.actionsLoading,Ze=be.isLoading,Ge=Xe(h.ei(ne,"schema","actionsRestSchema","actionsRenderMode")),Ue=a()(a()({},h.ei(ne,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder","submitText","resetText")),{},{locale:Te,actionsLoading:He,handleSubmit:je,handleReset:We}),X=ne.disableFormOnActionLoading?ne.disabled||Ze:ne.disabled;return(0,u.jsx)(l.Provider,{value:Ue,children:(0,u.jsxs)("form",{onSubmit:Ce,className:A.Z(ne.rootClassName,Qe.formRender),style:ne.rootStyle,children:[(0,u.jsx)(P.default,a()(a()({},ne),{},{ref:re,schema:Ge,locale:Te,renderers:fe,itemLayout:De,disabled:X})),ne.actionsRenderMode===v.normal&&(0,u.jsx)(y,{disabled:X,className:z.Rk(ne.prefixCls,"form-actions"),style:{marginTop:ne.layoutRowGap,marginLeft:Le(ne)}})]})})},Pr=(0,I.forwardRef)(Er),Tr=Pr},35804:function(V,c,e){e.r(c);var R=e(97857),a=e.n(R),h=e(78484);c.default=a()(a()({},h.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})},28403:function(V,c,e){var R=e(97857),a=e.n(R),h=e(39214);c.Z=a()(a()({},h.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},36116:function(V,c,e){e.r(c),e.d(c,{default:function(){return O}});var R=e(97857),a=e.n(R),h=e(68795),A=e(48689),P=e(96714),z=e(14726),I=e(67294),p={submit:"submit",reset:"reset",collapse:"collapse"},U={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[p.reset,p.submit,p.collapse],defaultCollapsed:!0,collapsedRows:2},x=e(5574),$=e.n(x),L=e(80882),j=e(48115),_=e(24317);function T(S,D,b){var M;if(b)return b(S);if(!S)return 5;var E=S.clientWidth,K=((M=S.firstElementChild)===null||M===void 0||(M=M.getBoundingClientRect())===null||M===void 0?void 0:M.width)||320;return Math.floor(E/K)*D-1}var v=e(64599),m=e.n(v);function s(S,D){var b={},M=Object.keys(S.properties).slice(0,D),E=m()(M),K;try{for(E.s();!(K=E.n()).done;){var N=K.value;b[N]=S.properties[N]}}catch(H){E.e(H)}finally{E.f()}return{renderType:"Root",properties:b}}function t(S){var D=S.isCollapsed,b=S.rawSchema,M=S.collapsedNumber;return D?s(b,M):b}var o=e(28e3);function n(S){return o.PO(S)?Object.keys(S).length:o.kJ(S)||o.HD(S)?S.length:0}var r=e(38812);function l(S,D){var b=(0,r.Z)(D),M=(0,I.useRef)(-1);(0,I.useEffect)(function(){var E,K=(E=S.current)===null||E===void 0?void 0:E.getRootElement();if(K){var N=new ResizeObserver(function(H){var W=H[0].contentRect.width;M.current!==W&&(M.current=W,b.current(K))});return N.observe(K),function(){return N.disconnect()}}},[])}var d=e(85893);function u(S,D){var b=S.schema,M=(0,I.useState)(S.defaultCollapsed),E=$()(M,2),K=E[0],N=E[1],H=(0,I.useState)(function(){var ae;return T((ae=D.current)===null||ae===void 0?void 0:ae.getRootElement(),S.collapsedRows,S.calcCollapsedNumber)}),W=$()(H,2),F=W[0],Z=W[1],J=(0,I.useRef)(b);(0,I.useMemo)(function(){J.current=t({isCollapsed:K,collapsedNumber:F,rawSchema:b})},[F,K,b]),l(D,function(ae){Z(T(ae,S.collapsedRows,S.calcCollapsedNumber))});var Y=(0,_.Z)(function(ae){var pe;N(ae),(pe=S.onToggleCollapsed)===null||pe===void 0||pe.call(S,ae)}),q=(0,_.Z)(function(ae){var pe,le=ae.locale;if(n(b.properties)<=F)return null;if(K){var ue;return(0,d.jsxs)(z.ZP,{type:"link",onClick:function(){return Y(!1)},style:{padding:0},children:[le==null||(ue=le.Search)===null||ue===void 0?void 0:ue.expand,(0,d.jsx)(L.Z,{})]})}return(0,d.jsxs)(z.ZP,{type:"link",onClick:function(){return Y(!0)},style:{padding:0},children:[le==null||(pe=le.Search)===null||pe===void 0?void 0:pe.collapse,(0,d.jsx)(j.Z,{})]})}),w=a()({collapse:q},S.registerActions);return{schema:J.current,registerActions:w}}var g=e(6386),f=e(52038);function B(S){return{className:f.Rk(S,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var y={submit:function(D){var b=D.loading,M=D.locale,E=D.submitText,K=D.disabled;return(0,d.jsx)(z.ZP,{type:"primary",htmlType:"submit",icon:(0,d.jsx)(h.Z,{}),loading:b.submit,disabled:b.submit?!1:K||b.reset,children:E||M.FormRender.submit})},reset:function(D){var b=D.loading,M=D.locale,E=D.handleReset,K=D.resetText,N=D.disabled;return(0,d.jsx)(z.ZP,{htmlType:"button",icon:(0,d.jsx)(A.Z,{}),loading:b.reset,disabled:b.reset?!1:N||b.submit,onClick:E,children:K||M.FormRender.reset})}},i=function(D,b){var M=a()(a()({},U),D),E=(0,I.useRef)(null),K=(0,I.useMemo)(function(){return a()(a()({},g.Z),M.locale)},[M.locale]),N=u(M,E),H=N.schema,W=N.registerActions,F=(0,I.useMemo)(function(){return B(M.prefixCls)},[M.prefixCls]);return(0,I.useImperativeHandle)(b,function(){return E.current}),(0,d.jsx)(P.default,a()(a()({layout:"autoFill"},M),{},{ref:E,locale:K,schema:H,registerActions:a()(a()({},y),W),actionsRestSchema:F,actionsRenderMode:"formItem"}))},C=(0,I.forwardRef)(i),O=C},9686:function(V,c,e){e.r(c);var R=e(97857),a=e.n(R),h=e(35804);c.default=a()(a()({},h.default),{},{FormRender:a()(a()({},h.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})},6386:function(V,c,e){var R=e(97857),a=e.n(R),h=e(28403);c.Z=a()(a()({},h.Z),{},{FormRender:a()(a()({},h.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}})},22846:function(V,c,e){e.r(c),e.d(c,{default:function(){return Ue}});var R=e(97857),a=e.n(R),h=e(18474),A=e(28e3),P=e(24317),z=e(85908),I=e(95511),p=e(67294),U=A.kJ,x=A.PO,$=A.HD,L=A.kK,j=function(Q){return U(Q)?!Q.length:x(Q)?!Object.keys(Q).length:$(Q)?Q.trim()==="":L(Q)};function _(X,Q){return U(X)?X.map(Q):[]}function T(X,Q){if(X)for(var ee=X.length,te=0;te<ee;te++){var oe=Q==null?void 0:Q(X[te],te,X);if(oe)return}}function v(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var m=v(),s=function(X){return X.actions="__actions__",X.rowNumber="__row-number__",X}({}),t={table:"st-table-".concat(m),pagination:"st-pagination-".concat(m)},o=e(23060),n=e(13769),r=e.n(n),l=e(41637),d=e(66309),u=e(67002),g=e(5574),f=e.n(g),B=e(57020),y=e(42075),i=e(85893),C=function(Q){var ee=Q.imgList,te=Q.imgProps,oe=Q.groupProps,ce=(0,p.useState)(!1),Ie=f()(ce,2),me=Ie[0],se=Ie[1],ve=(0,p.useState)(0),ie=f()(ve,2),Ee=ie[0],Se=ie[1],_e=function(ge){Se(ge),se(!0)};return(0,i.jsx)(B.Z.PreviewGroup,a()(a()({},oe),{},{items:ee,preview:{visible:me,current:Ee,onChange:function(ge){return Se(ge)},onVisibleChange:function(ge){return se(ge)}},children:(0,i.jsx)(y.Z,{children:ee.map(function(Me,ge){return(0,p.createElement)(B.Z,a()(a()({width:60},te),{},{src:Me,key:ge,onClick:function(){return _e(ge)}}))})})}))},O=C,S={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},D=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),b=function(Q){var ee=Q.value;return j(ee)?"-":isNaN(Number(ee))?ee:String(ee).replace(D,",")},M=b,E=e(83062),K=["maxLength"],N=function(Q){var ee=Q.value,te=Q.options,oe=te===void 0?{}:te,ce=j(ee)?"-":String(ee),Ie=oe.maxLength,me=Ie===void 0?10:Ie,se=r()(oe,K);return ce.length>me?(0,i.jsxs)(E.Z,a()(a()({title:ce},se),{},{children:[ce.slice(0,me-1),"..."]})):(0,i.jsx)(i.Fragment,{children:ce})},H=N,W=e(14726),F=e(85576),Z=(0,p.createContext)({}),J=Z;function Y(){var X=(0,p.useContext)(J);return X}var q=["maxLength"],w=function(Q){var ee=Q.value,te=Q.options,oe=te===void 0?{}:te,ce=j(ee)?"-":String(ee),Ie=oe.maxLength,me=Ie===void 0?10:Ie,se=r()(oe,q),ve=(0,p.useState)(!1),ie=f()(ve,2),Ee=ie[0],Se=ie[1],_e=Y();return ce.length>me?(0,i.jsxs)(i.Fragment,{children:[ce.slice(0,me-3),"...",(0,i.jsx)(W.ZP,{type:"link",style:{padding:0},onClick:function(){return Se(!0)},children:_e.locale.SearchTable.longTextModalLabel}),(0,i.jsx)(F.Z,a()(a()({width:600,title:_e.locale.SearchTable.longTextModalTitle,footer:null},se),{},{open:Ee,onCancel:function(){return Se(!1)},children:ce}))]}):(0,i.jsx)(i.Fragment,{children:ce})},ae=w,pe=["groupProps"],le=A.kJ,ue={code:function(Q){var ee=Q.value,te=Q.options;return(0,i.jsx)("pre",{style:a()(a()({},S),te.style),children:(0,i.jsx)("code",{children:ee})})},percent:function(Q){var ee=Q.value;return j(ee)?"-":"".concat(ee,"%")},switch:function(Q){var ee=Q.value,te=Q.options;return(0,i.jsx)(l.Z,a()(a()({},te),{},{checked:!!ee}))},tags:function(Q){var ee=Q.value,te=Q.options,oe=le(ee)?ee:[ee];return oe.map(function(ce,Ie){return(0,p.createElement)(d.Z,a()(a()({},te),{},{key:Ie}),ce)})},rate:function(Q){var ee=Q.value,te=Q.options;return(0,i.jsx)(u.Z,a()(a()({style:{width:134}},te),{},{disabled:!0,value:ee}))},"comma-number":function(Q){return(0,i.jsx)(M,a()({},Q))},images:function(Q){var ee=Q.value,te=Q.options;if(j(ee))return"-";var oe=le(ee)?ee:[ee],ce=te.groupProps,Ie=r()(te,pe);return(0,i.jsx)(O,{imgList:oe,imgProps:Ie,groupProps:ce})},"long-text":function(Q){return(0,i.jsx)(H,a()({},Q))},"long-text-modal":function(Q){return(0,i.jsx)(ae,a()({},Q))}},Pe=e(27484),de=e.n(Pe),xe=o.U2,Oe=A.kJ,Le=A.PO;function $e(X,Q){return X===Q?0:X>Q?1:-1}var Ye=function(Q,ee,te){var oe=te.sortType,ce=te.sortOrder,Ie=te.arrDataIndex,me=te.sortDataExtractor,se=te.sortStringValueTransform,ve=me?me(Q):xe(Q,Ie),ie=me?me(ee):xe(ee,Ie);return Le(ve)||Le(ie)?0:(Oe(ve)&&(ve=ve.join("")),Oe(ie)&&(ie=ie.join("")),ve=String(ve).trim(),ie=String(ie).trim(),j(ve)?ce==="ascend"?1:-1:j(ie)?ce==="ascend"?-1:1:oe==="string"?(se&&(ve=se(ve),ie=se(ie)),$e("@".concat(ve).toLowerCase(),"@".concat(ie).toLowerCase())):oe==="date"?$e(new Date(ve),new Date(ie)):!isNaN(Number(ve))&&!isNaN(Number(ie))?$e(Number(ve),Number(ie)):de()(ve).isValid()&&de()(ie).isValid()?$e(new Date(ve),new Date(ie)):(se&&(ve=se(ve),ie=se(ie)),$e(ve,ie)))},Ke=["title","dataIndex","children","valueType"],Ve=["type"],Xe=o.U2,Qe=A.kJ,an=A.HD,sn=A.mf;function on(X,Q,ee){return X.map(function(te){var oe=te.title,ce=te.dataIndex,Ie=te.children,me=te.valueType,se=r()(te,Ke);Qe(Ie)&&(Ie=on(Ie,Q,ee));var ve=Qe(ce)?ce.join("."):ce,ie=Qe(ce)?ce:[ce],Ee=Q.sortMode==="local-all"||Q.sortMode==="service-all",Se=!!se.sorter||!!se.sortType||Ee,_e=!1;Ie||(se.sorter?_e=se.sorter:(Ee||se.sortType)&&(_e=Q.sortMode==="service-all"?!0:function(ge,ye,Ae){return Ye(ge,ye,{arrDataIndex:ie,sortOrder:Ae,sortType:se.sortType,sortDataExtractor:se.sortDataExtractor,sortStringValueTransform:Q.sortStringValueTransform})}));var Me=function(ye,Ae,Be){var Re=Xe(Ae,ie),Ne="",Fe=void 0;if(me)if(sn(me)){var Je=me(Ae,Be),ze=Je.type,qe=r()(Je,Ve);Ne=ze,Fe=qe}else Ne=me;var en=ee[Ne];return en?en({value:Re,record:Ae,options:Fe||{},index:Be}):j(Re)?"-":Re};return a()(a()({align:"center",key:ve,width:an(oe)?oe.length*16+(Se?50:30):void 0,render:Me},se),{},{title:oe,dataIndex:ce,children:Ie,sorter:_e})})}var we=o.Cw;function dn(X){var Q=X.table,ee=X.globalStateRef,te=(0,p.useRef)([]),oe=ee.current.isTabChanging;(0,p.useMemo)(function(){oe||(te.current=Q.columns||[])},[Q.columns,oe]);var ce=(0,p.useMemo)(function(){var me=a()(a()({},ue),Q.registerValueType);return we(me,function(se,ve){return ve.toLowerCase()})},[Q.registerValueType]),Ie=(0,p.useMemo)(function(){return on(te.current,Q,ce)},[te.current]);return{rawColumns:te.current,baseColumns:Ie}}var ke=e(15009),ln=e.n(ke),Tn=e(99289),vn=e.n(Tn),un=e(19632),fn=e.n(un),jn=e(16223),hn=e(60887),Dn=e(32339),In=e(45587),$n=e(24285),Kn=function(Q){var ee=Q.items,te=ee===void 0?[]:ee,oe=Q.onChange,ce=Q.itemClassName,Ie=Q.overlayClassName,me=Q.renderItem,se=(0,hn.Dy)((0,hn.VT)(hn.MA)),ve=(0,p.useState)(null),ie=f()(ve,2),Ee=ie[0],Se=ie[1],_e=(0,P.Z)(function(Me){var ge=Me.active,ye=Me.over;if(ge.id!==ye.id){var Ae=te.findIndex(function(Re){return Re.id===ge.id}),Be=te.findIndex(function(Re){return Re.id===ye.id});oe==null||oe((0,In.Rp)(te,Ae,Be))}Se(null)});return(0,i.jsxs)(hn.LB,{sensors:se,collisionDetection:hn.pE,onDragStart:function(ge){var ye=ge.active;return Se(ye.id)},onDragEnd:_e,modifiers:[Dn.DL],children:[(0,i.jsx)(In.Fo,{items:te,strategy:In.qw,children:te.map(function(Me,ge){return(0,i.jsx)(Nn,{className:ce,id:Me.id,itemData:Me,itemIndex:ge,renderItem:me},Me.id)})}),(0,i.jsx)(hn.y9,{zIndex:9999,children:Ee?(0,i.jsx)("div",{className:Ie,children:me==null?void 0:me(te.find(function(Me){return Me.id===Ee}),te.findIndex(function(Me){return Me.id===Ee}))}):null})]})};function Nn(X){var Q=X.className,ee=X.id,te=X.itemData,oe=X.itemIndex,ce=X.renderItem,Ie=(0,In.nB)({id:ee}),me={transform:$n.ux.Transform.toString(Ie.transform),transition:Ie.transition,opacity:Ie.isDragging?0:void 0};return(0,i.jsx)("div",{className:Q,ref:Ie.setNodeRef,style:me,children:ce==null?void 0:ce(te,oe,Ie)})}var Wn=Kn,Un=e(29751),Fn=e(13457);function zn(X){var Q=X.locale,ee=Q.SearchTable.settingModalColumnEnum,te=Q.SearchTable.settingModalColumnSortEnum,oe=[{title:ee[0],dataIndex:"name",width:200},{title:ee[1],dataIndex:"hidden",width:90,render:function(Ie,me){return(0,i.jsx)(l.Z,{checked:!Ie,onChange:function(se){function ve(ie){return se.apply(this,arguments)}return ve.toString=function(){return se.toString()},ve}(function(se){return me(!se)})})}},{title:ee[2],dataIndex:"width",width:100,render:function(Ie,me){return(0,i.jsx)(Fn.Z,{min:1,value:Ie,onChange:function(se){function ve(ie){return se.apply(this,arguments)}return ve.toString=function(){return se.toString()},ve}(function(se){se&&me(se)})})}},{title:ee[3],dataIndex:"fixed",width:60,algin:"center",render:function(Ie){var me=Ie?Ie==="left"?te[0]:te[1]:te[2],se=Ie?Ie==="left"?"orange":"blue":void 0;return(0,i.jsx)(d.Z,{color:se,style:{margin:0},children:me})}},{title:ee[4],dataIndex:"sort",width:50,algin:"center",render:function(){return(0,i.jsx)(W.ZP,{type:"text",size:"small",icon:(0,i.jsx)(Un.Z,{}),style:{cursor:"move"}})}}];return oe}var mn={header:"QAOM154PCv4EfJwXuMGD",list:"LkLIqYE_K14s_LJCkMNb",rowWrapper:"merlP_IozdkGeCwp_YFt",rowWrapperOverlay:"UeufD9AKSlIy1YxIEUVc",row:"LTEO9LAZImQXEcqT5pE2",col:"tHW2QaJsCZklZxvxdAlP",footer:"k0oUhFnmHEmaXGLy4_XN"};function yn(X){return X.map(function(Q){return{id:String(Q.dataIndex),name:Q.title,hidden:Q.hidden,width:Q.width,fixed:Q.fixed}})}var Hn=function(Q){var ee=Q.defaultColumns,te=Q.sortColumns,oe=Q.onOk,ce=Y(),Ie=(0,p.useState)(function(){return yn(te)}),me=f()(Ie,2),se=me[0],ve=me[1],ie=(0,p.useMemo)(function(){return zn({locale:ce.locale})},[ce.locale]),Ee=(0,P.Z)(function(ye,Ae,Be){var Re=fn()(se);Re[ye][Ae]=Be,ve(Re)}),Se=(0,P.Z)(function(ye){ve(ye)}),_e=(0,P.Z)(function(){ve(yn(te))}),Me=(0,P.Z)(function(){ve(yn(ee))}),ge=(0,P.Z)(function(){var ye=[];se.forEach(function(Ae){var Be=Ae.id,Re=Ae.width,Ne=Ae.hidden,Fe=ee.find(function(Je){return String(Je.dataIndex)===Be});Fe&&ye.push(a()(a()({},Fe),{},{width:Re,hidden:Ne}))}),oe==null||oe(ye)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:mn.header,children:ie.map(function(ye,Ae){return(0,i.jsx)("div",{className:mn.col,style:{width:ye.width,justifyContent:ye.algin},children:ye.title},Ae)})}),(0,i.jsx)("div",{className:mn.list,children:(0,i.jsx)(Wn,{items:se,onChange:Se,itemClassName:mn.rowWrapper,overlayClassName:mn.rowWrapperOverlay,renderItem:function(Ae,Be,Re){return(0,i.jsx)("div",{className:mn.row,children:ie.map(function(Ne,Fe){var Je=Ae[Ne.dataIndex],ze=Ne.dataIndex==="sort"?Re==null?void 0:Re.listeners:{};return(0,i.jsx)("div",a()(a()({className:mn.col,style:{width:Ne.width,justifyContent:Ne.algin}},ze),{},{children:Ne.render?Ne.render(Je,function(qe){return Ee(Be,Ne.dataIndex,qe)}):Je}),"".concat(Be).concat(Fe))})},Be)}})}),(0,i.jsx)("div",{className:mn.footer,children:(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(W.ZP,{onClick:Me,children:ce.locale.SearchTable.settingModalResetDefault}),(0,i.jsx)(W.ZP,{onClick:_e,children:ce.locale.SearchTable.settingModalReset}),(0,i.jsx)(W.ZP,{type:"primary",onClick:ge,children:ce.locale.SearchTable.settingModalOk})]})})]})},Zn=Hn,xn=["sortColumns","defaultColumns","onOk"],Vn=function(Q){var ee=Q.sortColumns,te=Q.defaultColumns,oe=Q.onOk,ce=r()(Q,xn),Ie=Y();return(0,i.jsx)(F.Z,a()(a()({title:Ie.locale.SearchTable.settingModalTitle,width:"auto",centered:!0,destroyOnClose:!0,footer:null},ce),{},{children:(0,i.jsx)(Zn,{sortColumns:ee,defaultColumns:te,onOk:oe})}))},Gn=Vn,Yn=function(Q,ee){var te=[],oe={};Q.forEach(function(se){oe[String(se.dataIndex)]=se}),ee.forEach(function(se){var ve=String(se.dataIndex),ie=oe[ve];if(ie){var Ee,Se,_e;te.push(a()(a()({},ie),{},{width:(Ee=se.width)!==null&&Ee!==void 0?Ee:ie.width,hidden:(Se=se.hidden)!==null&&Se!==void 0?Se:ie.hidden,fixed:(_e=se.fixed)!==null&&_e!==void 0?_e:ie.fixed})),delete oe[ve]}});for(var ce=0,Ie=Object.values(oe);ce<Ie.length;ce++){var me=Ie[ce];te.push(me)}return te},Jn=o.ei;function bn(X){var Q=X.baseColumns,ee=X.table,te=X.globalStateRef,oe=(0,p.useRef)([]),ce=(0,p.useState)(!1),Ie=f()(ce,2),me=Ie[0],se=Ie[1],ve=(0,p.useState)([]),ie=f()(ve,2),Ee=ie[0],Se=ie[1],_e=te.current.isTabChanging;(0,p.useMemo)(function(){if(!_e)if(Ee.length){var Be=ee.settingColumnsMergeAlgo||Yn;oe.current=Be(Q,Ee)}else oe.current=fn()(Q)},[Q,Ee]);var Me=(0,P.Z)(function(){se(!0)}),ge=(0,P.Z)(function(){se(!1)}),ye=(0,P.Z)(function(Be){var Re;oe.current=Be,ge();var Ne=Be.map(function(Fe){return Jn(Fe,"title","dataIndex","width","hidden","fixed")});(Re=ee.onSettingChanged)===null||Re===void 0||Re.call(ee,{columns:Ne},ee.settingId)}),Ae=(0,i.jsx)(Gn,{open:me,sortColumns:oe.current,defaultColumns:Q,onCancel:ge,onOk:ye});return(0,jn.Z)(vn()(ln()().mark(function Be(){var Re,Ne,Fe;return ln()().wrap(function(ze){for(;;)switch(ze.prev=ze.next){case 0:return ze.next=2,(Re=ee.getSetting)===null||Re===void 0?void 0:Re.call(ee,ee.settingId);case 2:Fe=ze.sent,Fe!=null&&(Ne=Fe.columns)!==null&&Ne!==void 0&&Ne.length&&Se(Fe.columns);case 4:case"end":return ze.stop()}},Be)})),[ee.settingId]),{sortColumns:oe.current,sortModalHolder:Ae,openSettingModal:Me,closeSettingModal:ge}}var On=e(80882),Qn=e(86738),Xn=e(85418),Cn=e(93047),wn=["children","onClick","noLoading"],kn=Cn.Z;function qn(X){var Q=X.children,ee=X.onClick,te=X.noLoading,oe=te===void 0?!1:te,ce=r()(X,wn),Ie=(0,p.useState)(!1),me=f()(Ie,2),se=me[0],ve=me[1],ie=(0,P.Z)(function(){var Ee=vn()(ln()().mark(function Se(_e){return ln()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:if(!oe){ge.next=3;break}return ee==null||ee(_e),ge.abrupt("return");case 3:return ve(!0),ge.prev=4,ge.next=7,ee==null?void 0:ee(_e);case 7:ge.next=12;break;case 9:ge.prev=9,ge.t0=ge.catch(4),kn.warn(ge.t0);case 12:ve(!1);case 13:case"end":return ge.stop()}},Se,null,[[4,9]])}));return function(Se){return Ee.apply(this,arguments)}}());return(0,i.jsx)(W.ZP,a()(a()({loading:se},ce),{},{onClick:ie,children:Q}))}var er={dropdownCls:"QCPZxJ055cnYMBRnfgUa"},nr=["text","confirmAgain","confirmProps","onClick"],rr=A.kJ,tr=A.HD,ar=o.CE;function gn(X,Q){var ee=X.text,te=X.confirmAgain,oe=X.confirmProps,ce=X.onClick,Ie=r()(X,nr),me=tr(ee)?(0,i.jsx)(qn,a()(a()({type:"link",size:"small"},ar(Ie,"isShow")),{},{onClick:function(ve){return!te&&(ce==null?void 0:ce(ve))},children:ee}),Q):ee;return te?(0,i.jsx)(Qn.Z,a()(a()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},oe),{},{onConfirm:ce,children:me}),Q):me}function sr(X){var Q=X.record,ee=X.index,te=X.actionItems,oe=X.actionItemsCount,ce=X.actionItemsDropdownProps,Ie=X.locale,me=te==null?void 0:te(Q,ee);if(!rr(me))return null;var se=me.filter(function(Se){return Se.isShow!==!1}),ve;if(se.length>oe){var ie=[],Ee=[];return se.forEach(function(Se,_e){_e<oe-1?ie.push(Se):Ee.push(gn(Se,_e))}),(0,i.jsxs)(i.Fragment,{children:[ie.map(function(Se,_e){return gn(Se,_e)}),(0,i.jsx)(Xn.Z,a()(a()({placement:"bottomRight"},ce),{},{dropdownRender:function(){return(0,i.jsx)("div",{className:er.dropdownCls,children:Ee.map(function(_e,Me){return(0,i.jsx)(p.Fragment,{children:_e},Me)})})},children:(0,i.jsxs)(W.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:[Ie.SearchTable.more," ",(0,i.jsx)(On.Z,{style:{margin:0}})]})}))]})}else ve=se.map(function(Se,_e){return gn(Se,_e)});return ve}function or(X){var Q=X.table,ee=X.sortColumns,te=X.locale,oe=Q.showRowNumber,ce=oe===void 0?!1:oe,Ie=Q.rowNumberColumnData,me=Ie===void 0?{}:Ie,se=Q.actionItems,ve=Q.actionItemsCount,ie=ve===void 0?2:ve,Ee=Q.actionItemsColumnData,Se=Ee===void 0?{}:Ee,_e=Q.actionItemsDropdownProps,Me=(0,P.Z)(function(Ae,Be,Re){return sr({record:Be,index:Re,actionItems:se,actionItemsCount:ie,actionItemsDropdownProps:_e,locale:te})}),ge=(0,p.useMemo)(function(){return ee.filter(function(Ae){return!Ae.hidden})},[ee]),ye=(0,p.useMemo)(function(){var Ae=fn()(ge);return ce&&Ae.unshift(a()({title:te.SearchTable.serialColumnName,align:"center",width:70,fixed:"left",render:function(Re,Ne,Fe){return Fe+1},key:s.rowNumber},me)),se&&Ae.push(a()({title:te.SearchTable.actionColumnName,align:"center",fixed:"right",width:134,render:Me,key:s.actions},Se)),Ae},[ge]);return{finalColumns:ye}}var Sn=e(4559);function Rn(X){var Q=X.ref,ee=X.rootElemRef,te=X.searchRef,oe=X.requestParamsRef,ce=X.requestExtraParamsRef,Ie=X.searchValueRef,me=X.dataSource,se=X.updateDataSource,ve=X.updateSummaryData,ie=X.updateScrollY,Ee=X.openSettingModal,Se=X.runRequest,_e=(0,Sn.Z)(),Me=_e.forceUpdate;(0,p.useImperativeHandle)(Q,function(){return{refresh:Se,getRootElement:function(){return ee.current},getSearchRef:function(){return te.current},getRequestParams:function(){return oe.current},getRequestExtraParams:function(){return ce.current},getSearchValue:function(){return Ie.current},setSearchValue:function(ye,Ae){var Be,Re=Ae!=null&&Ae.overwrite?ye:a()(a()({},Ie.current),ye);(Be=te.current)===null||Be===void 0||Be.setValue(Re)},clearSearchValue:function(){var ye;return(ye=te.current)===null||ye===void 0?void 0:ye.resetValue()},getDataSource:function(){return me},setDataSource:function(ye){se(ye),Me()},setSummaryData:function(ye){ve(ye),Me()},updateScrollY:ie,openSettingModal:Ee,rerender:Me}})}var _n=e(52038),lr=Cn.Z,dr=o.ei,ur=h.Z,mr=_n.dr;function cr(X){var Q,ee=X.request,te=X.updateScrollY,oe=X.table,ce=X.searchValueRef,Ie=X.locale,me=(0,p.useRef)({current:1,pageSize:(oe.pagination!==!1?(Q=oe.pagination)===null||Q===void 0?void 0:Q.defaultPageSize:10)||10,total:0}),se=(0,p.useRef)({}),ve=(0,p.useRef)({}),ie=(0,p.useRef)([]),Ee=(0,p.useRef)({}),Se=(0,p.useState)(!1),_e=f()(Se,2),Me=_e[0],ge=_e[1];oe.pagination===!1&&(me.current={});var ye=(0,P.Z)(function(){var Je=vn()(ln()().mark(function ze(qe,en){var rn,tn,pn;return ln()().wrap(function(nn){for(;;)switch(nn.prev=nn.next){case 0:if(rn={data:[],total:0},!Me){nn.next=3;break}return nn.abrupt("return",rn);case 3:if(ge(!0),nn.prev=4,!ee){nn.next=18;break}return tn={},en!=null&&en.overwrite?tn=qe||{}:tn=a()(a()(a()({},ce.current),dr(me.current,"current","pageSize")),qe),nn.next=10,ee(tn,ve.current);case 10:pn=nn.sent,se.current=tn,tn.current&&(me.current.current=tn.current),tn.pageSize&&(me.current.pageSize=tn.pageSize),me.current.total=pn.total||0,ie.current=pn.data||[],Ee.current=pn.summaryData||{},rn=a()(a()({},pn),{},{data:ie.current,total:me.current.total});case 18:nn.next=23;break;case 20:nn.prev=20,nn.t0=nn.catch(4),lr.warn(nn.t0);case 23:return ge(!1),oe.autoScrollY&&te(),nn.abrupt("return",rn);case 26:case"end":return nn.stop()}},ze,null,[[4,20]])}));return function(ze,qe){return Je.apply(this,arguments)}}()),Ae=!1;if(oe.pagination!==!1){var Be;Ae=a()(a()(a()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(ze){var qe=me.current,en=qe.current,rn=qe.pageSize,tn=(en-1)*rn,pn=tn+ie.current.length;return mr(Ie.SearchTable.paginationTotal,{start:tn||1,end:pn,total:ze})}},oe.pagination),me.current),{},{onChange:function(ze,qe){var en,rn;(en=oe.pagination)===null||en===void 0||(rn=en.onChange)===null||rn===void 0||rn.call(en,ze,qe),Object.assign(me.current,{current:ze,pageSize:qe}),ye()},className:ur((Be=oe.pagination)===null||Be===void 0?void 0:Be.className,t.pagination)})}var Re=(0,P.Z)(function(Je){ie.current=Je}),Ne=(0,P.Z)(function(Je){Ee.current=Je}),Fe=(0,P.Z)(function(Je){ve.current=Je});return{loading:Me,dataSource:ie.current,updateDataSource:Re,summaryData:Ee.current,updateSummaryData:Ne,requestParamsRef:se,requestExtraParamsRef:ve,updateRequestExtraParams:Fe,finalPagination:Ae,runRequest:ye}}var ir=A.HD;function Mn(X){if(!X)return 0;var Q=window.getComputedStyle(X,null),ee=parseFloat(Q.marginTop)+parseFloat(Q.marginBottom);return X.offsetHeight+ee}function pr(X,Q){if(!X||!Q)return 0;var ee=window.getComputedStyle(X,null),te=ee[Q];return ir(te)&&te.match(/^\d+/)?parseFloat(te):0}var hr=A.o8;function vr(X){var Q=X.table,ee=X.rootElemRef,te=(0,p.useState)(Q.virtual?0:void 0),oe=f()(te,2),ce=oe[0],Ie=oe[1],me=(0,p.useRef)(),se=(0,P.Z)(function(){var ie;if(!(!ee.current||!hr((ie=Q.scroll)===null||ie===void 0?void 0:ie.y))){var Ee=ee.current.querySelector(".".concat(t.table)),Se=Ee==null?void 0:Ee.querySelector("thead"),_e=Ee==null?void 0:Ee.querySelector("tfoot"),Me=Ee==null?void 0:Ee.querySelector(".".concat(t.pagination)),ge=[Se,_e,Me],ye=0;T(ee.current.children,function(Ae){Ae!==Ee&&(ye+=Mn(Ae))}),ye+=pr(Ee,"marginTop"),T(ge,function(Ae){ye+=Mn(Ae)}),Ie(ee.current.clientHeight-ye)}}),ve=(0,P.Z)(function(){var ie=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Ee&&!Q.autoScrollY||(clearTimeout(me.current),me.current=setTimeout(se,ie))});return(0,z.Z)(function(){var ie=function(){return ve(0,!0)};return window.addEventListener("resize",ie),function(){return window.removeEventListener("resize",ie)}}),{scrollY:ce,updateScrollY:ve}}var Ir=e(36116),fr=_n.nr;function yr(X){var Q=X.locale,ee=X.loading,te=X.search,oe=X.searchValueRef,ce=X.runRequest,Ie=X.updateScrollY,me=te===!1?{}:te,se=(0,p.useRef)(null),ve=(0,Sn.Z)(),ie=ve.forceUpdate,Ee=fr(me,"value");if(Ee){var Se;oe.current=(Se=me.value)!==null&&Se!==void 0?Se:{}}var _e=(0,P.Z)(function(Be,Re){var Ne;oe.current=a()({},Be),Ee||ie(),(Ne=me.onChange)===null||Ne===void 0||Ne.call(me,Be,Re)}),Me=(0,P.Z)(function(){var Be=vn()(ln()().mark(function Re(Ne){var Fe;return ln()().wrap(function(ze){for(;;)switch(ze.prev=ze.next){case 0:return oe.current=a()({},Ne),ze.next=3,(Fe=me.onReset)===null||Fe===void 0?void 0:Fe.call(me,Ne);case 3:return ze.next=5,ce({current:1});case 5:case"end":return ze.stop()}},Re)}));return function(Re){return Be.apply(this,arguments)}}()),ge=(0,P.Z)(function(){var Be=vn()(ln()().mark(function Re(Ne){var Fe;return ln()().wrap(function(ze){for(;;)switch(ze.prev=ze.next){case 0:return ze.next=2,(Fe=me.onSubmit)===null||Fe===void 0?void 0:Fe.call(me,Ne);case 2:return ze.next=4,ce();case 4:case"end":return ze.stop()}},Re)}));return function(Re){return Be.apply(this,arguments)}}()),ye=(0,P.Z)(function(Be){var Re;(Re=me.onToggleCollapsed)===null||Re===void 0||Re.call(me,Be),Ie(0,!0)}),Ae=te?(0,i.jsx)(Ir.default,a()(a()({},te),{},{locale:te.locale||Q,rootStyle:a()({marginBottom:16},te.rootStyle),ref:se,disabled:te.disabled||ee,value:oe.current,onChange:_e,onReset:Me,onSubmit:ge,onToggleCollapsed:ye})):null;return{searchNodeHolder:Ae,searchRef:se}}var Ln=A.kJ,En=A.kK;function xr(X,Q){return X===s.rowNumber?Q:X===s.actions?"":"-"}function gr(X){var Q=[];function ee(te){T(te,function(oe){Ln(oe.children)?ee(oe.children):Q.push(oe)})}return ee(X),Q}function Er(X){var Q=X.flattenedColumns,ee=X.summaryData,te=X.summaryText,oe=te===void 0?"\u5408\u8BA1":te,ce=X.hasRowNumber,Ie=ce===void 0?!1:ce,me=X.hasRowSelection,se=me===void 0?!1:me,ve=[],ie=-1;return se&&(ie++,ve.push({index:ie,text:Ie?"":oe})),T(Q,function(Ee){var Se=Ee.key,_e=Ee.dataIndex,Me=Ln(_e)?_e.join("."):_e,ge=String(Se||Me),ye=ee[ge];ie++,ve.push({index:ie,text:En(ye)?xr(ge,oe):ye})}),ve}function Pr(X){var Q=Er(X);return(0,i.jsx)(I.Z.Summary,{fixed:"bottom",children:(0,i.jsx)(I.Z.Summary.Row,{children:Q.map(function(ee){return(0,i.jsx)(I.Z.Summary.Cell,{align:"center",index:ee.index,colSpan:ee.colSpan,children:ee.text},ee.index)})})})}function Tr(X){var Q=X.table,ee=X.finalColumns,te=X.summaryData,oe=(0,p.useMemo)(function(){return gr(ee)},[ee]),ce=(0,P.Z)(function(){return Pr({flattenedColumns:oe,summaryData:te,summaryText:Q.summaryText,hasRowSelection:!!Q.rowSelection,hasRowNumber:Q.showRowNumber})}),Ie=Q.summary?Q.summary:j(te)?void 0:function(){return ce()};return{finalSummary:Ie}}var he=e(9783),G=e.n(he),k=e(42952),ne=e(98165),re=e(56140),fe={tabsHideLine:"uDtbDqYyMw3PdeGEwjmS"},Te=h.Z;function De(X){var Q,ee,te,oe,ce,Ie=X.locale,me=X.title,se=me===void 0?{}:me,ve=X.loading,ie=X.globalStateRef,Ee=X.runRequest,Se=X.openSettingModal,_e=(0,P.Z)(function(qe){var en,rn;ve||(ie.current.isTabChanging=!0,(en=se.tabs)===null||en===void 0||(rn=en.onChange)===null||rn===void 0||rn.call(en,qe),setTimeout(function(){return Ee({current:1}).finally(function(){return ie.current.isTabChanging=!1})},0))}),Me={loading:ve},ge=(Q=se.leftExtraContent)===null||Q===void 0?void 0:Q.call(se,Me),ye=(ee=se.rightExtraContent)===null||ee===void 0?void 0:ee.call(se,Me),Ae=null,Be=null,Re=se.showSetting?(0,i.jsx)(E.Z,{title:Ie.SearchTable.settingTips,children:(0,i.jsx)(W.ZP,{icon:(0,i.jsx)(k.Z,{}),disabled:ve,onClick:Se})}):null,Ne=se.showRefresh?(0,i.jsx)(E.Z,{title:Ie.SearchTable.refreshTips,children:(0,i.jsx)(W.ZP,{icon:(0,i.jsx)(ne.Z,{}),disabled:ve,onClick:function(){return Ee()}})}):null;if((te=se.tabs)!==null&&te!==void 0&&te.tabBarExtraContent)if((0,p.isValidElement)(se.tabs.tabBarExtraContent))Be=se.tabs.tabBarExtraContent;else{var Fe=se.tabs.tabBarExtraContent;Ae=Fe.left,Be=Fe.right}var Je={left:Ae||ge?(0,i.jsxs)(y.Z,{size:10,style:{marginRight:16},children:[Ae,ge]}):null,right:Be||ye||Ne||Re?(0,i.jsxs)(y.Z,{size:10,children:[Be,ye,Ne,Re]}):null},ze=Je.left||Je.right||se.tabs?(0,i.jsx)(re.Z,a()(a()({},se.tabs),{},{className:Te(se.className,(oe=se.tabs)===null||oe===void 0?void 0:oe.className,G()({},fe.tabsHideLine,!se.tabs)),style:se.style||((ce=se.tabs)===null||ce===void 0?void 0:ce.style),tabBarExtraContent:Je,onChange:_e})):null;return{titleNodeHolder:ze}}var be=e(6386),Ce=a()(a()({},be.Z),{},{SearchTable:{serialColumnName:"\u5E8F\u53F7",actionColumnName:"\u64CD\u4F5C",more:"\u66F4\u591A",paginationTotal:"\u5171 ${total} \u6761\u6570\u636E",refreshTips:"\u5237\u65B0",settingTips:"\u5217\u8BBE\u7F6E",settingModalTitle:"\u5217\u8BBE\u7F6E",settingModalOk:"\u786E\u5B9A",settingModalReset:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E",settingModalResetDefault:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",settingModalColumnEnum:["\u5217\u540D\u79F0","\u663E\u793A\u5217","\u5BBD\u5EA6","\u56FA\u5B9A\u65B9\u5F0F","\u6392\u5E8F"],settingModalColumnSortEnum:["\u5DE6","\u53F3","\u65E0"],longTextModalLabel:"\u5168\u90E8",longTextModalTitle:"\u5168\u90E8"}}),je=h.Z,We=A.PO,He=A.kK,Ze=function(Q,ee){var te=Q.className,oe=Q.style,ce=Q.locale,Ie=Q.request,me=Q.requestOnMounted,se=me===void 0?!0:me,ve=Q.header,ie=Q.search,Ee=Q.titleTop,Se=Q.title,_e=Se===void 0?{}:Se,Me=Q.titleBottom,ge=Q.table,ye=ge===void 0?{}:ge,Ae=Q.footer,Be=(0,p.useRef)(null),Re=(0,p.useRef)(ie===!1?{}:ie.defaultValue||{}),Ne=(0,p.useMemo)(function(){return a()(a()({},Ce),ce)},[ce]);ye.rowSelection&&He(ye.rowSelection.columnWidth)&&(ye.rowSelection=a()(a()({},ye.rowSelection),{},{columnWidth:32}));var Fe=(0,p.useRef)({isTabChanging:!1}),Je=dn({table:ye,globalStateRef:Fe}),ze=Je.baseColumns,qe=bn({table:ye,baseColumns:ze,globalStateRef:Fe}),en=qe.sortColumns,rn=qe.sortModalHolder,tn=qe.openSettingModal,pn=or({table:ye,sortColumns:en,locale:Ne}),Dr=pn.finalColumns,nn=vr({table:ye,rootElemRef:Be}),Mr=nn.scrollY,br=nn.updateScrollY,cn=cr({searchValueRef:Re,table:ye,request:Ie,updateScrollY:br,locale:Ne}),An=cn.loading,Cr=cn.dataSource,Lr=cn.updateDataSource,Ar=cn.summaryData,Br=cn.updateSummaryData,jr=cn.finalPagination,Pn=cn.runRequest,$r=cn.requestParamsRef,Kr=cn.requestExtraParamsRef,Nr=cn.updateRequestExtraParams,Sr=yr({locale:Ne,loading:An,search:ie,searchValueRef:Re,runRequest:Pn,updateScrollY:br}),Wr=Sr.searchNodeHolder,Ur=Sr.searchRef,Fr=De({locale:Ne,title:_e,loading:An,globalStateRef:Fe,runRequest:Pn,openSettingModal:tn}),zr=Fr.titleNodeHolder,Hr=Tr({table:ye,finalColumns:Dr,summaryData:Ar}),Zr=Hr.finalSummary,Bn={loading:An},Vr=(0,P.Z)(function(Gr,Rr,_r,Yr){var Or;(ye.sortMode==="service"||ye.sortMode==="service-all")&&(Nr({filter:Rr,sorter:_r}),Pn()),(Or=ye.onChange)===null||Or===void 0||Or.call(ye,Gr,Rr,_r,Yr)});return(0,z.Z)(function(){se&&Pn()}),Rn({ref:ee,rootElemRef:Be,searchRef:Ur,requestParamsRef:$r,requestExtraParamsRef:Kr,searchValueRef:Re,dataSource:Cr,updateDataSource:Lr,updateSummaryData:Br,updateScrollY:br,openSettingModal:tn,runRequest:Pn}),(0,i.jsx)(J.Provider,{value:{locale:Ne},children:(0,i.jsxs)("div",{ref:Be,className:te,style:oe,children:[ve==null?void 0:ve(Bn),Wr,Ee==null?void 0:Ee(Bn),zr,Me==null?void 0:Me(Bn),(0,i.jsx)(I.Z,a()(a()({tableLayout:"fixed"},ye),{},{className:je(ye.className,t.table),columns:Dr,dataSource:Cr,loading:a()({spinning:An},We(ye==null?void 0:ye.loading)?ye.loading:void 0),scroll:a()({scrollToFirstRowOnChange:!0,x:"max-content",y:Mr},ye==null?void 0:ye.scroll),summary:Zr,pagination:jr,onChange:Vr})),Ae==null?void 0:Ae(Bn),rn]})})},Ge=(0,p.forwardRef)(Ze),Ue=Ge},74465:function(V,c,e){e.r(c);var R=e(97857),a=e.n(R),h=e(9686);c.default=a()(a()({},h.default),{},{SearchTable:{serialColumnName:"Rank",actionColumnName:"Actions",more:"More",paginationTotal:"Showing ${start} to ${end} of ${total} entries",refreshTips:"Refresh",settingTips:"Columns Setting",settingModalTitle:"Columns Setting",settingModalOk:"Ok",settingModalReset:"Reset Current Setting",settingModalResetDefault:"Restore Defaults",settingModalColumnEnum:["Name","Display","Width","Fixed","Sort"],settingModalColumnSortEnum:["left","right","-"],longTextModalLabel:"All",longTextModalTitle:"All"}})},88442:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(63917);const a=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\uFF1B\u652F\u6301 SSR(Server-Side Rendering) \u6E32\u67D3\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search\u3001SearchTable \u4F7F\u7528\u7684\u662F css module \u7684\u6837\u5F0F\u65B9\u6848\uFF0C\u6545\u9879\u76EE\u9700\u8981\u5F00\u542F\u6A21\u5757\u7F16\u8BD1\u3002",paraId:5,tocIndex:2},{value:"Next.js",paraId:6,tocIndex:2},{value:" \u9879\u76EE\u987B\u914D\u7F6E ",paraId:6,tocIndex:2},{value:"next.config.js",paraId:6,tocIndex:2},{value:" \u6587\u4EF6\uFF1A",paraId:6,tocIndex:2},{value:`// \u7F16\u8BD1 node_modules \u4E0B\u7684\u6A21\u5757
{
  transpilePackages: [
    '@schema-render/core-react',
    '@schema-render/form-render-react',
    '@schema-render/search-react',
    '@schema-render/search-table-react',
  ]
}
`,paraId:7,tocIndex:2},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:8,tocIndex:3},{value:"itemLayout",paraId:8,tocIndex:3},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:8,tocIndex:3},{value:"Renderers",paraId:8,tocIndex:3},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:8,tocIndex:3},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:9,tocIndex:3},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:10,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:10,tocIndex:3},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:11,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u7B80\u6D01\u6613\u7528",paraId:10,tocIndex:3},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:10,tocIndex:3},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:10,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u4E0E\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u4E1A\u52A1\u81EA\u8EAB\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:10,tocIndex:3},{value:"\u8F7B\u91CF\u7EA7",paraId:10,tocIndex:3},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:10,tocIndex:3}]},87351:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(59869);const a=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u52A0\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}]},43504:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(76777);const a=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
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
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}]},12157:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(84894);const a=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}]},14569:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(23382);const a=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}]},49116:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(86131);const a=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}]},44272:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(15208);const a=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}]},19520:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(233);const a=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}]},53671:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(39008);const a=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}]},71905:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(37424);const a=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}]},73148:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(48966);const a=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},12875:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(92436);const a=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}]},15727:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(86685);const a=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}]},59865:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(43315);const a=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}]},63021:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(46715);const a=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}]},727:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(35786);const a=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},71789:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(69708);const a=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}]},49961:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(96687);const a=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},47468:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(85105);const a=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}]},73890:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(2755);const a=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},21979:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(88485);const a=[]},98008:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(97024);const a=[]},15672:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(92311);const a=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}]},3215:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(78593);const a=[]},72624:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(25105);const a=[]},38319:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(35170);const a=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}]},23352:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(12727);const a=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}]},17139:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(53143);const a=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}]},44878:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(65063);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}]},8706:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(30761);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},39263:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(25937);const a=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}]},43811:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(91260);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"submitText",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"resetText",paraId:15,tocIndex:9},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}]},14590:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(90261);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:6,tocIndex:4},{value:"extra.checkedOptions",paraId:6,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:6,tocIndex:4},{value:"options",paraId:6,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:6,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:7,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"v1.4.0",paraId:8,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:9,tocIndex:5},{value:"extra.selectedOptions",paraId:9,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:9,tocIndex:5},{value:"options",paraId:9,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:9,tocIndex:5},{value:"v1.4.0",paraId:10,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:11,tocIndex:6},{value:"ISOString",paraId:11,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u66F4\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:11,tocIndex:6},{value:"\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:12,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:13,tocIndex:7},{value:"locale",paraId:13,tocIndex:7},{value:" \u7684 ",paraId:13,tocIndex:7},{value:"FormRender.displayDateRange",paraId:13,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:13,tocIndex:7},{value:"renderOptions.headerOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"renderOptions.panelOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse.Panel",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:15,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:16,tocIndex:9},{value:"className",paraId:16,tocIndex:9},{value:" \u548C ",paraId:16,tocIndex:9},{value:"style",paraId:16,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:16,tocIndex:9}]},93076:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(4123);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},24426:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(74624);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"submitText",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"resetText",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},64092:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(83140);const a=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}]},75796:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(34877);const a=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}]},2131:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(45011);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}]},98685:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(6168);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}]},9046:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(6882);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5F53\u8868\u5355\u9879\u8FC7\u591A\u65F6\u5BB9\u5668\u5B58\u5728\u6EDA\u52A8\u6761\uFF0C\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u5E94\u8BE5\u5B9A\u4F4D\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879\u4EE5\u63D0\u9192\u7528\u6237\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"validate",paraId:3,tocIndex:0},{value:" \u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5F97\u5230\u9519\u8BEF\u9879\u6570\u636E\uFF0C\u518D\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"scrollTo",paraId:3,tocIndex:0},{value:" \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u3002",paraId:3,tocIndex:0}]},7669:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(88358);const a=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}]},15577:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(73888);const a=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}]},2531:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(73914);const a=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},26875:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(64768);const a=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}]},18335:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(87004);const a=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}]},9034:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(43895);const a=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}]},23652:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(67342);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}]},26138:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(27885);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},51001:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(10122);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},13086:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(84123);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},31626:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(24197);const a=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}]},60031:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(69306);const a=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}]},12952:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(72106);const a=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}]},10198:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(17258);const a=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}]},51184:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(73865);const a=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}]},59418:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(81535);const a=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}]},49329:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(18899);const a=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showRefresh",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5237\u65B0\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u663E\u793A\u5217\u8BBE\u7F6E\u4E0E\u5237\u65B0\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6DFB\u52A0\u7C7B\u540D\u5220\u9664\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"leftExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6309\u9700\u5220\u9664\u3002",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"rightExtraContent",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\u3002",paraId:4,tocIndex:6}]},78323:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(87922);const a=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u5F69\u8272\u6807\u7B7E\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Tag \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Modal \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}]},66376:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(8497);const a=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}]},5664:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(90749);const a=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},95378:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(27490);const a=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showRefresh",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5237\u65B0\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"leftExtraContent",paraId:2,tocIndex:2},{value:"\u5DE6\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rightExtraContent",paraId:2,tocIndex:2},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}]},39168:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(8906);const a=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}]},9382:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(34451);const a=[]},93283:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(24311);const a=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
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
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}]},85162:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(49409);const a=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",paraId:1,tocIndex:0}]},92724:function(V,c,e){e.r(c),e.d(c,{texts:function(){return a}});var R=e(63710);const a=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}]},36005:function(V,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},71525:function(V,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
