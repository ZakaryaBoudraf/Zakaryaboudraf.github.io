import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";
import { useLanguage } from "../contexts/LanguageContext";

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

/* Images + link targets are language-independent; titles, descriptions and
   link labels come from strings.js (same order, same link count). */
const projectAssets = [
  { img: PredictiveMaintenanceImg, hrefs: [PredictiveMaintenancePaper, PredictiveMaintenancePresentation] },
  { img: IntrusionDetectionImg, hrefs: ["https://github.com/ZakaryaBoudraf/Real-time-IDS-for-STM32", IntrusionDetectionPaper] },
  { img: TrafficControlImg, hrefs: ["https://github.com/ZakaryaBoudraf/Emergency-Traffic-Control", TrafficControlPaper, TrafficControlPresentation] },
  { img: AIArtDetectionImg, hrefs: ["https://huggingface.co/spaces/zakaryaboudraf/ai-art-detector", AIArtDetectionPaper, AIArtDetectionPresentation] },
  { img: FireDetectionImg, hrefs: ["https://github.com/ZakaryaBoudraf/TempControlledFan", "https://www.tinkercad.com/things/0wApEXWgAPd-temperature-controlled-dc-motor"] },
  { img: SelfSupervisedLearningImg, hrefs: [SelfSupervisedThesis, "https://catalogue-biblio.univ-setif.dz/opac-science/index.php?lvl=author_see&id=16716"] },
  { img: PFEImg, hrefs: [JavaCRUDPaper] },
  { img: ArchiDesignImg, hrefs: ["https://archi-design.netlify.app/", "https://github.com/ZakaryaBoudraf/archi-design"] },
];

const Work = () => {
  const [ref, visible] = useReveal(0.05);
  const { L } = useLanguage();
  const projects = projectAssets.map((p, i) => ({ ...p, ...L.work.projects[i] }));

  return (
    <Window
      name="work"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title={L.work.title}
      icon="📁"
      menu={L.work.menu}
      status={[
        { text: L.work.statusCount(projects.length), grow: true },
        { text: L.work.statusHint },
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
              {p.hrefs.map((href, j) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                  <button type="button" className="win-btn win-btn--sm">{p.labels[j]}</button>
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
