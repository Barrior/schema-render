import type { IOpenItemLayoutParams } from '@core-react/index'
import type { FC } from 'react'

const Vertical: FC<IOpenItemLayoutParams> = ({ body, schema, validator, required }) => {
  return (
    <div className="item-layout-vertical">
      <div className="item-header">
        {required && <span className="item-mark">*</span>}

        <span className="item-title">{schema.title}</span>

        {!!schema.titleDescription && (
          <span className="item-title-description">{schema.titleDescription}</span>
        )}
      </div>

      <div className="item-body">{body}</div>

      <div className="item-footer">
        {validator.status === 'error' && !!validator.message && (
          <div className="item-error-msg">{validator.message}</div>
        )}

        {validator.status === 'warning' && !!validator.message && (
          <div className="item-warning-msg">{validator.message}</div>
        )}

        {!!schema.description && (
          <div className="item-description">{schema.description}</div>
        )}
      </div>
    </div>
  )
}

export default Vertical
