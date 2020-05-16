require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    siteTitle: `Venu's Blog`,
    siteTitleAlt: `Venu's Blog`,
    siteHeadline: `Venu's Blog`,
    siteUrl: `https://vchrombie.github.io/`,
    siteDescription: `Venu's Blog.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@vchrombie`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        blogPath: `/archive`,
        showLineNumbers: false,
        navigation: [
          {
            title: `Archive`,
            slug: `/archive`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/vchrombie`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/vchrombie`,
          },
        ],
        feedTitle: `Venu's Blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121045448-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Venu's Blog`,
        short_name: `Venu's Blog`,
        description: `Venu's Blog.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2EC8D0`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
