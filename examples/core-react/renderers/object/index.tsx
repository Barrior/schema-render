import type { IRenderers } from '@schema-render/core-react'
import { Input } from 'antd'

import ObjectCollapse from './ObjectCollapse'
import Object from './ObjectNormal'

const renderers: IRenderers = {
  // 注册「常规的」对象类型渲染器
  Object,

  // 注册「可折叠的」对象类型渲染器
  ObjectCollapse,

  InputText: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input
          placeholder={`请输入${schema.title ?? ''}`}
          {...schema.renderOptions}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

export default renderers
