---
order: 700
toc: content
---

# 国际化 locale

`FormRender` 默认文案是中文，如果需要使用其他语言，只需配置 `locale` 覆盖默认的语言，示例如下。

```tsx
/**
 * defaultShowCode: true
 */
import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// 引入英文语言包
import enUS from '@schema-render/form-render-react/dist/esm/locale/en_US'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    username: {
      title: 'username',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: 'password',
      renderType: 'Password',
      required: true,
    },
  },
}

const Demo = () => {
  return (
    <FormRender
      rootStyle={{ maxWidth: 500 }}
      schema={schema}
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

- 如果找不到你需要的语言包，欢迎参考 [中文语言包](https://github.com/Barrior/schema-render/tree/main/packages/form-render-react/src/locale/zh_CN.ts) 创建一个新的语言包，并给我们发一个 Pull Request。
- 或者配置相同的语言包数据格式传值给 `locale` 属性。
