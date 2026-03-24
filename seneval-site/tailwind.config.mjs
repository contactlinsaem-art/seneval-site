/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sen-blue':  '#1a3a7a',  // bleu marine logo
        'sen-green': '#4ab848',  // vert logo
        'sen-light': '#f4f8ff',  // fond clair
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};