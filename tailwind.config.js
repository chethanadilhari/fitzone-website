/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // Add this line to include JSX files
  ],
  theme: {
    extend: {
      colors:{
        bronze:'#b08d57',
        customGrey:"#d3d2d2",
        bronzeDark: '#b56c2d'
      },

      fontFamily: {
        sairaCondensed: ['Saira Condensed', 'sans-serif'],  //custom font 1
        koulen: ['Koulen', 'serif'],  //custom font 2,
        krub:['Krub', 'sans-serif']  
    },
  },

  plugins: [],
}

}