## SchemaRender

[![Documentation Build](https://github.com/Barrior/schema-render/actions/workflows/docs.yml/badge.svg)](https://github.com/Barrior/schema-render/actions/workflows/docs.yml)
[![Testing](https://github.com/Barrior/schema-render/actions/workflows/testing.yml/badge.svg)](https://github.com/Barrior/schema-render/actions/workflows/testing.yml)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://www.npmjs.com/package/@schema-render/core-react)

`SchemaRender` 是一套 `默认简单`，但又追求 `灵活`、`可高定`、`好用的` 表单渲染解决方案，旨在沉淀解决常见表单案例的渲染库，与相关的通用组件，以提升研发效率。

内容目录：

- `Core`: 表单渲染库内核，通过一套简易的 JSON Schema 构建出一套表单，内核主要处理 Schema 协议、渲染器编排、逻辑联动、校验能力等，支持 SSR(Server-Side Rendering)。
  - 特点：协议驱动、简洁易用、高可定制、轻量级零依赖。
- `FormRender`: 基于 Core + [Antd](https://ant.design) 封装的开箱即用的表单渲染库。
- `Search`：基于 FormRender 封装的开箱即用的条件搜索组件。
- `SearchTable`：基于 Search + Antd Table 封装的条件搜索表格（建设中）。

更多详情请移步至官网：[schema-render.js.org](https://schema-render.js.org)

---

`SchemaRender` is a set of `simple by default`, but also pursues `flexible`, `highly customizable` and `easy to use` form rendering solutions. It aims to precipitate a rendering library to solve common form cases, and related common components , to improve development efficiency.

Table of Contents:

- `Core`: The core of the form rendering library, which builds a set of forms through a simple JSON Schema. The core mainly handles the Schema protocol, renderer arrangement, logical linkage, verification capabilities, etc., and supports SSR (Server-Side Rendering).
  - Features: Protocol driven, easy to use, highly customizable, lightweight and zero dependency.
- `FormRender`: An out-of-the-box form rendering library based on Core + [Antd](https://ant.design).
- `Search`: out-of-the-box conditional search component based on FormRender.
- `SearchTable`: A conditional search table based on Search + Antd Table (under construction).

For more details, please go to the official website: [schema-render.js.org](https://schema-render.js.org)
