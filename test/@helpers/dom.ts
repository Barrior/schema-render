export function prettyDOMByInnerHTML(innerHTML: string) {
  const testingNode = document.createElement('div')
  testingNode.innerHTML = innerHTML
  return testingNode
}

interface ICreateElementParams {
  rect?: Partial<DOMRect>
  className?: string
}

export function createElement(params?: ICreateElementParams) {
  const element = document.createElement('div')
  document.body.appendChild(element)

  if (params?.className) {
    element.classList.add(params.className)
  }

  if (params?.rect) {
    element.getBoundingClientRect = () => params.rect as DOMRect
  }

  return element
}

/**
 * 获取 DOM 元素样式
 * @param container 容器
 * @param selector 选择器
 * @returns 样式对象
 */
export function getElementStyle(container: HTMLElement, selector: string) {
  const elem = container.querySelector(selector)
  if (elem) {
    return window.getComputedStyle(elem)
  }
  return {} as Partial<CSSStyleDeclaration>
}
