module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FBFBFB',
      'secondary': '#FFF1C1',
      'tertiary': '#78B7BB',
      'highlight': '#808B97'
     }),
    extend: {
      fontFamily: {
        primary: ['Ubuntu', 'sans-serif'],
        secondary: ['Prompt', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '4.5rem',
        '5xl': '5rem',
      },
      textColor: {
        'primary': '#FBFBFB',
        'secondary': '#FFF1C1',
        'tertiary': '#78B7BB',
        'highlight': '#808B97',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
