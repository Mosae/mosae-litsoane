import React from 'react';
import Modal from './Modal';
import { portfolioData } from '../portfolioData';
function Projects() {
	return (
		<div className="ProjectContent" id="projects">
			<h3 className="title-color">
				<span>03.</span> Projects
			</h3>
			<div className="ProjectContent-display">
				{portfolioData.map((project, i) => (
					<Modal key={i} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
