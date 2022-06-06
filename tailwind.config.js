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
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' },
        },
      },
      animation: {
        floating: 'floating 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
