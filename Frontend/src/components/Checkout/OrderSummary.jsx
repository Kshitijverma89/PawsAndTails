import React from 'react'
import AddressCard from '../Address/AddressCard'
import CartItem from '../Cart/CartItem';
import { Button, Divider } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../State/Order/Action';
import { createPayment } from '../../State/Payment/Action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store=>store);
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id");

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

  const handleCheckout = () =>{
    dispatch(createPayment(orderId))
  }

  console.log(order)

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order?.order?.shippingAddress}/>
      </div>
      <div className='lg:grid grid-cols-3 mt-5 mb-5 relative'>
        <div className='col-span-2'>
          {order?.order?.orderItem.map((item)=><CartItem item={item}/>)}
        </div>

        <div className='px-3 sticky top-0 h-[100vh] lg:mt-0'>
          <div className='border rounded-md'>
            <p className='uppercase font-bold opacity-60  pb-2 pt-2 m-0 px-2'> Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className="flex justify-between pt-3 px-2 text-black">
                <span>Price</span>
                <span>{order?.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 px-2">
                <span>Discount</span>
                <span className="text-green-600">-₹{(Math.ceil(order?.order?.totalPrice-order?.order?.totalDiscountPrice)*100)/100}</span>
              </div>
              <div className="flex justify-between pt-3 px-2">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 px-2 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{(Math.ceil(order?.order?.totalDiscountPrice*100))/100}</span>
              </div>
            </div>
            <Button variant="container" className ='w-full mt-5' sx={{px:"2.5rem", py:"0.7em", bgcolor:"#9155fd"}} onClick={handleCheckout}>Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary