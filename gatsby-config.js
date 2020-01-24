module.exports = {
  siteMetadata: {
    title: `Student Dev Coach`,
    name: `Student Dev Coach`,
    siteUrl: `https://studentdevcoach.com`,
    description: `Student Dev Coach, a site focused on teaching bootcamp and college developers.`,
    hero: {
      heading: `Student Dev Coach, a site focused on teaching bootcamp and college developers.`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/kyrelldixon`,
      },
      {
        name: `github`,
        url: `https://github.com/kyrelldixon`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/kyrell.dixon`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        mailchimp: true,
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us3.list-manage.com/subscribe/post?u=2d60e20754af6d5ea8e855f91&amp;id=bbe5dc47d8',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Student Dev Coach`,
        short_name: `StudentDevCoach`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156457687-1",
      },
    },
  ],
};
