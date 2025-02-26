/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "rgba(255, 255, 255, 0.03);",
        "50": "#161b1c",
        "100": "#000",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "50": "#2AF4FF",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', serif"],
      'poppins': ["'Poppins', serif"]
    }
  },
  plugins: [],
}
