/** @format */

import { useState, useEffect } from "react";

// Styling file
import "./App.scss";

// Components
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

// External libraries
import AOS from "aos";
import PageProgress from "react-page-progress";
import "animate.css";

function App() {
	const [scroll, setScroll] = useState(0);
	const [backToTopIsVisible, setBackToTopIsVisible] = useState(false);

	AOS.init({
		offset: 150,
	});

	useEffect(() => {
		if (scroll > 300) {
			document.getElementById("navbar").classList.add("hide-navbar");
			setBackToTopIsVisible(true);
		} else {
			document.getElementById("navbar").classList.remove("hide-navbar");
			setBackToTopIsVisible(false);
		}
	}, [scroll]);

	document.addEventListener("scroll", () => {
		setScroll(document.documentElement.scrollTop);
	});

	return (
		<>
			<div className="social-media">
				<ul>
					<li>
						<a href="https://github.com/Kishlaya1999" target="blank">
							<i className="fa-brands fa-github"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/kishlaya1999/" target="blank">
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</li>
				</ul>
			</div>

			{backToTopIsVisible ? (
				<a href="#header">
					<div className="back-to-top">
						<i className="fa-solid fa-arrow-up"></i>
					</div>
				</a>
			) : (
				""
			)}

			<Navbar />
			<PageProgress color="#ff6a3d" />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Education />
			<Footer />
		</>
	);
}

export default App;
