import React, { useRef, useState, useEffect } from "react";
import Dock from "./Dock/Dock";
import { useTheme } from "../context/ThemeContext";
import useActiveSection from "../hooks/useActiveSection";
import FEATURE_FLAGS from "../config/featureFlags";
import GlassSurface from "./GlassSurface/GlassSurface";

import homeIcon from "../assets/dock-icons/home.png";
import aboutIcon from "../assets/dock-icons/about_me.png";
import skillsIcon from "../assets/dock-icons/skills.png";
import projectsIcon from "../assets/dock-icons/projects.png";
import experienceIcon from "../assets/dock-icons/experiance.png";
import contactIcon from "../assets/dock-icons/contact.png";
import resumeIcon from "../assets/dock-icons/resume.png";

const RESUME_URL =
  "https://drive.google.com/file/d/19R061U9vAzzifzcBuTVcZDU4lAqg6ASL/view?usp=share_link";

const SECTIONS = [
  { id: "header", label: "Home", iconSrc: homeIcon },
  { id: "about", label: "About", iconSrc: aboutIcon },
  { id: "skills", label: "Skills", iconSrc: skillsIcon },
  { id: "projects", label: "Projects", iconSrc: projectsIcon },
  { id: "education", label: "Experience", iconSrc: experienceIcon },
  { id: "contact", label: "Contact", iconSrc: contactIcon },
];

const useGlass = FEATURE_FLAGS.DOCK_GLASS;
const glassMode = FEATURE_FLAGS.DOCK_GLASS_MODE;

const DOCK_BASE = 50;
const DOCK_PANEL_HEIGHT = 68;
const DOCK_ROUNDNESS = 1;
const DOCK_PAD = (DOCK_PANEL_HEIGHT - DOCK_BASE) / 2;
const DOCK_BORDER_RADIUS = DOCK_BASE * DOCK_ROUNDNESS * 0.5 + DOCK_PAD;

const scrollTo = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const DockIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="dock-icon-img" draggable={false} />
);

const DockNavigation = ({ mainRef }) => {
  const { theme } = useTheme();
  const activeSection = useActiveSection();
  const wrapperRef = useRef(null);
  const [dockRect, setDockRect] = useState(null);

  useEffect(() => {
    if (!useGlass) return;
    const dockEl = wrapperRef.current?.querySelector(".dock");
    if (!dockEl) return;
    const update = () => {
      setDockRect({
        width: dockEl.offsetWidth,
        height: dockEl.offsetHeight,
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(dockEl);
    update();
    return () => observer.disconnect();
  }, []);

  const navItems = SECTIONS.map((section) => ({
    icon: <DockIcon src={section.iconSrc} alt={section.label} />,
    label: section.label,
    active: activeSection === section.id,
    onClick: () => scrollTo(section.id),
  }));

  const resumeItem = {
    icon: <DockIcon src={resumeIcon} alt="Resume" />,
    label: "Resume",
    onClick: () => window.open(RESUME_URL, "_blank"),
  };

  const items = [
    ...navItems,
    { separator: true },
    resumeItem,
  ];

  const glassProps =
    glassMode === "refraction"
      ? {
          backdrop: mainRef,
          renderer: "auto",
        }
      : {
          distortionScale: -180,
          displace: 0.5,
          backgroundOpacity: 0.1,
        };

  return (
    <div className="dock-wrapper">
      <div className="dock-wrapper__inner" ref={wrapperRef}>
        {useGlass && dockRect && (
          <div
            className="dock-glass-layer"
            style={{
              width: dockRect.width,
              height: dockRect.height,
            }}
          >
            <GlassSurface
              width={dockRect.width}
              height={dockRect.height}
              borderRadius={DOCK_BORDER_RADIUS}
              borderWidth={0.07}
              brightness={50}
              opacity={0.93}
              blur={11}
              saturation={1}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              refraction
              {...glassProps}
            />
          </div>
        )}
        <Dock
          items={items}
          baseItemSize={DOCK_BASE}
          magnification={130}
          panelHeight={DOCK_PANEL_HEIGHT}
          accentColor="#ff6a3d"
          badgeColor="#ff453a"
          position="bottom"
          distance={200}
          gap={10}
          roundness={DOCK_ROUNDNESS}
          bounce={false}
          autoHide={false}
          tiles={false}
          showLabels
          showIndicators
          showBadges={false}
          theme={theme}
          spring={{ mass: 0.1, stiffness: 420, damping: 20 }}
          className={useGlass ? "dock--glass" : ""}
        />
      </div>
    </div>
  );
};

export default DockNavigation;
