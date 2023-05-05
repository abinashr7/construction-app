/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(40,190,90)',
        secondary: 'rgb(58,177,236)',
        tertiary: '#F5385D',
        impo: 'rgb(200,20,30)',
      },
    },
  },
  plugins: [],
}

