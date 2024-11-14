/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '350px',
      'md': '480px',
      'lg': '640px',
      '2lg': '924px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
  },
  plugins: [],
};