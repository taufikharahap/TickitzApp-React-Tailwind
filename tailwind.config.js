/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sign': "url('./src/assets/images/background-sign-up.png')",
      }
    },
    fontFamily: {
      'Mulish': ['Mulish','sans-serif']
    }
  },
  plugins: [],
}