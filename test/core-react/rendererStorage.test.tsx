import type { ICoreRef } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'
import { StrictMode } from 'react'

import CompletedCore from './@helpers/CompletedCore'

const schema = wrapRootSchema({
  show: {
    title: '显示',
    renderType: 'InputText',
    renderOptions: {
      'data-testid': 'tid-show',
    },
  },
  extra: {
    title: '额外',
    renderType: 'InputText',
    hidden: '$root.show !== "1"',
    renderOptions: {
      'data-testid': 'tid-extra',
    },
  },
})

describe('rendererStorage 生命周期', () => {
  test('字段隐藏时不注册，显示后注册，再次隐藏后清理', () => {
    let coreRef: ICoreRef | null = null

    render(
      <CompletedCore
        schema={schema}
        ref={(ref) => {
          coreRef = ref
        }}
      />
    )

    expect(coreRef!.findItem('extra')).toBeUndefined()

    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '1' } })
    expect(coreRef!.findItem('extra')).toBeTruthy()

    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '' } })
    expect(coreRef!.findItem('extra')).toBeUndefined()
  })

  test('同一字段多次渲染注册的是同一个实例', () => {
    let coreRef: ICoreRef | null = null

    render(
      <CompletedCore
        schema={schema}
        ref={(ref) => {
          coreRef = ref
        }}
      />
    )

    const first = coreRef!.findItem('show')

    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '12' } })

    expect(coreRef!.findItem('show')).toBe(first)
  })

  test('StrictMode 下重复挂载/清理后注册表仍然正确', () => {
    let coreRef: ICoreRef | null = null

    render(
      <StrictMode>
        <CompletedCore
          schema={schema}
          ref={(ref) => {
            coreRef = ref
          }}
        />
      </StrictMode>
    )

    expect(coreRef!.findItem('show')).toBeTruthy()
    expect(coreRef!.findItem('extra')).toBeUndefined()
  })
})
