import { QuestionCircleOutlined } from '@ant-design/icons'
import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
import { RendererIterator } from '@schema-render/core-react'
import { Collapse, Popover } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'

/**
 * 不能命名为 Object，否则编译为 commonjs 文件后与关键字 Object 对象冲突
 */
const ObjectRenderer: FC<IOpenFormItemParams<object, IObjectSchema>> = ({
  schema,
  path,
  objectStyle,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const header = (
    <>
      <span>{schema.title}</span>
      {!!schema.titleDescription && (
        <Popover placement="top" trigger="hover" content={schema.titleDescription}>
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Popover>
      )}
    </>
  )

  return (
    <Collapse
      {...schema.renderOptions?.headerOptions}
      activeKey={String(collapsed)}
      onChange={() => setCollapsed(!collapsed)}
    >
      <Collapse.Panel {...schema.renderOptions?.panelOptions} header={header} key="false">
        <div style={objectStyle}>
          <RendererIterator schema={schema} path={path} />
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}

export default {
  formItem: ObjectRenderer as never,
}
