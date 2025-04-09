// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        work: ["Work Sans", "sans-serif"],
      },
      height: {
        90: "90vh",
        80: "80vh",
        75: "75vh",
        60: "60vh",
      },
      colors: {
        primaryBlack: "#333333",
      },
    },
  },
  plugins: [],
};
