/** @format */

import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<li>About</li>
				<li>Skills</li>
				<li>Projects</li>
				<li>Contact</li>
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
