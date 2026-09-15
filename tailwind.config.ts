import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8332AB",
          dark: "#481B5E",
          bright: "#BD48F7",
          soft: "#EEE5F3",
        },
        ink: "#121113",
        paper: "#FBF8F3",
        cream: "#F5F0E7",
        yellow: "#F7E360",
        green: "#3FF72F",
        blue: "#007CBE",
        orange: "#F18F01",
        red: "#F9001E",
      },
      fontFamily: {
        sans: ["var(--font-ui-loaded)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-display-loaded)", "Georgia", "Times New Roman", "serif"],
        heading: ["var(--font-display-loaded)", "Georgia", "Times New Roman", "serif"],
        body: ["var(--font-ui-loaded)", "Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: {
        site: "1320px",
      },
      boxShadow: {
        soft: "0 22px 55px rgba(18,17,19,.12)",
      },
      keyframes: {
        "slow-zoom": {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.10)" },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(215px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(215px) rotate(-360deg)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 12s ease-in-out infinite alternate",
        orbit: "orbit 14s linear infinite",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;