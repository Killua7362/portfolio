import React, { useState } from 'react';
import StartPage from './components/start_page/start_page';
import About from './components/about/about';
import './index.scss'
import { createBrowserHistory } from 'history';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const history = createBrowserHistory();

function App() {
	return (<Router forceRefresh={true} basename="/portfolio" history={history}>
		<Routes>
			<Route exact path="/" element={<StartPage />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</Router>
	);
}

export default App;
