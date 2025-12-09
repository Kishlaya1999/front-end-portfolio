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
            <div className="skill-item" title="JavaScript">
              <Icon icon="logos:javascript" /> <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-item" title="React">
              <Icon icon="logos:react" /> <span className="skill-name">React</span>
            </div>
            <div className="skill-item" title="Redux">
              <Icon icon="logos:redux" /> <span className="skill-name">Redux</span>
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
            <div className="skill-item" title="Sass">
              <Icon icon="logos:sass" /> <span className="skill-name">Sass</span>
            </div>
            <div className="skill-item" title="Tailwind CSS">
              <Icon icon="logos:tailwindcss-icon" /> <span className="skill-name">Tailwind CSS</span>
            </div>
            {/* <div className="skill-item">
              <Icon icon="devicon:reactbootstrap" /> React Bootstrap
            </div> */}
            <div className="skill-item" title="Bootstrap">
              <Icon icon="logos:bootstrap" /> <span className="skill-name">Bootstrap</span>
            </div>
            <div className="skill-item" title="HTML">
              <Icon icon="vscode-icons:file-type-html" /> <span className="skill-name">HTML</span>
            </div>
            <div className="skill-item" title="CSS">
              <Icon icon="devicon:css3" /> <span className="skill-name">CSS</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-grid">
            <div className="skill-item" title="Node.js">
              <Icon icon="vscode-icons:file-type-node" />  <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-item" title="Express">
              <Icon icon="simple-icons:express" color="#fff" /> <span className="skill-name">Express</span>
            </div>
            <div className="skill-item" title="MongoDB">
              <Icon icon="devicon:mongodb" />   <span className="skill-name">MongoDB</span>
            </div>
            <div className="skill-item" title="JWT">
              <Icon icon="logos:jwt-icon" /> <span className="skill-name">JWT</span>
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
            <div className="skill-item" title="Git">
              <Icon icon="logos:git-icon" /> <span className="skill-name">Git</span>
            </div>
            <div className="skill-item" title="GitHub">
              <Icon icon="mdi:github" color="#fff" /> <span className="skill-name">GitHub</span>
            </div>
            <div className="skill-item" title="Jira">
              <Icon icon="devicon:jira" /> <span className="skill-name">Jira</span>
            </div>
            <div className="skill-item" title="Postman">
              <Icon icon="logos:postman-icon" /> <span className="skill-name">Postman</span>
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
