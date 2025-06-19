/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dice-gold': '#D4AF37',
        'deep-navy': '#1B2951',
        'light-gold': '#F4E7B1',
        'medium-navy': '#3A4A73',
        'soft-gray': '#F8F9FA',
        primary: '#D4AF37',
        secondary: '#1B2951',
        accent: '#D4AF37',
        text: '#1B2951',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}