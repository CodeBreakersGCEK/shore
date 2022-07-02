/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      phone: { max: "700px" },
      tablet: { max: "1000px", min: "700px" },
      max1200: { max: "1200px", min: "1000px" },
      max800: { max: "800px" },
      pc1600: { max: "1600px" },
    },
    extend: {},
  },
  plugins: [],
};
