/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx, useColorMode } from 'theme-ui'

const Header = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header sx={{ p: 3, bg: 'primary', color: 'background' }}>
      {' '}
      <button
        type="button"
        sx={{
          float: 'right',
        }}
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
      {children}
    </header>
  )
}

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
