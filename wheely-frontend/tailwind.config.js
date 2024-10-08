/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-phone-small": { max: "321px" },
        "max-phone-medium": { max: "376px" },
        "max-phone-large": { max: "426px" },
        "min-inter": "426px" ,
        "max-md": { max: "769px" },
        "max-md.lg": { max: "1007px" },
        "max-lg": { max: "1025px" },
      },
      colors: {},
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
};
