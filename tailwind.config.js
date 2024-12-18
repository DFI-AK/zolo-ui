/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik", "serif"]
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        instagramTheme: {
          "primary": "#405de6",
          "secondary": "#5851d8",
          "accent": "#ffdc80",
          "neutral": "#c13584",
          "base-100": "#ffffff",
          "info": "#f56040",
          "success": "#833ab4",
          "warning": "#fcaf45",
          "error": "#fd1d1d",
          "like": "#e1306c",
          "notification": "#f77737"
        },
      },
    ],
  }
}

