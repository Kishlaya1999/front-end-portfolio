import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../../context/ThemeContext";
import { useDockSettings, SPRING_PRESETS } from "../../context/DockSettingsContext";
import { DARK_THEMES, LIGHT_THEMES } from "../../config/themes";
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

const SPRING_LABELS = {
  snappy: "Snappy",
  default: "Default",
  bouncy: "Bouncy",
  smooth: "Smooth",
};

const sliderFill = (value, min, max) => ({
  "--fill": `${((value - min) / (max - min)) * 100}%`,
});

const MenuBar = () => {
  const { theme, toggleTheme, variant, setVariant } = useTheme();
  const {
    dockGlass, setDockGlass,
    glassMode, setGlassMode,
    magnification, setMagnification,
    gap, setGap,
    springPreset, setSpringPreset,
  } = useDockSettings();
  const activeSection = useActiveSection();
  const [clock, setClock] = useState(() => formatClock(new Date()));
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dockConfigOpen, setDockConfigOpen] = useState(false);
  const [variantOpen, setVariantOpen] = useState(false);
  const settingsRef = useRef(null);
  const dockConfigRef = useRef(null);
  const variantRef = useRef(null);

  useEffect(() => {
    const tick = () => setClock(formatClock(new Date()));
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;
    const handleClickOutside = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) setSettingsOpen(false);
    };
    const handleEscape = (e) => { if (e.key === "Escape") setSettingsOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [settingsOpen]);

  useEffect(() => {
    if (!dockConfigOpen) return;
    const handleClickOutside = (e) => {
      if (dockConfigRef.current && !dockConfigRef.current.contains(e.target)) setDockConfigOpen(false);
    };
    const handleEscape = (e) => { if (e.key === "Escape") setDockConfigOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dockConfigOpen]);

  useEffect(() => {
    if (!variantOpen) return;
    const handleClickOutside = (e) => {
      if (variantRef.current && !variantRef.current.contains(e.target)) setVariantOpen(false);
    };
    const handleEscape = (e) => { if (e.key === "Escape") setVariantOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [variantOpen]);

  const openSettings = () => {
    setDockConfigOpen(false);
    setVariantOpen(false);
    setSettingsOpen((prev) => !prev);
  };

  const openDockConfig = () => {
    setSettingsOpen(false);
    setVariantOpen(false);
    setDockConfigOpen((prev) => !prev);
  };

  const openVariantPicker = () => {
    setSettingsOpen(false);
    setDockConfigOpen(false);
    setVariantOpen((prev) => !prev);
  };

  const variantThemes = theme === "dark" ? DARK_THEMES : LIGHT_THEMES;

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
        <span className="menubar__section">Portfolio</span>

        <div className="menubar__settings-wrapper" ref={settingsRef}>
          <button
            className={`menubar__settings${settingsOpen ? " menubar__settings--active" : ""}`}
            onClick={openSettings}
          >
            Settings
          </button>

          {settingsOpen && (
            <div className="menubar__dropdown">
              <button
                className="menubar__dropdown-item"
                onClick={() => setDockGlass((prev) => !prev)}
              >
                <span>Dock Glass</span>
                {dockGlass && (
                  <Icon icon="mdi:check" className="menubar__dropdown-check" />
                )}
              </button>

              <div className="menubar__dropdown-separator" />

              <button
                className={`menubar__dropdown-item${!dockGlass ? " menubar__dropdown-item--disabled" : ""}${glassMode === "frosted" && dockGlass ? " menubar__dropdown-item--selected" : ""}`}
                onClick={() => dockGlass && setGlassMode("frosted")}
              >
                <span>Frosted</span>
                {dockGlass && glassMode === "frosted" && (
                  <Icon icon="mdi:circle-small" className="menubar__dropdown-radio" />
                )}
              </button>

              <button
                className={`menubar__dropdown-item${!dockGlass ? " menubar__dropdown-item--disabled" : ""}${glassMode === "refraction" && dockGlass ? " menubar__dropdown-item--selected" : ""}`}
                onClick={() => dockGlass && setGlassMode("refraction")}
              >
                <span>Refraction</span>
                {dockGlass && glassMode === "refraction" && (
                  <Icon icon="mdi:circle-small" className="menubar__dropdown-radio" />
                )}
              </button>
            </div>
          )}
        </div>

        <span className="menubar__status">
          <span className="menubar__status-dot" />
          Available for Hire
        </span>
      </div>

      <div className="menubar__right">
        <div className="menubar__variant-wrapper" ref={variantRef}>
          <button
            className={`menubar__variant-trigger${variantOpen ? " menubar__variant-trigger--active" : ""}`}
            onClick={openVariantPicker}
            aria-label="Theme variant"
          >
            <Icon icon="mdi:palette-outline" />
          </button>

          {variantOpen && (
            <div className="menubar__variant-dropdown">
              {variantThemes.map((t) => (
                <button
                  key={t.id}
                  className={`menubar__variant-item${variant === t.id ? " menubar__variant-item--active" : ""}`}
                  onClick={() => setVariant(t.id)}
                >
                  <span className="menubar__variant-swatches">
                    <span className="menubar__variant-swatch" style={{ background: t.colors.bg }} />
                    <span className="menubar__variant-swatch" style={{ background: t.colors.accent }} />
                    <span className="menubar__variant-swatch" style={{ background: t.colors.heading }} />
                  </span>
                  <span className="menubar__variant-label">{t.label}</span>
                  {variant === t.id && (
                    <Icon icon="mdi:check" className="menubar__variant-check" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="menubar__config-wrapper" ref={dockConfigRef}>
          <button
            className={`menubar__config-trigger${dockConfigOpen ? " menubar__config-trigger--active" : ""}`}
            onClick={openDockConfig}
            aria-label="Dock configuration"
          >
            <Icon icon="mdi:tune" />
          </button>

          {dockConfigOpen && (
              <div className="menubar__config-panel">
              <div className="menubar__config-row">
                <Icon icon="mdi:magnify-plus-outline" className="menubar__config-icon" />
                <span className="menubar__config-label">Magnification</span>
                <input
                  type="range"
                  className="menubar__config-slider"
                  min={70}
                  max={200}
                  step={10}
                  value={magnification}
                  onChange={(e) => setMagnification(Number(e.target.value))}
                  style={sliderFill(magnification, 70, 200)}
                />
                <span className="menubar__config-value">{magnification}</span>
              </div>

              <div className="menubar__config-row">
                <Icon icon="mdi:arrow-expand-horizontal" className="menubar__config-icon" />
                <span className="menubar__config-label">Gap</span>
                <input
                  type="range"
                  className="menubar__config-slider"
                  min={0}
                  max={30}
                  step={2}
                  value={gap}
                  onChange={(e) => setGap(Number(e.target.value))}
                  style={sliderFill(gap, 0, 30)}
                />
                <span className="menubar__config-value">{gap}</span>
              </div>

              <div className="menubar__config-row">
                <Icon icon="mdi:sine-wave" className="menubar__config-icon" />
                <span className="menubar__config-label">Spring</span>
                <select
                  className="menubar__config-select"
                  value={springPreset}
                  onChange={(e) => setSpringPreset(e.target.value)}
                >
                  {Object.keys(SPRING_PRESETS).map((key) => (
                    <option key={key} value={key}>
                      {SPRING_LABELS[key] || key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

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
