import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import useReveal from "../hooks/useReveal";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const Hero = () => {
  const [ref, visible] = useReveal(0.05);

  return (
    <section name="hero" id="hero" ref={ref} className={`win-window win-reveal ${visible ? "is-visible" : ""}`}>
      <div className="win-titlebar">
        <span className="win-titlebar-text">
          <span aria-hidden="true">💻</span> C:\WELCOME.EXE
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

        <p className="font-ui text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3" style={{ opacity: 0.75 }}>
          Hi, my name is
        </p>

        <h1 className="font-pixel leading-[1.35] text-2xl sm:text-4xl md:text-5xl mb-5 text-accent">
          Zakarya<br />Boudraf
        </h1>

        <h2 className="font-ui font-bold text-lg sm:text-2xl md:text-3xl mb-4">
          I'm a Data Engineer based in Italy.
        </h2>

        <div className="win-field max-w-[680px] mb-6 font-ui text-sm sm:text-base leading-relaxed">
          Building data pipelines and intelligent systems. Explore the{" "}
          <strong>My Projects</strong> window below to see my work, or grab my CV for the
          full overview.
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="work" smooth duration={400} offset={-60}>
            <button type="button" className="win-btn group">
              View Work
              <HiArrowNarrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Link>
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <button type="button" className="win-btn group">
              View CV
              <HiArrowNarrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </a>
        </div>
      </div>

      <div className="win-statusbar">
        <div className="field marquee grow" aria-hidden="true">
          <span>
            ★ Welcome to my homepage ★ &nbsp; Best viewed at 800×600 &nbsp; ★ &nbsp;
            Data Engineering · Machine Learning · Internet of Things &nbsp; ★ &nbsp;
            Thanks for stopping by! &nbsp; ★
          </span>
        </div>
        <div className="field">Ready</div>
      </div>
    </section>
  );
};

export default Hero;
