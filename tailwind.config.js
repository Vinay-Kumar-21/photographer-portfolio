/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightcoral: '#F08080',
        lightsalmon: '#FFA07A',

      },
      width: {
        '600': '600px',
      },
      height: {
        '900': '700px',
      }
    },
  },
  plugins: [],
}