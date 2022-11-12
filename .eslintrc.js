module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    curly: ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-useless-escape': ['error'],
    'linebreak-style': [0, 'error', 'windows'],
    'react/destructuring-assignment': ['error', 'always'],
    'switch-colon-spacing': ['error'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'react/prop-types': 'off',
    'no-alert': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      { labelAttributes: ['htmlFor'] },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
};
