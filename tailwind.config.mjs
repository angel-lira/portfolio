/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1B262C",
        teal: "#0F4C75",
        lightBlue: "#3282B8",
        paleBlue: "#BBE1FA",
      },
    },
  },
  plugins: [],
};
