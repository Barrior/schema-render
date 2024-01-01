---
group: 功能详解
order: 221
toc: content
---

# 结构渲染器-对象 Object

通过创建以 `Object` 开头的渲染器可以制作嵌套的结构表单，支持多种不同功能的 `Object` 渲染器同时存在。

划重点：

- Schema 协议模型的子节点通过调用 `RendererIterator` 渲染器迭代器来渲染。
- 容器元素需要添加 `objectStyle` 样式，以继承内核一致的栅格布局。

```jsx | pure
<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
```

## 示例

```jsx
import { Input } from 'antd'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import schema from './schemas/object'

import ObjectCollapse from './renderers/object/ObjectCollapse'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  // 注册「常规的」对象类型渲染器
  Object,

  // 注册「可折叠的」对象类型渲染器
  ObjectCollapse,

  InputText: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input
          placeholder={`请输入${schema.title ?? ''}`}
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

export default Demo
```

## 自动校验

按规范编写的对象结构 Schema 是支持内置自动校验的，校验功能详见 [校验器 Validator](./223-validator) 章节。

```tsx
import { Input } from 'antd'
import { useRef } from 'react'
import Core from '@schema-render/core-react'
import { Button, message } from 'antd'
import Horizontal from './item-layout/Horizontal'
import schema from './schemas/object'
import type { ICoreRef, IRenderers, IObjectSchema } from '@schema-render/core-react'

import ObjectCollapse from './renderers/object/ObjectCollapse'
import Object from './renderers/object/ObjectNormal'

const renderers: IRenderers<any, IObjectSchema> = {
  // 注册「常规的」对象类型渲染器
  Object,

  // 注册「可折叠的」对象类型渲染器
  ObjectCollapse,

  InputText: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input
          placeholder={`请输入${schema.title ?? ''}`}
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
      // 提交数据...
      message.success('提交成功')
    }
  }

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 15 }}>
        提交
      </Button>
    </div>
  )
}

export default Demo
```
