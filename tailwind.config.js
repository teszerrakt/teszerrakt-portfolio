module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'tz-black': '#0e0e0e',
        'tz-darkgray': '#1c1c1c',
        'tz-gray': '#757575',
        'tz-darkblue': '#23a6d5',
        'tz-lightblue': '#23d5ab',
        'tz-orange': '#ee7752',
        'tz-red': '#e73c7e'
      },
      fontFamily: {
        'fjalla': ['Fjalla One', 'sans'],
      },
    },
  },
  plugins: [],
}
