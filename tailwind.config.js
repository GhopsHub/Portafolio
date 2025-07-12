/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        champion: ['ChampionGothic'],
        vintage: ['MagicVintage'],
        obviously: ['Obviously'],
        sans: ['DMSans'],
      },
    },
  },
  plugins: [],
}
