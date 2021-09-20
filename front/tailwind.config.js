module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gym': "url('/src/images/barbell.jpeg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
