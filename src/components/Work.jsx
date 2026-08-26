import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";
import { useLanguage } from "../contexts/LanguageContext";

import ThesisVSRImg from "../assets/gifs/thesis-vsr.gif";
import CleaningRobotImg from "../assets/gifs/cleaning-robot.gif";
import HCIHospitalImg from "../assets/gifs/hci-hospital.gif";
import ArchiDesignImg from "../assets/gifs/archi-design.gif";
import PFEImg from "../assets/gifs/java-crud.gif";
import SelfSupervisedLearningImg from "../assets/gifs/seizure-detection.gif";
import AIArtDetectionImg from "../assets/gifs/ai-art-detection.gif";
import FireDetectionImg from "../assets/gifs/fire-detection.gif";
import PredictiveMaintenanceImg from "../assets/gifs/predictive-maintenance.gif";
import IntrusionDetectionImg from "../assets/gifs/intrusion-detection.gif";
import TrafficControlImg from "../assets/gifs/traffic-control.gif";

import AIArtDetectionPaper from "../assets/papers/AI-Generated Art Detection Report.pdf";
import AIArtDetectionPresentation from "../assets/papers/presentation ai-generated art detection.pdf";
import TrafficControlPaper from "../assets/papers/Final Project Report - Zakarya Boudraf - 0522501649 - Smart Emergency Traffic Control.pdf";
import TrafficControlPresentation from "../assets/papers/Presentation for Smart Emergency Traffic Control.pdf";
import IntrusionDetectionPaper from "../assets/papers/Presentation - IoT Security IDS.pdf";
import PredictiveMaintenancePaper from "../assets/papers/Systematic Literature Review Data-Centric Approaches in Industrial Predictive Maintenance.pdf";
import PredictiveMaintenancePresentation from "../assets/papers/Presentation - Zakarya Boudraf - International School of IoT.pdf";
import JavaCRUDPaper from "../assets/papers/PFE_Licence_SI_DZ.pdf";
import SelfSupervisedThesis from "../assets/papers/Self-Supervised-Learning-Thesis.pdf";
import VSRThesis from "../assets/papers/VSR-PEFT-Master-Thesis.pdf";
import VSRSlides from "../assets/papers/VSR-PEFT-Defense-Presentation.pdf";
import CleaningRobotSlides from "../assets/papers/Cleaning-Robot-TDD-Presentation.pdf";
import HCIHospitalSlides from "../assets/papers/HCI-Smart-Hospital-Monitoring.pdf";

/* Images + link targets are language-independent; titles, descriptions and
   link labels come from strings.js (same order, same link count). */
const projectAssets = [
  { img: ThesisVSRImg, hrefs: [VSRThesis, VSRSlides] },
  { img: PredictiveMaintenanceImg, hrefs: [PredictiveMaintenancePaper, PredictiveMaintenancePresentation] },
  { img: IntrusionDetectionImg, hrefs: ["https://github.com/ZakaryaBoudraf/Real-time-IDS-for-STM32", IntrusionDetectionPaper] },
  { img: TrafficControlImg, hrefs: ["https://github.com/ZakaryaBoudraf/Emergency-Traffic-Control", TrafficControlPaper, TrafficControlPresentation] },
  { img: AIArtDetectionImg, hrefs: ["https://huggingface.co/spaces/zakaryaboudraf/ai-art-detector", AIArtDetectionPaper, AIArtDetectionPresentation] },
  { img: FireDetectionImg, hrefs: ["https://github.com/ZakaryaBoudraf/TempControlledFan", "https://www.tinkercad.com/things/0wApEXWgAPd-temperature-controlled-dc-motor"] },
  { img: CleaningRobotImg, hrefs: ["https://github.com/ZakaryaBoudraf/cleaningrobotpy", CleaningRobotSlides] },
  { img: HCIHospitalImg, hrefs: [HCIHospitalSlides, "https://drive.google.com/file/d/1c0c832YPiEqq3EV2NM5pBtwXo9WDDVtY/view"] },
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
            <div className="win-field !p-[3px] h-36 sm:h-40 flex items-center justify-center overflow-hidden" style={{ background: "#0d1021" }}>
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
