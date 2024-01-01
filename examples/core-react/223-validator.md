---
group: 功能详解
order: 223
toc: content
---

# 校验器 Validator

校验功能有如下三种方式定义：

- `Schema Rules`: Schema 协议 `rules` 属性定义校验规则。
- `Global Validators`: 全局 `validators` 属性定义校验规则。
- `Renderer Validator`: 渲染器 `validator` 属性定义校验规则。

## Schema Rules

Schema Rules 规则通过在 Schema 协议声明 `rules` 属性来定义，`rules` 规则是借鉴 [async-validator](https://github.com/yiminghe/async-validator#async-validator) API 内部实现的一套校验能力子集，以保持 JSON Schema 可序列化，以及核心库的轻量好用。

支持规则如下列表，都是可选项，同时规则可以不声明 `type` 字段，内核会自动推断，声明则具有更高优先级。

| **名称**      | **说明**                                                                       | **类型**  |
| ------------- | ------------------------------------------------------------------------------ | --------- |
| **type**      | 定义数据的 JavaScript 数据类型，符合定义才能校验通过，不填则自动推断           | `string`  |
| **required**  | 是否必填                                                                       | `boolean` |
| **min**       | string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | `number`  |
| **max**       | string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | `number`  |
| **len**       | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度    | `number`  |
| **pattern**   | 正则匹配，仅 string 类型生效                                                   | `string`  |
| **validator** | 全局校验器名称                                                                 | `string`  |
| **message**   | 错误提示信息                                                                   | `string`  |

触发时机：每次渲染器组件 `onChange` 的时候会触发校验机制，并提示错误信息。

:::warning{title=重要提示}
如果希望 `onChange` 时不触发校验，可以设置第二个参数的 `triggerValidator` 为 `false` 实现，示例：`onChange('xxx', { triggerValidator: false })`。
:::

:::info{title=温馨提示}
1、Schema Rules 规则里的 validator 字段与 async-validator API 不对应。<br>
2、Schema Rules 和 Global Validators 规则里的 validator 属性不允许再次声明 `validator` 属性（内部会忽略），避免陷入循环调用。
:::

**示例**

```jsx
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
      // 通过 rules 属性声明校验规则
      rules: [
        { max: 10, message: '标题不能超过 10 个字符' },
        { pattern: '^[a-zA-Z\\d]+$', message: '标题仅能包含英文字母和数字' },
      ],
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      // rules 内的 required 与同级的 required 功能一致
      rules: [{ required: true, message: '请输入内容' }],
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo
```

## Global Validators

Global Validators 是全局校验器，为了便于复用通用的校验能力，可以将这些校验器注册在全局 `validators` 里，然后在 schema 里通过 `rules: [{ validator: 'name' }]` 来使用。

```tsx
import Core from '@schema-render/core-react'
import type { IValidators, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
      rules: [
        { max: 10, message: '标题不能超过 10 个字符' },
        // 使用全局校验器，错误提示语来自校验器
        { validator: 'detectSensitiveWord' },
      ],
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      required: true,
      // 指定错误提示信息的权重更高
      rules: [{ validator: 'detectSensitiveWord', message: 'TIPS: 内容包含敏感词哦' }],
    },
  },
}

const DSW = async (_value: string) => {
  return new Promise<{ ok: boolean }>((resolve) => {
    setTimeout(() => resolve({ ok: false }), 200)
  })
}

// 声明全局校验器
const globalValidators: IValidators = {
  // 函数参数详情请移步至文档底部「API 列表」
  detectSensitiveWord: async ({ value }) => {
    // 调用异步接口验证数据
    const res = await DSW(value)

    if (!res.ok) {
      return {
        status: 'error',
        message: '内容包含敏感词',
      }
    }
  },
}

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
      /* 注册全局校验器 */
      validators={globalValidators}
    />
  )
}

export default Demo
```

## Renderer Validator

通过渲染器的 `validator` 属性可以定义与渲染器捆绑在一起的校验规则。

```tsx
import { Rate } from 'antd'
import Core from '@schema-render/core-react'
import type { IRenderer, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import commonRenderers from './renderers/common'

// 定义评分渲染器
const RateRenderer: IRenderer = {
  component: ({ schema, value, disabled, onChange }) => {
    return (
      <Rate
        {...schema.renderOptions}
        value={value}
        disabled={disabled}
        onChange={(val) => onChange(val)}
      />
    )
  },
  validator: ({ value }) => {
    if (value === 0) {
      return {
        status: 'error',
        message: '请选择评分',
      }
    }
    if (value <= 3) {
      return {
        status: 'error',
        message: '亲，评分可以打高一点哦😯',
      }
    }
    return {
      status: 'error',
      message: '哇，nice~',
    }
  },
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
    },
    rate: {
      // 指定评分渲染器，会自动绑定内部的校验能力
      renderType: 'Rate',
      title: '评分',
      required: true,
    },
  },
}

const renderers = {
  ...commonRenderers,
  // 注册评分渲染器
  Rate: RateRenderer,
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo
```

## 提交校验

提交表单时先校验输入内容是否符合规则，校验通过才允许提交数据。

```tsx
import { useState, useRef } from 'react'
import { Button, message } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '标题',
      renderType: 'InputText',
      required: true,
      rules: [
        { max: 10, message: '标题不能超过 10 个字符' },
        { pattern: '^[a-zA-Z\\d]+$', message: '标题仅能包含英文字母和数字' },
      ],
    },
    content: {
      title: '内容',
      renderType: 'TextArea',
      rules: [{ required: true, message: '请输入内容' }],
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  // 提交逻辑处理
  async function handleSubmit() {
    const { hasError, errorList } = await coreRef.current!.validate()

    console.log('[validate] hasError: ', hasError)
    console.log('[validate] errorList: ', errorList)

    if (hasError) {
      return message.error('验证错误')
    }

    message.success('验证成功')

    // 验证成功后，提交数据...
  }

  return (
    <div>
      <Core
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Button type="primary" style={{ margin: '24px 0 0 115px' }} onClick={handleSubmit}>
        提交
      </Button>
    </div>
  )
}

export default Demo
```

## API 详解

Global Validators 和 Renderer Validator 的定义是一样的，支持如下两种方式：

- 定义为与 `Schema Rules` 一样的规则，如 `validator: [{ min: 10, message: '请输入最少10个字符' }]`。
- 定义为函数校验，函数参数如下列表，皆为只读属性。

> 如果是 TypeScript 项目，可以通过 `IOpenValidatorParams` 类型了解所有的参数及其注解。

| **参数**      | **说明**                       | **类型**  |
| ------------- | ------------------------------ | --------- |
| **schema**    | Schema 协议描述对象            | `ISchema` |
| **value**     | 当前表单项的值                 | `any`     |
| **rootValue** | 表单整体数据                   | `object`  |
| **path**      | 当前表单项的路径               | `array`   |
| **sPath**     | 当前表单项的路径字符串格式表示 | `string`  |
| **required**  | 是否必填，值为计算后的结果     | `boolean` |
| **disabled**  | 是否禁用态，值为计算后的结果   | `boolean` |
| **readonly**  | 是否只读态，值为计算后的结果   | `boolean` |
| **locale**    | 国际化语言数据                 | `object`  |
| **userCtx**   | 用户全局上下文数据             | `object`  |

函数返回值有三种返回形态：

- 返回 `undefined`，表示校验成功。
- 返回与 `Schema Rules` 一样的规则，如 `return [{ min: 10, message: '请输入最少10个字符' }]`
- 返回标准状态结构，如下描述

| **参数**    | **说明**                                               | **类型**                          |
| ----------- | ------------------------------------------------------ | --------------------------------- |
| **status**  | 校验状态，`error` 错误，`warning` 警告，`success` 成功 | `error` \| `warning` \| `success` |
| **message** | 错误或警告状态时的提示信息                             | `string`                          |
| **extra**   | 额外数据                                               | `any`                             |
