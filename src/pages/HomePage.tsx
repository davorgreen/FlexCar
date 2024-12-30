import React from 'react';
//images
import image from '../images/FlexCar.png';
//components
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
	return (
		<div>
			<Header />
			<div className='flex flex-col items-center justify-center p-6 space-y-4 bg-[url("https://t3.ftcdn.net/jpg/02/92/57/14/360_F_292571491_R01YTzyvuceDL3UujKe7z38awUeUwtnD.jpg")] bg-cover bg-center bg-no-repeat h-screen'>
				<h3 className='text-xl md:text-2xl font-bold text-gray-800 text-center'>
					Looking for a vehicle?{' '}
					<span className='text-red-500'>
						You’re at the right place.
					</span>
				</h3>
				<p className='text-sm md:text-base font-semibold text-gray-700 text-center'>
					Connecting you to the best experiences at the best prices.
				</p>
				<div className='w-full h-40  flex items-center justify-center'>
					<img src={image} alt='logo' />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
