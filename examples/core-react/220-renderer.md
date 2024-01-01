---
group: 功能详解
order: 220
toc: content
---

# 渲染器 Renderer

渲染器是主要内容定义的地方，属性如下：

- `component`: 注册渲染器组件，渲染主要内容，`ReactNode` 类型。
- `formItem`: 注册渲染器组件，渲染主要内容，可独立定义布局结构（不受限于 itemLayout 布局），`ReactNode` 类型。
- `validator`: 渲染器内置校验器，定义与渲染器绑定的校验规则。

## component

`component` 模式是常用的定义渲染器组件的方式，因为不需要编写标题与内容的布局结构，由 `itemLayout` 统一管理。

下面通过 `component` 模式实现一个自定义评分渲染器。

```tsx
import { Rate } from 'antd'
import Core from '@schema-render/core-react'
import type { IRenderers, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'

const renderers: IRenderers = {
  // 定义渲染器名称
  MyRate: {
    // 定义渲染内容，如果属性一致，亦可写成这样 component: Rate
    component: ({ disabled, value, onChange }) => {
      return <Rate disabled={disabled} value={value} onChange={onChange} />
    },
  },
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    rate: {
      title: '评分',
      // 使用对应渲染器名称
      renderType: 'MyRate',
    },
  },
}

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      /* 注册渲染器 */
      renderers={renderers}
    />
  )
}

export default Demo
```

### component 参数详解

> 如果是 TypeScript 项目，可以通过 `IOpenComponentParams` 类型了解所有的参数及其注解。

| **参数**        | **说明**                                     | **类型**   |
| --------------- | -------------------------------------------- | ---------- |
| **schema**      | Schema 协议描述对象                          | `ISchema`  |
| **value**       | 当前表单项的值                               | `any`      |
| **rootValue**   | 表单整体数据                                 | `object`   |
| **path**        | 当前表单项的路径                             | `array`    |
| **sPath**       | 当前表单项的路径字符串格式表示               | `string`   |
| **required**    | 是否必填，值为计算后的结果                   | `boolean`  |
| **disabled**    | 是否禁用态，值为计算后的结果                 | `boolean`  |
| **readonly**    | 是否只读态，值为计算后的结果                 | `boolean`  |
| **locale**      | 国际化语言数据                               | `object`   |
| **userCtx**     | 用户全局上下文数据                           | `object`   |
| **objectStyle** | 对象类型样式                                 | `object`   |
| **validator**   | 校验器信息，包含校验状态、提示消息与附加数据 | `object`   |
| **onChange**    | 表单项值回调事件                             | `Function` |

### onChange 事件详解

- 函数类型：`(value: any, options?: IOpenChangeOptions) => void`
- `options` 可选参数如下：
  - `triggerValidator`: 是否触发校验器，`boolean` 类型。
  - `extra`: 携带的额外数据，任意类型。

## formItem

`formItem` 模式适用于需要突破 `itemLayout` 的限制，独自定义表单项的布局的场景。

同样以评分渲染器为例，将表单项的标题加粗加红来展示。

```tsx
import { Rate } from 'antd'
import Core from '@schema-render/core-react'
import type { IRenderers, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'

const renderers: IRenderers = {
  // 定义渲染器名称
  MyRate: {
    // formItem 模式定义渲染内容
    formItem: ({ schema, disabled, value, onChange }) => {
      return (
        <div>
          <strong style={{ color: 'red', marginRight: 10 }}>【{schema.title}】</strong>
          <Rate disabled={disabled} value={value} onChange={onChange} />
        </div>
      )
    },
  },
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    rate: {
      title: '评分',
      // 使用对应渲染器名称
      renderType: 'MyRate',
    },
  },
}

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      /* 注册渲染器 */
      renderers={renderers}
    />
  )
}

export default Demo
```

### formItem 参数详解

> 如果是 TypeScript 项目，可以通过 `IOpenFormItemParams` 类型了解所有的参数及其注解。

目前 `formItem` 参数与 `component` 参数一致。

## validator

渲染器内置校验器，定义与渲染器绑定的校验规则；详情见 [Renderer Validator](./223-validator#renderer-validator)。
