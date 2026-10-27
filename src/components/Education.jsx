import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Work from "../assets/Work.jsx";
import { getExperienceLabel } from "../utils/experience";

const TechChips = ({ techs }) => (
  <div className="experience-tech-chips">
    {techs.map((tech) => (
      <span key={tech} className="experience-tech-chip">{tech}</span>
    ))}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="education-heading" data-aos="fade-up">
        <span className="section-number">04.</span>Experience
      </h2>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid var(--timeline-arrow)" }}
          icon={<Work />}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div className="experience-content">
            <div>
              <h3 className="vertical-timeline-element-title">Opsera</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Software Engineer I
              </h4>
            </div>
            <div className="yoe">{getExperienceLabel()}</div>
          </div>
          <ul className="experience-list">
            <li>Shipped 800+ pull requests across 19 repositories in a microservices architecture.</li>
            <li>Authored 1,600+ commits contributing 208K+ lines of production code.</li>

            <li>Migrated legacy UI from Bootstrap to Mantine across the platform.</li>
            <li>Owned end-to-end feature delivery for 297+ Jira tickets.</li>
          </ul>
          <TechChips techs={["React", "Node.js", "Express", "MongoDB", "Mantine", "Git"]} />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid var(--timeline-arrow)" }}
          icon={<Work />}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div className="experience-content">
            <div>
              <h3 className="vertical-timeline-element-title">Opsera</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Software Developer Intern
              </h4>
            </div>
            <div className="yoe">May 2023 - November 2023</div>
          </div>
          <ul className="experience-list">
            <li>Contributed to a large-scale React + Node.js production codebase from day one.</li>
            <li>Resolved bugs and shipped features that reached production within first month.</li>
            <li>Learned platform architecture, coding standards, and CI/CD workflows.</li>
          </ul>
          <TechChips techs={["React", "JavaScript", "CSS", "Git"]} />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
