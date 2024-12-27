//hooks
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//images
import image1 from '/src/images/FlexCar.png';
//supabase
import supabase from '../auth_supabase/supabase';
//toastify
import { toast } from 'react-toastify';

const Register: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const navigate = useNavigate();

	//register
	const handleRegister = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		setError('');
		//setLoading(true);
		const { user, error } = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			setError(error.message);
		} else {
			//setLoading(false);
			toast.success('User registered successfully. Please log in.');
			navigate('/login');
		}
	};

	return (
		<div className='flex justify-center items-center h-screen bg-gray-100'>
			<div className='max-w-sm w-full bg-white p-8 rounded-lg shadow-lg'>
				<Link to={'/login'} className='flex justify-end mb-2'>
					<p className='underline text-md font-semibold text-red-300'>
						I already have an account
					</p>
				</Link>
				<div className='flex flex-col items-center justify-center mb-4'>
					<h2 className='text-2xl font-bold text-center text-red-500 mb-6'>
						Register
					</h2>
					<img src={image1} alt='' className='h-20 w-42' />
				</div>

				<form onSubmit={handleRegister}>
					<input
						type='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-3 border border-blue-500 rounded-md mb-4 focus:outline-none'
					/>

					<input
						type='password'
						placeholder='Enter your password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full p-3 border border-blue-500 rounded-md mb-4 focus:outline-none'
					/>

					<button
						type='submit'
						className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-md ${
							loading ? 'opacity-50' : ''
						}`}
						disabled={loading}>
						{loading ? 'Registering...' : 'Register'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
