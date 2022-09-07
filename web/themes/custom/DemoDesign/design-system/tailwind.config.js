const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: '#23529F',
        secondary: '#E22B4B',
        white: '#FFFFFF'
      }
    },
    fontFamily: {
      sans: ['geomanist', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
