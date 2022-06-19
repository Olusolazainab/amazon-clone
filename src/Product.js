import React, { useContext } from 'react';
import './Product.css';
import ProductContext from './ProductContext';


const Product = ({id, title, image, price, rating}) => {
	const  {addToBasket}  = useContext(ProductContext);

	return (
		<div className='product'>
			<div className='product-info'>
				<p>{title}</p>
				<p className='product-price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product-rating'>
					{Array(rating)
					.fill()
					.map((_, i) => (
						<p>⭐</p>
					))}
				</div>
			</div> 
			<img
				src={image} alt='product'
			/>
            <button onClick={()=> addToBasket(id, title, image, price, rating)}>Add to basket</button>
		</div>
	);
};

export default Product;
