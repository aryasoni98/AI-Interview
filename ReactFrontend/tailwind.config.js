module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
     fontFamily :{
      "default" :['M PLUS Rounded 1c','serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}