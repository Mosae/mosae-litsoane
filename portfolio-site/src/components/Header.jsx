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
				<div className="Header_wrapper">
					<span className="hi">Hi, My Name is</span>
					<div className="about_me">
						<h1>Mosae Litsoane</h1>
						<h2 className="what_ido">
							Love learning new technologies and building the internet
						</h2>
						<p className="about_description">
							I am a Web Developer who has a passion for building web
							applications currently based in Rochester Minnesota.
						</p>
					</div>
					<div className="email_me">
						<a href="mailto:mosaelitsoane@gmail.com">Let's connect</a>
					</div>
				</div>
			</div>
			<div className={isUserScrolling}>
				<Link to="top" smooth={true} duration={1000}>
					<span role="img" aria-label="Back to top">
						 👆🏾 
					</span>
				</Link>
			</div>
		</div>
	);
}

export default Header;
