import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
function Header() {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 800) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
			if (window.scrollY < 750) {
				setScrolling(false);
			}
		});
	}, []);
	const isUserScrolling = scrolling ? 'showHand goup' : 'goup';

	return (
		<div className="wrapper">
			<div className="Header">
				<div className="Header-wrapper">
					<span className="say-hi">Hi, My Name is</span>
					<div className="about-me">
						<h1>Mosae Litsoane</h1>
						<h2 className="what-ido">I Love learning new technologies and building meaningful projects with awesome people</h2>
						<p className="about-description">I am a Web Developer who has a passion for building web applications and collaborating with others.</p>
					</div>
					<div className="email-me">
						<a href="mailto:mosaelitsoane@gmail.com" target="_blank" rel="noreferrer">
							Get In Touch
						</a>
					</div>
				</div>
			</div>
			<div className={isUserScrolling}>
				<Link to="Header" smooth={true} duration={1000}>
					<span role="img" aria-label="Back to top">
						 👆🏾 
					</span>
				</Link>
			</div>
		</div>
	);
}

export default Header;
