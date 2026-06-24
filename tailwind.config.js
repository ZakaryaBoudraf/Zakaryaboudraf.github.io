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
        ui: ["Tahoma", "Segoe UI", "Verdana", "Geneva", "sans-serif"],
        pixel: ['"Press Start 2P"', "monospace"],
        mono: ['"VT323"', '"Courier New"', "monospace"],
      },
    },
  },
  plugins: [],
};
