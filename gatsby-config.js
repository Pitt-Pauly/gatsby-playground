module.exports = {
  siteMetadata: {
    title: 'Pitt\'s website - powered by Gatsby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-source-hacker-news',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },

  ],
}
