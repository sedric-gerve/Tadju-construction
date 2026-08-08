import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#d5401e",
          dark: "#b53315",
        },
        ink: "#1a1714",
        muted: "#6b6560",
        bg: "#f3f1ee",
        panel: "#e8e5e0",
      },
      maxWidth: {
        site: "1040px",
      },
    },
  },
  plugins: [],
};

export default config;
