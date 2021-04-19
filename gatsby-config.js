module.exports = {
  siteMetadata: {
    title: "Resume - David Riches",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Resume - David Riches",
        short_name: "DR resume",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#F40088",
        display: "minimal-ui",
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `r52fapf4ie31`,
        accessToken: `ae22f26d1b797ed145f6102b687466a6ee04243e115b2044acadaf0752f4e725`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
