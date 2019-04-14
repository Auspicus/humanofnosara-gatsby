module.exports = {
  siteMetadata: {
    title: `Humans of Nosara`,
    author: `David Disch`,
    description: `A collection of stories from the people of Nosara.`,
    siteUrl: `https://www.humansofnosara.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        space: 'hn3yqna44px1',
        accessToken: '08881938901f51aa0b2da6a9c5b07e8a16ec07574ee932febacdd2aee63613b7'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
