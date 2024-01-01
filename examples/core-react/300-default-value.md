---
group: 功能详解
order: 300
toc: content
debug: true
---

# 默认值 DefaultValue

## Core 默认值

```tsx
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
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
      schema={schema}
      defaultValue={{
        title: '我是标题',
      }}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo
```

## Schema 协议默认值

:::info{title=温馨提示}
还在设计中
:::
