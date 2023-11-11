import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            stone: colors.warmGray,
            sky: colors.lightBlue,
            neutral: colors.trueGray,
            gray: colors.coolGray,
            slate: colors.blueGray,
         },
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
            "slide-to-left": {
               from: {
                  transform: "translateX(0)",
               },
               to: {
                  transform: "translateX(-100%)",
               },
            },
            "slide-to-right": {
               from: {
                  transform: "translateX(-100%)",
               },
               to: {
                  transform: "translateX(0)",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "slide-to-left": "66s slide-to-left infinite linear",
            "slide-to-right": "66s slide-to-right infinite linear",
         },
      },
   },
   plugins: [],
};
export default config;
