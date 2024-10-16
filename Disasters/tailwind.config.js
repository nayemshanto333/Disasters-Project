/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#09090B",
        secondary:"#71717A",
        orange:"#F26922",
        accent:"#E4E4E7",
        bgColor:"#FAFAFA",
        card:"#F4F4F5",
        cardIcon:"#FB923C",
      },
      backgroundImage:{
        "bgColorNav":"#E4E4E780",
        
      },
      fontFamily:{
        "Onest":[ "Onest", "sans-serif"],
      },
      
      boxShadow:{
        'Icon':" 0px 4px 48px 0px rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}

