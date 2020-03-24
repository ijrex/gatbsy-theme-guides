/** @jsx jsx */

import { jsx } from 'theme-ui'
import { preToCodeBlock } from 'mdx-utils'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

const Code = props => {
  const codeProps = preToCodeBlock(props)

  if (!codeProps) {
    return <pre {...props} />
  }

  const { codeString, language } = codeProps

  return codeProps['react-live'] ? (
    <h1>Hello</h1>
  ) : (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          sx={{
            p: 3,
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
