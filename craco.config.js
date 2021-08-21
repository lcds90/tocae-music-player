const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      'Actions': path.resolve(__dirname, 'src/redux/actions/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'Components': path.resolve(__dirname, 'src/components/'),
      'Features': path.resolve(__dirname, 'src/features/'),
      'Pages': path.resolve(__dirname, 'src/pages/'),
      'Reducers': path.resolve(__dirname, 'src/redux/reducers/'),
      'Services': path.resolve(__dirname, 'src/services/'),
      'Store': path.resolve(__dirname, 'src/redux/store/'),
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
