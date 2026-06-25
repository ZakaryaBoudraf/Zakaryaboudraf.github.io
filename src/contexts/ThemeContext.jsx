import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/* Default 3D chrome - the silver controls + black/white bevels that make
   everything read as Windows 98. Schemes layer their accents on top. */
const BASE = {
  "--surface": "#c0c0c0",
  "--surface-text": "#0a0a0a",
  "--btn-highlight": "#ffffff",
  "--btn-face": "#dfdfdf",
  "--btn-shadow": "#808080",
  "--frame": "#0a0a0a",
  "--field-bg": "#ffffff",
  "--field-text": "#0a0a0a",
  "--title-text": "#ffffff",
  "--accent-text": "#ffffff",
};

/* Named after real Windows 98 "Appearance" schemes. Each one mainly
   recolours the desktop, title bars and selection accent - the window
   chrome stays silver so everything remains crisp and readable. */
export const themes = {
  standard: {
    name: "Windows Standard",
    swatch: ["#008080", "#000080", "#1084d0", "#c0c0c0"],
    vars: { "--desktop": "#008080", "--title-from": "#000080", "--title-to": "#1084d0", "--accent": "#000080" },
  },
  storm: {
    name: "Storm",
    swatch: ["#5b6f88", "#2f3e57", "#6d83a3", "#c0c0c0"],
    vars: { "--desktop": "#5b6f88", "--title-from": "#2f3e57", "--title-to": "#6d83a3", "--accent": "#2f3e57" },
  },
  rose: {
    name: "Rose",
    swatch: ["#9c5d6e", "#7c3f58", "#b06a82", "#c0c0c0"],
    vars: { "--desktop": "#9c5d6e", "--title-from": "#7c3f58", "--title-to": "#b06a82", "--accent": "#7c3f58" },
  },
  spruce: {
    name: "Spruce",
    swatch: ["#2e6b4f", "#1e4a37", "#3f8a66", "#c0c0c0"],
    vars: { "--desktop": "#2e6b4f", "--title-from": "#1e4a37", "--title-to": "#3f8a66", "--accent": "#1e4a37" },
  },
  desert: {
    name: "Desert",
    swatch: ["#a99372", "#6b6a4b", "#9a9866", "#c0c0c0"],
    vars: { "--desktop": "#a99372", "--title-from": "#6b6a4b", "--title-to": "#9a9866", "--accent": "#6b6a4b" },
  },
  eggplant: {
    name: "Eggplant",
    swatch: ["#403a5e", "#3a2a4a", "#5a4a78", "#c0c0c0"],
    vars: { "--desktop": "#403a5e", "--title-from": "#3a2a4a", "--title-to": "#5a4a78", "--accent": "#3a2a4a" },
  },
  lilac: {
    name: "Lilac",
    swatch: ["#8a7aa8", "#5a4a78", "#9a7ac0", "#c0c0c0"],
    vars: { "--desktop": "#8a7aa8", "--title-from": "#5a4a78", "--title-to": "#9a7ac0", "--accent": "#5a4a78" },
  },
  rainy: {
    name: "Rainy Day",
    swatch: ["#5f7d8c", "#3a5560", "#7aa0b0", "#c0c0c0"],
    vars: { "--desktop": "#5f7d8c", "--title-from": "#3a5560", "--title-to": "#7aa0b0", "--accent": "#3a5560" },
  },
  /* High Contrast Black doubles as the dark mode. */
  highContrast: {
    name: "High Contrast Black",
    dark: true,
    swatch: ["#000000", "#000080", "#00ffff", "#1a1a1a"],
    vars: {
      "--desktop": "#000000",
      "--title-from": "#000080",
      "--title-to": "#008080",
      "--accent": "#00aaaa",
      "--surface": "#1a1a1a",
      "--surface-text": "#ffffff",
      "--btn-highlight": "#6f6f6f",
      "--btn-face": "#3a3a3a",
      "--btn-shadow": "#000000",
      "--frame": "#ffffff",
      "--field-bg": "#000000",
      "--field-text": "#00ff66",
    },
  },
};

const STORAGE_KEY = "win98-scheme";

const applyVars = (themeName) => {
  const theme = themes[themeName] || themes.standard;
  const root = document.documentElement;
  Object.entries(BASE).forEach(([k, v]) => root.style.setProperty(k, v));
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme.vars["--title-from"]);
};

export const ThemeProvider = ({ children }) => {
  const themeKeys = Object.keys(themes);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    return saved && themes[saved] ? saved : "standard";
  });

  useEffect(() => {
    applyVars(currentTheme);
    try { localStorage.setItem(STORAGE_KEY, currentTheme); } catch (e) { /* ignore */ }
  }, [currentTheme]);

  const cycleTheme = () => {
    const i = themeKeys.indexOf(currentTheme);
    setCurrentTheme(themeKeys[(i + 1) % themeKeys.length]);
  };

  const setTheme = (name) => { if (themes[name]) setCurrentTheme(name); };

  const darkMode = !!themes[currentTheme].dark;
  const toggleDarkMode = () =>
    setCurrentTheme(darkMode ? "standard" : "highContrast");

  return (
    <ThemeContext.Provider
      value={{ currentTheme, theme: themes[currentTheme], themes, cycleTheme, setTheme, darkMode, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
