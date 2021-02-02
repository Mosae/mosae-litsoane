import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import MobileNavBar from './MobileNavBar';
function Main() {
	return (
		<div>
			<Navbar />
			<MobileNavBar />
			<Header />
			<About />
			<GetInTouch />
			<Footer />
		</div>
	);
}

export default Main;
