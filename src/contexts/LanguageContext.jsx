import React, { createContext, useContext, useEffect, useState } from "react";
import strings from "../i18n/strings";
import CvEN from "../assets/Zakarya_Boudraf_CV_EN.pdf";
import CvIT from "../assets/Zakarya_Boudraf_CV_IT.pdf";

const LanguageContext = createContext();

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};

const STORAGE_KEY = "win98-lang";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "it") return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || "").toLowerCase().startsWith("it") ? "it" : "en";
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "it" : "en"));

  const value = {
    lang,
    setLang,
    toggleLang,
    L: strings[lang],
    cv: lang === "it" ? CvIT : CvEN,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
