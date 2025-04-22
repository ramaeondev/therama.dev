const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      'dark:border-white',
      'dark:hover:border-pink-500',
      'dark:hover:text-pink-500',
      'hover:text-lightBlue-600',
      'hover:border-lightBlue-600'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      gray: colors.gray,
      blueGray: colors.blueGray,
      white: colors.white,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
