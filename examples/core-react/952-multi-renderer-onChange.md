---
group:
  title: 仅开发调试
toc: content
debug: true
---

# 多渲染器内部 onChange 初始化值

多个渲染器内部同时在 `useEffect` 内调用 `onChange` 方法更新（初始化）数据，value 值需要是最新的

```tsx
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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
        onChange('机构 A')
      }, [])

      return (
        <Input
          placeholder={`请输入${schema.title ?? ''}`}
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
        onChange('供应商 A')
      }, [])

      return (
        <Input
          placeholder={`请输入${schema.title ?? ''}`}
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
          onChange('单号 A')
        }, 10)
      }, [])

      return (
        <Input
          placeholder={`请输入${schema.title ?? ''}`}
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
      title: '机构名称',
      renderType: 'InputOrg',
    },
    supplier: {
      title: '供应商名称',
      renderType: 'InputSupplier',
    },
    bill_no: {
      title: '单据编号',
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
          console.log(`***** updateBy ${e.sPath} *****`)
          console.log('value:', val)
          console.log('e:', e)
          setValue(val)
        }}
      />
      {/* 打印表单全量数据 */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
