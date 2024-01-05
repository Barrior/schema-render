---
order: 500
toc: content
---

# 内置渲染器 renderers

`FormRender` 内置了常用的表单渲染器集合

```tsx
import { useState, useMemo } from 'react'
import { Button } from 'antd'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import * as styles from './styles'

// 引入所有渲染器的 Schema
import schema from './schemas/all'

const Demo = () => {
  const [isReadonly, setIsReadonly] = useState(false)
  const [value, setValue] = useState<object>({
    Description: '纯展示的内容吧啦吧啦',
  })

  const registerActions = useMemo(() => {
    return {
      readonly: () => (
        <Button type="dashed" onClick={() => setIsReadonly(!isReadonly)}>
          {isReadonly ? '取消 ' : '设置为 '}readonly 状态
        </Button>
      ),
    }
  }, [isReadonly])

  return (
    <div className="example-layout-cols-2">
      <FormRender
        rootClassName={styles.builtinRenderers}
        labelWidth={230}
        schema={schema}
        value={value}
        onChange={setValue}
        actions={['submit', 'reset', 'readonly']}
        registerActions={registerActions}
        // 是否只读状态
        readonly={isReadonly}
        // 只读状态没有数据时的占位符
        readonlyPlaceholder={<span style={{ color: '#666', fontSize: 14 }}>-</span>}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

如无特别说明，内置渲染器的参数可以通过 `schema.renderOptions` 传递，对应 [Antd](https://ant-design.antgroup.com/components/overview-cn/) 组件的参数。

## Description

非 Antd Descriptions 组件，无入参，仅作纯数据展示。

## DatePicker

返回 [ISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) 格式的日期值，该值可以更好的支持跨时区的需要。

## DateRangePicker

返回 ISOString 格式的日期值。

## Object

- `renderOptions.headerOptions` 可以配置对象容器头部的参数，对应 Antd [Collapse](https://ant-design.antgroup.com/components/collapse-cn#collapse) 组件参数
- `renderOptions.panelOptions` 可以配置对象容器内容面板的参数，对应 Antd [Collapse.Panel](https://ant-design.antgroup.com/components/collapse-cn#collapse) 组件参数
