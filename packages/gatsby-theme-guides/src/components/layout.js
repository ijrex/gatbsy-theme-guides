/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import React from 'react'

const Layout = ({ children }) => (
  <React.Fragment>
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
