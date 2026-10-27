import { useState, useEffect } from "react";
import FEATURE_FLAGS from "../config/featureFlags";

const SECTION_IDS = ["header", "about", "skills", "projects", "education", "contact"];

const ROOT_MARGINS = {
  dock: "-15% 0px -50% 0px",
  navbar: "-20% 0px -60% 0px",
};

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const rootMargin = ROOT_MARGINS[FEATURE_FLAGS.NAVIGATION] || ROOT_MARGINS.dock;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
