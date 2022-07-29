module.exports = {
  root: true,
  extends: [
    'semistandard',
    'eslint-config-react-app/base',
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'no-use-before-define': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
