/** @format */

import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<a href="#about">
					<li>About</li>
				</a>
				<a href="#skills">
					<li>Skills</li>
				</a>
				<a href="#projects">
					<li>Projects</li>
				</a>
				<a href="">
					<li>Contact</li>
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
