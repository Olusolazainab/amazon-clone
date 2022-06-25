import React, { useContext} from 'react';
import './Header.css';
import { BiSearch } from 'react-icons/bi';
import { IoBasket } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getAuth } from 'firebase/auth';
import {init} from './Login'

const auth = getAuth()
function Header() {
	const[{basket, user}, dispatch] = useStateValue()

	const handleAuthentication = ()=>{
		if(user){
		auth.signOut();	
		}
	}

	return (
		<div className='header'>
			
			<Link to='/'>
				<img
					className='header-logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='logo'
				/>
			</Link>
			<div className='header-search'>
				<input className='header-searchInput' type='text' />
				<BiSearch className='header-searchIcon' />
			</div>
			<div className='header-nav'>
				<Link to={!user && '/login'}>
					<div onClick={handleAuthentication} className='header-option'>
						<span className='header-optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
						<span className='header-optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
				<div className='header-option'>
					<span className='header-optionLineOne'>Your</span>
					<span className='header-optionLineTwo'>Prime</span>
				</div>

<Link to='./order'	>			
				<div className='header-option'>
					<span className='header-optionLineOne'>Returns</span>
					<span className='header-optionLineTwo'>Order</span>
				</div>
				</Link>
	
				<Link to='/checkout'>
					<div className='header-optionBasket'>
						<IoBasket className='header-basketIcon' />
						<span className='header-optionLineTwo header-basketCount'>
							{basket?.length} <span className='cart'>cart</span>
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
