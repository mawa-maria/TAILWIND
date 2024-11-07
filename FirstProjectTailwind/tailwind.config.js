/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        brightRetro: 'Bright Retro',
        alfa: ['Alfa Slab One', 'cursive'],
        Pacifico:'Pacifico',
      },
      colors: {
        cream: '#f8f7e6',       // Couleur de fond crème
        green: {
          100:'#e0f19c',
          '100-opacity-23': 'rgba(224, 241, 156, 0.23)',
          200: '#779b89',      // Vert clair pour les boutons
          700: '#3B7A57',
        },
        red:{
          300:'#da674d',

        },
        yellow: {
          300: '#fbc043',      // Jaune pour le bouton "Historique"
        },
      }
      
    },
  },
  plugins: [],
}

