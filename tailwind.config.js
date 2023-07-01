/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

const extendedAnimations = {
  ripple : 'ripple .7s linear',
  toLeft  : 'toLeft .3s ease-in-out',
  toUp   : 'toUp .3s ease-in-out'
}

const extendedKeyframes = {
  ripple: { '100%': {width: '2000px', height: '2000px'} },
  toUp  : { 
            '0%'  : {transform: 'translateY(10px)', opacity: '0'},
            '50%' : {opacity: 1},
            '100%': {transform: 'translateY(0px)'}
          },
  toLeft: {
            '0%'  : {transform: 'translateX(0px)'},
            '100%': {transform: 'translateX(-10px)'}
          }
}

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: extendedAnimations,
      keyframes: extendedKeyframes
    },
  },
  plugins: [],
})