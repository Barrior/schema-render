---
group:
  title: 案例集锦
  order: 881
toc: content
---

# 联动 - SelectMultiple 选中值

与 Checkbox 渲染器一样，不过名称为字段名是 `selectedOptions`。

## Schema 方式实现

【可选城市】依赖【可选城市范围】的数据

```jsx
import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

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
      renderOptions: {},
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

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
            console.log(event)
            // 修改 schema 参数，重新渲染的时候会被应用
            schema.properties.available_cities.renderOptions.options =
              event.extra.selectedOptions

            // 已选中的值不在范围内，则清楚
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
