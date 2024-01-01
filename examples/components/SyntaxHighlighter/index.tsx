import './styles.less'

import type { CSSProperties } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
// @ts-ignore
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IProps {
  value: object
  language?: string
  style?: CSSProperties
}

const ESyntaxHighlighter: React.FC<IProps> = ({ value, language, style }) => {
  return (
    <div style={style}>
      <SyntaxHighlighter
        className="example-hl"
        language={language ?? 'json'}
        style={stackoverflowLight}
      >
        {JSON.stringify(value, null, 2)}
      </SyntaxHighlighter>
    </div>
  )
}

export default ESyntaxHighlighter
