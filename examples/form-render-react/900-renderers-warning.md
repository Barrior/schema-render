---
group:
  title: 仅开发调试
  order: 900
toc: content
debug: true
---

# 渲染器校验

## 校验状态样式

支持 `warning`、`error` 样式

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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
      <FormRender schema={schema} value={value} onChange={setValue} />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
