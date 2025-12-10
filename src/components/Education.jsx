/** @format */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "../assets/School.jsx";
import GraduationIcon from "../assets/Graduation.jsx";
import OnlineCourse from "../assets/OnlineCourse.jsx";
import Work from "../assets/Work.jsx";
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
          icon={<Work />}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div className="experience-content">
            <div>
              <h3 className="vertical-timeline-element-title">Opsera</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Software Engineer I
              </h4>
            </div>
            <div className="yoe">{getDynamicYearsOfExperience()}</div>
          </div>
          <ul style={{ margin: "5px 10px", lineHeight: "1.2" }}>
            <li>Transitioned into a full stack role.</li>
            <li>Built frontend and backend product features.</li>
            <li>Owned end-to-end feature development.</li>
            <li>Redesigned and modernized a legacy UI.</li>
            <li>Migrated application from Bootstrap to Mantine.</li>
          </ul>
          <div className="experience-content" style={{ marginTop: "15px" }}>
            <div>
              <h4 className="vertical-timeline-element-subtitle">
                Software Developer Intern
              </h4>
            </div>
          </div>
          <ul style={{ margin: "5px 10px", lineHeight: "1.2" }}>
            <li>Joined as a frontend developer intern.</li>
            <li>Learned platform architecture and coding standards.</li>
            <li>Fixed bugs and enhanced existing features.</li>
            <li>Delivered features that got merged into production.</li>
            <li>Worked with large production codebases.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          // date="December 2021 - April 2023"
          icon={<OnlineCourse />}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        >
          <div className="experience-content">
            <div>
              <h3 className="vertical-timeline-element-title">Coding Ninjas</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Careers Camp
              </h4>
            </div>
            <div className="yoe">December 2021 - April 2023</div>
          </div>
          <p>HTML, CSS, JavaScript, React, Redux & raect-router-dom</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2018-2022"
          dateClassName="date-styles"
          icon={<GraduationIcon />}
          position="right"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <div className="experience-content">
            <div>
              <h3 className="vertical-timeline-element-title">
                Dr. A. P. J. Abdul Kalam Technical University, Lucknow
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor of Technology
              </h4>
            </div>
            <div className="yoe">August 2018 - July 2022</div>
          </div>

          <p>Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2016 - 2018"
          dateClassName="date-styles"
          icon={<SchoolIcon />}
          position="right"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <div className="experience-content">
            <div>
              <h3 className="vertical-timeline-element-title">
                Maharshi Patanjali Vidya Mandir, Prayagraj
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Intermediate
              </h4>
            </div>
            <div className="yoe">Arpil 2017 - July 2018</div>
          </div>

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
    </div>
  );
};

export default Education;
