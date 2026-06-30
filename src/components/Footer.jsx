import React, { useEffect, useState } from "react";

/* A tongue-in-cheek 90s "hit counter". Seeds at a believable number and
   bumps once per browser via localStorage. */
const useHitCounter = () => {
  const [count, setCount] = useState(133742);
  useEffect(() => {
    try {
      const KEY = "hit-counter";
      const base = 133742;
      let n = parseInt(localStorage.getItem(KEY), 10);
      if (!n || n < base) n = base;
      n += 1;
      localStorage.setItem(KEY, String(n));
      setCount(n);
    } catch (e) { /* ignore */ }
  }, []);
  return count;
};

const Footer = () => {
  const count = useHitCounter();
  const digits = String(count).padStart(6, "0").split("");
  const year = new Date().getFullYear();

  return (
    <footer className="win-window">
      <div className="win-body flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
        <p className="font-ui text-xs sm:text-sm">
          Made with <span aria-hidden="true">❤️</span> by Zakarya · {year}
        </p>

        <div className="flex items-center gap-2">
          <span className="font-ui text-xs" style={{ opacity: 0.7 }}>You are visitor</span>
          <span className="sunken inline-flex" style={{ background: "#000", padding: "3px" }}>
            {digits.map((d, i) => (
              <span
                key={i}
                className="font-mono"
                style={{
                  width: "16px",
                  textAlign: "center",
                  color: "#33ff66",
                  fontSize: "18px",
                  lineHeight: 1,
                  background: "#001a00",
                  borderRight: i < digits.length - 1 ? "1px solid #003300" : "none",
                }}
              >
                {d}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
