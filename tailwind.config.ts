import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },

  plugins: [
    tailwindcssAnimate,

    plugin(({ matchUtilities }) => {
      matchUtilities({
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="100"
              height="100"
              fill="none"
              stroke="${value}"
            >
              <path d="M0 .5H31.5V32" />
            </svg>`
          )}")`,
        }),

        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="8"
              height="8"
              fill="none"
              stroke="${value}"
            >
              <path d="M0 .5H31.5V32" />
            </svg>`
          )}")`,
        }),

        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              height="16"
              fill="none"
            >
              <circle
                fill="${value}"
                cx="10"
                cy="10"
                r="1.6257413380501518"
              />
            </svg>`
          )}")`,
        }),
      });
    }),
  ],
};

export default config;