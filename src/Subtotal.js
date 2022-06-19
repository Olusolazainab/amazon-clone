import React, { useContext } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import ProductContext from './ProductContext'

const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0 )

const Subtotal = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(value) => (
          <>
          <p>
              Subtotal ({products.length} items): <strong>{value}</strong>
          </p>
          <small className='subtotal-gift'>
              <input type='checkbox' />This order contains a gift
          </small>
          </>
      )}
      decimalScale={2}
      value={getBasketTotal(products)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'} 
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
