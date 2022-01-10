
import React, { useState, useEffect } from 'react';
import './projects.scss'
import ProjectJSON from './projects.json'


const Project = () => {
	const [searchterm, setSearchterm] = useState("");
	const eventChangeHandler = (event) => {
		setSearchterm(event.target.value);
	}
	return (<div className="project-container">
		<input type="text" className="search-input" placeholder="Type here to search..." onChange={eventChangeHandler}></input>
		<div className="grid-container">
			{ProjectJSON.filter((val) => {
				if (searchterm == "") {
					return val
				} else if (val.title.toLowerCase().includes(searchterm.toLowerCase())) {
					return val
				}
			}).map((key, index) => {
				return <div className="rect">{key.title}</div>
			})}
		</div>
	</div>)
}

export default Project;
