/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF4A01",
      },

      fontFamily: {
        SpaceGrotesk: "'Space Grotesk', Arial, mono",
      },
    },
  },
  plugins: [],
};
