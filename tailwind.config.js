/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'bg-overlay': 'rgba(0, 0, 0, 0.5)',
        'peach-10': '#EDBF83',
        'dark-blue': '#469DC7'
      },
      fontFamily:{
        'outfit': "['Outfit', 'sans-serif']",
        'worksans': "['Work Sans', 'sans-serif']"
      }
    },
  },
  plugins: [],
}