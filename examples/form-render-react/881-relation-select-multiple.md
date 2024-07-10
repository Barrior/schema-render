---
group:
  title: 案例集锦
  order: 881
toc: content
---

# 联动 - SelectMultiple 选中值

与 Checkbox 渲染器一样，不过字段名是 `selectedOptions`。

## Schema 方式实现

【可选城市】依赖【可选城市范围】的数据

```jsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

function createSchema(available_cities_options = []) {
  const schema = {
    renderType: 'Root',
    properties: {
      cities: {
        title: '设置可选城市范围',
        renderType: 'SelectMultiple',
        renderOptions: {
          options: [
            { label: '成都', value: 'chengdu' },
            { label: '杭州', value: 'hangzhou' },
            { label: '深圳', value: 'shenzhen' },
            { label: '北京', value: 'beijing' },
          ],
        },
      },
      available_cities: {
        title: '设置可选城市',
        renderType: 'Checkbox',
        renderOptions: {
          options: available_cities_options,
        },
      },
    },
  }
  return schema
}

const Demo = () => {
  const [value, setValue] = useState({})
  const [schema, setSchema] = useState(() => createSchema())

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={180}
        actions={[]}
        schema={schema}
        value={value}
        onChange={setValue}
        watch={{
          cities: (formData, event) => {
            // 基于下拉选中项，重新创建 schema 渲染
            setSchema(createSchema(event.extra.selectedOptions))

            // 已选中的值不在范围内，则清除
            if (!event.value.includes(formData.available_cities)) {
              formData.available_cities = undefined
            }
          },
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
