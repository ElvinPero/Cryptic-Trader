/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  daisyui: {
    // colors: {
    //   'prime': "#d93c67",
    // },
    themes: ["light", "dark", "cupcake"],



  },
  theme: {

    extend: {
      colors: {
        'prime': "#d93c67",
      },
    },

  },
  plugins: [require("daisyui"), require('flowbite/plugin')],

}