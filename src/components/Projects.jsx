/** @format */

import React from "react";
import HTML from "../assets/skill-section-img/skills/HTML.png";

const Projects = () => {
	return (
		<div id="projects" className="projects">
			<div className="project-container">
				<span className="projects-heading">Projects</span>
				<div className="personal-projects">
					<div className="project">
						<figure class="imghvr-stack-up">
							<img src={HTML} alt="example-image" />
							<figcaption>
								<h3 class="ih-fade-down ih-delay-sm ">Oscar Wilde</h3>
								<p class="ih-zoom-in ih-delay-md">
									<i>
										"I have the simplest tastes, I am always satisfied
										with the best."
									</i>
								</p>
								<a class="ih-fade-up ih-delay-lg button" href="#">
									Read More
								</a>
							</figcaption>
							<a href="#"></a>
						</figure>
					</div>
					<div className="project"></div>
					<div className="project"></div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
