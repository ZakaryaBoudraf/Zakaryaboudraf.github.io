import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";
import { useLanguage } from "../contexts/LanguageContext";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";

/* Ordered by what I actually work on, most central first. */
const skills = [
  { label: "Python · NumPy · Pandas", glyph: "🐍" },
  { label: "PyTorch · TensorFlow · Keras", glyph: "🤖" },
  { label: "LoRA / PEFT · Transformers", glyph: "🧠" },
  { label: "Embedded C · STM32 · TinyML", glyph: "🔧" },
  { label: "Arduino · Raspberry Pi · MQTT", glyph: "🌐" },
  { label: "Unity ML-Agents · RL", glyph: "🎮" },
  { label: "SQL · Data Pipelines", glyph: "🗄️" },
  { label: "Git / GitHub", img: GitHub },
  { label: "Java · Spring", glyph: "☕" },
  { label: "React", img: ReactImg },
  { label: "JavaScript", img: JavaScript },
  { label: "HTML / CSS", img: HTML },
];

const Skills = () => {
  const [ref, visible] = useReveal();
  const { L } = useLanguage();

  return (
    <Window
      name="skills"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title={L.skills.title}
      icon="🖥️"
      menu={L.skills.menu}
      status={[
        { text: L.skills.statusObjects(skills.length), grow: true },
        { text: L.skills.statusPlace },
      ]}
    >
      <div className="win-field">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 justify-items-center py-2">
          {skills.map((s) => (
            <div key={s.label} className="win-desk-icon" style={{ color: "var(--field-text)", textShadow: "none" }} tabIndex={0}>
              <span className="glyph">
                {s.img ? (
                  <img src={s.img} alt="" className="w-9 h-9 object-contain" />
                ) : (
                  s.glyph
                )}
              </span>
              <span className="label" style={{ color: "var(--field-text)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default Skills;
