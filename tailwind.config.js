/** @type {import('tailwindcss').Config} */

const {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colors: defaultColors,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fontSize: defaultFontSize
  // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
} = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"

  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'normal': '0 0 5px #31ea9f',
        'normalLight': '0 0 5px #183528',
      },
      colors: {
        //////// MAIN PALETTE ///////
        ////// BLUE /////
        ...defaultColors,
        ...{
          gray_new :'#191919',
          darkTextColor:'#FF8A65',
          lightTextColor:'#4338ca',
          headerTextTitle :'#ac99ff',
          text_header_dark:'#ac99ff',

          darkBackground :'#1a1a1a',
          lightBackground:'#cccccc',

          textLight:'#212121',
          textDark:'#838383',
          textgreen : '#31ea9f',

          textChipDark :'#655b8f',
          darkChipBackground : '#242229',

          textChipLight : '#b92b2b',
          lightChipBackground :'#ddd',

          
          Blue900: "#081B23",
          Blue800: "#0E2D39",
          Blue700: "#143F51",
          Blue600: "#195167",
          Blue500: "#1C5A73",
          Blue400: "#2E657C",
          Blue300: "#608B9D",
          Blue200: "#8DACB9",
          Blue100: "#BBCDD5",
          Blue50: "#E8EEF1",
  
          Green900: "#0A1711",
          Green800: "#11251C",
          Green700: "#183528",
          Green600: "#1F4333",
          Green500: "#224B39",
          Green400: "#335848",
          Green300: "#648174",
          Green200: "#91A59C",
          Green100: "#BDC9C4",
          Green50: "#E9EDEB",
  
          Gray900: "#343434",
          Gray800: "#575757",
          Gray700: "#797979",
          Gray600: "#9C9C9C",
          Gray500: "#9B9B9B",
          Gray400: "#B0B0B0",
          Gray300: "#C5C5C5",
          Gray200: "#D6D6D6",
          Gray100: "#E6E6E6",
          Gray50: "#FFFFFF",
  
          
  
          Error900: "#400000",
          Error800: "#6A0000",
          Error700: "#950000",
          Error600: "#BF0000",
          Error500: "#D40000",
          Error400: "#D31414",
          Error300: "#E14C4C",
          Error200: "#E97F7F",
          Error100: "#F2B2B2",
          Error50: "#FBE5E5",
  
          Success900: "#002D29",
          Success800: "#004B44",
          Success700: "#00695F",
          Success600: "#00877B",
          Success500: "#009688",
          Success400: "#149B8F",
          Success300: "#4CB5AB",
          Success200: "#7FCAC3",
          Success100: "#B2DFDB",
          Success50: "#E5F4F3",
  
          Warning900: "#4D3C00",
          Warning800: "#806400",
          Warning700: "#B38C00",
          Warning600: "#E6B300",
          Warning500: "#FFC700",
          Warning400: "#FAC714",
          Warning300: "#FFD84C",
          Warning200: "#FFE37F",
          Warning100: "#FFEEB2",
          Warning50: "#FFF9E5",
  
          
  
          Info900: "#123344",
          Info800: "#1D5570",
          Info700: "#29779D",
          Info600: "#3498CA",
          Info500: "#3AA9E0",
          Info400: "#48ACDE",
          Info300: "#75C3E9",
          Info200: "#9CD4EF",
          Info100: "#C4E5F6",
          Info50: "#EBF6FC",
  
          "blue-m-900": "#081B23",
          "blue-m-800": "#0E2D39",
          "blue-m-700": "#143F51",
          "blue-m-600": "#195167",
          "blue-m-500": "#1C5A73",
          "blue-m-400": "#2E657C",
          "blue-m-300": "#608B9D",
          "blue-m-200": "#8DACB9",
          "blue-m-100": "#BBCDD5",
          "blue-m-50": "#E8EEF1",
  
          ///// GREEN //////
          "green-m-900": "#0A1711",
          "green-m-800": "#11251C",
          "green-m-700": "#183528",
          "green-m-600": "#1F4333",
          "green-m-500": "#224B39",
          "green-m-400": "#335848",
          "green-m-300": "#648174",
          "green-m-200": "#91A59C",
          "green-m-100": "#BDC9C4",
          "green-m-50": "#E9EDEB",
  
          ///// GRAY ////////
          "gray-m-900": "#343434",
          "gray-m-800": "#575757",
          "gray-m-700": "#797979",
          "gray-m-600": "#9C9C9C",
          "gray-m-500": "#9B9B9B",
          "gray-m-400": "#B0B0B0",
          "gray-m-300": "#C5C5C5",
          "gray-m-200": "#D6D6D6",
          "gray-m-100": "#E6E6E6",
          "gray-m-50": "#FFFFFF",
  
          //////// SECOND PALETTE ////////
          ///// RED //////
          "red-900": "#400000",
          "red-800": "#6A0000",
          "red-700": "#950000",
          "red-600": "#BF0000",
          "red-500": "#D40000",
          "red-400": "#D31414",
          "red-300": "#E14C4C",
          "red-200": "#E97F7F",
          "red-100": "#F2B2B2",
          "red-50": "#FBE5E5",
          /// GREEN /////
          "green-900": "#002D29",
          "green-800": "#004B44",
          "green-700": "#00695F",
          "green-600": "#00877B",
          "green-500": "#009688",
          "green-400": "#149B8F",
          "green-300": "#4CB5AB",
          "green-200": "#7FCAC3",
          "green-100": "#B2DFDB",
          "green-50": "#E5F4F3",
          //// Yellow /////
          "yellow-900": "#4D3C00",
          "yellow-800": "#806400",
          "yellow-700": "#B38C00",
          "yellow-600": "#E6B300",
          "yellow-500": "#FFC700",
          "yellow-400": "#FAC714",
          "yellow-300": "#FFD84C",
          "yellow-200": "#FFE37F",
          "yellow-100": "#FFEEB2",
          "yellow-50": "#FFF9E5",
          //// BLUE //////
          "blue-900": "#123344",
          "blue-800": "#1D5570",
          "blue-700": "#29779D",
          "blue-600": "#3498CA",
          "blue-500": "#3AA9E0",
          "blue-400": "#48ACDE",
          "blue-300": "#75C3E9",
          "blue-200": "#9CD4EF",
          "blue-100": "#C4E5F6",
          "blue-50": "#EBF6FC",
          /// OTHERS /////
          white: "#FFFFFF",
          black: "#000000"
        }
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        fing: "url('/image/fing.png')"
      },
      fontFamily: {
        // 'sans': ['"NastaliqFont"', ...defaultTheme.fontFamily.sans],
        // 'serif': ['"Roboto"', ...defaultTheme.fontFamily.serif],
      
        // مثال
        // 'font2': ['Font2', 'sans-serif'],
  
        // روش دوم
        'nastaliq': ['NastaliqFont', 'sans-serif'],
        'farhang': ['FarhangFont', 'sans-serif'],
        // nastaliq: 'NastaliqFont',
        'roboto': ['Roboto' , 'sans-serif']
      },
    }
  },

  plugins: [require("@tailwindcss/typography")],
}

