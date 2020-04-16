const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "full": "1380px"
      },
      colors: {
        primary: colors.blue,
        secondary: colors.green,
        tertiary: "#C0FFEE"
      }
    },
  },
  variants: {},
  plugins: [],
}
