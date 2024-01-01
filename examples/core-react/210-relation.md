---
group: 功能详解
order: 210
toc: content
---

# 数据联动 Relation

数据联动有两种方式实现，分别是 `onChange` 和 `watch` 两种方式。

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
        borderRadius: 6
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
} as const

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
          bank_branch_name: bankRelation
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
