module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  ignorePatterns: ['craco.config.js', 'jsconfig.json'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Actions', './src/redux/actions/'],
          ['Assets', './src/assets/'],
          ['Components', './src/components/'],
          ['Features', './src/features/'],
          ['Pages', './src/pages/'],
          ['Reducers', './src/redux/reducers/'],
          ['Services', './src/services/'],
          ['Store', './src/redux/store/'],
        ],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
