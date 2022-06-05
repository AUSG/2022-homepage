module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        point: '#1AF1D4',
        primary: '#454DFF',
        gray: {
          100: '#F8F8F8',
          900: '#141414',
        },
      },
    },
  },
  plugins: [],
};
