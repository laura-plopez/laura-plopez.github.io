export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        dm: ['"Alumni Sans Pinstripe"', 'serif'],
        instrument: ['"Darker Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}