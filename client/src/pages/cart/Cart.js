import React, { useContext } from 'react';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

import './cart.css';
export default function Cart() {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); 
  const Navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) =>{ 
            if(cartItems[product.id] !== 0)
            {
              return <CartItem data={product}/>
            }
        })}
      </div>

       {totalAmount > 0 ?  (<div className='checkout'>
          <h1><b> Subtotal :  ₹{totalAmount}</b></h1>
          <button onClick={() => Navigate('/home')}> Continue Shopping</button>
          <NavLink to='/payment'><button> Checkout</button></NavLink>
        </div>) : (<h3 style={{marginTop : '50px'}}>Your Cart is Empty</h3>)} 
    </div>
  )
}
