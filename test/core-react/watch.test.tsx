import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

const schema = wrapRootSchema({
  width: {
    title: '宽度',
    renderType: 'InputNumber',
    renderOptions: {
      'data-testid': 'tid-width',
    },
    required: true,
  },
  height: {
    title: '高度',
    renderType: 'InputNumber',
    renderOptions: {
      'data-testid': 'tid-height',
    },
  },
  remark: {
    title: '备注',
    renderType: 'InputTextWithWarning',
    renderOptions: {
      'data-testid': 'tid-remark',
    },
  },
  extra: {
    title: '携带额外信息',
    renderType: 'InputTextWithChangeExtra',
    renderOptions: {
      'data-testid': 'tid-extra',
    },
  },
  withoutValidator: {
    title: '不要触发校验器',
    renderType: 'InputTextWithoutTriggerValidator',
    renderOptions: {
      'data-testid': 'tid-without-validator',
    },
  },
  nested: {
    title: 'object-title',
    renderType: 'Object',
    properties: {
      left: {
        title: '水平位置',
        renderType: 'InputNumber',
        renderOptions: {
          'data-testid': 'tid-left',
        },
      },
    },
  },
})

describe('watch 验证', () => {
  test('表单项输入内容后，监听函数回调值应该正确', async () => {
    const onWidthChange = jest.fn()
    render(
      <CompletedCore
        schema={schema}
        watch={{
          width: onWidthChange,
        }}
      />
    )

    const inputElem = screen.queryByTestId('tid-width')
    expect(inputElem).toBeInTheDocument()

    fireEvent.change(inputElem!, { target: { value: '800' } })
    expect(onWidthChange).toBeCalledWith(
      { width: 800 },
      { path: ['width'], sPath: 'width', value: 800 }
    )
  })

  test('对象嵌套的表单项输入内容后，监听函数回调值应该正确', async () => {
    const onLeftChange = jest.fn()
    render(
      <CompletedCore
        schema={schema}
        watch={{
          'nested.left': onLeftChange,
        }}
      />
    )

    const inputElem = screen.queryByTestId('tid-left')
    expect(inputElem).toBeInTheDocument()

    fireEvent.change(inputElem!, { target: { value: '800' } })
    expect(onLeftChange).toBeCalledWith(
      { nested: { left: 800 } },
      { path: ['nested', 'left'], sPath: 'nested.left', value: 800 }
    )
  })
})
