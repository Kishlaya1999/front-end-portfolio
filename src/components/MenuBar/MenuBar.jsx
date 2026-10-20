import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../../context/ThemeContext";
import useActiveSection from "../../hooks/useActiveSection";
import "./MenuBar.css";

const SECTION_LABELS = {
  header: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  education: "Experience",
  contact: "Contact",
};

const formatClock = (date) =>
  date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const MenuBar = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const [clock, setClock] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const tick = () => setClock(formatClock(new Date()));
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const sectionLabel = SECTION_LABELS[activeSection] || "Home";

  return (
    <header className="menubar">
      <div className="menubar__left">
        <a
          href="#header"
          className="menubar__logo"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("header")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          KK
        </a>
        <span className="menubar__section">{sectionLabel}</span>
        <span className="menubar__status">
          <span className="menubar__status-dot" />
          Available for Hire
        </span>
      </div>

      <div className="menubar__right">
        <button
          className="menubar__theme"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <Icon
            icon={
              theme === "dark" ? "mdi:weather-sunny" : "mdi:weather-night"
            }
          />
        </button>
        <span className="menubar__clock">{clock}</span>
      </div>
    </header>
  );
};

export default MenuBar;
