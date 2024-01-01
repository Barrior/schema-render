---
group:
  title: API 手册
  order: 800
toc: content
---

# API Reference

`FormRender` 除了支持 `Core` 的 API 外，还支持以下 API。

| **参数**                       | **描述**                                                                              | **类型**                                                                                                    | **默认值**            |
| ------------------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------- |
| **rootClassName**              | 根节点样式名                                                                          | `string`                                                                                                    | -                     |
| **rootStyle**                  | 根节点样式                                                                            | `string`                                                                                                    | -                     |
| **itemLayout**                 | 表单项布局结构                                                                        | `horizontal` \| `vertical` \| [React.ComponentType\<IOpenItemLayoutParams\>](../core-react/101-item-layout) | `horizontal`          |
| **labelWidth**                 | 标签（标题块）宽度                                                                    | `number` \| `string`                                                                                        | `100`                 |
| **labelColon**                 | 标签冒号                                                                              | `ReactNode`                                                                                                 | -                     |
| **labelGap**                   | 标签与右侧内容的间距                                                                  | `number`                                                                                                    | `15`                  |
| **labelRender**                | 自定义 label 渲染                                                                     | `(params) => ReactNode`                                                                                     | -                     |
| **locale**                     | 国际化语言数据                                                                        | `object`                                                                                                    | -                     |
| **actions**                    | 配置操作按钮展示项及其顺序                                                            | `string[]`                                                                                                  | `["submit", "reset"]` |
| **registerActions**            | 注册操作行为，如果是 submit、reset 将覆盖原有行为                                     | `IRegisterActions`                                                                                          | -                     |
| **disableFormOnActionLoading** | 当操作行为按钮处于 loading 状态时，是否禁用表单                                       | `boolean`                                                                                                   | `true`                |
| **validateFormOnSubmit**       | 触发 onSubmit 事件前是否执行表单校验，默认为 true，校验不通过将不会触发 onSubmit 事件 | `boolean`                                                                                                   | `true`                |
| **onSubmit**                   | 提交事件                                                                              | `(value: IObjectAny) => IMaybePromise<void>`                                                                | -                     |
| **onBeforeReset**              | 重置前置事件，如果返回数据，则作为新数据填入表单                                      | `(value: IObjectAny) => IMaybePromise<IObjectAny \| void>`                                                  | -                     |
| **onReset**                    | 重置事件                                                                              | `(value: IObjectAny) => IMaybePromise<void>`                                                                | -                     |
