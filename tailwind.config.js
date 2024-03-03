/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#7047EB",
      secondry: "E2EAF1",
      neutral: colors.grey,
    },
    extend: {},
  },
  plugins: [],
};
