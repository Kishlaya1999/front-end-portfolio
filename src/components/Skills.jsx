import React from "react";
import { Icon } from "@iconify/react";

const skillCategories = [
  {
    title: "UI & Frontend",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Mantine", icon: "logos:mantine-icon" },
      { name: "Sass", icon: "logos:sass" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    title: "APIs & Backend",
    skills: [
      { name: "Node.js", icon: "vscode-icons:file-type-node" },
      { name: "Express", icon: "simple-icons:express", color: "#fff" },
      { name: "MongoDB", icon: "devicon:mongodb" },
      { name: "REST APIs", icon: "mdi:api", color: "#58a6ff" },
      { name: "JWT", icon: "logos:jwt-icon" },
      { name: "Redis", icon: "devicon:redis" },
      { name: "Kafka", icon: "logos:kafka-icon" },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github", color: "#fff" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Bruno", icon: "devicon:bruno" },
      { name: "New Relic", icon: "simple-icons:newrelic", color: "#1CE783" },
      { name: "GitLab", icon: "logos:gitlab-icon" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-heading" data-aos="fade-up">
          Skills
        </h2>

        <div className="skills-groups">
          {skillCategories.map((category) => (
            <div className="skills-group" key={category.title} data-aos="fade-up" data-aos-delay="100">
              <span className="skills-group__label">{category.title}</span>
              <div className="skills-chips">
                {category.skills.map((skill) => (
                  <div className="skills-chip" key={skill.name} title={skill.name}>
                    <Icon icon={skill.icon} color={skill.color} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
