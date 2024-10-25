import type { IObjectAny } from '@schema-render/core-react'
import { Button, Modal } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'

import useRootContext from '../hooks/useRootContext'
import { isEmpty } from '../utils/common'

interface ILongTextModalProps {
  value?: string
  options?: IObjectAny
}

const LongTextModal: FC<ILongTextModalProps> = ({ value, options = {} }) => {
  const text = isEmpty(value) ? '-' : String(value)
  const { maxLength = 10, ...modalProps } = options
  const [isOpen, setIsOpen] = useState(false)
  const rootCtx = useRootContext()

  return text.length > maxLength ? (
    <>
      {text.slice(0, maxLength - 3)}...
      <Button type="link" style={{ padding: 0 }} onClick={() => setIsOpen(true)}>
        {rootCtx.locale.SearchTable.longTextModalLabel}
      </Button>
      <Modal
        width={600}
        title={rootCtx.locale.SearchTable.longTextModalTitle}
        footer={null}
        {...modalProps}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        {text}
      </Modal>
    </>
  ) : (
    <>{text}</>
  )
}

export default LongTextModal
