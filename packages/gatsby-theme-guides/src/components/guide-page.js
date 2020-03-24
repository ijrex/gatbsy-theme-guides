/** @jsx jsx */

import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'
import TableOfContents from './table-of-contents'

const GuidePage = ({ page }) => (
  <Layout>
    <h1>{page.title}</h1>
    <MDXRenderer>{page.body}</MDXRenderer>
    <p
      sx={{
        color: 'muted',
        borderTop: theme => `1px solid ${theme.colors.muted}`,
        pt: 2,
      }}
    >
      This page was updated {page.updated}.
    </p>
    <TableOfContents />
  </Layout>
)

export default GuidePage

GuidePage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
  }).isRequired,
}
