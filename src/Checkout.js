import React, { useContext } from 'react';
import './Checkout.css';
import CheckOutProduct from './CheckOutProduct';
import ProductContext from './ProductContext';
import Subtotal from './Subtotal';

const Checkout = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className='checkout'>
			<div className='checkout-left'>
				<img
					className='checkout-ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt='pix'
				/>

				<div>
					<h2 className='checkout-title'>Your Shopping Basket</h2>
					{products.map(product => (
						<CheckOutProduct 
						id={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
						rating={product.rating}
						/>
					))}
				</div>
			</div>

			<div className='checkout-right'>
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
