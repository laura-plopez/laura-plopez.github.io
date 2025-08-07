export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        dm: ['"Atkinson Hyperlegible Next"', 'serif'],
        instrument: ['"Instrument Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}