/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <-- Add this line
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      'pacifico': ['"Montserrat"', 'serif']
    },
  
    colors: {
      'beige': '#F2DEBA',
      'beige-100': '#FFFAF6'
    },

    screens: {
        'm-sm': {'max': '639px'},
        // => @media (max-width: 640px) { ... }
  
        'm-md': {'max': '767px'},
        // => @media (max-width: 768px) { ... }
  
        'm-lg': {'max': '1023px'},
        // => @media (max-width: 1024px) { ... }
  
        'm-xl':  {'max': '1279px'},
        // => @media (max-width: 1280px) { ... }
  
        'm-2xl': {'max': '1535px'},
        // => @media (max-width: 1536px) { ... }
      },

      rotate: {
        '120': '120deg'
      }
  }},
  plugins: [],
}