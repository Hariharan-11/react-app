
import { AddAlert } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

   
    function pay() {
        if(basket.length===0)
        alert("Empty Cart");
        else
        alert("Successful payment");
      }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="Checkout">{basket?.length} items</Link>
                    )
                </h1>
            </div>

            <div className="payment__container">
                <div className="payment__section">
                
                    <div className ="payment__items">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                            {basket.map(item => (
                                <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                    </div>
                </div>
                </div>

                <div>
                    <h2 className="payment__total">Order total: ₹ {getBasketTotal(basket)}</h2>
                    <h3 className="payment__pay"><button onClick={pay}>Pay now</button></h3>
                </div>
            
        </div>
    )
}

export default Payment
