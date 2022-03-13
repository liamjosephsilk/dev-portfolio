module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
