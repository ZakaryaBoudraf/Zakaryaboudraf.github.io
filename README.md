# Zakarya Boudraf - Portfolio 🖥️

A retro **Windows 98** style personal portfolio. Live at
**[zakaryaboudraf.github.io](https://zakaryaboudraf.github.io/)**.

Each section is a draggable-looking "window": a Notepad about-me, a *My
Computer* skills view, a *My Projects* explorer, a *My Documents* folder of
reports and theses, and a *New Message* contact dialog, tied together with a
working **Start menu**, a system-tray clock, and a switchable **Appearance
scheme** picker (Standard, Storm, Rose, Spruce, … plus a High-Contrast Black
dark mode). The 3D chrome is pure CSS `box-shadow`; animations respect
`prefers-reduced-motion`.

## Tech

- React 18 (Create React App) + Tailwind utilities
- A small `win98.css` design system (bevels, title bars, buttons, fields, taskbar)
- CSS-variable theming via React context
- Deployed with GitHub Actions → GitHub Pages

## Develop

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build → ./build
```

Pushing to `main` builds and publishes automatically.
