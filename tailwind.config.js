/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: "#FF3811",
        navColor: "#126E51",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF3811",
          secondary: "teal",
          ".btn-primary": {
            color: "#fff",
          },
          ".btn-outline.btn-primary:hover": {
            color: "#fff",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FF3811",
          secondary: "teal",
          ".btn-primary": {
            color: "#fff",
          },
          ".btn-outline.btn-primary:hover": {
            color: "#fff",
          },
        },
      },
    ],
  },
};
