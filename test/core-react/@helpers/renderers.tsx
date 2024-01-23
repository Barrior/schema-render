import type { IObjectSchema, IRenderers, ISchema } from '@core-react/index'
import { RendererIterator } from '@core-react/index'
import classNames from 'classnames'

const renderers: IRenderers<any, ISchema> = {
  Object: {
    formItem: ({ schema, path, objectStyle }) => {
      return (
        <div {...schema.renderOptions}>
          <div>{schema.title}</div>
          <div style={objectStyle}>
            <RendererIterator schema={schema as IObjectSchema} path={path} />
          </div>
        </div>
      )
    },
  },
  InputText: {
    component: ({ schema, value, onChange }) => {
      return (
        <input
          className="input-text"
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
    readonlyComponent: ({ schema, value }) => (
      <div {...schema.renderOptions} className="input-text is-readonly">
        {value}
      </div>
    ),
    disabledComponent: ({ schema, value }) => (
      <input
        {...schema.renderOptions}
        className="input-text is-disabled"
        value={value ?? ''}
      />
    ),
  },
  InputNumber: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return (
          <div {...schema.renderOptions} className="input-number is-readonly">
            {value}
          </div>
        )
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
        return (
          <div {...schema.renderOptions} className="textarea is-readonly">
            {value}
          </div>
        )
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
  InputTextWithWarning: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <input
          className={classNames('input-text', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
    readonlyComponent: ({ schema, value }) => (
      <div {...schema.renderOptions} className="input-text is-readonly">
        {value}
      </div>
    ),
    validator: () => {
      return {
        status: 'warning',
        message: 'warning-message-from-InputTextWithWarning',
      }
    },
  },
  // onChange 带 extra 信息的 InputText 渲染器
  InputTextWithChangeExtra: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <input
          className={classNames('input-text', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) =>
            onChange(e.target.value, {
              extra: '我是额外的数据',
            })
          }
        />
      )
    },
    readonlyComponent: ({ schema, value }) => (
      <div {...schema.renderOptions} className="input-text is-readonly">
        {value}
      </div>
    ),
  },
  // onChange 不触发「校验器」的 InputText 渲染器
  InputTextWithoutTriggerValidator: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <input
          className={classNames('input-text', { 'is-disabled': disabled })}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) =>
            onChange(e.target.value, {
              triggerValidator: false,
            })
          }
        />
      )
    },
    readonlyComponent: ({ schema, value }) => (
      <div {...schema.renderOptions} className="input-text is-readonly">
        {value}
      </div>
    ),
  },
}

export default renderers
