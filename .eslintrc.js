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
          ['@', './src/'],
          ['@actions', './src/actions'],
          ['@assets', './src/assets'],
          ['@components', './src/components/'],
          ['@pages', './src/pages/'],
          ['@reducers', './src/reducers/'],
          ['@services', './src/services/'],
          ['@store', './src/store/'],
        ],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
