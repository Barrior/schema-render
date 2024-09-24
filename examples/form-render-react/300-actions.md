---
order: 300
toc: content
---

# 行为操作 actions

`FormRender` 内置了`提交`与`重置`操作，相关 API 如下文所述。

## onSubmit 提交事件

提交事件会在点击「提交」按钮，或在表单内按下回车键触发。

- 类型：`(value: IObjectAny) => IMaybePromise<void>`
- `value`: 表单数据

```tsx
import { useState, useRef } from 'react'
import { message } from 'antd'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { sleep } from '@examples/utils'

import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRef } from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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
  const formRenderRef = useRef<IFormRenderRef>(null)

  const handleSubmit = async () => {
    const { hasError } = await formRenderRef.current!.validate()

    if (hasError) {
      message.error('表单存在错误，请填写正确后再提交')
      return
    }

    await sleep()
    message.success('注册成功')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## onReset 重置事件

点击重置按钮的时候触发重置事件

- 类型：`(value: IObjectAny) => IMaybePromise<void>`
- `value`: 重置后的表单数据

```tsx
import { useState } from 'react'
import { message } from 'antd'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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

  const handleReset = () => {
    message.success('重置完成')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onReset={handleReset}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

重置事件支持异步，此时按钮会增加 loading 效果。

```tsx
import { useState } from 'react'
import { message } from 'antd'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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

  const handleReset = async () => {
    await sleep()
    message.success('重置完成')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onReset={handleReset}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## onBeforeReset 重置前置事件

重置前置事件会在 `onReset` 之前触发，如果返回对象数据，则会作为重置后的表单数据。

- 类型：`(value: IObjectAny) => IMaybePromise<IObjectAny | void>`
- `value`: 当前表单数据

```tsx
import { useState } from 'react'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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

  const handleBeforeReset = async () => {
    await sleep()
    return {
      account: `张三${Date.now()}`,
    }
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onBeforeReset={handleBeforeReset}
        onReset={(formData) => {
          console.log('formData:', formData)
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## actions 配置操作

`actions` 属性可以配置操作按钮是否展示及其顺序，默认 `actions` 等于 `['submit', 'reset']`。

支持列表如下：

- `submit`: 提交
- `reset`: 重置

```tsx
/**
 * title: 配置顺序
 * description: 配置 `actions` 为 `['reset', 'submit']` 调换按钮位置
 */
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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
        schema={schema}
        value={value}
        onChange={setValue}
        actions={['reset', 'submit']}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

## registerActions 注册操作

### 注册自定义操作

通过 `registerActions` 可以注册自定义操作

```tsx
import { useState } from 'react'
import { message, Button } from 'antd'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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

  const handleSubmit = async () => {
    await sleep()
    message.success('提交成功')
  }

  const handleExport = () => {
    message.success('导出成功')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        // 对于注册的自定义操作，需要通过 actions 使用
        actions={['submit', 'reset', 'export']}
        registerActions={{
          // export 是操作名称
          // 对应的函数是操作对应的 UI 展示与功能
          export: ({ loading }) => {
            return (
              <Button
                type="primary"
                // 提交与重置按钮在 loading 状态时，禁用导出
                disabled={loading.submit || loading.reset}
                onClick={handleExport}
              >
                导出
              </Button>
            )
          },
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

### 覆盖默认操作

操作名称是 `submit`、`reset`，将覆盖原有行为，如覆盖提交按钮，增加【二次确认】的操作，以及添加图标。

```tsx
import { useState, useRef } from 'react'
import { message, Button, Popconfirm } from 'antd'
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRef, IRegisterActions } from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
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

/**
 * 操作名称是 submit、reset，将覆盖原有样式
 */
const registerActions: IRegisterActions = {
  submit: ({ handleSubmit, loading }) => {
    return (
      <Popconfirm title="温馨提示" description="确定要提交吗？" onConfirm={handleSubmit}>
        <Button loading={loading.submit} type="primary" icon={<UploadOutlined />}>
          提交
        </Button>
      </Popconfirm>
    )
  },
  reset: ({ handleReset, loading }) => {
    return (
      <Button loading={loading.reset} onClick={handleReset} icon={<DeleteOutlined />}>
        重置
      </Button>
    )
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  const handleSubmit = async () => {
    const { hasError } = await formRenderRef.current!.validate()

    if (hasError) {
      message.error('表单存在错误，请填写正确后再提交')
      return
    }

    await sleep()
    message.success('注册成功')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        registerActions={registerActions}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

### 参数详解

`registerActions` 注册项的类型为：`(p: IRegisterActionsFnParams) => ReactNode`

`IRegisterActionsFnParams` 参数详解如下表格

| **参数**         | **描述**                             | **类型**                               |
| ---------------- | ------------------------------------ | -------------------------------------- |
| **handleSubmit** | 当操作名称为 `submit` 时，存在该事件 | `() => void`                           |
| **handleReset**  | 当操作名称为 `reset` 时，存在该事件  | `() => void`                           |
| **loading**      | 提交与重置事件的 `loading` 状态      | `{ submit: boolean; reset: boolean; }` |
| **disabled**     | 全局禁用状态                         | `boolean`                              |
| **locale**       | 当前语言数据                         | `object`                               |

## 其他相关 API 详解

| **参数**                       | **描述**                                                                              | **类型**  | **默认值** |
| ------------------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- |
| **disableFormOnActionLoading** | 当操作行为按钮处于 loading 状态时，是否禁用表单                                       | `boolean` | `true`     |
| **validateFormOnSubmit**       | 触发 onSubmit 事件前是否执行表单校验，默认为 true，校验不通过将不会触发 onSubmit 事件 | `boolean` | `true`     |
