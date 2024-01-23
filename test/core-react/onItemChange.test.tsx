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

describe('onItemChange 验证', () => {
  test('input 输入内容后，onItemChange 回调值应该一致', async () => {
    const onItemChange = jest.fn()
    render(<CompletedCore schema={schema} onItemChange={onItemChange} />)

    const inputElem = screen.queryByTestId('tid-width')
    expect(inputElem).toBeInTheDocument()

    fireEvent.change(inputElem!, { target: { value: '800' } })
    expect(onItemChange).toBeCalledWith({ path: ['width'], sPath: 'width', value: 800 })
  })

  test('对象嵌套的 input 输入内容后，onItemChange 回调值应该一致', async () => {
    const onItemChange = jest.fn()
    render(<CompletedCore schema={schema} onItemChange={onItemChange} />)

    const inputElem = screen.queryByTestId('tid-left')
    expect(inputElem).toBeInTheDocument()

    fireEvent.change(inputElem!, { target: { value: '800' } })
    expect(onItemChange).toBeCalledWith({
      path: ['nested', 'left'],
      sPath: 'nested.left',
      value: 800,
    })
  })

  test('渲染器 onItemChange 带 extra 属性，Core onItemChange 回调值应该存在 extra 且数据一致', async () => {
    const onItemChange = jest.fn()
    render(<CompletedCore schema={schema} onItemChange={onItemChange} />)

    const inputElem = screen.queryByTestId('tid-extra')
    expect(inputElem).toBeInTheDocument()

    const inputContent = '我是输入的内容'
    fireEvent.change(inputElem!, { target: { value: inputContent } })
    expect(onItemChange).toBeCalledWith({
      path: ['extra'],
      sPath: 'extra',
      value: inputContent,
      extra: '我是额外的数据',
    })
  })

  test('渲染器 onItemChange 的 triggerValidator 为 false，则不触发此次校验器', async () => {
    const onItemChange = jest.fn()
    render(<CompletedCore schema={schema} onItemChange={onItemChange} />)

    const inputElem = screen.queryByTestId('tid-without-validator')
    expect(inputElem).toBeInTheDocument()

    const inputContent = '我是输入的内容'
    fireEvent.change(inputElem!, { target: { value: inputContent } })
    expect(onItemChange).toBeCalledWith({
      path: ['withoutValidator'],
      sPath: 'withoutValidator',
      value: inputContent,
    })

    // 校验状态无法验证，因为组件不会被重新渲染
  })
})
