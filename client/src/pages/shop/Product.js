import { Grid,Box } from '@mui/material';
import React, { useContext, useState } from 'react'
import {ShopContext} from '../../context/shop-context';
import {useDispatch,useSelector} from 'react-redux';
import { badgeActions } from '../../store/badgeSlice';
import './Shop.css'; 
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Product(props) {
   const dispatch = useDispatch();
    const {id,productName,price,ProductImage} = props.datas
    const {addToCart,cartItems} = useContext(ShopContext);
    const [emoji,setEmoji] = useState(false);
    const cartItemAmount = cartItems[id];
    // const dispatch = useDispatch();
    const handleSubmit =() =>{
      addToCart(id)
      dispatch(badgeActions.addtoCart());
    }
  return (
    <>
        <div className='product'>
            <img src={ProductImage}/>
                <p><b>{productName}</b></p>
                <p> ₹{price}</p>
            {/* <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount}) </> } </button> */}
            <div style={{display : 'flex',alignItems:'center'}}>
            <button style={{marginBottom : '5px'}} className='addToCartBttn' onClick={() => handleSubmit(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount}) </> } </button>  
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} color ='default'/>
            </div>
        </div>
        
    </>
  )
}
