---
group:
  title: 案例集锦
  order: 852
toc: content
---

# 渲染器案例-审核结果

业务场景

- 切换审核状态，校验不触发。
- 审核失败时，未输入失败原因需要触发校验。

技术实现

- 切换审核状态时，设置 `triggerValidator: false` 达到不触发校验的功能，同时清楚已有的错误提示。
- 审核失败输入框输入时，设置 `triggerValidator: true` 触发校验。

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type {
  IOpenComponentParams,
  IOpenValidatorParams,
  IRenderers,
} from '@schema-render/core-react'
import { Input, Radio } from 'antd'

type IValue = {
  // 审核类型
  type: number
  // 审核失败原因
  failReason?: string
}

type IProps = React.FC<IOpenComponentParams<IValue>>

/**
 * 审核结果状态
 */
const AUDIT_STATUS_OPTIONS = [
  { label: '审核通过', value: 1 },
  { label: '审核失败', value: 2 },
]

/**
 * 审核结果渲染器
 */
const Audit: IProps = ({ disabled, value, onChange, validator }) => {
  const emitChange = (nextValue: Partial<IValue>) => {
    onChange(
      { ...value!, ...nextValue },
      { triggerValidator: nextValue.hasOwnProperty('type') ? false : true }
    )
  }

  const hasExtraContent = value?.type === 2

  return (
    <div>
      <Radio.Group
        options={AUDIT_STATUS_OPTIONS}
        value={value?.type ?? null}
        onChange={(e) => emitChange({ type: e.target.value })}
        disabled={disabled}
      />
      <div style={{ marginTop: hasExtraContent ? 5 : 0 }}>
        {hasExtraContent && (
          <Input.TextArea
            placeholder="请输入失败原因"
            autoFocus
            showCount
            maxLength={200}
            status={validator.status as never}
            disabled={disabled}
            value={value.failReason}
            onChange={(e) => emitChange({ failReason: e.target.value })}
          />
        )}
      </div>
    </div>
  )
}

const renderers: IRenderers = {
  Audit: {
    component: Audit,
    validator: ({ value }: IOpenValidatorParams<IValue>) => {
      if (value?.type === 2 && !value.failReason) {
        return {
          status: 'error',
          message: '请输入失败原因',
        }
      }
    },
  },
}

const schema = {
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
    audit: {
      title: '审核结果',
      renderType: 'Audit',
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
        renderers={renderers}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
