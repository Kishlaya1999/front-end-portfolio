import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <section className="skills-section">
        <h2 className="skills-heading">
          <span className="skill-numbering">01.</span>Skills
        </h2>

        {/* Featured Skills */}
        {/* <div className="skill-category">
          <h3>Featured</h3>
          <div className="skill-grid">
            <div className="skill-item">
              <Icon icon="simple-icons:astro" /> Astro
            </div>
            <div className="skill-item">
              <Icon icon="simple-icons:css3" /> CSS
            </div>
            <div className="skill-item">
              <Icon icon="simple-icons:html5" /> HTML
            </div>
            <div className="skill-item">
              <Icon icon="simple-icons:javascript" /> JavaScript
            </div>
            <div className="skill-item">
              <Icon icon="simple-icons:nuxt" /> Nuxt
            </div>
          </div>
        </div> */}

        {/* Languages */}
        {/* <div className="skill-category">
          <h3>Languages</h3>
          <div className="skill-grid">
            <div className="skill-item">
              <Icon icon="logos:javascript" /> JavaScript
            </div>
            <div className="skill-item">
              <Icon icon="devicon:java" /> Java
            </div>
          </div>
        </div> */}

        {/* Frontend */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-grid">
            <div className="skill-item">
              <Icon icon="logos:javascript" /> JavaScript
            </div>
            <div className="skill-item">
              <Icon icon="logos:react" /> React
            </div>
            <div className="skill-item">
              <Icon icon="logos:redux" /> Redux
            </div>
            {/* <div className="skill-item">
              <Icon icon="vscode-icons:file-type-reactrouter" /> React Router
            </div> */}
            {/* <div className="skill-item">
              <Icon icon="logos:mantine-icon" /> Mantine
            </div>
            <div className="skill-item">
              <Icon icon="simple-icons:mui" color="#0472E7" /> Material UI
            </div> */}
            <div className="skill-item">
              <Icon icon="logos:sass" /> Sass
            </div>
            <div className="skill-item">
              <Icon icon="logos:tailwindcss-icon" /> Tailwind CSS
            </div>
            {/* <div className="skill-item">
              <Icon icon="devicon:reactbootstrap" /> React Bootstrap
            </div> */}
            <div className="skill-item">
              <Icon icon="logos:bootstrap" /> Bootstrap
            </div>
            <div className="skill-item">
              <Icon icon="vscode-icons:file-type-html" /> HTML
            </div>
            <div className="skill-item">
              <Icon icon="devicon:css3" /> CSS
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-grid">
            <div className="skill-item">
              <Icon icon="vscode-icons:file-type-node" /> Node.js
            </div>
            <div className="skill-item">
              <Icon icon="simple-icons:express" color="#fff" /> Express
            </div>
            <div className="skill-item">
              <Icon icon="devicon:mongodb" /> MongoDB
            </div>
            <div className="skill-item">
              <Icon icon="logos:jwt-icon" /> JWT
            </div>
            {/* <div className="skill-item">
              <Icon icon="simple-icons:socketdotio" color="#fff" /> Socket.io
            </div> */}
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-grid">
            <div className="skill-item">
              <Icon icon="logos:git-icon" /> Git
            </div>
            <div className="skill-item">
              <Icon icon="mdi:github" color="#fff" /> GitHub
            </div>
            <div className="skill-item">
              <Icon icon="devicon:jira" /> Jira
            </div>
            <div className="skill-item">
              <Icon icon="logos:postman-icon" /> Postman
            </div>
            {/* <div className="skill-item">
              <Icon icon="logos:new-relic-icon" /> New Relic
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
