import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const [ref, visible] = useReveal();
  const { L } = useLanguage();

  return (
    <Window
      name="about"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title={L.about.title}
      icon="📝"
      menu={L.about.menu}
      status={[{ text: L.about.statusFile, grow: true }, { text: L.about.statusPos }]}
    >
      <div className="win-field font-mono text-base sm:text-lg leading-relaxed">
        <p className="mb-4">
          {L.about.p1a}<strong>{L.about.p1b}</strong>{L.about.p1c}
        </p>
        <p className="mb-4">
          {L.about.p2a}<strong>{L.about.p2b}</strong>{L.about.p2c}
        </p>
        <p>
          {L.about.p3a}<strong>{L.about.p3b}</strong>{L.about.p3c}<strong>{L.about.p3d}</strong>{L.about.p3e}
        </p>
      </div>
    </Window>
  );
};

export default About;
