import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function MobileNavBar() {
	const [isMobile, setIsMobile] = useState(false);

	const toggleMenu = () => {
		setIsMobile(!isMobile);
	};
	useEffect(() => {
		if (isMobile) {
			window.document.documentElement.style.overflow = 'hidden';
		} else {
			window.document.documentElement.style.overflow = 'auto';
		}
	}, [isMobile]);
	return (
		<div>
			<div
				className={!isMobile ? 'burger-menu' : 'burger-menu close'}
				onClick={toggleMenu}>
				<div className="lines"></div>
				<div className="lines"></div>
				<div className="lines"></div>
			</div>
			<div className={isMobile ? 'MobileNavbar show' : 'MobileNavbar'}>
				<nav>
					<Link
						offset={-70}
						to="about"
						onClick={toggleMenu}
						smooth={true}
						duration={1000}>
						<span>01.</span>
						About
					</Link>
					<Link
						offset={-70}
						to="skills"
						onClick={toggleMenu}
						smooth={true}
						duration={1000}>
						<span>02.</span>
						Skills
					</Link>
					<Link
						offset={-70}
						to="projects"
						onClick={toggleMenu}
						smooth={true}
						duration={1000}>
						<span>03.</span>
						Work
					</Link>
					<Link
						offset={-70}
						to="contact"
						onClick={toggleMenu}
						smooth={true}
						duration={1000}>
						<span>04.</span>
						Contact
					</Link>
				</nav>
			</div>
		</div>
	);
}

export default MobileNavBar;
