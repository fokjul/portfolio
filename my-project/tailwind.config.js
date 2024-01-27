/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}",
  ],
  
  mode: "jit",
  theme: {
    extend: {
      colors: {
        red: "#FC3314",
        lightRed: "#FFD4D0",
        dimBlack: "#1F1F1F",
        darkGrey: "#8D8D8D",
        grey: "#E1E1E1",
        lightGrey: "#F7F7F7",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  purge: {
    // other purge options
    
  },
};

