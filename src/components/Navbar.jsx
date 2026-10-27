import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-container">
        <a href="#header" className="nav-logo">KK</a>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <a href="#about" onClick={closeMenu}>
              <li className="animate__animated animate__fadeInUp">
                <span className="index-no">01.</span>&nbsp;About
              </li>
            </a>
            <a href="#skills" onClick={closeMenu}>
              <li className="animate__animated animate__fadeInUp">
                <span className="index-no">02.</span>&nbsp;Skills
              </li>
            </a>
            <a href="#projects" onClick={closeMenu}>
              <li className="animate__animated animate__fadeInUp">
                <span className="index-no">03.</span>&nbsp;Projects
              </li>
            </a>
            <a href="#education" onClick={closeMenu}>
              <li className="animate__animated animate__fadeInUp">
                <span className="index-no">04.</span>&nbsp;Experience
              </li>
            </a>
            <a href="#contact" onClick={closeMenu}>
              <li className="animate__animated animate__fadeInUp">
                <span className="index-no">05.</span>&nbsp;Contact
              </li>
            </a>
            <a
              href="https://drive.google.com/file/d/19R061U9vAzzifzcBuTVcZDU4lAqg6ASL/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <li className="resume">Resume</li>
            </a>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Icon
              icon={theme === "dark" ? "mdi:weather-sunny" : "mdi:weather-night"}
              width="20"
              height="20"
            />
          </button>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              width="24"
              height="24"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
