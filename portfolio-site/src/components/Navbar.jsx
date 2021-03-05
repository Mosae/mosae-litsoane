import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Resume from './Resume.pdf';
import logo from '../images/logo.png';
function Navbar() {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 3) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}

			if (window.scrollY === 0) {
				setScrolling(false);
			}
		});
		return () => {
			setScrolling(false);
		};
	}, []);

	const isUserScrolling = scrolling ? 'Navbar black' : 'Navbar';
	return (
		<div className={isUserScrolling} id="top">
			<div className="nav-links">
				<a className="logo" href="/">
					<div className="logo-image">
						<img src={logo} alt="logo" />
					</div>
				</a>
				<Link offset={-70} to="about" smooth={true} duration={1000}>
					<span>01.</span> About
				</Link>
				<Link offset={-70} to="skills" smooth={true} duration={1000}>
					<span>02.</span> Skills
				</Link>
				<Link offset={-70} to="projects" smooth={true} duration={1000}>
					<span>03.</span> Projects
				</Link>
				<Link to="contact" smooth={true} duration={1000}>
					<span>04.</span> Contact
				</Link>

				<a
					className="resume-button"
					href={Resume}
					target="_blank"
					rel="noopener noreferrer">
					Resume
				</a>
			</div>
		</div>
	);
}

export default Navbar;
