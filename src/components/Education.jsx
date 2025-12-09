/** @format */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "../assets/School.jsx";
import GraduationIcon from "../assets/Graduation.jsx";
import OnlineCourse from "../assets/OnlineCourse.jsx";
import Opsera from "../assets/Opsera.jsx";
const Education = () => {


	const getDynamicYearsOfExperience = () => {
		const startDate = new Date("2023-04-01");
		const endDate = new Date();
		const diffTime = Math.abs(endDate - startDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		const years = Math.floor(diffDays / 365);
		const months = Math.floor((diffDays % 365) / 30);
		return `${years} years ${months} months`;
	};

	return (
		<div id="education" className="education">
			<span className="education-heading">Education & Experience</span>
			<VerticalTimeline layout="1-column-left">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					// contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid #fff" }}
					// date="December 2021 - April 2023"
					icon={<Opsera />}
					position="right"
					iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}>
					<div className="experience-content">
						<div>
							<h3 className="vertical-timeline-element-title">Opsera</h3>
							<h4 className="vertical-timeline-element-subtitle">Software Engineer I</h4>
						</div>
						<div className="yoe">{getDynamicYearsOfExperience()}</div>
					</div>
					<p>HTML, CSS, JavaScript, React, Redux & raect-router-dom</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					// date="December 2021 - April 2023"
					icon={<OnlineCourse />}
					position="right"
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">Coding Ninjas</h3>
					<h4 className="vertical-timeline-element-subtitle">Careers Camp</h4>
					<p>HTML, CSS, JavaScript, React, Redux & raect-router-dom</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					// date="2018-2022"
					dateClassName="date-styles"
					icon={<GraduationIcon />}
					position="right"
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">
						Dr. A. P. J. Abdul Kalam Technical University, Lucknow
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor of Technology
					</h4>
					<p>Computer Science and Engineering</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					// date="2016 - 2018"
					dateClassName="date-styles"
					icon={<SchoolIcon />}
					position="right"
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">
						Maharshi Patanjali Vidya Mandir, Prayagraj
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Intermediate</h4>
					<p>Physics, Chemistry, Mathamatics, Computer Science</p>
				</VerticalTimelineElement>
				{/* <VerticalTimelineElement
					className="vertical-timeline-element--education"
					// date="2014 - 2016"
					dateClassName="date-styles"
					icon={<SchoolIcon />}
					position="right"
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">
						Maharshi Patanjali Vidya Mandir, Prayagraj
					</h3>
					<h4 className="vertical-timeline-element-subtitle">High School</h4>
				</VerticalTimelineElement> */}
			</VerticalTimeline>
		</div >
	);
};

export default Education;
