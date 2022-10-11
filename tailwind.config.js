// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tcmThemes: {
          primary: "#FBF9FA",
          secondary: "#FD0054",
          accent: "#DA1212",
          neutral: "#2B2024",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui"),
  require("tailwind-scrollbar-hide")
  ],
}
