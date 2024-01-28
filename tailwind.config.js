/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,tsx}"],
  theme: {
    extend: {
      colors: {
        'lighty': 'rgba(40,40,40, 0.50)',
        'cream': '#C2BAC1', 
      }
    },
  },
  plugins: [],
}

