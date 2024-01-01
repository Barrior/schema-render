---
order: 200
toc: content
---

# 标题设置 label

`label` 相关的配置主要针对于 `itemLayout` 为 `horizontal` 的场景。

可以配置宽度、间距、冒号、以及自定义渲染。

## 宽度设置

`labelWidth` 属性可以设置 “标题块” 的宽度，支持 `number` 与 `string` 类型。

```tsx
/**
 * title: number 类型
 * description: number 类型用于设置固定数值
 */

import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
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
        // 设置数值类型宽度
        labelWidth={100}
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

```tsx
/**
 * title: string 类型
 * description: string 类型，通常是 CSS 属性，如 `max-content`
 */

import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
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
        // 设置 CSS 属性
        labelWidth="max-content"
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

## 冒号设置

`labelColon` 属性控制冒号符号，默认无。

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
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
        labelWidth={100}
        labelGap={0}
        // 设置冒号
        labelColon="："
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

## 自定义渲染

`labelRender` 可以自定义“标题块”的渲染内容，如必填 `*` 号标记调整为 `(可选)` 这样的形式。

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'

import FormRender from '@schema-render/form-render-react'
import type { ILabelRender } from '@schema-render/form-render-react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popover } from 'antd'

const schema = {
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
    gender: {
      title: '性别',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' },
        ],
      },
    },
  },
} as const

// 自定义渲染
const labelRender: ILabelRender = ({ schema, required, prefixClassNames }) => {
  return (
    <div>
      {/* 标题 */}
      {schema.title}

      {/* 标题描述信息 */}
      {!!schema.titleDescription && (
        <Popover placement="top" trigger="hover" content={schema.titleDescription}>
          <QuestionCircleOutlined
            className={prefixClassNames('item-title-tooltip')}
            style={{ marginLeft: 4 }}
          />
        </Popover>
      )}

      {/* 必填标记处理 */}
      {!required && ' (可选)'}
    </div>
  )
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={100}
        labelRender={labelRender}
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

## 参数详解

| **名称**        | **说明**                                                          | **类型**                | **默认值** |
| --------------- | ----------------------------------------------------------------- | ----------------------- | ---------- |
| **labelWidth**  | 设置 label 的宽度，仅 `itemLayout` 为 `horizontal` 有效           | `number \| string`      | `100`      |
| **labelGap**    | 设置 label 与右侧内容的间距，仅 `itemLayout` 为 `horizontal` 有效 | `number`                | `15`       |
| **labelColon**  | 定义 label 冒号                                                   | `ReactNode`             | `-`        |
| **labelRender** | 自定义 label 渲染                                                 | `(params) => ReactNode` | `-`        |

### labelRender 参数详解

除了拥有 `labelWidth`、`labelGap`、`labelColon` 外，还拥有以下参数。

| **参数**             | **说明**                                                                                                | **类型**                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **schema**           | Schema 协议描述对象                                                                                     | `ISchema`                                       |
| **required**         | 是否必填，值为计算后的结果                                                                              | `boolean`                                       |
| **disabled**         | 是否禁用态，值为计算后的结果                                                                            | `boolean`                                       |
| **readonly**         | 是否只读态，值为计算后的结果                                                                            | `boolean`                                       |
| **locale**           | 当前语言数据                                                                                            | `object`                                        |
| **userCtx**          | 用户全局上下文数据                                                                                      | `object`                                        |
| **prefixClassNames** | 对 [classnames](https://www.npmjs.com/package/classnames) 导出方法的包装，带有 prefixCls 前缀的类名方法 | `(...args: classNames.ArgumentArray) => string` |
