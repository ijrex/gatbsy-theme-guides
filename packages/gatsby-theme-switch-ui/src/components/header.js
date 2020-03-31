/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx, useColorMode } from 'theme-ui'
import { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <header sx={{ p: 3, color: 'primary' }}>
          <h1
            sx={{
              fontSize: 6,
              fontWeight: 'heading',
              lineHeight: 'heading',
              wordWrap: 'break-word',
            }}
          >
            &lt;/&gt;
            <br />
            {data.site.siteMetadata.title}
          </h1>
          <button
            type="button"
            sx={{
              float: 'right',
            }}
            onClick={() => {
              setColorMode(colorMode === 'default' ? 'light' : 'default')
            }}
          >
            Toggle {colorMode === 'default' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            onClick={() => {
              setMenuToggle(!menuToggle)
            }}
          >
            Show/Hide Menu
          </button>
          {menuToggle ? <div>{children}</div> : <div />}
        </header>
      )}
    />
  )
}

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
