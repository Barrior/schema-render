---
order: 1
toc: content
---

# 介绍

`FormRender` 是基于 Core + Antd 封装的表单渲染库，内置了布局结构以及常用的表单渲染器集合，以达到 **开箱即用** 。

特性如下：

- 纵向与横向布局结构，详见[布局结构 itemLayout](./100-item-layout.md)
- 布局结构可配置 label 宽度等内容，详见[标题设置 label](./200-label.md)
- 行为操作特性，如提交、重置，详见[行为操作 actions](./300-actions.md)
- 常用的表单渲染器集合，详见[内置渲染器 renderers](./500-builtin-renderers.md)

## 安装

```bash
npm install @schema-render/form-render-react --save
```

## 使用

```jsx
/**
 * defaultShowCode: true
 */
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { useState } from 'react'
import { message } from 'antd'

// 引入 FormRender
import FormRender from '@schema-render/form-render-react'

// 定义 Schema 描述
const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '用户名',
      renderType: 'InputText',
      description: '用户名最多20个字符',
      renderOptions: {
        maxLength: 20,
      },
      required: true,
    },
    password: {
      title: '密码',
      description: '请输入6~10个字符，只能输入英文字母和数字',
      renderType: 'Password',
      renderOptions: {
        minLength: 6,
        maxLength: 20,
      },
      required: true,
      rules: [
        { min: 6, message: '请输入至少 6 个字符' },
        { max: 20, message: '最多只能 20 个字符' },
        { pattern: '^[A-Za-z0-9]+$', message: '只能输入英文字母和数字' },
      ],
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        // 接收提交事件
        onSubmit={() => {
          message.success('提交成功')
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```
