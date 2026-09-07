import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#4a0f10",
          deep: "#3a0c0c",
          light: "#611414",
        },
        rust: {
          DEFAULT: "#c2542f",
          light: "#dd7a4e",
        },
        cream: "#f6f1e7",
        bone: "#efe8d8",
        ink: "#1a1512",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
