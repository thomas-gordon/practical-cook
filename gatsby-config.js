module.exports = {
  siteMetadata: {
    title: `Practical Cook`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-41241311-2',
      },
    },
  ],
}
