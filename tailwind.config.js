module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        primary: "'Roboto Mono', monospace",
        secondary: "'Ubuntu', sans-serif",
      },
      screens: {
        sm:{'max':'768px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
