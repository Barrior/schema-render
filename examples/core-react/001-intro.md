---
group:
  title: 介绍
  order: 0
toc: false
---

# 简介

## SchemaRender

`SchemaRender` 是一套 `默认简单`，但又追求 `灵活`、`可高定`、`好用的` 表单渲染解决方案，旨在沉淀解决常见表单案例的渲染库，与相关的通用组件，以提升研发效率。

内容目录：

- `Core`: 表单渲染库内核，通过一套简易的 [JSON Schema](./003-schema.md) 构建出一套表单，内核主要处理 Schema 协议、渲染器编排、逻辑联动、校验能力等，支持 SSR(Server-Side Rendering)。
- `FormRender`: 基于 Core + [Antd](https://ant.design) 封装的开箱即用的表单渲染库。
- `Search`：基于 FormRender 封装的开箱即用的条件搜索组件。
- `SearchTable`：基于 Search + Antd Table 封装的条件搜索表格。

:::info{title=温馨提示}
目前项目是基于 React 技术栈实现的，所以后缀都加了 `-react` 字眼，后续可能会将 Core 抽离成不依赖于技术栈的纯 JavaScript 项目，以便支持任何技术框架。
:::

FormRender、Search 没有很好的支持 SSR，如果是 Next.js 项目，可以动态导入并配置 ssr 为不启用，如下示例。

```jsx | pure
import dynamic from 'next/dynamic'

const FormRender = dynamic(() => import('@schema-render/form-render-react'), {
  ssr: false,
})
```

## Core

渲染内核必须组装 `itemLayout`（表单项布局）、`Renderers`（渲染器集合）来实现一个渲染库，然后通过 JSON Schema 驱动渲染出所需的表单。

特点：协议驱动、简洁易用、高可定制、轻量级。

- `协议驱动`：通过编写一份简易的 JSON Schema 来实现内容的渲染，参考[快速上手](./002-quick-start.md)。
- `简洁易用`：仁者见仁智者见智，笔者以为是比较言简意赅、易用的，如同内部源码一样，化繁为简，无必要不增实体。
- `高可定制`：通过配置与组装 layout、itemLayout、renderers 等可以按需实现一个贴合业务自身的渲染库，如 FormRender。
- `轻量级`：资源包大小仅 17.6k, gzip 6.5k
