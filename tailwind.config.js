
/** @type {import('tailwindcss').Config} */
module.exports = {
  
    
      content: [
       
        './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
    options: {
     
    },
  
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  
  theme: {
    extend: { 
      
      colors: {
      MainBeige: '#EFECE3',
      customTeal: '#003847',
      LunarTwilight:"#2f4858",
      LunarDawn:"#21323e",
      LunarDark:"#121b21",
      NightFall:"#141414",

      customTealAlpha:"#00384780",
      customBurgandy: '#470F00',


      },
       
      


    fontFamily: {
      'satoshi': ['Satoshi', 'sans-serif'],
    },
    fontWeight: {
      'satoshi-light': 200,
      'satoshi-normal': 400,
      'satoshi-medium': 500,
      'satoshi-semibold': 600,
      'satoshi-bold': 700,
    },
    fontSize: {
      'sm': '0.875rem',   // small
      'base': '1rem',     // default
      'lg': '1.125rem',   // large
      'xl': '1.25rem',    // extra large
      '2xl': '1.5rem',    // 2 times extra large
    },

    classes:{
      hidden:{
        display:"none",
        transitionProperty:"all 1s ease-in-out",
      },
      
      show:{
        display:"block",
      }

    },

    transitionProperty: {
      'opacity': 'opacity',
      'size':'height,width',
      'cursor':'size,width,height,background-color',
      'button':'transform,color,height,width,background-color,opacity',
      'text':'transform,color,background-color',
      
    },
    transitionTimingFunction: {
      'expo': 'cubic-bezier(.13,.93,.58,.57)',
      'elastic':"cubic-bezier(0.25,0.4,0.55,1.4)",
      'quart':"cubic-bezier(.62,.55,.68,1.12)"
    },
    

    aspectRatio: {
      'cinematic': '21/9', // Define a custom cinematic aspect ratio
    },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        'upright': 'upright',
      },

    animation:{
      'pulse-slow': 'pulse 2s ease-in-out infinite',
      'blob': 'blob 7s infinite',

    },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    
    
    cursor:['hover'],
    minHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '75vh':'75vh'
    },
    
    fontFamily: {
      'Satoshi': ['Satoshi', 'sans-serif'],
      'Lora': ['Lora,serif'],
      'Erode':['Erode,serif'],

    },
    
    
    
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-animated'),
   
    
  ],
    
}}
