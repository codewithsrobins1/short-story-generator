/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // base Korean UI font (SUIT)
        suit: ['var(--font-suit)'],
        // fun display font (Fredoka) for big headings
        display: ['var(--font-fredoka)'],
        // English body font (Quicksand)
        body: ['var(--font-quicksand)'],
      },
    },
  },
  plugins: [],
};
