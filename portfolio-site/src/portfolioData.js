import alan from './images/alan-ai-bot.png';
import amazon from './images/amazon-clone.png';
import gameOfLife from './images/game-of-life.png';
import ticTac from './images/tick-tac-toe.png';
import urlShortner from './images/urlShortner.png';
import covid from './images/covid-tracker.png';
import bridges from './images/bridges.png';

export const portfolioData = [
	{
		name: `Url Shortner`,
		image: `${urlShortner}`,
		video: ``,
		description: {
			subtitle:
				'This is a URL Shortner API application where a user can input any valid url and is returned a shortned url',
			roles: [
				{
					role: '- Built front end layout',
				},
				{
					role: '- Users can input valid urls, if not a warning will show',
				},
				{
					role: '- Users can click a button to copy the returned url',
				},
			],
		},

		tech_used: {
			frontend: 'React JS | JavaScript | Url API | SASS.',
			backend: 'Node JS | Express | PostgreSQL | knex JS | Vercel.',
		},

		github: 'https://github.com/Mosae/url-shortner',
		site: 'https://url-shortner.vercel.app/',
	},
	{
		name: 'Alan AI Chat Bot',
		image: `${alan}`,
		video: ``,
		description: {
			subtitle:
				'Alan AI Project uses a news api and displays it using voice commands. This project helped improve my API & front end skills',
			roles: [
				{
					role: '- Created backend commands for the API.',
				},
				{
					role: '- Connected front end to API',
				},
				{
					role: '- Voice capabilities and displays returned data in cards',
				},
				{
					role: '- Deployed Responsive design',
				},
			],
		},

		tech_used: {
			frontend: 'React.js | JavaScript | News API ',
			backend: 'Alan AI | News API | Github | Vercel ',
		},

		github: 'https://github.com/Mosae/alan-ai-news-reader-app',
		site: 'https://alan-ai-news-reader-app-kqjjc34b8.vercel.app/',
	},
	{
		name: 'Covid Tracker',
		image: `${covid}`,
		video: ``,
		description: {
			subtitle:
				'A API based web application that displays covid data based on selected country',
			roles: [
				{
					role: '- Implemented the covid API',
				},
				{
					role:
						'- Search functionality and returns stats for the chosen country',
				},
				{
					role: '- Used Chart.js to display the data on a line graph',
				},
				{
					role: '- Deployed responsive site to Vercel.',
				},
			],
		},

		tech_used: {
			frontend:
				'React.js | JavaScript | Covid API | Material UI | React-chart-js-2',
			backend: 'Covid API | Github | Vercel ',
		},

		github: 'https://github.com/Mosae/covid-tracker',
		site: 'https://covid-tracker-mu.vercel.app/',
	},
	{
		name: 'Amazon Clone',
		image: `${amazon}`,
		video: ``,
		description: {
			subtitle: 'A simple clone of Amazon site - Still more to be done',
			roles: [
				{
					role: '- User has ability to sign up or log in',
				},
				{
					role: '- User can only add or view products in cart once logged in',
				},
				{
					role: '- Site deployed on Firebase',
				},
			],
		},

		tech_used: {
			frontend: 'React.JS | HTML | CSS | Material UI .',
			backend: 'Firebase.',
		},

		github: 'https://github.com/Mosae/amazonclone',
		site: 'https://clone-8e631.web.app/',
	},
	{
		name: 'Tic-Tac-Toe Angular',
		image: `${ticTac}`,
		video: ``,
		description: {
			subtitle: 'A simple Angular web application - will soon turn to PWA',
			roles: [
				{
					role: '- Used Angular Js to build the fron end application',
				},
				{
					role:
						'- User can see who won the game at the end and can restart by clicking a button',
				},
			],
		},

		tech_used: {
			frontend: 'Angular JS | TypeScript | SASS ',
			backend: 'Vercel',
		},

		github: 'https://github.com/Mosae/angular-tic-tac-toe',
		site: 'https://angular-tic-tac-toe-azure.vercel.app/',
	},
	{
		name: 'Bridges to Prosperity',
		image: `${bridges}`,
		video: ``,
		description: {
			subtitle:
				'Bridges to Prosperity is a United States-based nonprofit organization that partners with local governments to connect their rural last mile via pedestrian bridges. Bridges to Prosperity is based in the Denver, Colorado, area with staff around the world.',
			roles: [
				{
					role:
						'- Collaborated remotely with a team of 5 Developers, 1 UI Designer, 3 Data Scientists and a project leader.',
				},
				{
					role:
						'- Built back end CRUD operations that connected to the front end. This allows the end user to modify details about the bridge if they have valid credentials',
				},
				{
					role:
						'- Created models with 3 helper functions. Add, Update, Remove functions. ',
				},
				{
					role:
						'- Created routes that use helper funcions to perform CRUD operations on the data.',
				},
				{
					role: '- Created middleware that uses two functions for validation',
				},
				{
					role: '-Created router tests',
				},
			],
		},

		tech_used: {
			frontend:
				'React.JS | LESS | Ant Design | Redux | Mapbox API | Okta | Figma',
			backend: 'Node.JS | Express | Swagger-jsdoc | Jest | PostgreSQL | knex',
		},

		github:
			'https://github.com/Lambda-School-Labs/Labs25-Bridges_to_Prosperity-TeamA-be',
		site: 'https://main.dvxfvrn3mdjg1.amplifyapp.com/',
	},
	{
		name: 'Conways Game of Life',
		image: `${gameOfLife}`,
		video: ``,
		description: {
			subtitle:
				'Conways Game of Life is a game with no players. Each round of the simulation examines the current state of the grid, and then produces an entirely new grid consisting of the old state. Rules are if a cell has 2 or 3 neighbours, it remains alive, otherwise it dies, or if the cell is dead and has exactly 3 neighbours, then it comes to life, otherwise it remians dead.',
			roles: [
				{
					role: '- Designed and built Landing page.',
				},
				{
					role:
						'- Created Algorithm to create cell grids and check its sides for live or dead cells.',
				},
			],
		},

		tech_used: {
			frontend: 'React JS | SASS | Material UI ',
			backend: '',
		},

		github: 'https://github.com/Mosae/gameoflife/',
		site: 'https://gameoflife-rho.vercel.app/',
	},
];
