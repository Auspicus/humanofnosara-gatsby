const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const humanPageTemplate = path.resolve(`src/templates/Human.js`)

  return graphql(`
    {
      allContentfulEntry {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors)
      throw result.errors
    
    result.data.allContentfulEntry.edges.forEach(edge => {
      const node = edge.node

      createPage({
        path: `/human/${node.slug}`,
        component: humanPageTemplate,
        context: { slug: node.slug }
      })
    })
  })
}
