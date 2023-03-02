/** @format */

import "./App.scss";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";

function App() {
	AOS.init({
		offset: 150,
	});

	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
