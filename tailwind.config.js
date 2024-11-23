const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        roboto: [ 'var(--font-roboto)', 'sans-serif' ],
        playpen: [ 'var(--font-playpen)', 'sans-serif' ],
        siliguri: [ 'var(--font-hind-siliguri)', 'sans-serif' ],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
