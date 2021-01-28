import React from 'react';
import styled from 'styled-components';
function About() {
	const skills = [
		'JavaScript (ES6)',
		'React',
		'Node.Js',
		'HTML & (S)CSS',
		'WordPress',
		'Angular',
	];
	return (
		<div id="about">
			<h2 className="numbered_heading">About Me</h2>

			<div className="inner">
				{/* styled text */}
				<div>
					<p>
						Hi, I am Mosae Litsoane, I am a software developer. I build custom
						web application and websites. I enjoy learning new technologies and
						improving my skills
					</p>
					<p>
						These are some of the languages, tools and frameworks I work with:
					</p>
				</div>
				<ul className="skills-list">
					{skills && skills.map((skills, i) => <li key={i}>{skills}</li>)}
				</ul>
				{/* end of styled text */}
				{/* start of styled pic */}
				<div className="wrapper">
					<img src="#" alt="Mosae" />
				</div>
			</div>
		</div>
	);
}

export default About;
