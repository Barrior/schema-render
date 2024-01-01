---
group: 功能详解
order: 230
toc: content
---

# 全局状态控制

全局状态控制的出现是为了在最顶层直接控制表单的状态，以降低协议控制编码成本。

全局状态控制的权重大于 Schema 协议的状态控制。

以下是全局状态控制可用的参数

- `disabled`: boolean 类型，控制表单项是否`禁用`，禁用时会在根节点增加 `is-disabled` 类名。
- `readonly`: boolean 类型，控制表单项是否`只读`，只读时会在根节点增加 `is-readonly` 类名。

## 全局禁用态示例

```tsx
/**
 * defaultShowCode: true
 */
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

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
      /* 设置表单为禁用态 */
      disabled
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo
```
