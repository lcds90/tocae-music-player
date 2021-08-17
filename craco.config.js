const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  eslint: {
    mode: ESLINT_MODES.extends,
    configure: () =>
      // Workaround for broken ESLINT_MODES.file mode
      require('./.eslintrc')
    ,
  },
};
