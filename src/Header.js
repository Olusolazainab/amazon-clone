import React, { useContext } from 'react';
import './Header.css';
import { BiSearch } from 'react-icons/bi';
import { IoBasket } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ProductContext from './ProductContext';

function Header() {
	const { products } = useContext(ProductContext);

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
				<Link to='/login'>
					<div className='header-option'>
						<span className='header-optionLineOne'>Hello Guest</span>
						<span className='header-optionLineTwo'>Sign In</span>
					</div>
				</Link>
				<div className='header-option'>
					<span className='header-optionLineOne'>Returns</span>
					<span className='header-optionLineTwo'>Order</span>
				</div>

				<div className='header-option'>
					<span className='header-optionLineOne'>Your</span>
					<span className='header-optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header-optionBasket'>
						<IoBasket className='header-basketIcon' />
						<span className='header-optionLineTwo header-basketCount'>
							{products.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
