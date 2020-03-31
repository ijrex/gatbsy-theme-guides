/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => (
  <React.Fragment>
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}
    >
      <div
        sx={{
          height: ['auto', '100vh'],
          flexGrow: ['100%', '300px'],
          position: ['relative', 'sticky'],
          top: 0,
          borderBottom: ['1px solid white', 'none'],
          borderRight: ['none', '1px solid white'],
        }}
      >
        <Header>
          <p>TODO: Menu goes here</p>
        </Header>
      </div>
      <div sx={{ p: 3 }}>
        <main>{children}</main>
      </div>
    </div>
  </React.Fragment>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
