import { Button, Modal } from 'antd'
import type { ComponentProps, FC, ReactNode } from 'react'
import { useState } from 'react'

import useRootContext from '../hooks/useRootContext'
import { isEmpty } from '../utils/common'
import { ellipsisText } from '../utils/text'

interface ILongTextModalProps {
  value?: string
  options?: {
    maxLength?: number
    btnText?: string
    modalProps?: ComponentProps<typeof Modal>
    modalContent?: ReactNode
  }
}

const LongTextModal: FC<ILongTextModalProps> = ({ value, options = {} }) => {
  const text = isEmpty(value) ? '-' : String(value)
  const { maxLength = 10, btnText, modalProps, modalContent } = options
  const [isOpen, setIsOpen] = useState(false)
  const rootCtx = useRootContext()

  return text.length > maxLength ? (
    <>
      {ellipsisText(text, maxLength, 'end')}
      <Button type="link" style={{ padding: 0 }} onClick={() => setIsOpen(true)}>
        {btnText || rootCtx.locale.SearchTable.longTextModalLabel}
      </Button>
      <Modal
        width={600}
        title={rootCtx.locale.SearchTable.longTextModalTitle}
        footer={null}
        {...modalProps}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        {modalContent || text}
      </Modal>
    </>
  ) : (
    <>{text}</>
  )
}

export default LongTextModal
