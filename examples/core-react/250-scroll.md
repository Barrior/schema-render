---
group: 功能详解
order: 250
toc: content
---

# 滚动到指定位置 ScrollTo

当表单比较长的时候，滚动到指定表单项的位置。

类型：`scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void`

### 入参

| **名称**    | **描述**           | **类型**               |
| ----------- | ------------------ | ---------------------- |
| **paths**   | 表单项路径         | `string` \| `string[]` |
| **options** | 选项参数，如下表格 | `IScrollToOptions`     |

#### options

| **名称**              | **描述**                                                                                                  | **类型**                        |
| --------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **xAxis**             | 是否触发 x 轴移动，默认 true                                                                              | `boolean`                       |
| **yAxis**             | 是否触发 y 轴移动，默认 true                                                                              | `boolean`                       |
| **behavior**          | [滚动过渡行为](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo#behavior)，默认 `smooth` | `smooth` \| `instant` \| `auto` |
| **gap**               | 移动到指定位置的差值，可以是正负值，默认为 0                                                              | `number`                        |
| **positionedElement** | 滚动容器元素 (需要带定位属性 position)，适用于非 Core 根节点滚动                                          | `HTMLElement` \| `Window`       |

### 出参

无

### 示例一 · 内部滚动

如果滚动容器元素是 `Core` 根节点元素，那么可以直接使用 `scrollTo` 方法滚动到指定表单项位置。

```tsx
import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import comRenderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  ...comRenderers,
  Object: Object as never,
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      required: true,
      renderOptions: { rows: 10 },
    },
    object_basic: {
      title: '基础信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '基础标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '基础内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_spec: {
      title: '规格信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '规格标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '规格内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_service: {
      title: '服务信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '服务标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '服务内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_other: {
      title: '其他信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '其他标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '其他内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  return (
    <div
      style={{
        display: 'flex',
        columnGap: 20,
      }}
    >
      <Core
        style={{
          maxWidth: 500,
          flexGrow: 1,
          height: 500,
          padding: '10px 5px',
          border: '1px solid #ccc',
          // 设置 Core 根节点元素滚动
          overflow: 'auto',
        }}
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Space direction="vertical">
        <Button onClick={() => coreRef.current?.scrollTo('object_basic')}>
          移动到【基础信息】
        </Button>
        <Button
          onClick={() => {
            coreRef.current?.scrollTo(['object_spec', 'title'], { gap: -20 })
          }}
        >
          移动到【规格信息-规格标题-增加20px距离】
        </Button>
        <Button
          onClick={() => {
            coreRef.current?.scrollTo('object_other.content', { xAxis: false })
          }}
        >
          移动到【其他信息-其他内容】
        </Button>
      </Space>
    </div>
  )
}

export default Demo
```

### 示例二 · 外部滚动

如果滚动容器元素超过 Core 根节点元素，那么只需在 `scrollTo` 方法指定 `positionedElement` 参数为滚动容器元素即可。

前置条件：

- 滚动容器元素需要是“定位元素”，如声明 `position` 为非 `static` 属性，这样指定的表单项才能查找到该滚动祖先元素，才能获取到正确的距离。
- 定位元素：https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent

```tsx
import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import comRenderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  ...comRenderers,
  Object: Object as never,
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      required: true,
      renderOptions: { rows: 10 },
    },
    object_basic: {
      title: '基础信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '基础标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '基础内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_spec: {
      title: '规格信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '规格标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '规格内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_service: {
      title: '服务信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '服务标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '服务内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_other: {
      title: '其他信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '其他标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '其他内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)
  const scrollElementRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={scrollElementRef}
      style={{
        display: 'flex',
        columnGap: 20,
        height: 500,
        padding: 10,
        border: '1px solid #ccc',
        // 设置外部元素滚动
        overflow: 'auto',
        // 设置元素为 “定位元素”
        position: 'relative',
      }}
    >
      <Core
        style={{
          maxWidth: 500,
          flexGrow: 1,
        }}
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <div
        style={{
          position: 'sticky',
          top: 0,
        }}
      >
        <Space direction="vertical">
          <Button
            onClick={() => {
              coreRef.current?.scrollTo('object_basic', {
                // 设置滚动容器元素
                positionedElement: scrollElementRef.current,
              })
            }}
          >
            移动到【基础信息】
          </Button>
          <Button
            onClick={() => {
              coreRef.current?.scrollTo(['object_spec', 'title'], {
                positionedElement: scrollElementRef.current,
                gap: -20,
              })
            }}
          >
            移动到【规格信息-规格标题-增加20px距离】
          </Button>
          <Button
            onClick={() => {
              coreRef.current?.scrollTo('object_other.content', {
                positionedElement: scrollElementRef.current,
              })
            }}
          >
            移动到【其他信息-其他内容】
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Demo
```

### 示例三 · 窗口滚动

如果要让窗口滚动，同样的方式，只需在 `scrollTo` 方法指定 `positionedElement` 参数为 `window` 即可，不过内部的滚动距离是只计算到 `body` 元素，因为 [offsetParent](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent) 最终只能定位到 `body` 元素，所以（也是常理情况下）body 和 html 元素不应该存在 margin 和 padding 值。

```tsx
import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import comRenderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  ...comRenderers,
  Object: Object as never,
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      required: true,
      renderOptions: { rows: 10 },
    },
    object_basic: {
      title: '基础信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '基础标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '基础内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_spec: {
      title: '规格信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '规格标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '规格内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_service: {
      title: '服务信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '服务标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '服务内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_other: {
      title: '其他信息',
      renderType: 'Object',
      properties: {
        title: {
          title: '其他标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '其他内容',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  return (
    <div
      style={{
        display: 'flex',
        columnGap: 20,
      }}
    >
      <Core
        style={{
          maxWidth: 500,
          flexGrow: 1,
        }}
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <div>
        <Space direction="vertical">
          <Button
            onClick={() => {
              coreRef.current?.scrollTo('object_basic', {
                // 设置滚动容器元素为 window
                positionedElement: window,
                // 76 是站点头部高度
                gap: -76,
              })
            }}
          >
            移动到【基础信息】
          </Button>
          <Button
            onClick={() => {
              coreRef.current?.scrollTo(['object_spec', 'title'], {
                positionedElement: window,
                gap: -96,
              })
            }}
          >
            移动到【规格信息-规格标题-增加20px距离】
          </Button>
          <Button
            onClick={() => {
              coreRef.current?.scrollTo('object_other.content', {
                positionedElement: window,
                gap: -76,
              })
            }}
          >
            移动到【其他信息-其他内容】
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Demo
```
