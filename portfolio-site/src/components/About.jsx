import React from 'react';
import Projects from './Projects';
const languages = [
	'JavaScript (ES6)',
	'Angular',
	'Python',
	'Node.Js',
	'HTML & (S)CSS',
	'WordPress',
];
const tools = [
	'VS Code',
	'Git',
	'Git-Hub',
	'Postman',
	'Terminal',
	'Chrome DevTools',
	'Alan AI',
	'Versel',
];
const frameworks = ['React', 'Express', 'Bootstrap', 'Material UI', 'Angular'];
const libraries = ['React-Chart.js-2', 'Axios', 'Unit testing', 'Jest'];
const About = () => {
	return (
		<div className="Content_container" id="about">
			<div className="about_me_container">
				<h3 className="title_color">
					<span>01.</span> About Me
				</h3>
				<p>
					Hi, I am Mosae Litsoane, I am a software developer. I build custom web
					application and websites. I enjoy learning new technologies and
					improving my skills
				</p>
			</div>

			<div className="Content_skills" id="skills">
				<h3 className="title_color">
					<span>02.</span> Skills
				</h3>
				<div className="skills_container">
					<div className="languages_wrapper">
						<div className="languages shared_width">
							<h3>languages</h3>
							<ul>
								{languages &&
									languages.map((languages, i) => <li key={i}>{languages}</li>)}
							</ul>
						</div>
						<div className="frameworks shared-width">
							<h3>frameworks</h3>
							<ul>
								{frameworks &&
									frameworks.map((frameworks, i) => (
										<li key={i}>{frameworks}</li>
									))}
							</ul>
						</div>
						<div className="languages shared_width">
							<h3>libraries</h3>
							<ul>
								{libraries &&
									libraries.map((libraries, i) => <li key={i}>{libraries}</li>)}
							</ul>
						</div>
						<div className="tools shared_width">
							<h3>tools</h3>
							<ul>
								{tools && tools.map((tools, i) => <li key={i}>{tools}</li>)}
							</ul>
						</div>
					</div>
				</div>

				<div></div>
			</div>
			<Projects />
		</div>
	);
};
export default About;
