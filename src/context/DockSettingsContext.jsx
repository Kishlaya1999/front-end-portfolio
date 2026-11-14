import React, { createContext, useContext, useState, useEffect } from "react";
import FEATURE_FLAGS from "../config/featureFlags";

const STORAGE_KEY = "portfolio-dock-settings";

export const SPRING_PRESETS = {
  snappy: { mass: 0.1, stiffness: 420, damping: 20 },
  default: { mass: 0.1, stiffness: 150, damping: 12 },
  bouncy: { mass: 0.2, stiffness: 300, damping: 15 },
  smooth: { mass: 0.3, stiffness: 120, damping: 18 },
};

const DEFAULTS = {
  magnification: 130,
  gap: 10,
  springPreset: "snappy",
};

const DockSettingsContext = createContext();

export const useDockSettings = () => useContext(DockSettingsContext);

const loadStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore corrupt data */
  }
  return null;
};

export const DockSettingsProvider = ({ children }) => {
  const [dockGlass, setDockGlass] = useState(() => {
    const stored = loadStored();
    return stored?.dockGlass ?? FEATURE_FLAGS.DOCK_GLASS;
  });

  const [glassMode, setGlassMode] = useState(() => {
    const stored = loadStored();
    return stored?.glassMode ?? FEATURE_FLAGS.DOCK_GLASS_MODE;
  });

  const [magnification, setMagnification] = useState(() => {
    const stored = loadStored();
    return stored?.magnification ?? DEFAULTS.magnification;
  });

  const [gap, setGap] = useState(() => {
    const stored = loadStored();
    return stored?.gap ?? DEFAULTS.gap;
  });

  const [springPreset, setSpringPreset] = useState(() => {
    const stored = loadStored();
    return stored?.springPreset ?? DEFAULTS.springPreset;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ dockGlass, glassMode, magnification, gap, springPreset })
    );
  }, [dockGlass, glassMode, magnification, gap, springPreset]);

  return (
    <DockSettingsContext.Provider
      value={{
        dockGlass, setDockGlass,
        glassMode, setGlassMode,
        magnification, setMagnification,
        gap, setGap,
        springPreset, setSpringPreset,
      }}
    >
      {children}
    </DockSettingsContext.Provider>
  );
};

export default DockSettingsContext;
