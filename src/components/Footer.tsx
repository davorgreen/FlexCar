import image from '../images/FlexCar.png';
import { footerLinks } from '../constants/data';
import { Link } from 'react-router';

const Footer: React.FC = () => {
	return (
		<div className='bg-sky-100 shadow-md rounded-lg w-screen mt-5'>
			<div className='flex flex-col sm:flex-row justify-between mr-10 items-start sm:items-center gap-6 p-6 border-t border-gray-300'>
				<div className='flex flex-col items-start gap-4'>
					<Link to={'/'}>
						<img
							src={image}
							alt='logo'
							className='w-32 h-16 md:w-40 md:h-20 object-contain'
						/>
					</Link>
					<p className='text-sm text-gray-700'>
						FlexCar 2025 <br />
						All Rights Reserved &copy;
					</p>
				</div>
				<div className='flex flex-wrap gap-8'>
					{footerLinks.map((item) => (
						<div key={item.title} className='text-gray-700'>
							<h3 className='font-semibold text-lg mb-2'>
								{item.title}
							</h3>
							<div className='flex flex-col gap-3'>
								{item.links.map((link) => (
									<Link
										to={link.url}
										key={link.title}
										className='text-gray-600 hover:text-gray-900 transition-all duration-200'>
										{link.title}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-between items-center mt-6 border-t border-gray-300 px-6 py-4'>
				<p className='text-gray-600 text-sm'>
					@2025 FlexCar. All rights reserved
				</p>
				<div className='flex gap-4'>
					<Link
						to='/'
						className='text-gray-600 hover:text-gray-900 transition-all duration-200'>
						Privacy & Policy
					</Link>
					<Link
						to='/'
						className='text-gray-600 hover:text-gray-900 transition-all duration-200'>
						Terms & Condition
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
