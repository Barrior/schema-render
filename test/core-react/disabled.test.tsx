import { wrapRootSchema } from '@test/@helpers/schema'
import { render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

const schema = wrapRootSchema({
  width: {
    title: '宽度',
    renderType: 'InputNumber',
    renderOptions: {
      'data-testid': 'tid-width',
    },
    disabled: true,
  },
  height: {
    title: '高度',
    renderType: 'InputNumber',
    renderOptions: {
      'data-testid': 'tid-height',
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

describe('disabled 验证', () => {
  test('局部只读态，应该只影响自身', async () => {
    render(<CompletedCore schema={schema} />)
    const elem = screen.queryByTestId('tid-width')
    expect(elem).toBeInTheDocument()
    expect(elem?.classList.contains('is-disabled')).toBeTruthy()
  })

  test('全局只读态，应该影响所有的表单项', async () => {
    render(<CompletedCore schema={schema} disabled />)
    const formItems = ['width', 'height', 'left']
    formItems.forEach((name) => {
      const elem = screen.queryByTestId(`tid-${name}`)
      expect(elem?.classList.contains('is-disabled')).toBeTruthy()
    })
  })
})
