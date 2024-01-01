import type { IRootSchema } from '@schema-render/core-react'

export default {
  renderType: 'Root',
  properties: {
    title: {
      renderType: 'InputText',
      title: '一级标题',
      titleDescription: '标题的一些说明',
      required: true,
    },
    content: {
      renderType: 'InputText',
      title: '一级内容',
    },
    o1: {
      renderType: 'Object',
      title: '仅加粗标题的对象 Object',
      titleDescription: '可以加一些说明',
      properties: {
        title: {
          renderType: 'InputText',
          title: '二级标题',
          titleDescription: '标题的一些说明',
          required: true,
        },
        content: {
          renderType: 'InputText',
          title: '二级内容',
        },
      },
    },
    o2: {
      renderType: 'ObjectCollapse',
      title: '可折叠的对象 ObjectCollapse',
      titleDescription: '可以加一些说明',
      properties: {
        title: {
          renderType: 'InputText',
          title: '二级标题',
          titleDescription: '标题的一些说明',
          required: true,
        },
        content: {
          renderType: 'InputText',
          title: '二级内容',
        },
      },
    },
  },
} as IRootSchema
