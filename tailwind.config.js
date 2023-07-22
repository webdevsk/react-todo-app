/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
import defaultTheme from 'tailwindcss/defaultTheme'

const extendedAnimations = {
  ripple : 'ripple .3s linear',
  toLeft : 'toLeft .3s ease-in-out',
  toRight: 'toRight .3s ease-in-out',
  toUp   : 'toUp .3s ease-in-out',
  toDown : 'toDown .3s ease-in-out',
}

const extendedKeyframes = {
  ripple: { '100%': {transform: 'translateX(100%)'} },
  toUp  : { 
            '0%'  : {transform: 'translateY(10px)', opacity: '0'},
            '50%' : {opacity: 1},
            '100%': {transform: 'translateY(0px)'}
          },
  toDown  : { 
            '0%'  : {transform: 'translateY(-10px)', opacity: '0'},
            '50%' : {opacity: 1},
            '100%': {transform: 'translateY(0px)'}
          },
  toLeft: {
            '0%'  : {transform: 'translateX(10px)'},
            '100%': {transform: 'translateX(0px)'}
          },
  toRight: {
            '0%'  : {transform: 'translateX(-10px)'},
            '100%': {transform: 'translateX(0px)'}
          }
}

const extendedFontFamily = {
  'calistoga': ['Calistoga', ...defaultTheme.fontFamily.serif],
  'sans'     : ['Poppins', ...defaultTheme.fontFamily.sans],
}

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:  extendedAnimations,
      keyframes:  extendedKeyframes,
      fontFamily: extendedFontFamily,
    },
  },
  plugins: [],
})