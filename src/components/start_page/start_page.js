import React, { useState, useRef, useEffect } from 'react';
import './start_page.scss';
import { gsap, TweenLite, Power1, TimelineLite } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const StartPage = props => {
	const sunRef = useRef();
	const wrapRef= useRef();
	const moonRef = useRef();
	const containerRef = useRef();
	const container1Ref = useRef();
	const tl = new TimelineLite();
	const sunPath= {
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

	useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
		gsap.core.globals("MotionPathPlugin", MotionPathPlugin);
		gsap.core.globals("ScrollTrigger", ScrollTrigger);
		
		gsap.fromTo(wrapRef.current,{backgroundColor:gsap.getProperty("html","--light")},
	{
	scrollTrigger:{
	trigger:container1Ref.current,scrub:true,end:"bottom bottom"
	},backgroundColor:gsap.getProperty("html","--dark")
	}
		)

		tl.to(sunRef.current, 1, {
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top",
				end: "bottom center",
				scrub: true,
			},
			motionPath: sunPath, ease: "none",				css:{
				opacity:0
				}
 }).to(moonRef.current, 1, {
			scrollTrigger: {
				trigger: container1Ref.current,
				start: "top center",
				end: "bottom",
				scrub: true
			},
			motionPath: moonPath, ease: "none" })
	})

	return (
		<div className="wrap" ref={wrapRef}>
			<section ref={containerRef} className="container">
				<div className="text">NOT YOUR AVERAGE ENGINEER</div>
				<div ref={sunRef} className="sun" />
			</section >
			<section ref={container1Ref} className="container-1">
				<div ref={moonRef} className="moon" />
				<div className="text text_I">I</div>
				<div className="text text_AM">AM</div>
				<div className="text text_AKSHAY">AKSHAY BHAT</div>

			</section>
		</div>
	);
};

export default StartPage;
