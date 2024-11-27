/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: { rounded: ['"Arial Rounded"', "sans-serif"] },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'jasper': '#D46049',
        'moonstone': '#2AB7CA',
        'chestnut': '#A53C27',
        'klein-blue': '#2128AB',
      },
    },
  },
  plugins: [],
};
