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
