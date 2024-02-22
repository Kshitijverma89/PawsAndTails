import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { Button } from '@mui/base';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeCartItem, removeItemToCart, updateCartItem } from '../../State/Cart/Action';
import { getOrderById } from '../../State/Order/Action';

const CartItem = (item) => {
    // console.log(item)
    // console.log(item?.item?.product.productName)
    const dispatch = useDispatch();
    const calculateDiscount = () => {

        return Math.ceil((item?.item?.product.price * 0.95) * 100) / 100;
    };

    const updateQuantity = async (num) => {
        // console.log(item?.item.quantity+num,item?.item.cartItemId)
        // if(item?.item.quantity>1 && num==-1 ){
            const data = {data: {quantity: item?.item.quantity+num}, cartItemId: item?.item.cartItemId}
            dispatch(updateCartItem(data));
        // }   
    }

    const removeItem = async () => {
        console.log(item.item.id)
        if(item?.item.cartItemId!==undefined){
        console.log(item)
            dispatch(removeCartItem(item?.item.cartItemId));}
        else if(item?.item.id !==undefined){
        console.log(item)
            dispatch(removeCartItem(item?.item.id));}
    };

    return (
        <>
            <div className='p-3 shadow-lg border rounded-md'>
                <div className="flex items-center">
                    <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                        <img className="w-full h-full object-cover object-top" src={item?.item?.product.imageLink} alt='' />
                    </div>

                    <div className="ml-5 space-y-1 mt-3">
                        <p className="font-bold text-lg ">{item?.item?.product?.productName}</p>
                        <p className="opacity-70 text-sm">{item?.item?.product?.category}</p>
                        <p className="opacity-70 mt-2">{item?.item?.product.breed}</p>
                        <div className="flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 pt-6">
                            <p className="font-semibold text-md">{item?.item?.product?.description.color}</p>
                            <p className="opacity-50 line-through text-sm">₹ {item?.item?.product?.price}</p>
                            <p className="text-green-600 font-semibold text-sm">₹ {calculateDiscount()}</p>

                        </div>

                    </div>


                </div>
                <div className="lg-flex items-center lg:space-x=10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton disabled={item?.item?.quantity<=1} onClick={()=>updateQuantity(-1)}>
                            <RemoveCircleIcon />
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">{item?.item?.quantity}</span>
                        <IconButton sx={{ color: "RGB(145 85 253)" }} onClick={()=>updateQuantity(1)}>
                            <AddCircleIcon />
                        </IconButton>

                        <div>
                            <Button onClick={removeItem} sx={{
                                color:
                                    "RGB(145 85 253)"
                            }}>Remove</Button>
                        </div>
                    </div>



                </div>
            </div>
        </>


    )
}
export default CartItem 
