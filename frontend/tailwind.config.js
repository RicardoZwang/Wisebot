/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        rotateOrbital: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(60deg)' },
        },
        botAnimate: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.1) rotate(-5deg)' },
        },
        slideBg: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rotateOrbital: 'rotateOrbital 100s linear infinite',
        botAnimate: 'botAnimate 3s ease-in-out infinite',
        slideBg: 'slideBg 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}