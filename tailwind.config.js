// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: 'url("./src/assets/bgexplosion.png")',
        circles: 'url("./src/assets/bgcircles.png")',
        circleStar: 'url("./src/assets/circlestar.svg")',
        site: 'url("./src/assets/sitebg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        sora: ['"Sora"', "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
