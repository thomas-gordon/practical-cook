module.exports = {
  siteMetadata: {
    title: `Practical Cook`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: `node_modules`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-41241311-2',
      },
    },
  ],
}
