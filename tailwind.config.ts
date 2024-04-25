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
        "m-blue": "#00419B",
        "main-background": "#f4f5f7",
        "m-orange": "#FF5F40",
        "m-red-shade": "#f1556c",
        "m-secondary-text": "#6d6d6d",
        "m-black": "#2a2a2a",
        "m-gray": "#757575",
        "m-gray-border": "#c3c3c3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
