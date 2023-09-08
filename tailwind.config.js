/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
        roboto: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        allura: ["var(--font-allura)"],
        cormorant: ["var(--font-cormorant)"],
      },
      screens: {
        xs: "375px",
        xsm: "415px",
      },
      colors: {
        logo: "#ddcabc",
        logoDarker: "#d6bfae",
        logoDark: "#cfb5a1",
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
