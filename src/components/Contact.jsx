import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaRegCopy, FaCheck } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import useReveal from "../hooks/useReveal";
import Window from "./Window";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const [ref, visible] = useReveal();
  const [copied, setCopied] = useState(false);
  const { L, cv } = useLanguage();
  const email = "zakaryaboudraf@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <Window
      name="contact"
      innerRef={ref}
      className={`win-reveal ${visible ? "is-visible" : ""}`}
      title={L.contact.title}
      icon="✉️"
      status={[{ text: L.contact.statusOnline, grow: true }, { text: L.contact.statusRecipient }]}
    >
      <p className="font-ui text-sm sm:text-base mb-4">
        {L.contact.intro}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <span className="font-ui text-sm w-16" style={{ opacity: 0.7 }}>{L.contact.to}</span>
        <button
          type="button"
          onClick={copyEmail}
          className="win-field flex items-center gap-3 flex-1 text-left cursor-pointer"
          title={L.contact.copyTitle}
        >
          <HiOutlineMail size={18} />
          <span className="font-mono text-base sm:text-lg break-all flex-1">{email}</span>
          {copied ? <FaCheck className="text-green-600" /> : <FaRegCopy style={{ opacity: 0.6 }} />}
        </button>
      </div>
      <p className="font-ui text-xs mb-6 h-4" style={{ color: "green" }}>
        {copied ? L.contact.copied : ""}
      </p>

      <p className="font-ui text-sm mb-3" style={{ opacity: 0.7 }}>{L.contact.findMe}</p>
      <div className="flex flex-wrap gap-3">
        <a href="https://github.com/ZakaryaBoudraf" target="_blank" rel="noopener noreferrer">
          <button type="button" className="win-btn"><FaGithub /> GitHub</button>
        </a>
        <a href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="win-btn"><FaLinkedin /> LinkedIn</button>
        </a>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          <button type="button" className="win-btn"><BsFillPersonLinesFill /> {L.contact.resume}</button>
        </a>
      </div>
    </Window>
  );
};

export default Contact;
