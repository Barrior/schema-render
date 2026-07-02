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
  const [isDisabled, setIsDisabled] = useState(false)
  const [isReadonly, setIsReadonly] = useState(false)
  const [value, setValue] = useState<object>({
    Description: '纯展示的内容吧啦吧啦',
  })

  const registerActions = useMemo(() => {
    return {
      disable: () => (
        <Button type="dashed" onClick={() => setIsDisabled(!isDisabled)}>
          {isDisabled ? '取消' : '设为'} disabled 状态
        </Button>
      ),
      readonly: () => (
        <Button type="dashed" onClick={() => setIsReadonly(!isReadonly)}>
          {isReadonly ? '取消' : '设为'} readonly 状态
        </Button>
      ),
    }
  }, [isReadonly, isDisabled])

  return (
    <div className="example-layout-cols-2">
      <FormRender
        rootClassName={styles.builtinRenderers}
        labelWidth={230}
        schema={schema}
        value={value}
        onChange={setValue}
        actions={['submit', 'reset', 'disable', 'readonly']}
        registerActions={registerActions}
        // 是否禁用态
        disabled={isDisabled}
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

## 公共区

只读态时，多项选择器的内容是通过`逗号`拼接在一起的，参考 `locale` 的 [FormRender.comma](https://github.com/Barrior/schema-render/blob/main/packages/form-render-react/src/locale/zh_CN.ts#L10)。

## Description

非 Antd Descriptions 组件，无入参，仅作纯数据展示。

## SwitchBox <Badge>v1.4.0</Badge>

FormRender v1.4.0 开始支持 SwitchBox 渲染器，通过 `renderOptions.text` 定义描述文案。

## Checkbox

- onChange 事件支持 `extra.checkedOptions` 参数，表示当前选中的 `options` 数据。案例见[Checkbox 选中值联动](./880-relation-checkbox)。<Badge>v1.4.0</Badge>

## SelectMultiple

- onChange 事件支持 `extra.selectedOptions` 参数，表示当前选中的 `options` 数据。<Badge>v1.4.0</Badge>

## DatePicker

默认返回 [ISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) 格式的日期值，该值可以很好的支持跨时区的需要。

通过 `outputFormat` 可控制输出格式。<Badge>v2.2.0</Badge>

## DateRangePicker

默认返回 ISOString 格式的日期值。

通过 `outputFormat` 可控制输出格式。<Badge>v2.2.0</Badge>

控制值格式：<Badge>v2.3.0</Badge>

- `valueStruct`: `object | array`, `object` 表示值为对象格式，此时通过 `valueFieldMap` 可控制字段名称。
- `valueFieldMap`: 对象格式时可用，`{ start: '定义开始时间字段名', end: '定义结束时间字段名' }`。

只读态时，文案展示可以通过配置 `locale` 的 [FormRender.displayDateRange](https://github.com/Barrior/schema-render/blob/main/packages/form-render-react/src/locale/zh_CN.ts#L11) 来自定义。

## Object

- `renderOptions.headerOptions` 可以配置对象容器头部的参数，对应 Antd [Collapse](https://ant-design.antgroup.com/components/collapse-cn#collapse) 组件参数。
- `renderOptions.panelOptions` 可以配置对象容器内容面板的参数，对应 Antd [Collapse.Panel](https://ant-design.antgroup.com/components/collapse-cn#collapse) 组件参数。

## ObjectNull

只渲染子节点的对象容器，应用场景：步骤表单。

- 接受 `className` 和 `style` 属性。
