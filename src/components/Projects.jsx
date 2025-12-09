/** @format */

import React from "react";
import HabitTracker from "../assets/projects-images/habit_tracker.gif";
import ReactMinifier from "../assets/projects-images/react_minifier.gif";
import SuperheroHunter from "../assets/projects-images/superhero_hunter.gif";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-container">
        <span className="projects-heading">Projects</span>
        <div className="personal-projects">
          <div className="project">
            <img src={HabitTracker} alt="Habit Tracker" />
            <div className="project-info">
              <h2>Habit Tracker</h2>
              <p>
                A react website which allows you to track your habit for 21 days
              </p>
              <a
                href="https://habit-tracker-using-redux.netlify.app/"
                target="blank"
              >
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
