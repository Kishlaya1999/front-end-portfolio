import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import { useTheme } from "../context/ThemeContext";
import avatar from "../assets/kk_transparent_backgroud.png";

function useTiltEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);
  return enabled;
}

export default function HeroProfileCard() {
  const tiltEnabled = useTiltEnabled();
  const { theme } = useTheme();

  const goToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="hero-profile-card">
      <ProfileCard
        avatarUrl={avatar}
        name="Kishlaya Kesarwani"
        title="Software Engineer"
        handle="kishlaya1999"
        status="Open to Opportunities"
        contactText="Contact"
        showUserInfo
        enableTilt={tiltEnabled}
        enableMobileTilt
        tiltStrength={5}
        parallax={0}
        holo={0.25}
        glare={0.1}
        radius={5}
        backdropColor="#3a344b"
        theme={theme}
        onContactClick={goToContact}
      />
    </div>
  );
}
