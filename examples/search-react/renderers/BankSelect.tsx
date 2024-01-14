import type { IOpenComponentParams } from '@schema-render/core-react'
import React from 'react'

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '4px 10px',
  height: 32,
  boxSizing: 'border-box',
  border: '1px solid #d9d9d9',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 14,
}

const BankSelect: React.FC<IOpenComponentParams<string>> = ({
  value,
  sPath,
  onChange,
}) => {
  const handleBankSelect = () => {
    const random = String(Math.random()).slice(2, 6)
    const bankData = {
      bank_id: `id_${random}`,
      bank_account: `111222333${random}`,
      bank_name: `招财猫银行${random}`,
      bank_branch_name: `招财猫成都${random}支行`,
    }
    // 银行账户数据通过 extra 属性透传到外部用于联动处理
    onChange(bankData[sPath as never], {
      extra: bankData,
    })
  }

  return (
    <div style={style} onClick={handleBankSelect}>
      {/* 展示当前表单项值 */}
      {value ? <div>{value}</div> : <div style={{ color: '#c0c0c0' }}>选择银行账户</div>}
    </div>
  )
}

export default {
  component: BankSelect,
}
