/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // Ajout de la police Lato
      },
    },
  },
  plugins: [],
}

