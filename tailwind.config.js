/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          100: "#D9EDED",
          200: "#B3DADA",
          300: "#8ED6D6",
          400: "#48C1C1",
          500: "#00ACAC",
          600: "#009B9B",
          700: "#0C7075",
          800: "#072E30",
          900: "#05161A"
        }
      }
    },
    fontFamily: {
      'consolas': ['Consolas', 'monospace'],
      'century-gothic': ['Century Gothic', 'sans-serif'],
    }
  },
  plugins: [],
}