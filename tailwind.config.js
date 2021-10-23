module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html',
  ],
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'max':'480px'},
      //custom for mobile devices
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FBFBFB',
      'secondary': '#FFF1C1',
      'tertiary': '#78B7BB',
      'highlight': '#808B97'
     }),
     borderColor: theme => ({
      ...theme('colors'),
      'highlight': '#808B97',
     }),
    extend: {
      fontFamily: {
        primary: ['Ubuntu', 'sans-serif'],
        secondary: ['Prompt', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '4.5rem',
        '5xl': '5.5rem',
      },
      textColor: {
        'primary': '#FBFBFB',
        'secondary': '#FFF1C1',
        'tertiary': '#78B7BB',
        'highlight': '#808B97',
      },
      animation: {
        updown: "updown 4s infinite",
      },
      keyframes: {
        updown: {
          "0%": {
            transform: "translate(0px,0px)",
          },
          "33%": {
            transform: "translate(10px,2px)",
          },
          "66%": {
            transform: "translate(13px,5px)",
          },
          "100%": {
            transform: "translate(0x,0px)",
          }
        }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
  }
}
