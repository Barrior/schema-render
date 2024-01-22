import type { IRenderers, ISchema } from '@core-react/index'
import classNames from 'classnames'

const renderers: IRenderers<any, ISchema> = {
  InputText: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div className="input-text is-readonly">{value}</div>
      }
      return (
        <input
          className={classNames('input-text', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  InputNumber: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div className="input-number is-readonly">{value}</div>
      }
      return (
        <input
          className={classNames('input-number', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      )
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div className="textarea is-readonly">{value}</div>
      }
      return (
        <textarea
          rows={3}
          className={classNames('textarea', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  // 输出警告的 InputText 渲染器
  WarningInputText: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div className="input-text is-readonly">{value}</div>
      }
      return (
        <input
          className={classNames('input-text', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
    validator: () => {
      return {
        status: 'warning',
        message: 'warning-message-from-WarningInputText',
      }
    },
  },
}

export default renderers
