import React from "react";

/* A reusable Windows-98 window frame: title bar (icon + caption +
   min/max/close), an optional menu bar, the body, and an optional
   status bar. `name` is the react-scroll anchor for the section. */
const Window = ({
  title,
  icon,
  name,
  menu,
  status,
  innerRef,
  className = "",
  bodyClassName = "",
  children,
}) => {
  return (
    <section name={name} id={name} ref={innerRef} className={`win-window ${className}`}>
      <div className="win-titlebar">
        <span className="win-titlebar-text">
          {icon && <span aria-hidden="true">{icon}</span>}
          {title}
        </span>
        <span className="win-titlebar-controls">
          <button type="button" tabIndex={-1} aria-hidden="true" title="Minimize">
            <span>_</span>
          </button>
          <button type="button" tabIndex={-1} aria-hidden="true" title="Maximize">
            <span>❐</span>
          </button>
          <button type="button" tabIndex={-1} aria-hidden="true" title="Close">
            <span>✕</span>
          </button>
        </span>
      </div>

      {menu && (
        <div className="win-menubar">
          {menu.map((m) => (
            <span key={m}>
              <u>{m.charAt(0)}</u>
              {m.slice(1)}
            </span>
          ))}
        </div>
      )}

      <div className={`win-body ${bodyClassName}`}>{children}</div>

      {status && (
        <div className="win-statusbar">
          {status.map((s, i) => (
            <div key={i} className={`field ${s.grow ? "grow" : ""}`}>
              {s.text}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Window;
