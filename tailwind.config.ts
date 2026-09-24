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
        brand: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        gold: {
          50: "#fefdfa",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
        ivory: {
          50: "#fffdfa",
          100: "#fdfbf7",
          200: "#f8f5ee",
          300: "#f0eade",
          400: "#e2d7c5",
          500: "#c8b79e",
          600: "#a49074",
          700: "#7c6c54",
          800: "#574b3b",
          900: "#383026",
        },
        emerald: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          850: "#064e3b",
          900: "#14532d",
          950: "#022c22",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        bangla: ["var(--font-hind-siliguri)", "'Noto Sans Bengali'", "'Kalpurush'", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 25px -3px rgba(202, 138, 4, 0.25)',
        'gold-lg': '0 12px 36px -4px rgba(202, 138, 4, 0.35)',
        'royal-card': '0 12px 32px -4px rgba(76, 5, 25, 0.08), 0 0 0 1px rgba(202, 138, 4, 0.15)',
        'royal-hover': '0 20px 40px -6px rgba(76, 5, 25, 0.16), 0 0 0 1.5px rgba(202, 138, 4, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
