/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(cyan|green|blue|orange)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "hsl(180, 66%, 49%)", // Original color
          brighter: "hsl(180, 66%, 59%)", // brighter shade
        },
        darkViolet: "hsl(257, 27%, 26%)",

        red: "hsl(0, 87%, 67%)",
        gray: {
          DEFAULT: "hsl(0, 0%, 75%)", // Original color
          brighter: "hsl(0, 0%, 90%)", // brighter shade
        },
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: {
          DEFAULT: "hsl(260, 8%, 14%)", // Original color
          brighter: "hsl(260, 8%, 24%)", // brighter shade
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
      screens: {
        mm: { min: "768px", max: "900px" },
        sm: { max: "768px" },
        sxs: { min: "530px", max: "768px" },
        xs: { max: "530px" },
      },
    },
  },
  plugins: [],
};
