import React, { useState, useEffect } from 'react';
import './about.scss'


function About() {
	const [quote, setQuote] = useState();
	const [name, setName] = useState();
	const [char, setChar] = useState();
	const animeQuote = () => {
		fetch('https://animechan.vercel.app/api/random')
			.then(response => response.json())
			.then((quote) => {
				setQuote(quote.quote)
				setName(quote.anime)
				setChar(quote.character)
			}).catch(err => {
				throw new Error(err)
			})
	}
	const onClickHandler = () => {
		animeQuote()
	}

	const [visible, setVisible] = useState("visible");
	const weeb_click_handler = () => {
		if (visible == "visible") {
			setVisible("collapse")
		} else {
			setVisible("visible")
		}
	}

	return (
		<div onClick={onClickHandler} className="card-container" >
			<div className="quoteContainer">
				<div className="name-container">
					<img src="" className="photo" />
					<div className="name">Akshay Bhat</div>
				</div>
				<div className="about-container">
					<div className="about">

						<a>I am a </a>
						<a style={{ textDecoration: "line-through" }}>Computer Science </a>
						<a>Mechanical Engineer undergrad who loves Computer Science and I am a hardcore </a>
						<a className="text_weeb" onClick={weeb_click_handler}>WEEB</a>
					</div>
				</div>
				<div className={`break ${visible}`} />
				<div className={`misc-container ${visible}`} >
					<div className="misc"></div>
				</div>
			</div>
		</div>
	);
}

export default About;
			/* <h1 className="quote_quote">helllo</h1>
<h1 className="quote_anime">(life)</h1>
<h1 className="quote_char">akshay</h1> */
