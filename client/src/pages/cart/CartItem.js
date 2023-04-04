import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './cart.css';
import {useDispatch,useSelector} from 'react-redux';
import { badgeActions } from '../../store/badgeSlice';
export default function CartItem(props) {
  const dispatch = useDispatch();
    const {id,productName,price,ProductImage} = props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);
    const handleSubmit =()=>{
      removeFromCart(id);
      dispatch(badgeActions.removetoCart())
    }
    const handleSubmit2 =()=>{
      addToCart(id)
      dispatch(badgeActions.addtoCart());
    }
  return (
    <div className='cartItem'>
        <img src={ProductImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p> ₹ {price}</p>
            <div className='countHandler'>
            {/* <button onClick={() => removeFromCart(id)}> - </button> */}
            <button onClick={() => handleSubmit()}> - </button>
                <input value={cartItems[id]} onChange ={(e) => updateCartItemCount(Number(e.target.value ),id)} />
            {/* <button onClick={() => addToCart(id)}> + </button> */}
            <button onClick={() => handleSubmit2()}> + </button>

            </div>
        </div>
    </div>
  )
}
