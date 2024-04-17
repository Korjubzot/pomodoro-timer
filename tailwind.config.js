/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: { rounded: ['"Arial Rounded"', "sans-serif"] },
      colors: {},
    },
  },
  plugins: [],
};
