---
group: 样式定制
order: 102
toc: content
---

# 类名定制 prefixCls

通过 `prefixCls` 定制样式类名前缀

:::info{title=温馨提示}
打开 DevTools 面板查看 DOM 元素类名
:::

```tsx
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '宽度',
      renderType: 'InputNumber',
    },
    height: {
      title: '高度',
      renderType: 'InputNumber',
    },
    left: {
      title: '水平位置',
      renderType: 'InputNumber',
    },
    top: {
      title: '垂直位置',
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

export default Demo
```
