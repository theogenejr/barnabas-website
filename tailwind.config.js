/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["'Sofia Sans', sans-serif"],
      },
      colors: {
        goodBlue: "#048AF9",
      },
      screens: {
        semiLg: "950px",
      },
    },
  },
  plugins: [],
}
