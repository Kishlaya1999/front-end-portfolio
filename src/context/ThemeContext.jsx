import React, { createContext, useContext, useState, useEffect } from "react";
import {
  DEFAULT_DARK_VARIANT,
  DEFAULT_LIGHT_VARIANT,
} from "../config/themes";

const VARIANT_KEY = "portfolio-theme-variants";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const loadVariants = () => {
  try {
    const raw = localStorage.getItem(VARIANT_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore corrupt data */
  }
  return null;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored) return stored;
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  const [darkVariant, setDarkVariant] = useState(() => {
    const stored = loadVariants();
    return stored?.dark ?? DEFAULT_DARK_VARIANT;
  });

  const [lightVariant, setLightVariant] = useState(() => {
    const stored = loadVariants();
    return stored?.light ?? DEFAULT_LIGHT_VARIANT;
  });

  const variant = theme === "dark" ? darkVariant : lightVariant;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-variant", variant);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, variant]);

  useEffect(() => {
    localStorage.setItem(
      VARIANT_KEY,
      JSON.stringify({ dark: darkVariant, light: lightVariant })
    );
  }, [darkVariant, lightVariant]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setVariant = (variantId) => {
    if (theme === "dark") {
      setDarkVariant(variantId);
    } else {
      setLightVariant(variantId);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, variant, setVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
