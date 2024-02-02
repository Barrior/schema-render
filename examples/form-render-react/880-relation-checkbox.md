---
group:
  title: 案例集锦
  order: 880
toc: content
---

# 联动 - Checkbox 选中值

某个表单项选中后的值联动到其他表单项使用，有两种方式

- 通过 `自定义渲染器` + `userCtx` 实现
- 通过修改 `Schema` 的 `renderOptions` 属性实现

## 自定义渲染器实现

【可选城市】依赖【可选城市范围】的数据

```jsx
import { useState, useRef } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import { Select } from 'antd'

// 自定义渲染器
const AvailableCities = {
  component: ({ schema, value, disabled, validator, onChange, userCtx }) => {
    // 优先使用 userCtx.cityList 作为数据
    const options = userCtx.cityList || schema.renderOptions?.options

    return (
      <Select
        allowClear
        style={{ width: '100%' }}
        placeholder={`请选择${schema.title}`}
        {...schema.renderOptions}
        options={options}
        status={validator.status}
        mode={undefined}
        value={value}
        onChange={(val) => onChange(val)}
        disabled={disabled}
      />
    )
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    cities: {
      title: '设置可选城市范围',
      renderType: 'Checkbox',
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
      // 使用自定义渲染器
      renderType: 'AvailableCities',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const userCtx = useRef({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={180}
        actions={[]}
        schema={schema}
        value={value}
        onChange={setValue}
        // 注册渲染器
        renderers={{ AvailableCities }}
        // 处理联动逻辑
        watch={{
          cities: (formData, event) => {
            // 将可选城市范围数据赋值给 userCtx
            userCtx.current.cityList = event.extra.checkedOptions

            // 已选中的值不在范围内，则清楚
            if (!event.value.includes(formData.available_cities)) {
              formData.available_cities = undefined
            }
          },
        }}
        // 传递 userCtx 数据
        userCtx={userCtx.current}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

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
      renderType: 'Checkbox',
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
      renderType: 'Select',
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
            // 修改 schema 参数，重新渲染的时候会被应用
            schema.properties.available_cities.renderOptions.options =
              event.extra.checkedOptions

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
