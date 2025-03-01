/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        default: '354px',
        md: '750px',
        lg: '1000px',
        xl: '1280px'
      }
    },
    extend: {},
  },
  plugins: [],
}