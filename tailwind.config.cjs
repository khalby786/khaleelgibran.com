module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue,css}",
    "./public/*.{css,sass,scss,less}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212121",
        foreground: "#ffffff",
        primary: "#FF00C7",
        secondary: "#7b00ff",
      },
      fontFamily: {
        sans: ["Neue Montreal", "Inter", "sans-serif"],
        monospace: ["Fraktion Sans", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
