import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
import { RendererIterator } from '@schema-render/core-react'
import type { FC } from 'react'

/**
 * 只渲染子节点，无对象结构界面，应用场景：步骤表单
 */
const ObjectNull: FC<IOpenFormItemParams<object, IObjectSchema>> = ({
  schema,
  path,
  objectStyle,
}) => {
  return (
    <div className={schema.className} style={{ ...objectStyle, ...schema.style }}>
      <RendererIterator schema={schema} path={path} />
    </div>
  )
}

export default {
  formItem: ObjectNull as never,
}
