/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // or 'media'

  content: ['./src/**/*.{html,js,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
