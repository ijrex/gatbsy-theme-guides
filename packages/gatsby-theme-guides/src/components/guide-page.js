/** @jsx jsx */

import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'

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
