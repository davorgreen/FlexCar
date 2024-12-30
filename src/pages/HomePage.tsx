import React from 'react';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import CarCatalogue from '../components/CarCatalogue';

const HomePage: React.FC = () => {
	return (
		<div>
			<Header />
			<Main />
			<CarCatalogue />
			<Footer />
		</div>
	);
};

export default HomePage;
