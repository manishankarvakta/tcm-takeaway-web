// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  daisyui: {
    themes: [
      {
        tcmThemes: {
          primary: "#FBF9FA",
          secondary: "#FD0054",
          accent: "#DA1212",
          neutral: "#08040C",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
