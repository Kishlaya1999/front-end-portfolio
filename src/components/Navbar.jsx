/** @format */

import React, { useState } from "react";

const Navbar = () => {
	const [isHamburger, setIsHamburger] = useState("fa-solid fa-bars");

	const changeIcon = () => {
		const navLink = document.querySelector(".nav-links");
		if (isHamburger === "fa-solid fa-bars") {
			setIsHamburger("fa-solid fa-xmark");
			navLink.classList.add("active");
		} else {
			setIsHamburger("fa-solid fa-bars");
			navLink.classList.remove("active");
		}
	};

	const moveToDifferentSection = () => {
		const hamburgerIcon = document.querySelector(".hamberger-icon");
		hamburgerIcon.click();
	};

	return (
		<div id="navbar" className="navbar">
			<div className="navbar-container">
				<div className="nav-links">
					<ul>
						<a href="#about">
							<li className="animate__animated animate__fadeInUp">
								<span className="index-no">01.</span>&nbsp;About
							</li>
						</a>
						<a href="#skills">
							<li className="animate__animated animate__fadeInDown">
								<span className="index-no">02.</span>&nbsp;Skills
							</li>
						</a>
						<a href="#projects">
							<li className="animate__animated animate__fadeInUp">
								<span className="index-no">03.</span>&nbsp;Projects
							</li>
						</a>
						<a href="#education">
							<li className="animate__animated animate__fadeInDown">
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
				<div className="hamberger-icon" onClick={changeIcon}>
					<i className={isHamburger}></i>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
