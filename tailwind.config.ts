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
        primary: {
          DEFAULT: "#0B1F3A",
          50: "#EEF2F7",
          100: "#D7DFEA",
          light: "#13284A",
          dark: "#071527",
        },
        secondary: {
          DEFAULT: "#FFC107",
          light: "#FFD54F",
          dark: "#E6AC00",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        premium: "20px",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(11,31,58,0.15)",
        card: "0 8px 30px rgba(11,31,58,0.08)",
        glow: "0 0 0 4px rgba(255,193,7,0.15)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
