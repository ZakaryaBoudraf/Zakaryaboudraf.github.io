import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <Window
      name="about"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title="About Me — Notepad"
      icon="📝"
      menu={["File", "Edit", "Search", "Help"]}
      status={[{ text: "readme.txt", grow: true }, { text: "Ln 1, Col 1" }]}
    >
      <div className="win-field font-mono text-base sm:text-lg leading-relaxed">
        <p className="mb-4">
          I'm a <strong>data engineer</strong> and machine-learning practitioner who
          builds data pipelines and intelligent systems.
        </p>
        <p className="mb-4">
          Most of my research has explored <strong>self-supervised learning</strong> for
          signal-processing problems — including epileptic-seizure detection from EEG.
        </p>
        <p>
          I'm currently deepening my expertise in the <strong>Internet of Things</strong> as
          part of a master's program at the <strong>University of Salerno</strong>.
        </p>
      </div>
    </Window>
  );
};

export default About;
