const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const withDefaults = require('./utils/default-options')

exports.onPreBootstrap = (_, options) => {
  const { contentPath } = withDefaults(options)

  const dir = path.join(process.cwd(), contentPath)

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type GuidePage implements Node @dontInfer {
      id:  ID!
      title: String!
      path: String!
      updated: Date! @dateformat
      body: String!
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId }, options) => {
  const { basePath } = withDefaults(options)
  const parent = getNode(node.parent)

  // Only work on MDX files that were loaded by this theme
  if (
    node.internal.type !== 'Mdx' ||
    parent.sourceInstanceName !== 'gatsby-theme-guides'
  ) {
    return
  }

  const pageName = parent.name !== 'index' ? parent.name : ''

  actions.createNode({
    id: createNodeId(`GuidePage-${node.id}`),
    title: node.frontmatter.title || parent.name,
    updated: parent.modifiedTime,
    path: path.join('/', basePath, parent.relativeDirectory, pageName),
    parent: node.id,
    internal: {
      type: 'GuidePage',
      contentDigest: node.internal.contentDigest,
    },
  })
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    GuidePage: {
      body: {
        type: 'String!',
        resolve: (source, args, context, info) => {
          // Load the resolver for the `Mdx` type `body` field
          const type = info.schema.getType('Mdx')
          const mdxFields = type.getFields()
          const resolver = mdxFields.body.resolve

          const mdxNode = context.nodeModel.getNodeById({ id: source.parent })

          return resolver(mdxNode, args, context, {
            fieldName: 'body',
          })
        },
      },
    },
  })
}
