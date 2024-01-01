---
group:
  title: 样式定制
  order: 100
toc: content
---

# 布局结构 layout

`layout` 定义 `表单项之间` 的布局结构，有以下三种模式。

- `normal`: 默认模式，标准栅格布局，将容器均分为 `24` 份，每个表单项默认占满一行（即 24 份）；当然可以在 Schema 里通过 `span` 字段设置特定的份数（宽度）。
- `autoFill`: 指定表单项最小最大宽度的自适应布局，[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) autoFill 模式。
- `autoFit`: 指定表单项最小最大宽度的自适应布局，CSS Grid autoFit 模式。

## 栅格布局 normal

每个表单项默认占满一行。

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
    <Core layout="normal" schema={schema} itemLayout={Horizontal} renderers={renderers} />
  )
}

export default Demo
```

## 栅格布局 自定义宽度

通过在 `Schema` 上指定 `span` 和 `spanStart` 可以控制表单项特定的`宽度`和`位置`。

- `span`: 指定表单项宽度，以份计算。
- `spanStart`: 指定表单项从第几个栅格开始，通常在需要换行的时候使用。

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
      // 通过 span 设置表单项为 50% 的宽度（12/24）
      span: 12,
    },
    height: {
      title: '高度',
      renderType: 'InputNumber',
      span: 12,
    },
    left: {
      title: '水平位置',
      renderType: 'InputNumber',
      // 通过 span 设置表单项为 50% 的宽度
      span: 12,
      // 通过 spanStart 设置表单项从第一个栅格开始布局，即新起一行
      spanStart: 1,
    },
    // 后面的表单项会自动计算，跟随上一个表单项的位置
    top: {
      title: '垂直位置',
      renderType: 'InputNumber',
      span: 12,
    },
  },
} as const

const Demo = () => {
  return (
    <Core layout="normal" schema={schema} itemLayout={Horizontal} renderers={renderers} />
  )
}

export default Demo
```

## 自适应布局 autoFill

根据设置的 `layoutMinMax`（即 [Grid minmax](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)）与`表单根元素`宽度动态计算布局宽度，动态排列与换行。

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
      layout="autoFill"
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo
```

## 自适应布局 autoFit

`autoFit` 与 `autoFill` 雷同，细微的差别请查看 [这篇文章的对比](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)。

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
      layout="autoFit"
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo
```

## 自适应布局 layoutMinMax

不管是 `autoFill` 还是 `autoFit` 都可以通过 `layoutMinMax` 设置表单项宽度的最小最大值，默认值为 `['320px', '1fr']`。

以下示例设置最小最大都为 `230px` 的布局。

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
      layout="autoFill"
      layoutMinMax={[230, 230]}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo
```

:::info{title=温馨提示}
`layoutMinMax` 内的值可以是 `string` 类型，也可以是 `number` 类型，`number` 类型会被自动转成以 `px` 为单位的 `string` 类型值。
:::
