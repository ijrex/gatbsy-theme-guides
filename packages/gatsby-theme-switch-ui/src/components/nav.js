import React from 'react'
import { Link } from 'gatsby'

import useSitePages from '../hooks/use-sitepages'

const Nav = () => {
  const pages = useSitePages()

  return (
    <ul>
      {pages.map(page => (
        <li>
          <Link to={page.node.path}>{page.node.path}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
