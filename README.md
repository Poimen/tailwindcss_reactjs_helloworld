# Tailwindcss and ReactJS Hello World

Hello World test project for trialing out [Tailwindcss](https://tailwindcss.com)

This is just a sample application from Create React App (CRA) and attempt at an optimised Tailwind css output.

## Steps
1. Scaffold a new app with create-react-app
```
npx create-react-app .
```

2. npm install tailwindcss
```
npm install --save-dev tailwindcss
```

3. Generate configuration file
```
npx tailwind init
```

4. Install postcss-cli and autoprefixer
```
npm install --save-dev postcss-cli autoprefixer
```

5. Add postcss.config.js settings
6. Add `src/assets/tailwind.css` with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Add npm scripts to build tailwind:
```
"build:css": "tailwind build src/assets/tailwind.css -o src/assets/base.css",
"start": "npm run build:css && react-scripts start",
"build": "npm run build:css && react-scripts build",
```

8. Import styles into app
```
import './assets/base.css';
```

9. Test...and it should all work....

## After production build...
```
  File                                          Size               Gzipped

  build/static/css/main.967f32c7.chunk.css      660 KB              82.99 KB
  build/static/js/2.d0d659d1.chunk.js           124 KB              38.59 KB
  build/static/js/main.7012c808.chunk.js        1.6 KB              854 B
  build/static/js/runtime-main.be0b657f.js      1.6 KB              789 B
```

## Optimisations
1. Install cssnano
```
npm install --save-dev cssnano
```

2. Install purgecss
```
npm install --save-dev @fullhuman/postcss-purgecss
```

3. Update `postcss.config.js` to include above modules

4. Add prebuild step to build npm script with node env set to production

## After optimisations...
```
  File                                          Size               Gzipped

  build/static/css/main.9f368bf0.chunk.css      2.9 KB              1.19 KB
  build/static/js/2.d0d659d1.chunk.js           124 KB              38.59 KB
  build/static/js/main.7012c808.chunk.js        1.6 KB              854 B
  build/static/js/runtime-main.be0b657f.js      1.6 KB              789 B
```
