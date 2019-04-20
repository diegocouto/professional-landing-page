module.exports = {
  siteMetadata: {
    title: 'Diego Couto',
    description: "I'm an experienced software engineer working with back-end and front-end development. In the past years, I've worked for the government, agencies and small businesses to help them communicate, engage and make more sales.",
    author: '@diegocouto',
    url: 'https://couto.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Diego Couto - Full-stack developer',
        short_name: 'Diego Couto',
        start_url: '/',
        background_color: '#08112A',
        theme_color: '#08112A',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Source+Sans+Pro:400,600,700',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134153358-3',
      },
    },
  ],
};
