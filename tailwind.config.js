module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'plusjak': ['Plus Jakarta Sans', 'sans-serif'],
        'ibmPlex': ['IBM Plex Mono', 'monospace']
      }
    },
  },
  plugins: [
        require('flowbite/plugin')
    ],
}
