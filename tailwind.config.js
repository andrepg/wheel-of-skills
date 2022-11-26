/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
