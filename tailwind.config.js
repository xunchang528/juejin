const defaultTheme=require('tailwindcss/defaultTheme')

/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //默认类型js或者jsx都行
    "./src/**/*.{js,jsx}",
  ],
   theme: {
    screens: {
       'tablet': {'max':'640px'},
       'md': {'max':'820px'},
       'laptop': {'max':'1170px'},
       'desktop':{'max':'1350px'},
       'minlaptop':{'min':'1149px'},
        'xl': '1351px',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '2sm': '4px'
      },
      maxWidth:{
        '9xl':'1440px',
        '10xl':'1470px'
      },
      fontSize:{
        '2sm':'1.1rem',
      },
      backgroundColor:{
        '#abcdff':'#abcdff',
        'rgba(30,128,255,.05)':'rgba(30,128,255,.05)',
        'text-white':'var(--font-color)'
      },
      borderColor:{
        'bcButton':'rgba(30,128,255,.3)'
      },
      lineHeight:{
        "lineheight":'4rem'
      },
      transitionProperty:{
        "transitionProperty-width":'width',
        "transitionProperty-bgc":'backgroundColor'


      }
      
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@headlessui/tailwindcss')
    
  ],
  
  

};