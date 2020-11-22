import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'


function checkout() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{basket}, dispatch]= useStateValue();

    

    return (
        <div className="checkout__main">
        <div className="checkout">
            <div className="checkout__left">
                <h1 className="checkout__title">
                Shopping Cart
            </h1>
            
            {basket.map(item =>(
                <CheckoutProduct
                id= {item.id}
                title= {item.title}
                image={item.image}
                price= {item.price}
                rating= {item.rating}
                />
            ))}
            

            </div>
            
                
            
        </div>
        <div className="checkout__right">
                    <Subtotal/>
            </div>
        </div>
        
    )
}

export default checkout
