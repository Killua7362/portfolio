import React, { useState, useRef, useEffect } from 'react';
import './start_page.scss';
import { gsap, TweenLite, Power1, TimelineLite } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap";
import { useNavigate, Link } from "react-router-dom";


const StartPage = props => {
	let navigate = useNavigate();
	const wrapRef = useRef();
	const text_I = useRef();
	const [textI, settextI] = useState("I");

	const containerRef = useRef();
	const container1Ref = useRef();
	const tl = new TimelineLite();

	//componentmount alternative
	useEffect(() => {
		document.title = "portfolio";

		gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
		gsap.core.globals("MotionPathPlugin", MotionPathPlugin);
		gsap.core.globals("ScrollTrigger", ScrollTrigger);
		gsap.fromTo(wrapRef.current, { backgroundColor: gsap.getProperty("html", "--light") },
			{
				scrollTrigger: {
					trigger: container1Ref.current, scrub: true, end: "bottom bottom"
				}, backgroundColor: gsap.getProperty("html", "--dark")
			}
		)

	}, [])

	return (
		<div className="wrap" ref={wrapRef}>
			<section ref={containerRef} className="container">
				<div className="text text_NOT">NOT YOUR AVERAGE ENGINEER</div>

			</section >
			<section ref={container1Ref} className="container-1">
				<div className="text_container">
					<Link to="/about" style={{ textDecoration: 'none' }} className="text text_I"></Link>
					<Link to="/projects" style={{ textDecoration: 'none' }} className="text text_AM"></Link>
					<Link to="/contact" style={{ textDecoration: 'none' }} className="text text_AKSHAY"></Link>
				</div>

			</section>
		</div>
	);
};

export default StartPage;
