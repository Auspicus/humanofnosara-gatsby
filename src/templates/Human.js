import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Header from '../components/Header/Header'

import icon from '../pages/icon.png'
import StoryDetail from '../components/StoryDetail';

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props)

    return (
      <Layout>
        <SEO
          title="Human"
          keywords={[
            `blog`,
            `journalism`,
            `humans`,
            `nosara`,
            `stories`,
            `locals`,
            `tourists`,
            `community`
          ]}
        />
        <Header menu={[{ name: 'Home', icon, url: '/' }]} />
        <StoryDetail
          image={this.props.data.contentfulEntry.field_featured_image.url}
          text={this.props.data.contentfulEntry.field_body} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEntry(slug: { eq: $slug }) {
      field_body
      field_featured_image {
        url
      }
    }
  }
`
