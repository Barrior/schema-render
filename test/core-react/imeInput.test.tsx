import type { ICoreRef } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'

import exampleRenderers from '../../examples/core-react/renderers/common'
import CompletedCore from './@helpers/CompletedCore'

const schema = wrapRootSchema({
  remark: {
    title: '备注',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-remark' },
  },
})

describe('中文输入法（IME）组合输入', () => {
  test('组合结束后提交最终中文，且组合期间不丢字', () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} renderers={exampleRenderers} />)

    const input = screen.getByTestId('tid-remark')

    fireEvent.compositionStart(input)
    fireEvent.change(input, { target: { value: 'nihao' } })

    // 组合过程中也同步更新（否则 DOM 会被旧受控值回写，组合被打断）
    expect(coreRef.current?.getValue()).toEqual({ remark: 'nihao' })
    expect(input).toHaveValue('nihao')

    fireEvent.change(input, { target: { value: '你好' } })
    fireEvent.compositionEnd(input)

    expect(coreRef.current?.getValue()).toEqual({ remark: '你好' })
    expect(input).toHaveValue('你好')
  })
})
