import dayjs from 'dayjs'

export default function createDataSource(
  count = 10,
  sorter?: { sort_field: string; sort_order: 'ascend' | 'descend' | null }
) {
  const dataSource = []

  for (let i = 0; i < count; i++) {
    const random = String(Math.random()).slice(2, 6)
    const goods_category = Math.random() > 0.5 ? 1 : 2
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const id = `id_${i}`

    dataSource.push({
      key: id,
      id,
      supplier_name: `${random}有限公司`,
      supplier_code: random,
      bill_no: `B${Date.now()}`,
      bill_type: Math.random() > 0.5 ? '采购单' : '退货单',
      bill_date: date,
      bill_status: Math.random() > 0.5 ? '已提交' : '待提交',
      operator: Math.random() > 0.5 ? '张三' : '李四',
      goods_name: goods_category === 1 ? '红玫瑰10枝' : '鲜活鲈鱼',
      goods_code: `G${Date.now()}`,
      goods_category: goods_category === 1 ? '水果鲜花' : '海鲜水产',
      goods_date: date,
      goods_price: goods_category === 1 ? 19.9 : 22.8,
    })
  }

  if (sorter) {
    dataSource.sort((a: any, b: any) => {
      const aValue = String(a[sorter.sort_field])
      const bValue = String(b[sorter.sort_field])
      return sorter.sort_order === 'ascend'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }

  return dataSource
}
