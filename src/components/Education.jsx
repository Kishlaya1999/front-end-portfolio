/** @format */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "../assets/School.jsx";
import GraduationIcon from "../assets/Graduation.jsx";
import OnlineCourse from "../assets/OnlineCourse.jsx";

const Education = () => {
	return (
		<div id="education" className="education">
			<span className="education-heading">Education</span>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="December 2021 - April 2023"
					icon={<OnlineCourse />}
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">Coding Ninjas</h3>
					<h4 className="vertical-timeline-element-subtitle">Careers Camp</h4>
					<p>HTML, CSS, JavaScript, React, Redux & raect-router-dom</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2018-2022"
					dateClassName="date-styles"
					icon={<GraduationIcon />}
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">
						United College of Engineering and Management, Prayagraj
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor of Technology
					</h4>
					<p>Computer Science and Engineering</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2016 - 2018"
					dateClassName="date-styles"
					icon={<SchoolIcon />}
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">
						Maharshi Patanjali Vidya Mandir, Prayagraj
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Intermediate</h4>
					<p>Physics, Chemistry, Mathamatics, Computer Science</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2014 - 2016"
					dateClassName="date-styles"
					icon={<SchoolIcon />}
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className="vertical-timeline-element-title">
						Maharshi Patanjali Vidya Mandir, Prayagraj
					</h3>
					<h4 className="vertical-timeline-element-subtitle">High School</h4>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Education;
