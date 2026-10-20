import React from "react";
import { Icon } from "@iconify/react";
import PrimeFlix from "../assets/projects-images/primeflix.jpeg";

const projects = [
  {
    title: "PrimeFlix",
    description:
      "A movie and TV discovery app with advanced search, filtering, ratings visualization, and cast information using the TMDB API.",
    outcome: "Focused on reusable components, clean architecture, and maintainable code.",
    image: PrimeFlix,
    techStack: ["React", "JavaScript", "TMDB API", "CSS"],
    liveUrl: "https://primeflix.kishlaya.dev/",
    githubUrl: "https://github.com/Kishlaya1999",
    featured: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const isFeatured = project.featured;

  return (
    <div
      className={`project-card ${isFeatured ? "project-card--featured" : ""}`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="project-image-wrapper">
        {project.image && (
          <img src={project.image} alt={project.title} loading="lazy" />
        )}
        {project.image && (
          <div className="project-overlay">
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" title="Live Demo">
                  <Icon icon="carbon:launch" width="22" height="22" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" title="GitHub">
                  <Icon icon="mdi:github" width="22" height="22" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.outcome && (
          <p className="project-outcome">{project.outcome}</p>
        )}
        {project.techStack.length > 0 && (
          <div className="tech-badges">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        )}
        {(project.liveUrl || project.githubUrl) && (
          <div className="project-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-action-btn">
                <Icon icon="carbon:launch" width="16" height="16" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-action-btn">
                <Icon icon="mdi:github" width="16" height="16" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="project-container">
        <h2 className="projects-heading" data-aos="fade-up">
          <span className="section-number">03.</span>Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
