// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customGray: '#969696',
        mainColor: '#1F2937',
        blue: '#3B82F6',
      },
      width: {
        'fit': 'fit-content',
      },
      boxShadow: {
        'custom': '-4px 4px 27px -3px rgba(21, 36, 26, 0.46)',
      },
    },
  },
  plugins: [],
}
