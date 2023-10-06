/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:"'Poppins', sans-serif", // call this font by `font-poppins` class
      }
    },
  },
  plugins: [require("daisyui")],
}

