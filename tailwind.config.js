/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "serif"],
        radioCanadaBig: ["Radio Canada Big", "sans-serif"],
        rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}

