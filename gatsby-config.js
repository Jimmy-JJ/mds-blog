module.exports = {
  siteMetadata: {
    title: `Motionwares Blog`,
    description: `A collection of thoughts, nifty tips and tricks and latest updates from our front desk.`,
    author: `@motionwares`,
    siteUrl: "https://blog.motionwares.com/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/motionwares",
      },
      {
        name: "instagram",
        url: "https://instagram.com/motionware",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff3c3c`,
        theme_color: `#ff3c3c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Eczar`,
            variants: [`400`, `700`, `800`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`, `900`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
