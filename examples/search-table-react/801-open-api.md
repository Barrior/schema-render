---
group:
  title: API 手册
  order: 801
toc: content
---

# Ref API

## 总览

内核通过 `ref` 属性开放的 API 方法如下：

- `refresh`: 刷新表格内容，将调用 `request` 重新拉取数据。
- `getRootElement`: 获取根节点 DOM 元素。
- `getSearchRef`: 获取搜索栏实例。
- `getDataSource`: 获取表格列表数据。
- `setDataSource`: 设置表格列表数据。
- `setSummaryData`: 设置合计栏数据。
- `getSearchValue`: 获取搜索参数。
- `setSearchValue`: 设置搜索数据。
- `clearSearchValue`: 清除搜索数据。
- `getRequestParams`: 获取请求的参数，“导出”时常用。
- `getRequestExtraParams`: 获取请求额外参数，如排序参数等。
- `updateScrollY`: 更新表格高度以达到“一屏显示”效果。
- `openSortModal`: 打开列设置弹窗。

## refresh

刷新表格内容，将调用 `request` 重新拉取数据。

类型：`(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>`

### 入参

| **名称**    | **描述**               | **类型**          |
| ----------- | ---------------------- | ----------------- |
| **params**  | 搜索及分页参数         | `IRequestParams`  |
| **options** | 刷新选项，控制刷新行为 | `IRequestOptions` |

`IRequestOptions`

| **名称**      | **描述**                                      | **类型**  |
| ------------- | --------------------------------------------- | --------- |
| **overwrite** | 是否覆盖参数方式刷新，默认 `false` 即合并入参 | `boolean` |
