import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="Footer">
			<div className="madeby">Mosae Litsoane</div>

			<nav>
				<a
					href="https://www.linkedin.com/in/mosae-litsoane/"
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/Mosae"
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub />
				</a>
				<a
					href="https://twitter.com/Mosae_Litsoane"
					target="_blank"
					rel="noopener noreferrer">
					<FaTwitter />
				</a>
			</nav>
		</footer>
	);
}

export default Footer;
