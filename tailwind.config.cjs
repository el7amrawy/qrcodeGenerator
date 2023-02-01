const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
