import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

interface Car {
	city: string;
	color: string;
	description: string;
	id: number;
	image: string;
	image_thumb: string;
	latitude: number;
	longitude: number;
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
		image_thumb,
		latitude,
		longitude,
		make_id,
		model,
		price,
		seller,
		state,
		year,
		vin,
	} = car;

	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<div className='w-full max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg mt-6'>
			<div className='flex flex-col gap-6'>
				<img
					src={image}
					alt={`${make_id} ${model}`}
					className='w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:h-auto'
				/>
				<div className='p-4 flex flex-col justify-between'>
					<div>
						<h3 className='text-lg font-bold text-gray-800'>
							{make_id} {model} ({year})
						</h3>
						<p className='font-semibold text-gray-700'>
							${price.toLocaleString()}
						</p>
					</div>

					<div className='mt-6'>
						<button
							className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition'
							onClick={() => setOpenModal(true)}>
							View Details
						</button>
					</div>
				</div>
			</div>
			{openModal && (
				<div className='fixed top-0 right-0 bottom-0 left-0 bg-white'>
					<div className='flex flex-col'>
						{/* close*/}
						<button
							onClick={() => setOpenModal(false)}
							className=' text-gray-400 hover:text-red-700 transition'>
							<IoIosClose size={40} />
						</button>
						{/* title */}
						<h2 className='text-3xl font-extrabold text-red-600 text-center mb-4'>
							Car Details
						</h2>
						{/* content */}
						<div className='flex flex-col justify-start gap-2 '>
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

							<p className='text-black mb-2 mt-2'>
								<span className='font-semibold text-sm text-wrap'>
									Description: {description}
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
							<p className='text-green-800 mt-2'>
								<span className='font-bold'>
									Price: ${price.toLocaleString()}
								</span>
							</p>
							<p className='text-gray-800 mt-4'>
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
