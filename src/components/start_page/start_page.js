import React, { useState, useRef, useEffect } from 'react';
import './start_page.scss';
import { gsap, TweenLite, Power1, TimelineLite } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap";
import { useNavigate,Link } from "react-router-dom";

import { createBrowserHistory } from 'history';

const StartPage = props => {
	let navigate = useNavigate();
	const history = createBrowserHistory();
	const sunRef = useRef();
	const wrapRef = useRef();
	const moonRef = useRef();
	const text_I = useRef();
	const [textI, settextI] = useState("I");

	const containerRef = useRef();
	const container1Ref = useRef();
	const tl = new TimelineLite();
	const sunPath = {
		path: [
			{ x: 0, y: 0 },
			{ x: 0, y: 100 },
			{ x: 0, y: 200 },
			{ x: 0, y: 300 },
			{ x: 0, y: 400 },
			{ x: 0, y: 500 },
			{ x: 0, y: 600 },
			{ x: 0, y: 700 },
			{ x: 0, y: 800 },
			{ x: 0, y: 900 },
		]
	};

	const moonPath = {
		path: [
			{ x: 0, y: 0 },
			{ x: 0, y: 100 },
			{ x: 0, y: 200 },
			{ x: 0, y: 300 },
			{ x: 0, y: 400 },
			{ x: 0, y: 500 },
		]
	};
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

		tl.to(sunRef.current, 1, {
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top",
				end: "bottom center",
				scrub: true,
			},
			motionPath: sunPath, ease: "none", css: {
				opacity: 0
			}
		}).to(moonRef.current, 1, {
			scrollTrigger: {
				trigger: container1Ref.current,
				start: "top center",
				end: "bottom",
				scrub: true
			},
			motionPath: moonPath, ease: "none"
		})



	}, [])
	const onClickHandler = () => {
	navigate("/about", { replace: true });
	}

	return (
		<div className="wrap" ref={wrapRef}>
			<section ref={containerRef} className="container">
				<div className="text text_NOT">NOT YOUR AVERAGE ENGINEER</div>
				<div ref={sunRef} className="sun" />
			</section >


			<section ref={container1Ref} className="container-1">
				<div ref={moonRef} className="moon" />

				<div className="text_container">
					<Link to="/about" style={{ textDecoration: 'none' }} className="text text_I"></Link>
					<div className="text text_AM"></div>
					<div className="text text_AKSHAY"></div>
				</div>

			</section>
		</div>
	);
};

export default StartPage;
