import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import GuidePage from '../components/guide-page'

export const query = graphql`
  query($pageID: String!) {
    guidePage(id: { eq: $pageID }) {
      title
      updated(fromNow: true)
      body
    }
  }
`

const GuidePageTemplate = ({ data }) => <GuidePage page={data.guidePage} />

export default GuidePageTemplate

GuidePageTemplate.propTypes = {
  data: PropTypes.shape({
    guidePage: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      updated: PropTypes.string,
    }),
  }).isRequired,
}
