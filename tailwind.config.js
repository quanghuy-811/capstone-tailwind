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
        sans: ["Poppins", "sans-serif"],
      },
      zIndex: {
        1: "-1",
      },
      backgroundImage: {
        gradient: "linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%)",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
