/** @format */

import React from "react";
// import HabitTracker from "../assets/projects-images/habit_tracker.gif";
import PrimeFlix from "../assets/projects-images/primeflix.jpeg";
import ReactMinifier from "../assets/projects-images/react_minifier.gif";
import SuperheroHunter from "../assets/projects-images/superhero_hunter.gif";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-container">
        <span className="projects-heading">Projects</span>
        <div className="personal-projects">
          <div className="project">
            <img src={PrimeFlix} alt="Habit Tracker" />
            <div className="project-info">
              <h2>PrimeFlix</h2>
              <p>
                Developed a movie and TV discovery application using the TMDB
                API with advanced search, filtering, TV details, ratings
                visualization, and cast information. Focused on reusable
                components, clean architecture, and maintainable code.
              </p>
              <a href="https://primeflix.kishlaya.dev/" target="blank">
                View Project
              </a>
            </div>
          </div>
          {/* <div className="project">
            <img src={SuperheroHunter} alt="Superhero Hunter" />
            <div className="project-info">
              <h2>Superhero Hunter</h2>
              <p>
                A site build using Marvel API. You can search for any marvel
                hero and get info about them.
              </p>
              <a
                href="https://marvel-superhero-hunter.netlify.app/"
                target="blank"
              >
                View Project
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
