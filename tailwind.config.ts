import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        primary: "#9333EA",
        secondary: "#ff7e33",
        info: "#0C63E7",
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: {
          50: "#FAFAFC",
          100: "#E9E9EC",
          200: "#C6C8CD",
          300: "#ACAEB6",
          400: "#92959F",
          500: "#777C87",
          600: "#5D6370",
          700: "#434959",
          800: "#293041",
          900: "#0f172a",
        },
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
