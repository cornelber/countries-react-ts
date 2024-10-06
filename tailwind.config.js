/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    // screens: {
    //   'sm': {'max': '576px'},
    //   'md': {'max': '960px'},
    //   'lg': {'max': '1440px'},
    // },
    extend: {
      colors: {
        'light-dark': '#2B3844',
        'dark': "#202C36",
        'dark-white': '#FAFAFA',
      },
      boxShadow: {
        'card': '0 0 7px 2px rgba(0, 0, 0, 0.1)'
      }
  },
},
plugins: [],
});