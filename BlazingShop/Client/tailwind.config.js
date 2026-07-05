/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Pages/**/*.{razor,html}",
    "./Components/**/*.{razor,html}",
    "./Shared/**/*.{razor,html}",
    "./wwwroot/**/*.html",
    "./App.razor",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-dark': '#052767',
        'sidebar-light': '#3a0647',
        'top-bar': '#f7f7f7',
      },
    },
  },
  plugins: [],
}
