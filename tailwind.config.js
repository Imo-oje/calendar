/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#7047EB",
      secondary: "#F6F8FC",
      neutral: "#F5F5F5",
    },
    extend: {},
  },
  plugins: [],
};
