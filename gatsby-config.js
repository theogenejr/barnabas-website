/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Barnabas Samuel - Activist and Musician`,
    description: `A website for Barnabas Samuel - Activist and musician`,
    author: `@theogenejr`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,

    "gatsby-plugin-postcss",
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "http://barnabas.local/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Barnabas Samuel`,
        short_name: `Barnabas Samuel`,
        start_url: `/`,
        background_color: `#048AF9`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon1.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
