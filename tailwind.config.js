/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F3F3FD",
        title: "#212234",
        pink: {
          100: "#FFE2E0",
          200: "#FFC1C1",
          300: "#FFA2AB",
          400: "#FF8AA2",
          500: "#FF6493",
          600: "#DB4983",
          700: "#B73274",
          800: "#931F65",
          900: "#7A135A",
        },
        blue: {
          100: "#E4E6F7",
          200: "#CBCFEF",
          300: "#A2A6D1",
          400: "#767AA4",
          500: "#414468",
          600: "#2F3259",
          700: "#20234A",
          800: "#14163C",
          900: "#0C0E31",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
