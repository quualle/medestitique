/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3E3A",     // Warmer brown-gray
        secondary: "#C0A080",   // Brushed gold/bronze
        accent: "#D8C0B0",      // Warmer beige accent (replaced silver)
        highlight: "#E8D0B0",   // Gold highlight
        dark: "#4A3E3A",        // Warm dark text
        light: "#FFFBF6"        // Slightly warm white
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
};
