/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width:{
        '1100': '1100px'
      },
      backgroundColor:{
        primary:'rgb(243 244 246)',
        secondary1:'rgb(15 23 42)',
        secondary2:'rgb(252 211 77)'
      },
      maxWidth: {
        '600' : '600px'
      },
      cursor:{
        pointer:'pointer'
      }
    },
  },
  plugins: [],
};
