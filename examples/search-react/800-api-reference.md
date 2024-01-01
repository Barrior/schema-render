---
group:
  title: API 手册
  order: 800
toc: content
---

# API Reference

`Search` 除了支持 `FormRender` 的 API 外，还支持以下 API。

| **参数**                | **描述**                                                   | **类型**                              | **默认值**                        |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| **locale**              | 国际化语言数据                                             | `object`                              | -                                 |
| **actions**             | 配置操作按钮展示项及其顺序                                 | `string[]`                            | `["reset", "submit", "collapse"]` |
| **defaultCollapsed**    | 是否默认折叠                                               | `boolean`                             | `true`                            |
| **collapsedRows**       | 折叠行数                                                   | `number`                              | `2`                               |
| **calcCollapsedNumber** | 计算折叠时展示的表单项个数的算法，`container` 是根节点元素 | `(container?: HTMLElement) => number` | -                                 |
| **onToggleCollapsed**   | 「折叠/展开」切换事件                                      | `(isCollapsed: boolean) => void`      | -                                 |
