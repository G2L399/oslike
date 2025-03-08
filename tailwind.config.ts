import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8F5FF", // Soft lavender
          100: "#E9E4FF", // Pale violet
          200: "#D4C7FF", // Light periwinkle
          300: "#B8A3FF", // Soft violet
          400: "#9777FF", // Bright violet
          500: "#7B4EFF", // Neon purple
          600: "#6633FF", // Deep neon purple
          700: "#5225E6", // Dark violet
          800: "#3D1A9E", // Midnight purple
          900: "#2A1266", // Ultra dark purple
          950: "#1A0B3D", // Deepest purple
        },
        background: {
          default: "var(--background)",
          50: "#F5F3FF", // Dusty lavender
          100: "#E0D8FF", // Muted periwinkle
          200: "#C4B5FD", // Soft purple-gray
          300: "#A38BFF", // Smoky violet
          400: "#7F5AFF", // Dusty purple
          500: "#6633FF", // Deep neon (matches primary-600)
          600: "#4A22D7", // Darker background purple
          700: "#341A8A", // Charcoal purple
          800: "#23125C", // Almost-black purple
          900: "#170B3D", // Rich dark purple
          950: "#0F0726", // Pure black-purple
        },
        glow: {
          50: "#FFFFFF", // White for max contrast
          100: "#FFF0FF", // Subtle pinkish glow
          200: "#FFD6FF", // Soft magenta
          300: "#FFA1FF", // Bright pink-purple
          400: "#FF66FF", // Hot pink
          500: "#FF33FF", // Neon magenta
          600: "#E600E6", // Electric purple
          700: "#CC00CC", // Darker neon
          800: "#990099", // Deep magenta
          900: "#660066", // Rich dark magenta
          950: "#330033", // Black-magenta
        },
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
