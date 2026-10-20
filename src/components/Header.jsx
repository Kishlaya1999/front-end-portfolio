import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Typed from "typed.js";
import { getExperienceShort } from "../utils/experience";
import HeroProfileCard from "./HeroProfileCard";

const techTags = ["React", "JavaScript", "Node.js", "MongoDB", "Git"];

const stats = [
  { value: "1,600+", label: "Commits" },
  { value: "800+", label: "Pull Requests" },
];

const Header = () => {
  const el = useRef(null);
  const yearsExp = getExperienceShort();

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
            Software Engineer with {yearsExp} years of experience building
            scalable web applications and end-to-end product features at a
            fast-paced startup.
          </p>

          <div className="header-stats" data-aos="fade-up" data-aos-delay="250">
            {stats.map((stat, i) => (
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

          <div className="header-cta" data-aos="fade-up" data-aos-delay="300">
            <a
              href="/resume.pdf"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:download" />
              Download Resume
            </a>
            <a
              href="https://github.com/kishlaya1999"
              className="cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:github" />
              GitHub
            </a>
          </div>
        </div>

        <HeroProfileCard />
      </div>
    </section>
  );
};

export default Header;
