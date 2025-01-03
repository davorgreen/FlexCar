//hooks
import { useEffect, useRef, useState } from 'react';
//icons
import { FaSearch } from 'react-icons/fa';
//axios
import axios from 'axios';
//component
import CarCardComponent from './CarCardComponent';

interface Car {
	city: string;
	color: string;
	description: string;
	//id: number;
	image: string;
	//image_thumb: string;
	//latitude: number;
	//longitude: number;
	make_id: string;
	model: string;
	postal: string | number;
	price: number;
	seller: string;
	seller_name: string;
	state: string;
	vin: string;
	year: number;
}

const CarCatalogue: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const [filter, setFilter] = useState<string[]>([]);
	const [data, setData] = useState<Car[]>([]);
	const [selectedCar, setSelecetedCar] = useState<Car[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const makeIds = [...new Set(data.map((car) => car.make_id))];
	console.log(makeIds);

	useEffect(() => {
		const fetchCarsData = async () => {
			try {
				const response = await axios.get<Car[]>(
					'https://example-data.draftbit.com/cars?_limit=240'
				);
				setData(response.data);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		inputRef.current?.scrollIntoView({ behavior: 'smooth' });
		fetchCarsData();
	}, []);

	useEffect(() => {
		const filteredCars =
			query === ''
				? makeIds
				: makeIds.filter((car) =>
						car
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, ''))
				  );
		setFilter(filteredCars);
	}, [query]);

	useEffect(() => {
		const viewSelectedCars =
			query.trim() === ''
				? []
				: data.filter((car) =>
						car.make_id
							.toLowerCase()
							.includes(query.trim().toLowerCase())
				  );

		setSelecetedCar(viewSelectedCars);
	}, [query]);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className='mt-12'>
			<div className='text-center mb-8'>
				<h1 className='text-4xl font-bold text-red-600'>Catalogue</h1>
				<p className='text-gray-500 font-semibold'>
					Discover the vehicle that suits your style
				</p>
			</div>

			<div className='flex flex-col items-center'>
				<form
					onSubmit={handleSearch}
					className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
					<div className='flex items-center w-full'>
						<input
							ref={inputRef}
							type='text'
							placeholder='Search by car make...'
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
				{query && (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{selectedCar.map((car, index) => {
							return <CarCardComponent key={index} car={car} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default CarCatalogue;
