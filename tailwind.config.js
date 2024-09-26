/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   'sm': {'max': '576px'},
    //   'md': {'max': '960px'},
    //   'lg': {'max': '1440px'},
    // },
    extend: {
  },
},
plugins: [],
});