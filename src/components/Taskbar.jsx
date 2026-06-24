import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaPalette, FaPowerOff } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const sections = [
  { to: "hero", label: "Home", icon: "🏠" },
  { to: "about", label: "About", icon: "📝" },
  { to: "skills", label: "Skills", icon: "🖥️" },
  { to: "work", label: "Projects", icon: "📁" },
  { to: "documents", label: "Documents", icon: "📚" },
  { to: "contact", label: "Contact", icon: "✉️" },
];

const externals = [
  { label: "GitHub", href: "https://github.com/ZakaryaBoudraf", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zakarya-boudraf-55006b240/", icon: <FaLinkedin /> },
  { label: "E-mail", href: "mailto:zakaryaboudraf@gmail.com", icon: <HiOutlineMail /> },
  { label: "Résumé", href: ResumePDF, icon: <BsFillPersonLinesFill /> },
];

const Clock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return <span className="font-ui text-xs px-1" title={now.toLocaleDateString()}>{time}</span>;
};

const MiniFlag = () => {
  const { theme } = useTheme();
  const [a, b, c, d] = theme.swatch;
  return (
    <span className="grid grid-cols-2 grid-rows-2 w-4 h-4 shrink-0" style={{ gap: "1px" }} aria-hidden="true">
      {[a, b, c, d].map((col, i) => (
        <span key={i} style={{ background: col }} />
      ))}
    </span>
  );
};

const Taskbar = () => {
  const { themes, currentTheme, setTheme } = useTheme();
  const [startOpen, setStartOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [shutdown, setShutdown] = useState(false);
  const startRef = useRef(null);
  const paletteRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (startRef.current && !startRef.current.contains(e.target)) setStartOpen(false);
      if (paletteRef.current && !paletteRef.current.contains(e.target)) setPaletteOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") { setStartOpen(false); setPaletteOpen(false); }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* "It is now safe…" easter egg overlay */}
      {shutdown && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-center px-6"
          style={{ background: "#000" }}
        >
          <p className="font-ui text-base mb-2" style={{ color: "#e8a200" }}>
            It's now safe to turn off
          </p>
          <p className="font-ui text-base mb-8" style={{ color: "#e8a200" }}>
            your computer.
          </p>
          <button type="button" className="win-btn" onClick={() => setShutdown(false)}>
            ⏻ Power back on
          </button>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 w-full z-50 raised bg-surface flex items-center gap-1 px-1 py-1" style={{ minHeight: "36px" }}>
        {/* Start button */}
        <div className="relative" ref={startRef}>
          <button
            type="button"
            onClick={() => { setStartOpen((v) => !v); setPaletteOpen(false); }}
            className={`win-btn !min-w-0 !min-h-0 !py-1 !px-2 font-bold ${startOpen ? "is-pressed" : ""}`}
          >
            <MiniFlag />
            <span className="font-ui italic">Start</span>
          </button>

          {startOpen && (
            <div className="absolute bottom-[40px] left-0 win-window flex" style={{ width: "300px" }}>
              {/* vertical banner */}
              <div
                className="shrink-0 flex items-end pb-3 justify-center"
                style={{
                  width: "30px",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  background: "linear-gradient(180deg, var(--title-from), var(--title-to))",
                  color: "var(--title-text)",
                }}
              >
                <span className="font-pixel text-[10px] tracking-wider">ZAKARYA·OS</span>
              </div>

              <div className="flex-1 py-1">
                {sections.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    smooth
                    duration={400}
                    offset={-60}
                    onClick={() => setStartOpen(false)}
                    className="flex items-center gap-3 px-3 py-1.5 font-ui text-sm cursor-pointer hover:bg-accent hover:text-accent-ink"
                  >
                    <span aria-hidden="true">{s.icon}</span> {s.label}
                  </Link>
                ))}
                <div style={{ borderTop: "1px solid var(--btn-shadow)", borderBottom: "1px solid var(--btn-highlight)", margin: "4px 6px" }} />
                {externals.map((x) => (
                  <a
                    key={x.label}
                    href={x.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setStartOpen(false)}
                    className="flex items-center gap-3 px-3 py-1.5 font-ui text-sm hover:bg-accent hover:text-accent-ink"
                  >
                    <span className="w-4 inline-flex justify-center">{x.icon}</span> {x.label}
                  </a>
                ))}
                <div style={{ borderTop: "1px solid var(--btn-shadow)", borderBottom: "1px solid var(--btn-highlight)", margin: "4px 6px" }} />
                <button
                  type="button"
                  onClick={() => { setShutdown(true); setStartOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-1.5 font-ui text-sm hover:bg-accent hover:text-accent-ink text-left"
                >
                  <FaPowerOff className="w-4" /> Shut Down…
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-px self-stretch mx-1" style={{ boxShadow: "inset 1px 0 var(--btn-shadow), inset 0 0 0 var(--btn-highlight)", borderRight: "1px solid var(--btn-highlight)" }} />

        {/* quick-launch task buttons */}
        <div className="hidden md:flex items-center gap-1 flex-1 overflow-hidden">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              smooth
              duration={400}
              offset={-60}
              className="win-btn !min-w-0 !min-h-0 !py-1 !px-2 !justify-start text-xs cursor-pointer"
            >
              <span aria-hidden="true">{s.icon}</span>
              <span className="font-ui">{s.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex-1 md:hidden" />

        {/* system tray */}
        <div className="sunken-thin flex items-center gap-1 px-2 py-1" style={{ background: "var(--surface)" }}>
          <div className="relative" ref={paletteRef}>
            <button
              type="button"
              title="Appearance scheme"
              onClick={() => { setPaletteOpen((v) => !v); setStartOpen(false); }}
              className="flex items-center"
              style={{ lineHeight: 0 }}
            >
              <FaPalette />
            </button>
            {paletteOpen && (
              <div className="absolute bottom-[28px] right-0 win-window p-2" style={{ width: "188px" }}>
                <p className="font-ui text-xs font-bold mb-2 px-1">Appearance</p>
                <div className="grid grid-cols-4 gap-2">
                  {Object.entries(themes).map(([key, t]) => (
                    <button
                      key={key}
                      type="button"
                      title={t.name}
                      onClick={() => { setTheme(key); setPaletteOpen(false); }}
                      className={`grid grid-cols-2 grid-rows-2 w-9 h-9 ${currentTheme === key ? "sunken" : "raised"}`}
                      style={{ gap: "1px", padding: "2px" }}
                    >
                      {t.swatch.map((c, i) => (
                        <span key={i} style={{ background: c }} />
                      ))}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Clock />
        </div>
      </nav>
    </>
  );
};

export default Taskbar;
