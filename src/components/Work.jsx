import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";

import ArchiDesignImg from "../assets/archi-design-screen.png";
import PFEImg from "../assets/PFE-screen.png";
import SelfSupervisedLearningImg from "../assets/Self-supervised.png";
import AIArtDetectionImg from "../assets/ai-art-detection.png";
import FireDetectionImg from "../assets/fire-detection.png";
import PredictiveMaintenanceImg from "../assets/predictive-maintenance.png";
import IntrusionDetectionImg from "../assets/intrusion-detection.png";
import TrafficControlImg from "../assets/traffic-control.png";

import AIArtDetectionPaper from "../assets/papers/AI-Generated Art Detection Report.pdf";
import AIArtDetectionPresentation from "../assets/papers/presentation ai-generated art detection.pdf";
import TrafficControlPaper from "../assets/papers/Final Project Report - Zakarya Boudraf - 0522501649 - Smart Emergency Traffic Control.pdf";
import TrafficControlPresentation from "../assets/papers/Presentation for Smart Emergency Traffic Control.pdf";
import IntrusionDetectionPaper from "../assets/papers/Presentation - IoT Security IDS.pdf";
import PredictiveMaintenancePaper from "../assets/papers/Systematic Literature Review Data-Centric Approaches in Industrial Predictive Maintenance.pdf";
import PredictiveMaintenancePresentation from "../assets/papers/Presentation - Zakarya Boudraf - International School of IoT.pdf";
import JavaCRUDPaper from "../assets/papers/PFE_Licence_SI_DZ.pdf";
import SelfSupervisedThesis from "../assets/papers/Self-Supervised-Learning-Thesis.pdf";

const projects = [
  {
    title: "Industrial Predictive Maintenance",
    img: PredictiveMaintenanceImg,
    desc: "Systematic literature review of ML-driven predictive maintenance on industrial sensor data.",
    links: [
      { label: "Report", href: PredictiveMaintenancePaper },
      { label: "Slides", href: PredictiveMaintenancePresentation },
    ],
  },
  {
    title: "IoT Intrusion Detection",
    img: IntrusionDetectionImg,
    desc: "Real-time IoT security with embedded neural networks on an STM32 Nucleo-F401RE.",
    links: [
      { label: "Code", href: "https://github.com/ZakaryaBoudraf/Real-time-IDS-for-STM32" },
      { label: "Slides", href: IntrusionDetectionPaper },
    ],
  },
  {
    title: "Smart Emergency Traffic Control",
    img: TrafficControlImg,
    desc: "Deep reinforcement learning for traffic-signal optimization across multi-intersection networks.",
    links: [
      { label: "Code", href: "https://github.com/ZakaryaBoudraf/Emergency-Traffic-Control" },
      { label: "Report", href: TrafficControlPaper },
      { label: "Slides", href: TrafficControlPresentation },
    ],
  },
  {
    title: "AI-Generated Art Detection",
    img: AIArtDetectionImg,
    desc: "Deep-learning CNN model that distinguishes AI-generated artwork from human-made art.",
    links: [
      { label: "Report", href: AIArtDetectionPaper },
      { label: "Slides", href: AIArtDetectionPresentation },
    ],
  },
  {
    title: "Fire Detection & Fan Control",
    img: FireDetectionImg,
    desc: "IoT fire-detection system with MQTT monitoring and an automated temperature response.",
    links: [
      { label: "Code", href: "https://github.com/ZakaryaBoudraf/TempControlledFan" },
      { label: "Demo", href: "https://www.tinkercad.com/things/0wApEXWgAPd-temperature-controlled-dc-motor" },
    ],
  },
  {
    title: "Self-Supervised Seizure Detection",
    img: SelfSupervisedLearningImg,
    desc: "Self-supervised pretraining for epileptic-seizure detection from EEG — master's thesis & publication.",
    links: [
      { label: "Thesis", href: SelfSupervisedThesis },
      { label: "Publication", href: "https://catalogue-biblio.univ-setif.dz/opac-science/index.php?lvl=author_see&id=16716" },
    ],
  },
  {
    title: "Java CRUD Application",
    img: PFEImg,
    desc: "Bachelor's final project — desktop database app with full create/read/update/delete operations.",
    links: [{ label: "Report", href: JavaCRUDPaper }],
  },
  {
    title: "Archi-Design Studio Site",
    img: ArchiDesignImg,
    desc: "Responsive architecture-studio landing site built with React.",
    links: [
      { label: "Demo", href: "https://archi-design.netlify.app/" },
      { label: "Code", href: "https://github.com/ZakaryaBoudraf/archi-design" },
    ],
  },
];

const Work = () => {
  const [ref, visible] = useReveal(0.05);

  return (
    <Window
      name="work"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title="My Projects"
      icon="📁"
      menu={["File", "Edit", "View", "Go", "Help"]}
      status={[
        { text: `${projects.length} project(s)`, grow: true },
        { text: "Double-click to open" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {projects.map((p) => (
          <div key={p.title} className="raised bg-surface p-2 flex flex-col">
            <div className="win-field !p-0 bg-white h-36 sm:h-40 flex items-center justify-center overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-ui font-bold text-sm mt-3 mb-1">{p.title}</h3>
            <p className="font-ui text-xs leading-snug mb-3 flex-1" style={{ opacity: 0.85 }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  <button type="button" className="win-btn win-btn--sm">{l.label}</button>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
};

export default Work;
