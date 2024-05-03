/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../public/assets/main-bg.png')",
        'main-ppl': "url('../public/assets/main-ppl.png')",
        'jungeun': "url('../public/assets/jungeun.png')",
        'chris': "url('../public/assets/chris.png')",
        'mission': "url('../public/assets/mission-bg.png')",
      },
      fontFamily: {
        'montserrat': ["Montserrat Alternates", "sans-serif"],
        'quattrocento': ["Quattrocento Sans", "sans-serif"],
        'quatt': ["Quattrocento", "serif"],
        'gilroy': ["gilroy", "sans-serif"],
      },
      colors: {
        'nav': '#3D3D2F',
        'main-title': '#2A2A26',
        'primary': '#E7EA45',
        'secondary': '#3AB4DA',
        'menu': '#F7F7C0',
        'success': '#EA6C56',
        'mypink': '#EB6AA5',
        'primarydown':'#C7E667',
        'matcha': '#DCEFA9',
        'charcoal': '#36454F',
      }
    },
  },
  plugins: [],
}

