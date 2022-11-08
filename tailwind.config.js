/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*","./src/components/*"],
  theme: {
    extend: {
      borderWidth:{
        1:'1px'
      },
      screens:{
        sm:"540px"
      }
    },
  },
  plugins: [],
}
