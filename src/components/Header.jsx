/** @format */

import React from "react";
import myImage from "../assets/kk.jpg";

const Header = () => {
	return (
		<div id="header" className="header">
			<div className="header-container">
				<div className="my-info">
					<span className="hi">Hi, my name is</span>
					<span className="name">Kishlaya Kesarwani</span>
					<span className="header-about">
						I'm a <span className="header-skill">React JS Developer</span>
					</span>
				</div>
				<div className="header-image">
					{/* <div className="image-wrapper"></div> */}
					<img src={myImage} alt="" />
					<div className="image-border"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
