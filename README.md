# Tailwindcss and ReactJS Hello World

Hello World test project for trialing out [Tailwindcss](https://tailwindcss.com)

This is just a sample application from Create React App (CRA) and attempt at an optimised Tailwind css output.

## Steps
1. Scaffold a new app with create-react-app
```
npx create-react-app .
```

2. npm install tailwindcss and dependencies

CRA does not currently support PostCSS 8, so install the [compat](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build) build for Tailwind.

```
npm install --save-dev tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

3. Generate configuration file
```
npx tailwindcss-cli@latest init
```

4. Install postcss-cli and npm-run-all
```
npm install --save-dev postcss-cli npm-run-all
```

5. Add postcss.config.js settings
6. Add `src/assets/styles/tailwind.css` with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Add npm scripts to build tailwind:
```
"watch:css": "postcss src/assets/styles/tailwind.css -o src/assets/styles/index.css -w",
"start:js": "react-scripts start",
"start": "npm-run-all -p watch:css start:js",
"prebuild": "NODE_ENV=production postcss src/assets/styles/tailwind.css -o src/assets/styles/index.css",
```

8. Import styles into index
```
import './assets/styles/index.css';
```

9. Test...and it should all work....

## After production build...
```
File sizes after gzip:

  41.21 KB  build/static/js/2.f0ac8f82.chunk.js
  1.41 KB   build/static/css/main.2c910690.chunk.css
  1.41 KB   build/static/js/3.bd295f61.chunk.js
  1.18 KB   build/static/js/runtime-main.cff3aee4.js
  502 B     build/static/js/main.34e47f36.chunk.js
```

## Optimisations

By default Tailwind runs purgecss to remove unnecessary styles. Any further optimisation do not add significant value.

For other CSS assets, `cssnano` has been added. This does not reduce tailwind sizes.

For further reductions to suite your use case - refer the tailwind [docs](https://tailwindcss.com/docs/optimizing-for-production)
