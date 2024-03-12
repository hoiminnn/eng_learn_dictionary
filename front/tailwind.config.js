/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      'node_modules/preline/dist/*.js',
    ],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
        require('preline/plugin'),
    ],
  }

