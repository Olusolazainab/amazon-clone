import React, { useContext } from 'react'
import './CheckoutProduct.css'
import ProductContext from './ProductContext'

const CheckOutProduct = ({id, image, title, price, rating}) => {
    const  {removeFromBasket} = useContext(ProductContext)
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct-image' src={image} alt='photoo' />
    <div className='checkoutProduct-info'>
    <p className='checkoutProduct-title'>{title}</p>
    <p className='checkouProduct-price'><small>$</small><strong>{price}</strong></p>
    <div className='checkoutProduct-rating'>
        {Array(rating).fill().map((_,i) => (
            <p>⭐</p>
        ))}
    </div>
    <button onClick={()=> removeFromBasket(id)}>Remove from Basket</button>
    </div>
    </div>
  )
}

export default CheckOutProduct
