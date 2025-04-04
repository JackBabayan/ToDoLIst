/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#f5f5f5',
        'dark-bg': '#1a1a1a',
        'light-card': '#ffffff',
        'dark-card': '#2d2d2d',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};