import React, { useState, useEffect } from 'react';
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

function About() {


	const [visible, setVisible] = useState("collapse");
	const [vvisible, setVVisible] = useState("visible");
	const [used, setUsed] = useState("used");



	return (
		<div className="card-container" >
			<div className="quoteContainer">
				<div className="name-container">
					<div className="photo-container">
						<img src="" className="photo" />
						<img className={`pokeball ${used}`} />
					</div>
					<div className="name">Akshay Bhat</div>
				</div>
				<div className={`about-container ${vvisible}`}>
					<div className="about">
						<a>I am a </a>
						<a>Mechanical Engineer undergrad who loves Computer Science and a hardcore </a>
						<a className="text_weeb" >weeb</a>
					</div>
					<div className="links">
						<a className="fa fa-linkedin" title="linkedin" href="https://www.linkedin.com/in/akshay-bhat-ba90301b4/" target="_blank" />
						<a className="fa fa-github" title="github" href="https://github.com/Killua7362/" target="_blank" />
						<a className="fa fa-envelope" title="mail" onClick={() => {
							if (window.confirm('Do you want to copy my email?')) {
								navigator.clipboard.writeText("bhat7362@gmail.com")
							}
						}} />
					</div>

				</div>
				<div className={`quote-container ${visible}`}>		
					<div className="links">
						<a className="fa fa-instagram" title="instagram" href="https://www.instagram.com/___killuaa/" target="_blank" />
						<a className="fa fa-mal" title="MyAnimeList" href="https://myanimelist.net/profile/Killua7362" target="_blank" >MAL</a>
						<a target="_blank" href="https://discordapp.com/users/922679473529290843/">

							<FontAwesomeIcon className="fa-discord" icon={faDiscord} title="Discord" />
						</a>
					</div>
				</div>
				<div className="break" />

			</div>
		</div>
	);
}

export default About;
