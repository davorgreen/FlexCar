//hooks
import { useEffect } from 'react';
//components
import Footer from '../components/Footer';
import Header from '../components/Header';
//redux
import { setData } from '../redux/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
//axios
import axios from 'axios';
//icons
import { FaRegTrashCan } from 'react-icons/fa6';
import { removeFromFavorites } from '../redux/slices/FavoritesSlice';
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
	seller_name: string;
	state: string;
	vin: string;
	year: number;
}

interface RootState {
	userStore: {
		data: Car[];
	};
	favoritesStore: {
		favoritesProduct: string[];
	};
}

const FavoritesPage: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { favoritesProduct } = useSelector(
		(state: RootState) => state.favoritesStore
	);
	const { data } = useSelector((state: RootState) => state.userStore);
	const favorites: Car[] = data.filter((item) =>
		favoritesProduct.some((fav) => fav === item.id)
	);

	//get data
	useEffect(() => {
		const fetchCarsData = async () => {
			try {
				const response = await axios.get<Car[]>(
					'https://example-data.draftbit.com/cars?_limit=240'
				);
				dispatch(setData(response.data));
			} catch (error) {
				console.log(error);
			}
		};

		fetchCarsData();
	}, [dispatch]);

	//remove from favorites
	const removeFavorites = (id: string): void => {
		dispatch(removeFromFavorites(id));
		navigate('/');
	};

	return (
		<div>
			<Header />
			<div className='p-4'>
				<h1 className='text-2xl text-center font-semibold mb-6'>
					Your Favorites
				</h1>
				{favorites.length > 0 ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						{favorites.map((car: Car) => (
							<div
								key={car.id}
								className='bg-white rounded-lg shadow-md overflow-hidden'>
								<img
									src={car.image}
									alt={car.model}
									className='w-full h-48 object-cover'
								/>
								<div className='p-4 flex-col'>
									<h2 className='text-xl text-center font-semibold mb-2'>
										{car.make_id}
									</h2>
									<h2 className='text-xl text-center font-semibold mb-2'>
										{car.model}
									</h2>
									<div className='flex justify-between items-center'>
										<span className='text-xl font-semibold text-green-500'>
											${car.price}
										</span>
										<span className='text-base text-gray-600'>
											{car.year}
										</span>
									</div>
									<div className='flex flex-col  items-center mt-4'>
										<span className='text-md text-gray-500'>
											{car.city}, {car.state}
										</span>
										<button
											onClick={() => removeFavorites(car.id)}
											className='text-gay-600 text-lg px-2 py-1 mt-2 rounded-md bg-gray-300 hover:bg-gray-400 font-semibold flex items-center gap-2 '>
											<FaRegTrashCan size={20} />
											Remove From Favorites
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className='text-center text-lg text-gray-500'>
						No favorite cars found.
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default FavoritesPage;
