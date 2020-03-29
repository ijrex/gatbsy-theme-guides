/** @jsx jsx */

import { jsx } from 'theme-ui'

import { Header } from 'gatsby-theme-switch-ui'

const Test = () => {
  return (
    <div>
      <Header>
        <h1 sx={{ fontFamily: 'body' }}>Test header</h1>
      </Header>
    </div>
  )
}

export default Test
