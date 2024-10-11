import type { IObjectAny } from '@schema-render/core-react'
import { Button, Modal } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'

import { isEmpty } from '../utils/common'

interface ILongTextModalProps {
  value?: string
  options?: IObjectAny
}

const LongTextModal: FC<ILongTextModalProps> = ({ value, options = {} }) => {
  const text = isEmpty(value) ? '-' : String(value)
  const { maxLength = 10, ...modalProps } = options
  const [isOpen, setIsOpen] = useState(false)

  return text.length > maxLength ? (
    <>
      {text.slice(0, maxLength - 3)}...
      <Button type="link" style={{ padding: 0 }} onClick={() => setIsOpen(true)}>
        全部
      </Button>
      <Modal
        width={600}
        title="全部"
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
