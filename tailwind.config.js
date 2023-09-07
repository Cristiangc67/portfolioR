/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        React:'#00D8FF',
        JavaScript:'#F7DF1E',
        Tailwind:'#45AAB3',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poiret: ['Poiret One', 'sans-serif']
      }
      /* backgroundImage: {
        'mainbg': "url('/src/assets/bg.jpg')"
      } */
    },
  },
  plugins: [],
}