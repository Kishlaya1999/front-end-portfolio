import React from "react";

const About = () => {

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-heading" data-aos="fade-up">
          About Me
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

        <div className="about-roles" data-aos="fade-up" data-aos-delay="150">
          <h3 className="about-roles__heading">Roles & Responsibilities</h3>
          <ul className="about-roles__list">
            <li>Developed cross-service features spanning multiple backend microservices</li>
            <li>Develop reusable component libraries and shared internal packages</li>
            <li>Build features, enhancements, and fixes in existing codebases</li>
            <li>Collaborate with product and QA teams to ship reliably</li>
            <li>Debug and resolve production issues across distributed environments</li>
            <li>Engage with customers to investigate and resolve live incidents</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
