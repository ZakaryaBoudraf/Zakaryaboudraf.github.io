import React from "react";
import useReveal from "../hooks/useReveal";
import Window from "./Window";

import SelfSupervisedThesis from "../assets/papers/Self-Supervised-Learning-Thesis.pdf";
import PredictiveMaintenancePaper from "../assets/papers/Systematic Literature Review Data-Centric Approaches in Industrial Predictive Maintenance.pdf";
import AIArtDetectionPaper from "../assets/papers/AI-Generated Art Detection Report.pdf";
import TrafficControlPaper from "../assets/papers/Final Project Report - Zakarya Boudraf - 0522501649 - Smart Emergency Traffic Control.pdf";
import IntrusionDetectionPaper from "../assets/papers/Presentation - IoT Security IDS.pdf";
import SoftwareDependabilityPaper from "../assets/papers/Software Dependability Project Report - Zakarya Boudraf - Apache Commons CLI.pdf";
import TemperatureControlPaper from "../assets/papers/Temperature controlled DC Motor (Final).pdf";
import JavaCRUDPaper from "../assets/papers/PFE_Licence_SI_DZ.pdf";

const docs = [
  { name: "Self-Supervised Learning for Seizure Detection", kind: "Master's Thesis", href: SelfSupervisedThesis },
  { name: "Data-Centric Industrial Predictive Maintenance", kind: "Literature Review", href: PredictiveMaintenancePaper },
  { name: "AI-Generated Art Detection", kind: "Project Report", href: AIArtDetectionPaper },
  { name: "Smart Emergency Traffic Control", kind: "Project Report", href: TrafficControlPaper },
  { name: "IoT Security - Intrusion Detection System", kind: "Presentation", href: IntrusionDetectionPaper },
  { name: "Software Dependability - Apache Commons CLI", kind: "Project Report", href: SoftwareDependabilityPaper },
  { name: "Temperature-Controlled DC Motor", kind: "Project Report", href: TemperatureControlPaper },
  { name: "Java CRUD Application (PFE Licence SI)", kind: "Bachelor's Project", href: JavaCRUDPaper },
];

const Documents = () => {
  const [ref, visible] = useReveal();

  return (
    <Window
      name="documents"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title="My Documents - Reports & Research"
      icon="📚"
      menu={["File", "Edit", "View", "Help"]}
      status={[{ text: `${docs.length} document(s)`, grow: true }, { text: "PDF" }]}
    >
      <div className="win-field !p-0">
        {/* header row */}
        <div className="hidden sm:flex font-ui text-xs font-bold px-3 py-1.5" style={{ borderBottom: "1px solid var(--btn-shadow)" }}>
          <span className="flex-1">Name</span>
          <span className="w-40">Type</span>
          <span className="w-20 text-right">Open</span>
        </div>
        {docs.map((d, i) => (
          <a
            key={d.name}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 font-ui text-sm hover:bg-accent hover:text-accent-ink transition-colors"
            style={i < docs.length - 1 ? { borderBottom: "1px dotted var(--btn-shadow)" } : undefined}
          >
            <span aria-hidden="true">📄</span>
            <span className="flex-1 leading-snug">{d.name}</span>
            <span className="hidden sm:block w-40 text-xs" style={{ opacity: 0.75 }}>{d.kind}</span>
            <span className="hidden sm:block w-20 text-right text-xs underline">View →</span>
          </a>
        ))}
      </div>
    </Window>
  );
};

export default Documents;
