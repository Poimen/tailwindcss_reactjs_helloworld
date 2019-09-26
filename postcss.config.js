const tailwindcss = require('tailwindcss');
// const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./public/**/*.html'],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// });

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss, cssnano]
    //   : []
  ]
};