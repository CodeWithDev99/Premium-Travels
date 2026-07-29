// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./data/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "#0B1F3A",
//           50: "#EEF2F7",
//           100: "#D7DFEA",
//           light: "#13284A",
//           dark: "#071527",
//         },
//         secondary: {
//           DEFAULT: "#FFC107",
//           light: "#FFD54F",
//           dark: "#E6AC00",
//         },
//         surface: "#F8FAFC",
//       },
//       fontFamily: {
//         sans: ["var(--font-poppins)", "sans-serif"],
//       },
//       borderRadius: {
//         premium: "20px",
//       },
//       boxShadow: {
//         soft: "0 10px 40px -10px rgba(11,31,58,0.15)",
//         card: "0 8px 30px rgba(11,31,58,0.08)",
//         glow: "0 0 0 4px rgba(255,193,7,0.15)",
//       },
//       maxWidth: {
//         "8xl": "1440px",
//       },
//       animation: {
//         "fade-up": "fadeUp 0.6s ease forwards",
//         float: "float 4s ease-in-out infinite",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: "0", transform: "translateY(24px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-12px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./data/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "#0B1F3A",
//           50: "#EEF2F7",
//           100: "#D7DFEA",
//           light: "#13284A",
//           dark: "#071527",
//         },
//         secondary: {
//           DEFAULT: "#FFC107",
//           light: "#FFD54F",
//           dark: "#E6AC00",
//         },
//         surface: "#F8FAFC",
//       },
//       fontFamily: {
//         sans: ["var(--font-poppins)", "sans-serif"],
//       },
//       fontSize: {
//         xs: ["0.6875rem", { lineHeight: "1rem" }],      // 11px, was 12px
//         sm: ["0.8125rem", { lineHeight: "1.25rem" }],    // 13px, was 14px
//         base: ["0.9375rem", { lineHeight: "1.5rem" }],   // 15px, was 16px
//         lg: ["1.0625rem", { lineHeight: "1.75rem" }],    // 17px, was 18px
//         xl: ["1.1875rem", { lineHeight: "1.75rem" }],    // 19px, was 20px
//         "2xl": ["1.375rem", { lineHeight: "2rem" }],     // 22px, was 24px
//         "3xl": ["1.75rem", { lineHeight: "2.25rem" }],   // 28px, was 30px
//         "4xl": ["2.125rem", { lineHeight: "2.5rem" }],   // 34px, was 36px
//         "5xl": ["2.75rem", { lineHeight: "1" }],         // 44px, was 48px
//       },
//       borderRadius: {
//         premium: "20px",
//       },
//       boxShadow: {
//         soft: "0 10px 40px -10px rgba(11,31,58,0.15)",
//         card: "0 8px 30px rgba(11,31,58,0.08)",
//         glow: "0 0 0 4px rgba(255,193,7,0.15)",
//       },
//       maxWidth: {
//         "8xl": "1440px",
//       },
//       animation: {
//         "fade-up": "fadeUp 0.6s ease forwards",
//         float: "float 4s ease-in-out infinite",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: "0", transform: "translateY(24px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-12px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

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
      fontSize: {
        xs: ["0.625rem", { lineHeight: "0.875rem" }],    // 10px
        sm: ["0.75rem", { lineHeight: "1.125rem" }],      // 12px
        base: ["0.8125rem", { lineHeight: "1.25rem" }],   // 13px
        lg: ["0.9375rem", { lineHeight: "1.5rem" }],      // 15px
        xl: ["1.0625rem", { lineHeight: "1.5rem" }],      // 17px
        "2xl": ["1.1875rem", { lineHeight: "1.75rem" }],  // 19px
        "3xl": ["1.5rem", { lineHeight: "2rem" }],        // 24px
        "4xl": ["1.875rem", { lineHeight: "2.25rem" }],   // 30px
        "5xl": ["2.25rem", { lineHeight: "1" }],          // 36px
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