import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate}  from 'react-router-dom';
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword}  from 'firebase/auth'


import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
	apiKey: 'AIzaSyBjOMAdugbPAj3Jk3HvasykEap5sn1HJ9Q',
	authDomain: 'clone-1406d.firebaseapp.com',
	projectId: 'clone-1406d',
	storageBucket: 'clone-1406d.appspot.com',
	messagingSenderId: '887618875278',
	appId: '1:887618875278:web:f43340c7123c5d374cfedf',
	measurementId: 'G-0XEEHVK5N7',
};

 export const init = initializeApp(firebaseConfig);

  export const db = getFirestore();
  const auth = getAuth();



const Login = () => {
    const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const auth = getAuth();

	const signIn = (e) => {
		e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
                if(cred) {
					navigate('/')
                  }
	});
	}
	const register = (e) => {
		e.preventDefault();
		
			createUserWithEmailAndPassword(auth, email, password)
			.then((cred) => {
                  if(cred) {
					navigate('/')
                  }
			})
			.catch((error) => alert(error.message));
	}

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login-logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
					alt='logo'
				/>
			</Link>

			<div className='login-container'>
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type='submit' onClick={signIn} className='login-signInButton'>
						Sign In 
					</button>
				</form>
				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of the Use
					& Sales. Please see our privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice
				</p>

				<button
					type='submit'
					onClick={register}
					className='login-registerButton'>
					Create Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login