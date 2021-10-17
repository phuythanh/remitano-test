module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '60rem': '60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
