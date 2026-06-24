import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const skills = [
  { label: "HTML", img: HTML },
  { label: "CSS", img: CSS },
  { label: "JavaScript", img: JavaScript },
  { label: "React", img: ReactImg },
  { label: "Tailwind", img: Tailwind },
  { label: "Git / GitHub", img: GitHub },
  { label: "Python · Pandas · NumPy", glyph: "🐍" },
  { label: "Java · Spring", glyph: "☕" },
  { label: "TensorFlow · Keras · PyTorch", glyph: "🤖" },
  { label: "Arduino · MQTT · Sensors", glyph: "🌐" },
  { label: "STM32 · Raspberry Pi", glyph: "🔧" },
  { label: "SQL · Data Pipelines", glyph: "🗄️" },
];

const Skills = () => {
  const [ref, visible] = useReveal();

  return (
    <Window
      name="skills"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title="My Computer — Skills"
      icon="🖥️"
      menu={["File", "Edit", "View", "Help"]}
      status={[
        { text: `${skills.length} object(s)`, grow: true },
        { text: "My Computer" },
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
