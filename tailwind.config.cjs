/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
