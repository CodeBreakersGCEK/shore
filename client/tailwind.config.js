/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors: {
      primary: "#22D3EE",
      secondary: "#0891B2",
      foreground: "#FFFFFF",
      background: "#E5E7EB",
      fontPrimary1: "#67E8F9",
      fontPrimary2: "#164E63",
      fontSecondary: "#A3A3A3",
      input: "#F3F4F6",
      inputText: "#A3A3A3",
      focusInput: "#d0d2d6",
    },
    screens: {
      max1000: { max: "1000px", min: "501px" },
      max500: { max: "500px" },
    },
  },
  plugins: [],
};
