import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <>
    <header>gatsby-theme-docs</header>
    <main>{children}</main>
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
