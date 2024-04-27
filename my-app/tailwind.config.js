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
      },
      fontFamily: {
        'montserrat': ["Montserrat Alternates", "sans-serif"],
        'quattrocento': ["Quattrocento Sans", "sans-serif"],
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
      }
    },
  },
  plugins: [],
}

