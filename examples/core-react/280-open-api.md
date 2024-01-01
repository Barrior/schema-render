---
group: 功能详解
order: 280
toc: content
---

# 开放 Ref API

内核通过 `ref` 属性开放的 API 方法如下：

- `validate`: 校验表单数据。
- `resetError`: 重置校验错误信息（含警告信息）。
- `resetValue`: 重置表单数据。
- `setValue`: 设置表单数据，可用于通用库封装，业务不建议使用这个 API。
- `getValue`: 获取表单数据，可用于通用库封装，业务不建议使用这个 API。
- `getRootElement`: 获取根节点 DOM 元素。

## validate

校验表单数据，如根据校验结果判断是否提交数据。

类型：`() => Promise<IOpenValidateResult>`

### 入参

无

### 出参

| **名称**        | **描述**       | **类型**  |
| --------------- | -------------- | --------- |
| **hasError**    | 是否存在错误   | `boolean` |
| **hasWarning**  | 是否存在警告   | `boolean` |
| **errorList**   | 错误表单项数据 | `array`   |
| **warningList** | 警告表单项数据 | `array`   |

### 示例

```tsx
import { useState, useRef } from 'react'
import { Button, message } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
      rules: [
        { min: 5, message: '标题最少 5 个字符' },
        { max: 10, message: '标题不能超过 10 个字符' },
      ],
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  // 提交逻辑处理
  async function handleSubmit() {
    const { hasError, errorList } = await coreRef.current!.validate()

    console.log('[validate] hasError: ', hasError)
    console.log('[validate] errorList: ', errorList)

    if (hasError) {
      return message.error('验证错误')
    }

    message.success('验证成功')

    // 验证成功后，提交数据...
  }

  return (
    <div>
      <Core
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Button type="primary" style={{ margin: '24px 0 0 115px' }} onClick={handleSubmit}>
        提交
      </Button>
    </div>
  )
}

export default Demo
```

## resetError

重置校验错误信息（含警告信息），如数据回填时，可用此方法重置错误信息

类型：`resetError: (paths?: string | string[]) => void`

### 入参

| **名称**  | **描述**                                                   | **类型**               |
| --------- | ---------------------------------------------------------- | ---------------------- |
| **paths** | 重置指定路径的表单项错误提示，没有指定路径则重置所有表单项 | `string` \| `string[]` |

### 出参

无

### 示例

```tsx
import { useState, useRef } from 'react'
import { Button, message } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
      rules: [
        { min: 5, message: '标题最少 5 个字符' },
        { max: 10, message: '标题不能超过 10 个字符' },
      ],
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  // 提交逻辑处理
  async function handleSubmit() {
    const { hasError } = await coreRef.current!.validate()

    if (hasError) {
      return message.error('验证错误')
    }

    message.success('验证成功')
  }

  // 重置错误提示信息
  const handleResetError = () => {
    coreRef.current!.resetError()
  }

  return (
    <div>
      <Core
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Button
        type="primary"
        style={{ margin: '24px 15px 0 115px' }}
        onClick={handleSubmit}
      >
        提交
      </Button>
      <Button onClick={handleResetError}>重置错误提示</Button>
    </div>
  )
}

export default Demo
```

## resetValue

重置表单数据。

### 入参

无

### 出参

无

### 示例

```tsx
import { useRef } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

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
    },
  },
}

const Demo = () => {
  const coreRef = useRef<ICoreRef>(null)

  // 重置数据
  const handleReset = () => {
    coreRef.current!.resetValue()
  }

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button style={{ margin: '24px 15px 0 115px' }} onClick={handleReset}>
        重置
      </Button>
    </div>
  )
}

export default Demo
```

## getRootElement

获取根节点 DOM 元素。

类型：`getRootElement: () => HTMLDivElement | null`

### 入参

无

### 出参

根节点 DOM 元素或空

### 示例

```tsx
import { useRef } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

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
    },
  },
}

const Demo = () => {
  const coreRef = useRef<ICoreRef>(null)

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button
        style={{ margin: '24px 15px 0 115px' }}
        type="primary"
        onClick={() => {
          const rootElement = coreRef.current?.getRootElement()
          console.log('rootElement:', rootElement)
        }}
      >
        获取根节点 DOM 元素，请在控制台查看
      </Button>
    </div>
  )
}

export default Demo
```
