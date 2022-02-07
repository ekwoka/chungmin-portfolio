module.exports = {
  content: ['src/**/*.js', 'src/index.js'],
  theme: {
    extend: {
      fontFamily: {
        proxima: [
          'Proxima Nova',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        goldenbook: [
          'Goldenbook',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
