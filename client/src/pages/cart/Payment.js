import React ,{useContext}from 'react'
import Googlepaybutton from '@google-pay/button-react';
import './Payment.css';
import { ShopContext } from '../../context/shop-context';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
export default function Payment() {
    const {cartItems,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount(); 
  return (
    <div>
      <div className='paymentmain'> 
      <p><b>Payment with Google Pay</b></p>
      <p><b>Total Amount :  ₹{totalAmount}</b></p>
      <div className='paymentdiv'>
     <Googlepaybutton
    environment='TEST'
    paymentRequest={{
      apiVersion:2,
      apiVersionMinor:0,
      allowedPaymentMethods:
      [{
        type:'CARD',
        parameters:{
          allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["MASTERCARD","VISA"],
        },
        tokenizationSpecification:{
          type:'PAYMENT_GATEWAY',
          parameters:{
            gateway:"example",
            gatewayMerchandId:'exampleGatewayMechandId',
          }
        }
        

      }],
      merchantInfo:{
        merchantId:"12345678901234567890",
        merchantName:"Demo Merchand"
      },
      transactionInfo:{
        totalPriceStatus:"FINAL",
        totalPriceLabel:"Total",
        totalPrice:"1",
        currencyCode:"USD",
        countryCode:"US"
      },
      shippingAddressRequired:true,
      callbackIntents:["PAYMENT_AUTHORIZATION"]
    }}     
    onLoadPaymentData={paymentRequest =>{
      console.log('success',paymentRequest);
    }}
    onPaymentAuthorized={paymentData =>{
      console.log('Payment Authorised success',paymentData)
      return{transactionState : 'success'}
    }}
    existingPaymentMethodRequired="false"
    buttonColor="black"
    buttonType='Buy'
     />
     </div>
        <div className='paymentcart'>
         <NavLink to='/cart'><button className='btn btn-primary' >Back to Cart</button></NavLink>
        </div>
    </div>
  </div>
  )
}
