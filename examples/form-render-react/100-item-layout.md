---
order: 100
toc: content
---

# 布局结构 itemLayout

`FormRender` 内置了纵向与横向的布局结构，同时也支持定制。

## 纵向布局 vertical

纵向布局只需要在 `itemLayout` 属性上声明为 `vertical` 即可。

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IRootSchema } from '@schema-render/core-react'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '用户名',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '密码',
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
        // 声明表单项布局结构
        itemLayout="vertical"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## 横向布局 horizontal

横向布局只需要在 `itemLayout` 属性上声明为 `horizontal` 即可。

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IRootSchema } from '@schema-render/core-react'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '用户名',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '密码',
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
        // 声明表单项布局结构
        itemLayout="horizontal"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## 定制布局

定制布局请查看 [Core 文档](../core-react/101-item-layout)。
