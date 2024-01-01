---
group:
  title: 功能详解
  order: 200
toc: content
---

# 数据事件 ChangeEvent

## onChange 事件

当表单项数据变化时，会触发 `onChange` 事件，第一个参数为表单全量数据。

```tsx
import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
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
        // 设置表单全量数据
        value={value}
        // 接收表单全量数据
        onChange={(val) => setValue(val)}
      />

      {/* 打印表单全量数据 */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

`onChange` 第二个参数是触发事件的元信息，包含如下数据：

- `path`: 触发事件的表单项的完整路径，`array` 格式。
- `sPath`: 完整路径的字符串化表示，`string` 格式。
- `value`: 触发事件回调的数据值。
- `extra`: 携带的额外信息，任意数据格式。

```tsx
import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [eventInfo, setEventInfo] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        // 接收事件信息
        onChange={(_val, event) => setEventInfo(event)}
      />

      {/* 打印事件信息 */}
      <SyntaxHighlighter value={eventInfo} />
    </div>
  )
}

export default Demo
```

## onItemChange 事件

`onItemChange` 与 `onChange` 调用时机一致，只是 `onItemChange` 仅包含触发事件的元信息。

适用于不需要接管整个表单数据（value），又需要监听某个表单项变化而后处理一些事情的场景。

```tsx
import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [eventInfo, setEventInfo] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        // 接收事件信息
        onItemChange={(event) => setEventInfo(event)}
      />

      {/* 打印事件信息 */}
      <SyntaxHighlighter value={eventInfo} />
    </div>
  )
}

export default Demo
```

## Extra 额外信息

额外信息是渲染器在发生 `change` 事件时告知给外面的数据，可用于处理特殊场景的需求。

```tsx
import { useState } from 'react'
import { Input } from 'antd'
import Core, { IRenderer } from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

// 示例：定义携带额外信息的渲染器
const InputTextWithExtra: IRenderer = {
  component: ({ schema, value, disabled, onChange }) => {
    return (
      <Input
        placeholder={`请输入${schema.title ?? ''}`}
        {...schema.renderOptions}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value, {
            // 在 change 的时候携带额外信息
            extra: Math.random(),
          })
        }}
      />
    )
  },
}

// 注册渲染器
const myRenderers = { InputTextWithExtra, ...renderers }

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputTextWithExtra',
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [eventInfo, setEventInfo] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={myRenderers}
        // 接收事件信息
        onItemChange={(event) => setEventInfo(event)}
      />

      {/* 打印事件信息 */}
      <SyntaxHighlighter value={eventInfo} />
    </div>
  )
}

export default Demo
```
