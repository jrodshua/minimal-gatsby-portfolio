module.exports = {
  siteMetadata: {
    title: `Josh Rodriguez's Portfolio`,
    description: `Josh Rodriguez's Front End Engineer Portfolio Site`,
    author: `@jrodshua`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josh Rodriguez's Portfolio`,
        short_name: `Jrodshua Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1A2C42`,
        display: `minimal-ui`,
        icon: `src/images/jr-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
