/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '60%, 100%': { transform: 'rotate(0deg)' },
          '20%, 50%': { transform: 'rotate(8deg)' },
          '30%': { transform: 'rotate(-10deg)' },
        }
      },
    },
  },
  plugins: [],
}

