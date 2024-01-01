---
group: 功能详解
order: 700
---

# 国际化 Locale

`Core` 默认文案是中文，如果需要使用其他语言，只需配置 `locale` 覆盖默认的语言，示例如下。

```tsx
/**
 * defaultShowCode: true
 */
import Core, { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

// 引入英文语言包
import enUS from '@schema-render/core-react/dist/esm/locale/en_US'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: 'Title',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: 'Please enter a title with a maximum of 10 characters',
      },
      required: true,
    },
    content: {
      title: 'Content',
      renderType: 'TextArea',
      renderOptions: {
        placeholder: 'Please enter content',
      },
      required: true,
    },
  },
}

const Demo = () => {
  return (
    <Core
      style={{ maxWidth: 600 }}
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
      /* 配置语言包 */
      locale={enUS}
    />
  )
}

export default Demo
```

目前支持以下语言：

| **语言** | **文件名** |
| -------- | ---------- |
| 中文     | zh_CN      |
| 英文     | en_US      |

- 如果找不到你需要的语言包，欢迎参考 [中文语言包](https://github.com/Barrior/schema-render/tree/main/packages/core-react/src/locale/zh_CN.ts) 创建一个新的语言包，并给我们发一个 Pull Request。
- 或者配置相同的语言包数据格式传值给 `locale` 属性。
