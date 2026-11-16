import type { IRenderers } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'

import CompletedCore from './@helpers/CompletedCore'

const renders: Record<string, number> = {}

const quantity = 50

const makeRenderers = (pure: boolean) =>
  ({
    InputText: {
      ...(pure ? { pure: true } : {}),
      component: ({ schema, value, onChange }: any) => {
        renders[schema.title] = (renders[schema.title] ?? 0) + 1
        return (
          <input
            data-testid={`tid-${schema.title}`}
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
          />
        )
      },
    },
  } as unknown as IRenderers)

const pureRenderers = makeRenderers(true)
const impureRenderers = makeRenderers(false)

const schema = wrapRootSchema(
  Object.fromEntries(
    Array.from({ length: quantity }, (_, index) => [
      `field_${index}`,
      { title: `field_${index}`, renderType: 'InputText' },
    ])
  )
)

function makeForm(pure: boolean) {
  return function Form() {
    const [value, setValue] = useState<Record<string, any>>({})

    return (
      <CompletedCore
        schema={schema}
        renderers={pure ? pureRenderers : impureRenderers}
        value={value}
        onChange={(formData: any, event: any) => {
          const currentIndex = parseInt(event.sPath.slice(6))
          const next = currentIndex + 1
          const field = `field_${next >= quantity ? currentIndex - 1 : next}`
          formData[field] = event.value
          setValue(formData)
        }}
      />
    )
  }
}

describe('基准页联动：pure 声明与否的渲染范围', () => {
  beforeEach(() => {
    Object.keys(renders).forEach((key) => {
      delete renders[key]
    })
  })

  test('声明 pure 后，一次输入只重渲染当前字段与联动字段', () => {
    const Form = makeForm(true)
    render(<Form />)

    Object.keys(renders).forEach((key) => {
      renders[key] = 0
    })

    fireEvent.change(screen.getByTestId('tid-field_5'), { target: { value: '1' } })

    const total = Object.values(renders).reduce((sum, count) => sum + count, 0)

    expect(renders.field_5).toBe(1)
    expect(renders.field_6).toBe(1)
    expect(total).toBe(2)
  })

  test('未声明 pure 时，一次输入会重渲染所有字段', () => {
    const Form = makeForm(false)
    render(<Form />)

    Object.keys(renders).forEach((key) => {
      renders[key] = 0
    })

    fireEvent.change(screen.getByTestId('tid-field_5'), { target: { value: '1' } })

    const total = Object.values(renders).reduce((sum, count) => sum + count, 0)

    expect(total).toBe(quantity)
  })
})
