module.exports = {
  siteMetadata: {
    title: `Codename: Tam`,
    name: `Tamara Harris`,
    siteUrl: `https://tamaraharris.dev`,
    description: `Documenting my blog journey to break into the tech industry`,
    hero: {
      heading: `Welcome to my official blog, the source for confidently stumbling into tech.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/codenametam`,
      },
      {
        name: `github`,
        url: `https://github.com/codenametam`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/tamaradharris/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CodenameTam`,
        short_name: `Tam`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/cntLogoTwo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
