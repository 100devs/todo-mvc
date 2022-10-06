/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{ejs,js}", "./public/**/*.{ejs,js}"],
    theme: {
        
      extend: {
          colors: {
              
          },
          fontFamily: {
             logo: ['Raleway', 'sans-serif'] ,
             pageText: ['Poppins', 'sans-serif']
          },
          
      },
    },
    plugins: [],
  }