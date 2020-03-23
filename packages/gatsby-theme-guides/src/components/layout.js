/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'

const Layout = ({ children }) => (
  <React.Fragment>
    <Global styles={{ body: { margin: 0 } }} />
    <header sx={{ p: 4, bg: 'primary', color: 'background' }}>
      gatsby-theme-docs
    </header>
    <main sx={{ p: 4 }}>{children}</main>
  </React.Fragment>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
