module.exports = {
  siteMetadata: {
    title: `Motionwares Blog`,
    description: `A collection of thoughts, nifty tips and tricks and latest updates from our front desk.`,
    author: `@motionwares`,
    siteUrl: "https://blog.motionwares.com/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/motionwares"
      },
      {
        name: "instagram",
        url: "https://instagram.com/motionware"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Blog",
        fieldName: "Blog",
        url: "https://motionwares-hire-api.appspot.com/graphql",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTU3ODI4N2JmZGE0NjAwMWI3ZjUwZWQiLCJibG9nQWRtaW4iOmZhbHNlLCJibG9nU3VwZXJBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgyNzkzMzUxLCJleHAiOjE1ODUzODUzNTF9.3cHJWzGbdW8hr6d-nHZl-rWlHuhEQCYRdyak0l0FYMs"
        }
      }
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
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Eczar`,
            variants: [`400`, `700`, `800`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`, `900`]
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://motionwares-hire-api.appspot.com/graphql"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
