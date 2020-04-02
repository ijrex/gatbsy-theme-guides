import { useStaticQuery, graphql } from 'gatsby'

const useSitePages = () => {
  const data = useStaticQuery(graphql`
    {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  return data.allSitePage.edges
}

export default useSitePages
