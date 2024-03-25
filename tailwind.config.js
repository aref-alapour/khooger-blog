/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/assets/js/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": {
          1: "#86B3FF",
          2: "#649DFF",
          3: "#156BFF",
        },
        "secondary": {
          1: "#C398DE",
          2: "#B27BD4",
          3: "#9243C2",
        },
      },
      fontFamily: {
        "IranSans" : "IranSans",
      },
      spacing: {
        "30" : "7.5rem"
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.625rem',
      },
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-third', '& > * > a');
    },
    require('tailwind-scrollbar-hide')
  ],
}

