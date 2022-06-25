import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import './Header.css';
import Home from './Home';
import Checkout from './Checkout';
import { ProductContextProvider } from './ProductContext';
import Login from './Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { auth } from './Login';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Order from './Order' 
import { Data } from './components/Data';



const promise = loadStripe(
	'pk_test_51LD2uOHl63LXzY9VfLWYm4n4EtLuNfendFY4LhWZc5vJ4Mx0QPfBcvVb6I03R5JY9cUHlNPrP4LGde2OVI9TiRs300CBIwdsa9'
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (authUser) => {
			console.log('the user', authUser);

			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<div className='app'>
			<ProductContextProvider>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/order'
						element={
							<>
								<Header />
								<Order />
							</>
						}
					/>

					<Route
						path='/'
						element={
							<>
								<Header />
								<Home slides={Data} />
							</>
						}
					/>
					
					<Route
						path='payment'
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
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
