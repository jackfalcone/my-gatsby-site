require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// process.env.API_KEY

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
