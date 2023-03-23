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
// import PacmanLoader from "react-spinners/PacmanLoader ";
import HashLoader from "react-spinners/HashLoader";

function App() {
	const [loading, setLoading] = useState(true);
	// const [scroll, setScroll] = useState(0);
	// const [backToTopIsVisible, setBackToTopIsVisible] = useState(false);

	AOS.init({
		duration: 1000,
	});

	// const scrollFunction = () => {
	// 	if (loading == false) {
	// 		if (scroll > 300) {
	// 			document.querySelector(".navbar-container").classList.add("hide-navbar");
	// 			setBackToTopIsVisible(true);
	// 		} else {
	// 			document.querySelector(".navbar-container").classList.remove("hide-navbar");
	// 			setBackToTopIsVisible(false);
	// 		}
	// 	}
	// };

	// useEffect(() => {
	// 	scrollFunction();
	// }, [scroll]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	// document.addEventListener("scroll", () => {
	// 	setScroll(document.documentElement.scrollTop);
	// });

	return (
		<>
			{loading ? (
				// <PacmanLoader
				// 	color=" #ff6a3d"
				// 	speedMultiplier={1}
				// 	loading={loading}
				// 	// width={150}
				// 	size={25}
				// 	cssOverride={{
				// 		display: "inherit",
				// 		position: "absolute",
				// 		width: "150px",
				// 		// height: "6px",
				// 		overflow: "hidden",
				// 		backgroundClip: "padding-box",
				// 		inset: "0",
				// 		margin: "auto auto",
				// 		zIndex: "10",
				// 	}}
				// />
				<HashLoader
					color="#ff6a3d"
					size={100}
					cssOverride={{
						// display: "inherit",
						position: "absolute",
						overflow: "hidden",
						// backgroundClip: "padding-box",
						inset: "0",
						margin: "auto auto",
						zIndex: "10",
					}}
				/>
			) : (
				<div>
					<div className="social-media-desktop">
						<ul>
							<li>
								<a
									href="https://github.com/Kishlaya1999"
									target="blank"
									title="GitHub">
									<i className="fa-brands fa-github"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/kishlaya1999/"
									target="blank"
									title="LinkedIn">
									<i className="fa-brands fa-linkedin-in"></i>
								</a>
							</li>
						</ul>
					</div>

					{/* {backToTopIsVisible ? (
						<a href="#header">
							<div className="back-to-top">
								<i className="fa-solid fa-arrow-up"></i>
							</div>
						</a>
					) : (
						""
					)} */}

					<Navbar />
					<PageProgress color="#ff6a3d" />
					<Header />
					<About />
					<Skills />
					<Projects />
					<Education />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
