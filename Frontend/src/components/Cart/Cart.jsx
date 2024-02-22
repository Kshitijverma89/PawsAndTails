import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, updateCartItem } from '../../State/Cart/Action';
import { AuthContext } from '../../context/AuthContext';


const Cart = () => {

  const navigate = useNavigate();
  const disptach = useDispatch();
  const {cart} = useSelector(store=>store);
  // console.log(cart.cartItems[0]?.totalAmount);


  const handleCheckout = () => {
    navigate('checkout?step=2')
  }

  useEffect(()=>{
    disptach(getCart());
    console.log(cart)
  },[updateCartItem])

   const calculateTotal = () => {

    return Math.ceil(cart.cartItems.reduce((total, item) => total + item?.product.price * item?.quantity, 0)*100)/100;
  };
   const calculateDiscount = () => {

    return Math.ceil(cart.cartItems.reduce((total, item) => 0.05*(total + item?.product.price * item?.quantity), 0)*100)/100;
  };


  return (
    <div>

       <div className='lg:grid grid-cols-3 mt-5 mb-5 lg:px-16 relative'>
        <div className='col-span-2'>
          {cart?.cartItems?.map((item)=><CartItem item ={item}/>)}
        </div>

        <div className='px-3 sticky top-0 h-[100vh] lg:mt-0'>
          <div className='border rounded-md'>
            <p className='uppercase font-bold opacity-60  pb-2 pt-2 m-0 px-2'> Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className="flex justify-between pt-3 px-2 text-black">
                <span>Price</span>
                <span> ₹ {calculateTotal()}</span>
              </div>
              <div className="flex justify-between pt-3 px-2">
                <span>Discount</span>
                <span className="text-green-600">₹ {(Math.ceil(0.05*cart.cartItems[0]?.totalAmount*100))/100}</span>
              </div>
              <div className="flex justify-between pt-3 px-2">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 px-2 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹ {(Math.ceil((calculateTotal()-calculateDiscount())*100)/100)}</span>
              </div>
            </div>
            <Button onClick={handleCheckout}variant="container" className ='w-full mt-5' sx={{px:"2.5rem", py:"0.7em", bgcolor:"#9155fd"}}>Checkout</Button>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Cart