/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
        primaryCyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        lightCyan: "hsl(180, 50%, 66%)",
      },
    },
  },
  plugins: [],
};
