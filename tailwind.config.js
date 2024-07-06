/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      colors: {
        tomato: '#ff6347',
      },
      boxShadow: {
        'custom-black': '0px 0px 10px rgba(0, 0, 0, 0.15)',
        
      },
    },
  },
  plugins: [],
};
