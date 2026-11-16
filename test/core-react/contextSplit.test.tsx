import useRootContext from '@core-react/hooks/useRootContext'
import useRootValue from '@core-react/hooks/useRootValue'
import type { IRenderers } from '@core-react/index'
import type {
  IRootStaticContext,
  IRootValueContext,
} from '@core-react/typings/rootContext'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

const staticContexts: IRootStaticContext[] = []
const valueContexts: IRootValueContext[] = []

const Probe = () => {
  staticContexts.push(useRootContext())
  valueContexts.push(useRootValue())
  return <div data-testid="tid-probe" />
}

const renderers = {
  Probe: {
    component: Probe,
  },
} as unknown as IRenderers

const schema = wrapRootSchema({
  probe: {
    title: '探针',
    renderType: 'Probe',
  },
  age: {
    title: '年龄',
    renderType: 'InputText',
    renderOptions: {
      'data-testid': 'tid-age',
    },
  },
})

describe('静态 / 动态 Context 拆分', () => {
  beforeEach(() => {
    staticContexts.length = 0
    valueContexts.length = 0
  })

  test('数据变化时静态 Context 引用不变，动态 Context 引用变化', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '12' } })

    expect(staticContexts.length).toBeGreaterThanOrEqual(3)
    expect(staticContexts.every((ctx) => ctx === staticContexts[0])).toBe(true)

    expect(valueContexts.length).toBe(staticContexts.length)
    expect(valueContexts[valueContexts.length - 1]).not.toBe(valueContexts[0])
    expect(valueContexts[valueContexts.length - 1].rootValue).toEqual({ age: '12' })
  })
})
