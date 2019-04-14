import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Header from '../components/Header/Header'
import Splash from '../components/Splash/Splash'
import StoryListing from '../components/StoryListing'

import icon from './icon.png'

class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <SEO
            title="Home"
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
          <Header menu={[
            { name: 'Home', icon, url: '/' },
            // { name: 'About', url: '/about' },
            // { name: 'Donate', url: '/donate' },
            // { name: 'Volunteer', url: '/volunteer' },
            // { name: 'News', url: '/news' }
          ]} />
          <Splash title="Humans of Nosara" />
          <StoryListing nodes={this.props.data.allContentfulEntry.edges} />
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allContentfulEntry {
      edges {
        node {
          id
          slug
          field_name
          field_body
          field_teaser_image {
            url
          }
          field_featured_image {
            url
          }
        }
      }
    }
  }
`
