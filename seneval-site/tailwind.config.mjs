/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sen-blue':  '#1a78c2',  // bleu vif, infime touche cyan
        'sen-green': '#4ab848',  // vert logo
        'sen-light': '#f4f8ff',  // fond clair
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};