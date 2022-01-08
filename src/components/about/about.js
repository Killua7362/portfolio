import React, { useState,useEffect } from 'react';
import './about.scss'


function About() {
	const [quote, setQuote] = useState();
	const [name, setName] = useState();
	const [char, setChar] = useState();
	const animeQuote=()=>{
		fetch('https://animechan.vercel.app/api/random')
			.then(response => response.json())
			.then((quote) =>{
				setQuote(quote.quote)
				setName(quote.anime)
				setChar(quote.character)
			} )
	}
	useEffect(()=>{
		animeQuote()
	},[])
	const onClickHandler = () => {
		animeQuote()
	}
	return (
		<div onClick={onClickHandler} className="quoteContainer">
			<h1 className="quote_quote">{quote}</h1>
			<h1 className="quote_anime">({name})</h1>
			<h1 className="quote_char">{char}</h1>
		</div>
	);
}

export default About;
