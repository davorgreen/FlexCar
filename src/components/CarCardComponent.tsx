import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/slices/FavoritesSlice';
import { useNavigate } from 'react-router';

interface Car {
	city: string;
	color: string;
	description: string;
	id: number;
	image: string;
	//image_thumb: string;
	//latitude: number;
	//longitude: number;
	make_id: string;
	model: string;
	postal: string | number;
	price: number;
	seller: string;
	//seller_name: string;
	state: string;
	vin: string;
	year: number;
}

interface CarCardComponentProps {
	car: Car;
}

const CarCardComponent: React.FC<CarCardComponentProps> = ({
	car,
}) => {
	const {
		city,
		color,
		description,
		id,
		image,
		//image_thumb,
		//latitude,
		//longitude,
		make_id,
		model,
		price,
		seller,
		state,
		year,
		vin,
	} = car;

	const [openModal, setOpenModal] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleAddToFavorites = (id) => {
		dispatch(addToFavorites(id));
		navigate('favorites');
	};
	return (
		<div className='w-80 h-96 mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg mt-6'>
			<div className='flex flex-col h-full'>
				{/* img */}
				<img
					src={image}
					alt={`${make_id} ${model}`}
					className='w-full h-48 object-cover rounded-t-lg'
				/>
				{/* content */}
				<div className='p-4 flex flex-col flex-grow'>
					<div className='flex-grow'>
						<h3 className='text-lg font-bold text-gray-800 truncate'>
							{make_id} {model} ({year})
						</h3>
						<p className='font-semibold text-gray-700'>
							${price.toLocaleString()}
						</p>
					</div>
					{/* buttons */}
					<div className='mt-4 flex flex-col gap-2'>
						<button
							className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition'
							onClick={() => setOpenModal(true)}>
							View Details
						</button>
						<button
							className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition'
							onClick={() => handleAddToFavorites(id)}>
							Add To Favorites
						</button>
					</div>
				</div>
			</div>

			{/* modal */}
			{openModal && (
				<div className='fixed top-0 right-0 bottom-0 left-0 bg-white'>
					<div className='flex flex-col'>
						{/* close button */}
						<button
							onClick={() => setOpenModal(false)}
							className=' text-gray-400 hover:text-red-700 transition'>
							<IoIosClose size={40} />
						</button>

						{/* title */}
						<h2 className='text-3xl font-extrabold text-red-600 text-center'>
							Car Details
						</h2>
						{/* content */}
						<div className='flex flex-col justify-start'>
							<p className='text-gray-600'>
								<span className='font-semibold'>
									Location: {city}, {state}
								</span>
							</p>
							<p className='text-gray-600'>
								<span className='font-semibold'>Color: {color}</span>
							</p>
							<p className='text-gray-600'>
								<span className='font-semibold underline'>
									Seller: {seller}
								</span>
							</p>
							<p className='text-black'>
								<span className='font-semibold text-sm text-wrap'>
									Description: {description.slice(0, 100)}
								</span>
							</p>
							<p className='text-black'>
								<span className='font-bold'>Year: {year}</span>
							</p>
							<p className='text-black'>
								<span className='font-bold'>Make:{make_id}</span>
							</p>
							<p className='text-black'>
								<span className='font-bold'>Model: {model}</span>
							</p>
							<p className='text-green-800'>
								<span className='font-bold'>
									Price: ${price.toLocaleString()}
								</span>
							</p>
							<p className='text-gray-800'>
								<span className='font-semibold'>VIN:</span> {vin}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CarCardComponent;
