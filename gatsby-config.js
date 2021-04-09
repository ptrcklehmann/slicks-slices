import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '0o16dm0m',
        apiVersion: '2021-04-09',
        dataset: 'producao',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
