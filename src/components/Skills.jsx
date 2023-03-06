/** @format */

import React, { useState } from "react";
// Technology Images
import HTML from "../assets/skill-section-img/skills/HTML.png";
import CSS from "../assets/skill-section-img/skills/css.png";
import JavaScript from "../assets/skill-section-img/skills/javascript.png";
import ReactJS from "../assets/skill-section-img/skills/React.png";
import Redux from "../assets/skill-section-img/skills/redux.png";
import ReactRotuerDom from "../assets/skill-section-img/skills/react-router-dom.png";
import Tailwind from "../assets/skill-section-img/skills/Tailwind.png";
import SCSS from "../assets/skill-section-img/skills/scss.png";
import Bootstrap from "../assets/skill-section-img/skills/bootstrap.png";

import Figma from "../assets/skill-section-img/tools/figma.png";
import Git from "../assets/skill-section-img/tools/git.png";
import GitHub from "../assets/skill-section-img/tools/github.png";
import Vite from "../assets/skill-section-img/tools/vite.png";
import Netlify from "../assets/skill-section-img/tools/netlify.png";
import Webpack from "../assets/skill-section-img/tools/webpack.png";

const Skills = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(1);

	return (
		<div id="skills" className="skills">
			<section className="skills-section">
				<h2 className="skills-heading">
					<span className="skill-numbering">02.</span>Skills
				</h2>
				<div className="skills-tab">
					<span
						className={`${activeTabIndex === 1 ? "active-tab" : ""}`}
						onClick={() => setActiveTabIndex(1)}>
						<i className="fa-solid fa-display"></i>&nbsp;&nbsp;Technology
					</span>
					<span
						className={`${activeTabIndex === 2 ? "active-tab" : ""}`}
						onClick={() => setActiveTabIndex(2)}>
						<i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;Tools
					</span>
				</div>
				<div className="content-section">
					<div
						className={`tab-contents ${
							activeTabIndex === 1 ? "active-content-tab" : ""
						}`}>
						{/* Tecnologies */}
						<div className="skills-container">
							<div
								data-aos="fade-down-right"
								data-aos-offset="350"
								data-aos-duration="1000"
								className="skill-img-container"
								title="React JS">
								<img src={Redux} alt="" />
							</div>
							<div
								data-aos="fade-down"
								data-aos-offset="350"
								data-aos-duration="1000"
								className="skill-img-container"
								title="Redux">
								<img src={Tailwind} alt="" />
							</div>
							<div
								data-aos="fade-down-left"
								data-aos-offset="350"
								data-aos-duration="1000"
								className="skill-img-container"
								title="react-router-dom">
								<img src={ReactRotuerDom} alt="" />
							</div>
							<div
								data-aos="fade-right"
								data-aos-offset="250"
								data-aos-duration="1000"
								className="skill-img-container"
								title="Tailwind CSS">
								<img src={SCSS} alt="" />
							</div>
							<div className="skill-img-container" title="SCSS">
								<img src={ReactJS} alt="" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-offset="250"
								data-aos-duration="1000"
								className="skill-img-container"
								title="Bootstrap">
								<img
									style={{ filter: "brightness(0.8)" }}
									src={Bootstrap}
									alt=""
								/>
							</div>
							<div
								data-aos="fade-up-right"
								data-aos-offset="150"
								data-aos-duration="1000"
								className="skill-img-container"
								title="HTML">
								<img
									style={{ filter: "brightness(0.8)" }}
									src={HTML}
									alt=""
								/>
							</div>
							<div
								data-aos="fade-up"
								data-aos-offset="150"
								data-aos-duration="1000"
								className="skill-img-container"
								title="CSS">
								<img
									style={{ filter: "brightness(0.8)" }}
									src={CSS}
									alt=""
								/>
							</div>
							<div
								data-aos="fade-up-left"
								data-aos-offset="150"
								data-aos-duration="1000"
								className="skill-img-container"
								title="JavaScript">
								<img
									style={{ filter: "brightness(0.8)" }}
									src={JavaScript}
									alt=""
								/>
							</div>
						</div>

						<img src="" alt="" />
						<img src="" alt="" />
					</div>
					<div
						className={`tab-contents ${
							activeTabIndex === 2 ? "active-content-tab" : ""
						}`}>
						<div className="tools-container">
							<div
								data-aos="fade-down"
								data-aos-offset="350"
								className="skill-img-container"
								title="Figma">
								<img src={Figma} alt="" />
							</div>
						</div>
						<div className="tools-container">
							<div
								data-aos="fade-right"
								data-aos-offset="250"
								className="skill-img-container"
								title="Git">
								<img src={Git} alt="" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-offset="250"
								className="skill-img-container"
								title="GitHub">
								<img src={GitHub} alt="" />
							</div>
						</div>
						<div className="tools-container">
							<div
								data-aos="fade-up-right"
								data-aos-offset="150"
								className="skill-img-container"
								title="Vite">
								<img src={Vite} alt="" />
							</div>
							<div
								data-aos="fade-up"
								data-aos-offset="150"
								className="skill-img-container"
								title="Netlify">
								<img src={Netlify} alt="" />
							</div>
							<div
								data-aos="fade-up-left"
								data-aos-offset="150"
								className="skill-img-container"
								title="Webpack">
								<img src={Webpack} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skills;
