import { useEffect, useState } from 'react';
//icons
import { FaSearch } from 'react-icons/fa';
import { carTypes } from '../constants/data';

const CarCatalogue: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const [filter, setFilter] = useState<string[]>([]);

	useEffect(() => {
		const filteredCars =
			query === ''
				? carTypes
				: carTypes.filter((car) =>
						car
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, ''))
				  );
		setFilter(filteredCars);
	}, [query]);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className='mt-12'>
			<div className='text-center mb-8'>
				<h1 className='text-4xl font-bold text-red-600'>
					Car Catalogue
				</h1>
				<p className='text-gray-500 font-semibold'>
					Discover the car that suits your style
				</p>
			</div>

			<div className='flex flex-col items-center'>
				<form
					onSubmit={handleSearch}
					className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
					<div className='flex items-center w-full'>
						<input
							type='text'
							placeholder='Search cars...'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className='border border-gray-300 rounded-l-lg p-3 w-full focus:outline-none focus:ring focus:ring-red-300 text-gray-700'
						/>
						<button
							type='submit'
							className='bg-red-500 hover:bg-red-600 text-white px-5 py-5 rounded-r-lg'>
							<FaSearch />
						</button>
					</div>
					{query && (
						<div className='w-full mt-4'>
							{filter.length > 0 ? (
								<ul className='bg-gray-50 border border-gray-300 rounded-lg max-h-40 overflow-y-auto shadow-md'>
									{filter.map((car, index) => (
										<li
											key={index}
											className='p-3 hover:bg-red-100 cursor-pointer text-gray-700'
											onClick={() => setQuery(car)}>
											{car}
										</li>
									))}
								</ul>
							) : (
								<p className='text-red-500 text-center'>
									Car not found!
								</p>
							)}
						</div>
					)}
				</form>
			</div>

			<div className='mt-8 text-center'>
				<p className='text-gray-500'>Custom filter</p>
			</div>
		</div>
	);
};

export default CarCatalogue;
