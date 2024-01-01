---
group:
  title: 仅开发调试
  order: 950
toc: content
debug: true
---

# 异步数据 async

```tsx
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'
import { useState } from 'react'
import { Button, Space } from 'antd'

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
  const [value, setValue] = useState({})

  const handleFetchData = () => {
    setTimeout(() => {
      setValue({
        title: `新标题::${String(Math.random()).slice(2, 10)}`,
        content: `新内容::${String(Math.random()).slice(2, 10)}`,
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
          加载异步数据
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </Space>
    </>
  )
}

export default Demo
```
