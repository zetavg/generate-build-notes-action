/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: { node: true, es6: true, jest: true },
  ignorePatterns: ['**/dist/*'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
  },
};

module.exports = config;
