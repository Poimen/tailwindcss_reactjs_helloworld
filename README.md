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

