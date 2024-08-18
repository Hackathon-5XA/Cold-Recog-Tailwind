/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      keyframes: {
        rowup: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        cloudLoop: {
          '0%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        shadowLoop: {
          '0%': { transform: 'translateY(-35px) scale(1.15, 0.25)' },
          '100%': { transform: 'translateY(-35px) scale(1, 0.25)' },
        },
        breathe: {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '0.8', transform: 'scale(1)' },
        },
      },
      animation: {
        rowup1: 'rowup 2s linear infinite',
        rowup2: 'rowup 2s linear infinite',
        cloudLoop: 'cloudLoop 1.2s infinite alternate ease-in-out',
        shadowLoop: 'shadowLoop 1.2s infinite alternate ease-in-out',
        breathe: 'breathe 3s ease-in-out infinite',
      },
      fontFamily: {
        bakbak: ['"Bakbak One"', 'sans-serif'],
        k2d: ['"K2D"', 'sans-serif'],
      },
      colors: {
        teal: {
          500: '#32E0C4',
        },
        gray: {
          300: '#cdcaca',
          800: '#332B2B',
        },
        white: '#ffffff',
        black: '#130B0B',
        custom: {
          dark: '#212121',
        }
      },
    },
  },
  plugins: [],
}
