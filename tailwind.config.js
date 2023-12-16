/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4E041',
        'primary-hover': 'rgba(255, 227, 2, 1)',
        'secondary': '#00BDD3',
        'ground': '#F8F8F8',
        'disabled': 'rgba(180, 180, 180, 1)',
        'error': 'rgba(203, 61, 64, 1)',
        'black-100': 'rgba(208, 207, 207, 1)',
        'black-500': 'rgba(0, 0, 0, 0.87)',
        'white-500': 'rgba(255, 255, 255, 0.87)',
        'gray-300': 'rgba(126, 126, 126, 1)'
      },
      width: {
        '25': '6.25rem',
      },
      minWidth: {
        '25': '6.25rem',
      },
      borderRadius: {
        'xl': '10px',
        '4xl': '5rem'
      },
      screens: {
        'xl': '1170px',
        'sx': '480px'
      },
      backgroundImage: {
        'bgMainHeader': "url('../src/images/bg-main-block.jpg')"
      },
      fontSize: {
        '4xl': '2.5rem'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      margin: {
        '12.5': '3.125rem',
        '35': '8.75rem'
      },
      fontSize: {
        base: ['16px', '26px'],
      }
    },
  },
  plugins: [],
}

