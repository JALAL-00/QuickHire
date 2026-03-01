import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4640DE", // The exact deep purple
          hover: "#3B36DB",
        },
        accent: {
          DEFAULT: "#26A4FF", // The exact cyan blue
        },
        dark: "#25324B",      // Navy black text
        muted: "#515B6F",     // Gray text
        light: "#F8F8FD",     // Background tint
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'search': '0px 24px 48px -12px rgba(0, 0, 0, 0.04)', // Soft shadow for search bar
      }
    },
  },
  plugins: [],
};
export default config;