/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#9eAcBa',
        sidebarColor: '#171a1e',
        borderColor: '#3e383d',
        inputsInside: '#22272b',
        dropdownBgColor: '#282e33' // You can replace this with your own CSS variable
      },
    },
  },
  plugins: [require("daisyui")],
}

