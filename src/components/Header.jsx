import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Typed from "typed.js";
import { getExperienceYearsMonths } from "../utils/experience";
import HeroProfileCard from "./HeroProfileCard";

const techTags = ["React", "Express.js", "MongoDB", "Node.js", "Redux"];

const Header = () => {
  const el = useRef(null);
  const { years, months } = getExperienceYearsMonths();
  const decimal = months > 0 ? (months / 12).toFixed(1).replace(/^0/, "") : "";
  const expLabel = `${years}${decimal}+`;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "Building Scalable Web Apps",
        "Turning Ideas Into Products",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="header" className="header">
      <div className="header-container">
        <div className="my-info">
          <div className="header-badge" data-aos="fade-down">
            <Icon icon="mdi:briefcase-outline" />
            <span>Software Engineer @ Opsera</span>
          </div>

          <h1 className="name" data-aos="fade-up" data-aos-delay="100">
            Kishlaya Kesarwani
          </h1>

          <span className="header-typed" data-aos="fade-up" data-aos-delay="150">
            <span ref={el} />
          </span>

          <p className="header-tagline" data-aos="fade-up" data-aos-delay="200">
            Software Engineer with {expLabel} years of experience building
            scalable web applications and end-to-end product features at a
            fast-paced startup.
          </p>

          <div className="header-stats" data-aos="fade-up" data-aos-delay="250">
            {[
              { value: `${expLabel}`, label: "Years of Experience" },
              { value: "1,600+", label: "Commits" },
              { value: "800+", label: "Pull Requests" },
            ].map((stat, i) => (
              <div className="header-stat" key={i}>
                <span className="header-stat__value">{stat.value}</span>
                <span className="header-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="header-tags" data-aos="fade-up" data-aos-delay="300">
            {techTags.map((tag) => (
              <span className="header-tag" key={tag}>{tag}</span>
            ))}
          </div>

          <div className="header-location-tags" data-aos="fade-up" data-aos-delay="320">
            <span className="location-tag">
              <Icon icon="mdi:map-marker" />
              Chennai, India
            </span>
            <span className="location-tag">
              <Icon icon="mdi:earth" />
              Open to Relocation
            </span>
          </div>

          <div className="header-cta" data-aos="fade-up" data-aos-delay="350">
            <a
              href="https://drive.google.com/file/d/19R061U9vAzzifzcBuTVcZDU4lAqg6ASL/view"
              className="cta-primary no-grow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:file-document-outline" />
              Resume
            </a>
          </div>
        </div>

        <HeroProfileCard />
      </div>
    </section>
  );
};

export default Header;
