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
        spaceId: `anjlutb8dq3v`,
        accessToken: `4bf9314dc5bdfbf380247aa3ab84d7da0e86d33a6089168eb32558d4f7096cda`,
        useNameForId: false,
      },
    },
    "gatsby-plugin-offline",
  ],
};
