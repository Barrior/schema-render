---
group:
  title: 案例集锦
  order: 853
toc: content
---

# 失去焦点时校验 onBlur

业务场景

- 内置 InputText、TextArea 等渲染器，存在最小长度校验时，希望在输入的时候不校验数据，在失去焦点（`onBlur`）时才校验数据正确性。

实现方案

- 内置 InputText、TextArea 等渲染器，通过在 renderOptions 上设置 `validateOnBlur: true` 属性可实现上述需求。
- 设置该属性的内置渲染器有：
  - `InputText`
  - `InputNumber`
  - `Password`
  - `TextArea`

```tsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '至少需要输入 5 个字符' }],
    },
    amount: {
      title: '总额',
      renderType: 'InputNumber',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 50, message: '总额不能少 50' }],
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '至少需要输入 5 个字符' }],
    },
    password: {
      title: '密码框',
      renderType: 'Password',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '至少需要输入 5 个字符' }],
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender schema={schema} value={value} onChange={setValue} />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
