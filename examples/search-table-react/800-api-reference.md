---
group:
  title: API 手册
  order: 800
toc: content
---

# API Reference

## 顶层 API

| **参数**             | **描述**                                                     | **类型**                                                                              | **默认值** |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ---------- |
| **className**        | 根节点样式名                                                 | `string`                                                                              | -          |
| **style**            | 根节点样式                                                   | `CSSProperties`                                                                       | -          |
| **request**          | 数据请求函数                                                 | `((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)` | -          |
| **requestOnMounted** | 挂载完成是否立即发送一次 request 请求度                      | `boolean`                                                                             | `true`     |
| **header**           | 头部栏内容渲染                                               | `(p: IRenderParams) => ReactNode`                                                     | -          |
| **search**           | 搜索栏，见[Search API](../search-react/800-api-reference.md) | `ISearchProps \| false`                                                               | -          |
| **titleTop**         | 标题栏顶部区域                                               | `(p: IRenderParams) => ReactNode`                                                     | -          |
| **title**            | 标题栏，见下方 title 描述                                    | -                                                                                     | -          |
| **titleBottom**      | 标题栏底部区域                                               | `(p: IRenderParams) => ReactNode`                                                     | -          |
| **table**            | 表格栏，见下方 table 描述                                    | -                                                                                     | -          |
| **footer**           | 底部栏                                                       | `(p: IRenderParams) => ReactNode`                                                     | -          |

## title

| **参数**              | **描述**                                                              | **类型**                          | **默认值** |
| --------------------- | --------------------------------------------------------------------- | --------------------------------- | ---------- |
| **className**         | 标题栏类名                                                            | `string`                          | -          |
| **style**             | 标题栏样式                                                            | `CSSProperties`                   | -          |
| **tabs**              | 标签页属性，见[Antd Tabs](https://ant.design/components/tabs-cn#tabs) | `TabsProps`                       | -          |
| **showSetting**       | 是否展示“列设置”按钮                                                  | `boolean`                         | -          |
| **showRefresh**       | 是否展示“刷新”按钮                                                    | `boolean`                         | -          |
| **leftExtraContent**  | 左侧额外内容                                                          | `(p: IRenderParams) => ReactNode` | -          |
| **rightExtraContent** | 右侧额外内容                                                          | `(p: IRenderParams) => ReactNode` | -          |

## table

除 Antd Table 属性外，还扩展了以下属性。

| **参数**                     | **描述**                                                         | **类型**                                                                                                       | **默认值** |
| ---------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------- |
| **showRowNumber**            | 是否展示序号列                                                   | `boolean`                                                                                                      | -          |
| **rowNumberColumnData**      | 序号列 Antd 配置数据                                             | `ColumnType`                                                                                                   | -          |
| **actionItems**              | 操作列按钮内容，不存在则不展示操作列，数量超过设定阈值则下拉交互 | `(record: IObjectAny, index: number) => IActionItem[]`                                                         | -          |
| **actionItemsColumnData**    | 操作列 Antd 配置数据，可配置操作列宽度等                         | `ColumnType`                                                                                                   | -          |
| **actionItemsCount**         | 操作列按钮下拉交互阈值，默认为 2                                 | `number`                                                                                                       | `2`        |
| **actionItemsDropdownProps** | 操作按钮下拉菜单属性，见 Antd Dropdown 组件                      | `DropDownProps`                                                                                                | -          |
| **sortMode**                 | 排序方案，前端排序或后端排序                                     | `'local' \| 'local-all' \| 'service' \| 'service-all'`                                                         | -          |
| **sortStringValueTransform** | 排序字符串数据转换方案                                           | `(value: string) => string`                                                                                    | -          |
| **autoScrollY**              | 是否自动计算表格 scrollY 属性，达到适配屏幕高度，”一屏显示“效果  | `boolean`                                                                                                      | `false`    |
| **summaryText**              | 合计栏文案                                                       | `ReactNode`                                                                                                    | `合计`     |
| **registerValueType**        | 注册 valueType, 同名将覆盖                                       | `{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }` | -          |

## table column

除 Antd Table Column 属性外，还扩展了以下属性。

| **参数**              | **描述**                         | **类型**                                                                             | **默认值** |
| --------------------- | -------------------------------- | ------------------------------------------------------------------------------------ | ---------- |
| **sortType**          | 排序类型                         | `'string' \| 'number' \| 'date'`                                                     | -          |
| **sortDataExtractor** | 排序数据取值函数，复杂数据提取用 | `(record: IObjectAny) => string \| number`                                           | -          |
| **valueType**         | 数据显示类别                     | `IValueType \| ((record: IObjectAny) => { type: IValueType, [props: string]: any })` | -          |

## table action

即 `IActionItem`, 继承 Antd Button 组件参数，以及下面扩展参数。

| **参数**         | **描述**                                        | **类型**                                                                | **默认值** |
| ---------------- | ----------------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| **text**         | 按钮文案                                        | `ReactNode`                                                             | -          |
| **isShow**       | 是否显示                                        | `boolean`                                                               | -          |
| **confirmAgain** | 是否增加「二次确认」                            | `boolean`                                                               | -          |
| **confirmProps** | 二次确认 Antd Popconfirm 组件参数               | `Omit<PopconfirmProps, 'onConfirm'>`                                    | -          |
| **onClick**      | 点击事件，返回 `Promise`，则增加 `loading` 效果 | `(event: MouseEvent<HTMLElement, MouseEvent>) => void \| Promise<void>` | -          |
