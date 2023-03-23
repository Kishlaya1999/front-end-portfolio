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
						<div className="hovereffect">
							<img className="img-responsive" src={HabitTracker} alt="" />
							<div className="overlay">
								<h2>Habit Tracker</h2>
								<a
									className="info"
									href="https://habit-tracker-using-redux.netlify.app/"
									target="blank">
									<p>
										A react website which allows you to track your
										habit for 21 days
									</p>
									<span>Live link</span>
								</a>
							</div>
						</div>
					</div>
					<div className="project">
						<div className="hovereffect">
							<img className="img-responsive" src={ReactMinifier} alt="" />
							<div className="overlay">
								<h2>Code Minifier</h2>
								<a
									className="info"
									href="https://react-minifier.netlify.app/"
									target="blank">
									<p>
										A react website using which you can minify your
										HTML, CSS or JavaScript Code.
									</p>
									<span>Live link</span>
								</a>
							</div>
						</div>
					</div>
					<div className="project">
						<div className="hovereffect">
							<img className="img-responsive" src={SuperheroHunter} alt="" />
							<div className="overlay">
								<h2>SUPERHERO HUNTER</h2>
								<a
									className="info"
									href="https://marvel-superhero-hunter.netlify.app/"
									target="blank">
									<p>
										A site build using Marvel API.You can search for
										any marvel hero and get info about them.
									</p>
									<span>Live link</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
