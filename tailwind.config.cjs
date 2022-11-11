/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blu: "#22d3ee",
        purp: "#4f46e5",
        gris: {
          700: '#4f4f4f',
          800: '#1a1a1a',
          900: "#0f0f0f",
        },
      },
    },
  },
  plugins: [],
};
