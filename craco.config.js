const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
  eslint: {
    enable: false,
    mode: ESLINT_MODES.extends,
    configure: () =>
      // Workaround for broken ESLINT_MODES.file mode
      require('./.eslintrc')
    ,
  },
};
