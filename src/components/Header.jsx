/** @format */

import React, { useEffect, useRef } from "react";
import myImage from "../assets/kk.jpg";
import Typed from "typed.js";

const Header = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["I'm a React Developer", "I build Responsive websites"],
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
						{/* <span className="header-skill" title="Front-End Developer">
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
