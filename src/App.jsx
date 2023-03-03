/** @format */

import "./App.scss";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import PageProgress from "react-page-progress";
import Education from "./components/Education";

function App() {
	AOS.init({
		offset: 150,
	});

	return (
		<>
			<div className="social-media">
				<ul>
					<li>
						<i className="fa-brands fa-github"></i>
					</li>
					<li>
						<i className="fa-brands fa-linkedin-in"></i>
					</li>
				</ul>
			</div>
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
