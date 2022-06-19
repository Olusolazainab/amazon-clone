// import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import './Header.css';
import Home from './Home';
import Checkout from './Checkout';
import { ProductContextProvider } from './ProductContext';
import Login from './Login';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
// import AuthContext, { AuthContextProvider } from './AuthContext';

function App() {
	// const {set_user} = useContext(AuthContext)
	// useEffect(() => {
	// 	const auth = getAuth();
	// 	onAuthStateChanged(auth, (authUser) => {
	// 		console.log('the user', authUser);
	// 		if (authUser) {
	// 			set_user()
	// 		} else {

	// 		}
	// 	});
	// }, []);
	return (
		<div className='app'>
			<ProductContextProvider>
				
				<Routes>
					<Route path='/login' element={<Login />} />

					<Route
						path='/'
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path='checkout'
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
				</Routes>
				
			</ProductContextProvider>
		</div>
	);
}

export default App;
