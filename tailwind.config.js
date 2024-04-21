/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
        'roboto': ['Roboto', 'sans-serif']        
      },
      colors: {
       "primary": "#900C3F",
       "secondary": "#C70039",
       "tertiary": "#F94C10",
       "fourth": "#F8DE22",
       "fifth": "#6420AA"
      }

    },
  },
  plugins: [],
}

