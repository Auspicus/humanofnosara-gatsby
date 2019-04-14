import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO/SEO'

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props)

    return (
      <Layout>
        <SEO title="Human" />
        <h1>{}</h1>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query HumanPageBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     contentfulEntry(slug: { eq: $slug }) {
//       field_body
//       field_featured_image {
//         url
//       }
//     }
//   }
// `
