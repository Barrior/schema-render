---
group: 介绍
toc: content
---

# 快速上手

## 安装

```bash
npm install @schema-render/core-react --save
```

## 使用

**步骤一：** 需要先组装必须的部件 `itemLayout`（表单项布局）、`Renderers`（渲染器集合）使 Core 运行完整。

- `itemLayout`: 定义表单项的布局结构，详情请参见 [布局结构 itemLayout](./101-item-layout)
- `Renderers`: 注册渲染器，渲染表单项的主体内容，`schema 协议` 的 `renderType` 字段指向其名称，详情请参见 [渲染器 Renderer](./220-renderer)

**步骤二：** 然后通过声明 `Schema 协议` 来描述需要渲染什么样的表单。

- 协议详情请参见 [协议介绍 Schema](./003-schema)

**步骤三：** 可选步骤，通过 `onChange` 事件获取表单的整体数据。

- 事件详情请参见 [数据回调 ChangeEvent](./200-change-event)

**步骤四：** 可选步骤，通过 `value` 参数实现表单数据自己控制。

- 参考阅读：[状态受控与非受控](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

### 示例一

步骤一和步骤二

```jsx
/**
 * defaultShowCode: true
 */
import Core from '@schema-render/core-react'
import { Input } from 'antd'

/**
 * 定义统一的表单项布局结构，这里是很简化的实现
 */
const VerticalItemLayout = ({ schema, body }) => {
  return (
    <div>
      {/* 展示 Schema 协议标题 */}
      <h3>{schema.title}</h3>

      {/* 展示主要内容 */}
      <div>{body}</div>
    </div>
  )
}

/**
 * 注册渲染器
 */
const renderers = {
  /* 定义渲染器名称，给协议的 renderType 使用 */
  InputText: {
    /*
     * component 是渲染器其中的一个属性，用于定义渲染内容，
     * 详情请参见「渲染器 Renderer」章节
     */
    component: ({ schema, value, onChange }) => {
      return (
        <Input
          /* 将 Schema 协议的组件参数传递给组件 */
          {...schema.renderOptions}
          /* 将当前表单的数据即 value 传递给组件 */
          value={value}
          /* 输入框事件，更新当前表单项数据 */
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  /* 注册文本域渲染器，同样的规则 */
  Textarea: {
    component: ({ schema, value, onChange }) => {
      return (
        <Input.TextArea
          placeholder={`请输入${schema.title}`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

/**
 * Schema 协议需要以 renderType 为 Root 开头，
 * 在同级的 properties 属性下声明「表单项」有哪些，用什么渲染器渲染
 */
const schema = {
  renderType: 'Root',
  properties: {
    /* 这一级定义表单项的字段 */
    title: {
      /* 这一级是 Schema 协议的属性 */
      // 定义表单项的标题
      title: '标题',

      // 定义表单项用什么渲染器渲染
      renderType: 'InputText',

      // 传递给渲染器组件的参数
      renderOptions: {
        maxLength: 10,
        placeholder: '请输入标题，最多10个字符',
      },
    },
    /* 第二个表单项，同样的规则 */
    content: {
      title: '内容',
      renderType: 'Textarea',
    },
  },
}

const Demo = () => {
  return (
    <Core
      /* 步骤一：注册表单项统一的布局结构 */
      itemLayout={VerticalItemLayout}
      /* 步骤一：注册 Schema 协议需要使用到的渲染器 */
      renderers={renderers}
      /* 步骤二：将 Schema 协议传递给内核渲染 */
      schema={schema}
    />
  )
}

export default Demo
```

### 示例二

增加步骤三

```jsx
/**
 * defaultShowCode: true
 */
import Core from '@schema-render/core-react'
import { Input } from 'antd'
import { useState } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <div>
      <h3>{schema.title}</h3>
      <div>{body}</div>
    </div>
  )
}

const renderers = {
  InputText: {
    component: ({ schema, value, onChange }) => {
      return (
        <Input
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  Textarea: {
    component: ({ schema, value, onChange }) => {
      return (
        <Input.TextArea
          placeholder={`请输入${schema.title}`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '请输入标题，最多10个字符',
      },
    },
    content: {
      title: '内容',
      renderType: 'Textarea',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div>
      <Core
        itemLayout={VerticalItemLayout}
        renderers={renderers}
        schema={schema}
        /* 步骤三：通过 onChange 事件获取表单的整体数据 */
        onChange={setValue}
      />

      <h4>打印表单数据：</h4>

      {/* 打印表单数据 */}
      <pre style={{ padding: '1em', background: '#f6f6f6' }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  )
}

export default Demo
```
