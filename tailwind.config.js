/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: { tablet: "561px", laptop: "769px" },
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
