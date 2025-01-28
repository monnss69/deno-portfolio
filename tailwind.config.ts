// tailwind.config.ts
import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#0f172a',  // Slightly lighter dark background
        'base-200': '#1e293b',  // Lighter secondary background
        'base-300': '#334155',  // Even lighter for contrast
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        modern: {
          "primary": "#6366f1",          // Indigo
          "secondary": "#4f46e5",        // Darker indigo
          "accent": "#818cf8",           // Lighter indigo
          "neutral": "#1f2937",          // Dark gray
          "base-100": "#0f172a",         // Dark background
          "base-200": "#1e293b",         // Slightly lighter background
          "base-300": "#334155",         // Even lighter background
          "info": "#60a5fa",            // Blue
          "success": "#34d399",         // Green
          "warning": "#fbbf24",         // Yellow
          "error": "#f87171",           // Red
          
          // Custom text colors
          "--text-base": "215 20% 95%",  // Light text for dark mode
          "--text-muted": "215 20% 80%", // Slightly dimmed text
          "--text-primary": "215 20% 98%", // Very light text for emphasis
        },
      },
    ],
  },
} satisfies Config;