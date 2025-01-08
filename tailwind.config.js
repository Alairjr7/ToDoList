/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#E0DCE4',
        'button': '#6F3CC3',
        'paragraph': '#6B6572',
        'check' : '#9359F3'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}

