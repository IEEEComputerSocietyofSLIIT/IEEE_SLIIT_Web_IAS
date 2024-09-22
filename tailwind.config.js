/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00964D',
      },
      backgroundImage: {
        'gradient-to-transparent': 'linear-gradient(to right, #742581, transparent)',
      },
    },
  },
  plugins: [],
}
