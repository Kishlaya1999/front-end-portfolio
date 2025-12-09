/** @format */

import React, { useEffect, useRef } from "react";
import myImage from "../assets/kk.jpg";
import Typed from "typed.js";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I'm a Full Stack Developer",
        "I like turning ideas into working products",
        "I care about simplicity and long-term maintainability"
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div id="header" className="header">
      <div className="header-container">
        <div className="my-info">
          <span className="hi">Hi, my name is</span>
          <span className="name">Kishlaya Kesarwani</span>
          <span className="header-about">
            <span ref={el} />
            <span ref={el} />
            <div className="about-me">
              <p>
                I am a <span className="highlighted-text">Full Stack Developer</span> currently working at a fast-paced startup, building end-to-end product features across both frontend and backend. I work comfortably across the stack using <span className="highlighted-text">React</span>, <span className="highlighted-text">JavaScript</span>, <span className="highlighted-text">Express</span>, and <span className="highlighted-text">MongoDB</span> to deliver scalable, production-ready applications with a strong focus on performance and user experience.
              </p>
              <p>
                Over the past <span className="highlighted-text">3 years</span> (approx.), I’ve worked extensively on large and evolving codebases, which has helped me develop a <span className="highlighted-text">strong understanding of code quality</span>, <span className="highlighted-text">maintainability</span>, and best practices. I started by integrating and enhancing individual features and gradually progressed to owning complete product requirements—handling everything from UI implementation and backend logic to production deployment. Working in a fast-moving environment has strengthened my sense of <span className="highlighted-text">ownership and responsibility</span>, enabling me to consistently <span className="highlighted-text">deliver features end to end</span>.
              </p>
            </div>
            {/* <span className="header-skill" title="Front-End Developer">ˀ
							React JS Developer
						</span> */}
          </span>
        </div>
        <div className="header-image">
          {/* <div className="image-wrapper"></div> */}
          <img src={myImage} alt="My Image" />
          <div className="image-border"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
