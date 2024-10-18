/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-Petroleum": "#026980",
        "light-white": "#ffffff",
        "normal-text": "#2A2A2A",
        "background-body": "#FAFBFC",
        "header-text": "#262626",
        "light-green": "#5C980F",
        "dark-red": "#BF0000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        title: "24px",
        p: "14px",
        mobileTitle: "18px",
      },
    },
  },
  plugins: [],
};
