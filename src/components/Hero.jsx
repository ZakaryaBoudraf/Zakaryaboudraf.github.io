import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import useReveal from "../hooks/useReveal";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const [ref, visible] = useReveal(0.05);
  const { L, cv } = useLanguage();

  return (
    <section name="hero" id="hero" ref={ref} className={`win-window win-reveal ${visible ? "is-visible" : ""}`}>
      <div className="win-titlebar">
        <span className="win-titlebar-text">
          <span aria-hidden="true">💻</span> {L.hero.title}
        </span>
        <span className="win-titlebar-controls">
          <button type="button" tabIndex={-1} aria-hidden="true"><span>_</span></button>
          <button type="button" tabIndex={-1} aria-hidden="true"><span>❐</span></button>
          <button type="button" tabIndex={-1} aria-hidden="true"><span>✕</span></button>
        </span>
      </div>

      <div className="win-body">
        {/* command-prompt flourish */}
        <p className="font-mono text-lg sm:text-xl mb-5 break-words" style={{ color: "var(--surface-text)" }}>
          <span style={{ opacity: 0.7 }}>C:\Users\Zakarya&gt;</span> whoami
          <span className="caret" aria-hidden="true" />
        </p>

        <p className="font-ui font-bold text-lg sm:text-2xl md:text-3xl mb-2">
          {L.hero.kicker}
        </p>

        <h1 className="font-ui font-bold leading-tight text-4xl sm:text-6xl md:text-7xl mb-5 text-accent">
          Zakarya Boudraf
        </h1>

        <h2 className="font-ui font-bold text-lg sm:text-2xl md:text-3xl mb-4">
          {L.hero.headline}
        </h2>

        <div className="win-field max-w-[680px] mb-6 font-ui text-sm sm:text-base leading-relaxed">
          {L.hero.blurb} <strong>{L.hero.blurbProjects}</strong> {L.hero.blurbEnd}
        </div>

        <div className="win-field max-w-[680px] mb-6 font-ui text-sm sm:text-base leading-relaxed">
          <p className="font-bold mb-2">{L.hero.highlightsTitle}</p>
          <ul className="flex flex-col gap-2">
            {L.hero.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden="true" style={{ opacity: 0.6 }}>&#9656;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="work" smooth duration={400} offset={-60}>
            <button type="button" className="win-btn group">
              {L.hero.viewWork}
              <HiArrowNarrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Link>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            <button type="button" className="win-btn group">
              {L.hero.viewCV}
              <HiArrowNarrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </a>
        </div>
      </div>

      <div className="win-statusbar">
        <div className="field marquee grow" aria-hidden="true">
          <span>{L.hero.marquee}</span>
        </div>
        <div className="field">{L.hero.ready}</div>
      </div>
    </section>
  );
};

export default Hero;
