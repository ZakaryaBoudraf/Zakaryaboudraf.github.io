import React from "react";
import { Link } from "react-scroll";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Documents from "./components/Documents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Taskbar from "./components/Taskbar";

const deskIcons = [
  { to: "skills", key: "skills", icon: "🖥️" },
  { to: "work", key: "work", icon: "📁" },
  { to: "documents", key: "documents", icon: "📚" },
  { to: "contact", key: "contact", icon: "✉️" },
];

const Desktop = () => {
  const { L } = useLanguage();
  return (
    <div className="min-h-screen" style={{ paddingBottom: "52px" }}>
      {/* Desktop icons - only where there's gutter room (xl+) */}
      <div className="hidden xl:flex flex-col gap-1 fixed top-4 left-4 z-10">
        {deskIcons.map((d) => (
          <Link key={d.to} to={d.to} smooth duration={400} offset={-60} className="win-desk-icon" tabIndex={0}>
            <span className="glyph">{d.icon}</span>
            <span className="label">{L.desktop[d.key]}</span>
          </Link>
        ))}
      </div>

      {/* Window stack */}
      <main className="max-w-[1080px] mx-auto px-3 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Documents />
        <Contact />
        <Footer />
      </main>

      <Taskbar />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Desktop />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
