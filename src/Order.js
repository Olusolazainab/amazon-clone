import React from 'react'
import './Order.css'
import moment from "moment";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Order() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className='order-container'>
        <div className='order'>
            <h2> Your Order(s)</h2>
            <p>{moment().format('YYYY-MM-DD')}</p>
            
            {basket?.map(item => (
                <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
           
           </div>
        </div>
    )
}

export default Order
