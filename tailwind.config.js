/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/*.css"], 
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        circular: ["Circular STD"],
      },
      colors: {
        ungu: "#5D50C6",
        grey: "#222831",
        pink: "#F85E9F",
      },
    },
  },
  plugins: [],
};
