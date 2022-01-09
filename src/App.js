import React, { useState } from 'react';
import StartPage from './components/start_page/start_page';
import About from './components/about/about';
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
				<Route path='*' element={<a>hii</a>} />
				<Route exact path="/" element={<StartPage />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
