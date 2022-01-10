import React, { useState } from 'react';
import StartPage from './components/start_page/start_page';
import About from './components/about/about';
import Project from './components/projects/projects';
import Contact from './components/contact/contact';
import './index.scss'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";


function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<StartPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Project/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
		</Router>
	);
}

export default App;
