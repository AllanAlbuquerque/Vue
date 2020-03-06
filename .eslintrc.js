module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'import/prefer-default-export': 0,
    'no-shadow': ['error', { 'allow': ['state'] }]
  }
};
