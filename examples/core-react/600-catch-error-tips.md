---
group: 功能详解
order: 600
toc: content
---

# 错误提示信息

默认情况，当捕获到错误的时候会标红展示错误提示信息，亦可配置如下 2 个参数自定义或隐藏错误提示

- 传入 `函数` 则自定义错误信息
- 传入 `silent` 则不提示错误

## 默认标红提示

```tsx
import Core from '@schema-render/core-react'
import { Input } from 'antd'
import Horizontal from './item-layout/Horizontal'
import type { IRenderers } from '@schema-render/core-react'

const renderers: IRenderers = {
  // 注册会抛出异常的渲染器
  InputText: {
    component: () => {
      throw Error('发生错误了')
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={`请输入${schema.title ?? ''}`}
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
      title: '标题',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '请输入标题，最多10个字符',
      },
    },
    content: {
      title: '内容',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo
```

## silent 禁用提示

```tsx
import Core from '@schema-render/core-react'
import { Input } from 'antd'
import Horizontal from './item-layout/Horizontal'
import type { IRenderers } from '@schema-render/core-react'

const renderers: IRenderers = {
  // 注册会抛出异常的渲染器
  InputText: {
    component: () => {
      throw Error('发生错误了')
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={`请输入${schema.title ?? ''}`}
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
      title: '标题',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '请输入标题，最多10个字符',
      },
    },
    content: {
      title: '内容',
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

export default Demo
```

## 自定义提示

```tsx
import Core from '@schema-render/core-react'
import { Input } from 'antd'
import Horizontal from './item-layout/Horizontal'
import type { IRenderers } from '@schema-render/core-react'

const renderers: IRenderers = {
  // 注册会抛出异常的渲染器
  InputText: {
    component: () => {
      throw Error('发生错误了')
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={`请输入${schema.title ?? ''}`}
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
      title: '标题',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '请输入标题，最多10个字符',
      },
    },
    content: {
      title: '内容',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      catchErrorTips={() => {
        return (
          <div style={{ color: 'yellow', background: 'black' }}>自定义的错误信息</div>
        )
      }}
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo
```
