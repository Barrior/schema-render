import dayjs from 'dayjs'

function rangeNumber(min: number, max: number, toInt = true) {
  const val = Math.random() * (max - min) + min
  return toInt ? Math.floor(val) : val
}

export default function createDataSource(count = 10) {
  const dataSource = []

  for (let i = 0; i < count; i++) {
    const random = String(Math.random()).slice(2, 6)
    const goods_category = Math.random() > 0.5 ? 1 : 2
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const id = `id_${i}`

    dataSource.push({
      key: id,
      id,
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

      title: `${random}标题`,
      rate: rangeNumber(0, 5),
      code: `
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),
      comma_number:
        Math.random() > 0.4 ? rangeNumber(1000, 100000) : rangeNumber(0, 1000),
      percent: rangeNumber(0, 100).toFixed(2),
      switch_status: Math.random() > 0.5,
      tags: Math.random() > 0.5 ? '张三' : ['李四', '王五'],
      image_list:
        Math.random() > 0.5
          ? 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg'
          : [
              'https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif',
              'https://raw.githubusercontent.com/Barrior/assets/main/gift.png',
            ],
      status: 2,
    })
  }

  return dataSource
}
