import { type Config } from "tailwindcss";
import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes.js";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  // @ts-ignore - DaisyUI is not typed
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        modern: {
          "primary": "#6366f1",
          "secondary": "#4f46e5",
          "accent": "#818cf8",
          "neutral": "#1f2937",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "info": "#60a5fa",
          "success": "#34d399",
          "warning": "#fbbf24",
          "error": "#f87171",
        },
      },
    ],
  },
} satisfies Config;
