/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "561px",
      laptop: "769px",
      medium: "641px",
      larg: "1200px",
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {},
  },
  screens: {
    "2xl": "1320px",
  },
  plugins: [],
};
