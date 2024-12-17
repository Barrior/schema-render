---
group:
  title: 案例集锦
  order: 854
toc: content
---

# 滚动到第一个错误项

业务场景

- 当表单项过多时容器存在滚动条，点击提交按钮时应该定位到第一个错误表单项以提醒用户。

实现方案

- 通过 `validate` 校验表单数据，得到错误项数据，再通过 `scrollTo` 滚动到指定位置。

```tsx
/**
 * defaultShowCode: true
 */
import { useState, useRef } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderRef,
} from '@schema-render/form-render-react'

function createSchema() {
  const schema: IFormRenderRootSchema = {
    renderType: 'Root',
    properties: {},
  }

  for (let i = 1; i <= 30; i++) {
    const field = `field_${i}`
    schema.properties[field] = {
      title: `标题_${i}`,
      renderType: 'InputText',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '至少需要输入 5 个字符' }],
    }
  }

  return schema
}

const schema = createSchema()

const Demo = () => {
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  const handleSubmit = async () => {
    const res = await formRenderRef.current?.validate()
    if (res?.hasError) {
      formRenderRef.current?.scrollTo(res.errorList[0].path, {
        // 76 是官网文档页头高度
        gap: -76,
        positionedElement: window,
      })
    }
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        validateFormOnSubmit={false}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
