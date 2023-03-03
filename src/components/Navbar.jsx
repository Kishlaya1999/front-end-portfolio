/** @format */

import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<a href="#about">
					<li>
						<span className="index-no">01.</span>&nbsp;About
					</li>
				</a>
				<a href="#skills">
					<li>
						<span className="index-no">02.</span>&nbsp;Skills
					</li>
				</a>
				<a href="#projects">
					<li>
						<span className="index-no">03.</span>&nbsp;Projects
					</li>
				</a>
				<a href="#education">
					<li>
						<span className="index-no">04.</span>&nbsp;Education
					</li>
				</a>
				<a
					href="https://drive.google.com/file/d/19R061U9vAzzifzcBuTVcZDU4lAqg6ASL/view?usp=share_link"
					download
					target="_blank">
					<li className="resume">Resume</li>
				</a>
			</ul>
		</div>
	);
};

export default Navbar;
