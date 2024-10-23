import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import type { FC } from 'react'

import type { IColumnSettingContentProps } from '../ColumnSettingContent'
import ColumnSettingContent from '../ColumnSettingContent'

type IColumnSettingModalProps = Omit<ModalProps, 'onOk'> & IColumnSettingContentProps

const ColumnSettingModal: FC<IColumnSettingModalProps> = ({
  sortColumns,
  defaultColumns,
  onOk,
  ...modalProps
}) => {
  return (
    <Modal
      title="列设置"
      width={680}
      centered
      destroyOnClose
      footer={null}
      {...modalProps}
    >
      <ColumnSettingContent
        sortColumns={sortColumns}
        defaultColumns={defaultColumns}
        onOk={onOk}
      />
    </Modal>
  )
}

export default ColumnSettingModal
