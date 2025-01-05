import {
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import FavoritesPage from './pages/FavoritesPage';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
				<ToastContainer />
			</Router>
		</div>
	);
}

export default App;
