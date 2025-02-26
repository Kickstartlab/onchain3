/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#010712",
        "100": "#000",
      },
      white: {
        "50": "#232121;",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "50": "#2AF4FF",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', serif"],
      'poppins': ["'Poppins', serif"],
      'bruno': ["'Bruno Ace', serif"]
    }
  },
  plugins: [],
}
