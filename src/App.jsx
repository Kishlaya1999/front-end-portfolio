import { useEffect, useRef } from "react";

import "./App.scss";

import FEATURE_FLAGS from "./config/featureFlags";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DockNavigation from "./components/DockNavigation";
import MenuBar from "./components/MenuBar/MenuBar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import useActiveSection from "./hooks/useActiveSection";

import AOS from "aos";
import "animate.css";

const showDock = FEATURE_FLAGS.NAVIGATION === "dock";

function NavbarActiveLinks() {
  const activeSection = useActiveSection();

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
    navLinks.forEach((link) => {
      link.classList.toggle(
        "nav-active",
        link.getAttribute("href") === `#${activeSection}`
      );
    });
  }, [activeSection]);

  return null;
}

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <ThemeProvider>
      {showDock && <MenuBar />}

      {!showDock && (
        <>
          <Navbar />
          <NavbarActiveLinks />
        </>
      )}

      <main ref={mainRef} className={showDock ? "main--dock" : "main--navbar"}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {!showDock && <Footer />}

      {showDock && <DockNavigation mainRef={mainRef} />}
    </ThemeProvider>
  );
}

export default App;
