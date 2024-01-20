/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '40rem',
      },
      height:{
        '10vh':'10vh',
        '90vh':'90vh'
      },
      scale: {
        '110': '1.10',
      }
    },
  },
  plugins: [],
}