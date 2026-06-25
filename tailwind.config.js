module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // CSS-variable backed tokens so the appearance-scheme switcher works.
        surface: "var(--surface)",
        ink: "var(--surface-text)",
        desktop: "var(--desktop)",
        field: "var(--field-bg)",
        "field-ink": "var(--field-text)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-text)",
        "title-ink": "var(--title-text)",
      },
      fontFamily: {
        // One typeface everywhere: MS Sans Serif (self-hosted via @font-face).
        ui: ['"MS Sans Serif"', "Tahoma", "Segoe UI", "Geneva", "sans-serif"],
        pixel: ['"MS Sans Serif"', "Tahoma", "Segoe UI", "Geneva", "sans-serif"],
        mono: ['"MS Sans Serif"', "Tahoma", "Segoe UI", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [],
};
