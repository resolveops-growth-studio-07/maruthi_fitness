/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gym-red': '#E63946',
        'gym-dark': '#0a0a0a',
        'gym-gray': '#1a1a1a',
        'gym-light': '#f5f5f5',
        'gym-muted': '#a3a3a3'
      },
      fontFamily: {
        'display': ['Impact', 'Oswald', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'sans-serif'],
        'nav': ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
