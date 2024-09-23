module.exports = {
  siteMetadata: {
    title: "Resume - David Riches",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")("./tailwind.config.js"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        develop: true, // Enable while developing to help debug
        purgeOnly: ["src/styles/global.css"], // Specify only global CSS for purging if needed
        // safelist any classes that might be purged but are necessary:
        safelist: ["container", "mx-auto", "my-2", "md:my-6", "px-2"],
      },
    },
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
        accessToken: `n1zj6PHc2zcvyhXl64nWAT6hCfnOnYYIqQw-1jI_6nA`,
        useNameForId: false,
      },
    },
    "gatsby-plugin-offline",
  ],
};
