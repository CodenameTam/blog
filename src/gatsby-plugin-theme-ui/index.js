import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    primary: '#707070',
    secondary: '#30ffd5',
    accent: '#93c9fa',
    grey: '#a14a2e',
    background: '#fff',
  },
};