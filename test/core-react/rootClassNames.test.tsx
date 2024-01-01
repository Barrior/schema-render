import Core from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { render } from '@testing-library/react'

describe('根节点类名验证', () => {
  const FakeLayout = () => <>Fake</>
  const schema = wrapRootSchema()

  test('设置类名前缀为 my-sr, 根节点应该包含该类名', async () => {
    const { container } = render(
      <Core prefixCls="my-sr" schema={schema} itemLayout={FakeLayout} renderers={{}} />
    )
    const rootElem = container.querySelector('.my-sr')
    expect(rootElem).toBeInTheDocument()
  })

  test('设置类名为 my-class, 根节点应该包含该类名', async () => {
    const { container } = render(
      <Core className="my-class" schema={schema} itemLayout={FakeLayout} renderers={{}} />
    )
    const rootElem = container.querySelector('.my-class')
    expect(rootElem).toBeInTheDocument()
  })

  test('禁用时, 根节点应该包含该 is-disabled 类名', async () => {
    const { container } = render(
      <Core disabled schema={schema} itemLayout={FakeLayout} renderers={{}} />
    )
    const rootElem = container.querySelector('.is-disabled')
    expect(rootElem).toBeInTheDocument()
  })

  test('只读时, 根节点应该包含该 is-readonly 类名', async () => {
    const { container } = render(
      <Core readonly schema={schema} itemLayout={FakeLayout} renderers={{}} />
    )
    const rootElem = container.querySelector('.is-readonly')
    expect(rootElem).toBeInTheDocument()
  })

  test('各类状态下，类名应该都包含', async () => {
    const { container } = render(
      <Core
        disabled
        readonly
        prefixCls="my-sr"
        className="my-class"
        schema={schema}
        itemLayout={FakeLayout}
        renderers={{}}
      />
    )

    const rootElem = container.querySelector('.my-class')
    expect(rootElem).toBeInTheDocument()

    const list = ['my-sr', 'my-class', 'is-disabled', 'is-readonly']
    list.forEach((className) => {
      expect(rootElem?.classList.contains(className)).toBeTruthy()
    })
  })
})
