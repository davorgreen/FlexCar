//images
import image1 from '../images/FlexCar.png';
//icons
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
//router
import { Link, useNavigate } from 'react-router-dom';
//toastify
import { toast } from 'react-toastify';
//hooks
import { useEffect, useState } from 'react';
//supabase
import supabase from '../auth_supabase/supabase';

interface SupabaseUser {
	id: string;
	email: string | undefined;
}

const Header: React.FC = () => {
	const [user, setUser] = useState<SupabaseUser | null>(null);
	const navigate = useNavigate();

	const handleSignOutUser = async (): Promise<void> => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) {
				toast.error('Error signing out: ' + error.message);
			} else {
				toast.success('Logout Successfully.');
				navigate('/login');
			}
		} catch (error) {
			toast.error('An unexpected error occurred during sign out.');
		}
	};

	useEffect(() => {
		const fetchUser = async (): Promise<void> => {
			const { data, error } = await supabase.auth.getUser();
			if (error) {
				navigate('/login');
			} else {
				const mappedUser: SupabaseUser = {
					id: data.user.id,
					email: data.user.email,
				};
				setUser(mappedUser);
			}
		};

		fetchUser();
	}, [navigate]);

	console.log(user);
	return (
		<div className='flex flex-wrap gap-4 justify-between items-center p-4 bg-sky-100 shadow-md rounded-lg w-screen'>
			<Link to={'/'}>
				<div className='flex  items-center gap-10'>
					<img
						src={image1}
						alt='logo'
						className='w-32 h-16 md:w-40 md:h-20'
					/>
				</div>
			</Link>
			<div className='flex flex-col sm:flex-row gap-4 items-center'>
				{/* favorites */}
				<Link to={'/favorites'}>
					<button className='flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg font-medium text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 mr-4'>
						<FaRegHeart size={18} className='text-white' />
						Favorites <span>0</span>
					</button>
				</Link>
				<div>
					<h2>{user?.email}</h2>
				</div>
				{/* logout */}
				<button
					onClick={handleSignOutUser}
					className='flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg font-medium text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 mr-4'>
					<FaRegUser size={18} className='text-white' />
					Logout
				</button>
			</div>
		</div>
	);
};

export default Header;
