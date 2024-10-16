/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      borderColor: {
        nav: "#fe601940",
      },
      fontFamily: {
        merri: ['"Merriweather"', "sans-serif"],
        poppins: ['"Poppins', "sans-serif"],
      },
      zIndex: {
        1: "-1",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};