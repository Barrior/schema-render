---
order: 700
toc: content
---

# 国际化 locale

`SearchTable` 默认文案是中文，如果需要使用其他语言，只需配置 `locale` 覆盖默认的语言，示例如下。

```tsx
/**
 * defaultShowCode: true
 */
import schemaEn from './helpers/schema-en'
import columnsEn from './helpers/columns-en'
import createDataSourceEn from './helpers/createDataSource-en'
import SearchTable from '@schema-render/search-table-react'
import { sleep } from '@examples/utils'

// 引入英文语言包
import enUS from '@schema-render/search-table-react/dist/esm/locale/en_US'

const Demo = () => {
  return (
    <SearchTable
      /* 配置语言包 */
      locale={enUS}
      search={{
        schema: schemaEn,
        labelWidth: 'max-content',
      }}
      title={{
        showSetting: true,
      }}
      table={{
        bordered: true,
        columns: columnsEn,
        showRowNumber: true,
        actionItems: () => [
          { text: 'Edit' },
          { text: 'View' },
          { text: 'Delete', danger: true },
        ],
        actionItemsColumnData: {
          width: 150,
        },
        summaryText: 'Total',
      }}
      request={async (searchParams) => {
        // 模拟请求接口获取表格数据
        await sleep()
        const data = createDataSourceEn(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            // 对应「商品价格」
            goods_price: totalPrice,
          },
        }
      }}
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

- 如果找不到你需要的语言包，欢迎参考 [中文语言包](https://github.com/Barrior/schema-render/tree/main/packages/search-table-react/src/locale/zh_CN.ts) 创建一个新的语言包，并给我们发一个 Pull Request。
- 或者配置相同的语言包数据格式传值给 `locale` 属性。
