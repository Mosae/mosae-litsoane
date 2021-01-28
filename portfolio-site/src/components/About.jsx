import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
	max-width: 900px;

	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 50px;

		@media (max-width: 768px) {
			display: block;
		}
	}
`;

const StyledText = styled.div`
ul.skills_list {
    display: grid;
    grid-template-columns: repeat(2,minmax(140px,200px));
    padding: 0;
    margin:20px 0 0 0;
    overflow: hidden;
    list-style:none;

    li {
        position:relative;
        margin-bottom: 10px;
        padding-left:20px;
        font-size: xs

        &:before {
            content: '>';
            position:absolute;
            left:0;
            color: blue;
            line-height: 12px
        }
    }
}
`;
// const StyledPic = styled.div`
// 	position: relative;
// 	max-width: 300px;
// 	@media (max-width: 768px) {
// 		margin: 50px auto 0;
// 		width: 70%;
// 	}
// 	.wrapper {
// 		${({ theme }) => theme.mixins.boxShadow};
// 		display: block;
// 		position: relative;
// 		width: 100%;
// 		border-radius: var(--border-radius);
// 		background-color: var(--green);
// 		&:hover,
// 		&:focus {
// 			background: transparent;
// 			outline: 0;
// 			&:after {
// 				top: 15px;
// 				left: 15px;
// 			}
// 			.img {
// 				filter: none;
// 				mix-blend-mode: normal;
// 			}
// 		}
// 		.img {
// 			position: relative;
// 			border-radius: var(--border-radius);
// 			mix-blend-mode: multiply;
// 			filter: grayscale(100%) contrast(1);
// 			transition: var(--transition);
// 		}
// 		&:before,
// 		&:after {
// 			content: '';
// 			display: block;
// 			position: absolute;
// 			width: 100%;
// 			height: 100%;
// 			border-radius: var(--border-radius);
// 			transition: var(--transition);
// 		}
// 		&:before {
// 			top: 0;
// 			left: 0;
// 			background-color: var(--navy);
// 			mix-blend-mode: screen;
// 		}
// 		&:after {
// 			border: 2px solid var(--green);
// 			top: 20px;
// 			left: 20px;
// 			z-index: -1;
// 		}
// 	}
// `;

function About() {
	const skills = [
		'JavaScript (ES6)',
		'React',
		'Node.Js',
		'HTML & (S)CSS',
		'WordPress',
		'Angular',
	];
	const tools = [
		'JavaScript (ES6)',
		'React',
		'Node.Js',
		'HTML & (S)CSS',
		'WordPress',
		'Angular',
	];
	return (
		<StyledAboutSection id="about">
			<h2 className="numbered_heading">
				<span>01.</span> About Me
			</h2>

			<div className="inner">
				<StyledText>
					<div>
						<p>
							Hi, I am Mosae Litsoane, I am a software developer. I build custom
							web application and websites. I enjoy learning new technologies
							and improving my skills
						</p>
						<p>
							These are some of the languages, tools and frameworks I work with:
						</p>
					</div>
					<ul className="skills-list">
						<h3>Skills</h3>
						{skills && skills.map((skills, i) => <li key={i}>{skills}</li>)}
					</ul>
				</StyledText>
				{/* end of styled text */}
				{/* start of styled pic */}
				<div className="wrapper">
					<img src="#" alt="Mosae" />
				</div>
			</div>
		</StyledAboutSection>
	);
}

export default About;
