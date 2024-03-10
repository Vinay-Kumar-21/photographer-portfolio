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
        coral: 'rgb(245,179,155)'
      },
      width: {
        '600': '600px',
        '700': '700px',
      },
      height: {
        '900': '900px',
      },
      borderRadius: {
        'half': '50%',
      }
    },
  },
  plugins: [],
}