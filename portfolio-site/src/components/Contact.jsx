import React from 'react';
import styled from 'styled-components';

const StyledContactSection = styled.section`
	max-width: 600px;
	margin: 0 auto 100px;
	text-alignt: center;

	@media (max-width: 768px) {
		margin: 0 auto 50px;
	}

	.overline {
		display: block;
		margin-bottom: 20px;
		color: blue;
		font-size: medium;
		font-weight: 400;

		&:before {
			bottom: 0;
			font-size: small;
		}

		&:after {
			display: none;
		}
	}
	.title {
		font-size: clamp(40px, 5vw, 60px);
	}
	.email_link {
		margin-top: 50px;
	}
`;

function Contact() {
	return (
		<StyledContactSection id="contact">
			<h2 className="numbered_heading overline">
				<span>03.</span> Let's Connect
			</h2>

			<h2 className="title">Get In Touch</h2>

			<p>
				I am currently looking for a new role in the software development field.
				I am open to learning new skills to improve as a developer
			</p>
			<a className="email_link" href="mailto:mosaelitsoane@gmail.com">
				{' '}
				Email
			</a>
		</StyledContactSection>
	);
}

export default Contact;
