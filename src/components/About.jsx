import React from "react";
import { Icon } from "@iconify/react";
import { getExperienceShort } from "../utils/experience";

const About = () => {
  const yearsExp = getExperienceShort();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-heading" data-aos="fade-up">
          <span className="section-number">01.</span>About Me
        </h2>

        <div className="about-bio" data-aos="fade-up" data-aos-delay="100">
          <p>
            I am a <span className="highlighted-text">Software Engineer</span> currently
            working at a fast-paced startup, building end-to-end product features across
            both frontend and backend. I focus on writing{" "}
            <span className="highlighted-text">clean, maintainable code</span> and
            delivering <span className="highlighted-text">scalable applications</span> with
            great user experiences.
          </p>
        </div>

        <div className="about-meta-row" data-aos="fade-up" data-aos-delay="150">
          <div className="about-meta-tile about-meta-tile--location">
            <Icon icon="mdi:map-marker-outline" className="about-meta-icon about-meta-icon--green" />
            <span className="about-meta-primary">India</span>
            <span className="about-meta-badge about-meta-badge--green">
              <Icon icon="mdi:check-circle-outline" />
              Open to Opportunities
            </span>
          </div>

          <div className="about-meta-tile about-meta-tile--experience">
            <span className="about-exp-years">{yearsExp}</span>
            <span className="about-exp-label">Years</span>
            <span className="about-exp-company">@ Opsera</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
