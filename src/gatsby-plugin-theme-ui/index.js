import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    primary: '#000',
    secondary: '#30ffd5',
    accent: '#6166DC',
    grey: '#00ffdb',
    background: '#fff',
  },
};