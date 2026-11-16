---
group: 功能详解
order: 210
toc: content
---

# 数据联动 Relation

数据联动有三种方式：`onChange`、`watch`，以及渲染器内部用 `useFieldValue` 精确订阅。

## onChange 方式

在触发 `onChange` 事件时，通过改变数据实现。

```tsx
import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

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
    x: {
      title: '横坐标',
      renderType: 'InputNumber',
    },
    y: {
      title: '纵坐标',
      renderType: 'InputNumber',
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
        /* 传递表单数据 */
        value={value}
        /* 监听事件并处理联动关系 */
        onChange={(formData, event) => {
          // 宽度或高度变化时，联动数据保持一致
          if (event.sPath === 'width' || event.sPath === 'height') {
            formData.width = event.value
            formData.height = event.value
          }

          // 设置表单数据
          setValue(formData)
        }}
      />

      {/* 打印表单数据 */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## watch 方式

`watch` 方式是 `onChange` 方式的一种便捷写法，避免大量 `if` 语句，从而提高代码清晰度以及研发效率。

`watch` 匹配的是 `sPath` 路径值，如果是嵌套路径值，则使用点 `.` 拼接表示，如 `objectX.width`。

```tsx
import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

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
    x: {
      title: '横坐标',
      renderType: 'InputNumber',
    },
    y: {
      title: '纵坐标',
      renderType: 'InputNumber',
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
        /* 处理联动关系：监听宽高变化，联动宽高数据保持一致 */
        watch={{
          width: (formData) => {
            formData.height = formData.width
          },
          height: (formData) => {
            formData.width = formData.height
          },
        }}
        /* 传递表单数据 */
        value={value}
        /* 接收表单数据 */
        onChange={setValue}
      />

      {/* 打印表单数据 */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## 实践案例：银行账户联动

联动对象数据可以通过 `extra` 属性来处理。

```jsx
import { useState } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Horizontal from './item-layout/Horizontal'

const renderers = {
  BankSelect: {
    component: ({ value, sPath, onChange }) => {
      const handleBankSelect = () => {
        const random = String(Math.random()).slice(2, 6)
        const bankData = {
          bank_id: `id_${random}`,
          bank_account: `111222333${random}`,
          bank_name: `招财猫银行${random}`,
          bank_branch_name: `招财猫成都${random}支行`,
        }
        // 银行账户数据通过 extra 属性透传到外部用于联动处理
        onChange(bankData[sPath], {
          extra: bankData,
        })
      }

      const style = {
        display: 'flex',
        width: 160,
        padding: '4px 10px',
        marginRight: 10,
        border: '1px solid #ececec',
        borderRadius: 6,
      }

      return (
        <div style={{ display: 'flex' }}>
          {/* 展示当前表单项值 */}
          <div style={style}>{value}</div>
          <Button onClick={handleBankSelect}>选择账户</Button>
        </div>
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    bank_account: {
      title: '银行账号',
      renderType: 'BankSelect',
    },
    bank_name: {
      title: '开户银行',
      renderType: 'BankSelect',
    },
    bank_branch_name: {
      title: '开户支行',
      renderType: 'BankSelect',
    },
  },
}

// 联动逻辑处理
const bankRelation = (formData, event) => {
  formData.bank_id = event.extra.bank_id
  formData.bank_account = event.extra.bank_account
  formData.bank_name = event.extra.bank_name
  formData.bank_branch_name = event.extra.bank_branch_name
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        /* 监听关联表单项变化，联动逻辑处理 */
        watch={{
          bank_account: bankRelation,
          bank_name: bankRelation,
          bank_branch_name: bankRelation,
        }}
        value={value}
        onChange={setValue}
      />

      {/* 打印表单数据 */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## useFieldValue 方式（渲染器内部联动）

前两种方式都是**改数据**。如果只是**读取其它字段做展示或计算**（不写数据），用 `useFieldValue` 精确订阅更合适：
配合渲染器的 `pure: true`，只有被订阅的字段变化时才重渲染，其它字段怎么变都与它无关。

```tsx
import { useState } from 'react'
import Core, { useFieldValue } from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

/**
 * 只读联动组件：订阅「数量」和「单价」，展示「合计」
 * pure: true —— 框架不再因其它字段变化而重渲染它，更新由自己的订阅驱动
 */
const AmountSummary = () => {
  const quantity = useFieldValue('quantity')
  const price = useFieldValue('price')
  const total = (Number(quantity) || 0) * (Number(price) || 0)

  return (
    <div style={{ lineHeight: '32px' }}>
      合计：<strong>{total}</strong>
    </div>
  )
}

const schema = {
  renderType: 'Root',
  properties: {
    quantity: {
      title: '数量',
      renderType: 'InputNumber',
    },
    price: {
      title: '单价',
      renderType: 'InputNumber',
    },
    remark: {
      title: '备注',
      renderType: 'InputText',
    },
    summary: {
      title: '合计',
      renderType: 'AmountSummary',
    },
  },
} as const

const formRenderers = {
  ...renderers,
  AmountSummary: { component: AmountSummary, pure: true },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={formRenderers}
        value={value}
        onChange={setValue}
      />

      {/* 打印表单数据 */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

**使用要点**

- 路径支持字符串与数组两种写法：`useFieldValue('quantity')`、`useFieldValue(['nested', 'name'])`；
- 只负责**读**，不写数据；需要写数据仍然用 `onChange` 或 `watch`；
- **渲染器必须声明 `pure: true`**，否则每一轮输入都会被框架重渲染，订阅就失去了意义；
- 路径要静态可写（不能运行时拼接字段名），这样才能被静态识别为依赖。

在上面的例子中，输入「备注」不会触发「合计」重渲染；输入「数量」或「单价」才会。

打开渲染日志后，联动更新会打印：

```
useFieldValue AmountSummary(summary) ← quantity 第 N 次渲染 (订阅通知)
```

读法：`<渲染器类型>(<所在字段 path>) ← <依赖字段 path>`——即「字段 summary 上的 AmountSummary 组件，因为 quantity 变化而在内部重渲染」。

注意更新的方向：这是**组件自己重渲染**，不是框架带着它重渲染。`useFieldValue` 内部的 state 更新属于该组件实例，React 只重渲染它及其子树；父级的 `RendererExecutor` 不会跟着重渲染，所以不会出现 `RendererExecutor summary` / `renderer:AmountSummary`。如果看到这两条，说明是另一条触发源（字段自身值变化、校验状态变化、父级重渲染）驱动的，日志括号里会写明原因。
