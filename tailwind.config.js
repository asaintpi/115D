module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Make sure 'Inter' is listed first
          },
      },
  },
  plugins: [],
};
