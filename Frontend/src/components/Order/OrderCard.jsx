import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = (item) => {
    console.log(item.item)

    const dateString_1 = item.item.createdAt;
    const dateString_2 = item.item.deliveryDate;

  // Convert the string to a Date object
  const dateObject_1 = new Date(dateString_1);
  const dateObject_2 = new Date(dateString_2);

  const dateToday = new Date().toLocaleDateString();
  console.log(dateToday);

  // Example usage: format the date
  const formattedCreationDate = dateObject_1.toLocaleDateString(); 
//   console.log(formattedDate.getMonth())
  const formattedDeliveryDate = dateObject_2.toLocaleDateString(); 
    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/orders/${item?.item.id}`)} className="p-5 shadow-md shadow-gray hover:shadow-2xl ">
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className="flex cursor-pointer">
                    <img className="w-[5rem] h-[5rem] object-cover object-top" src={item?.item.orderItem[0].product.imageLink} alt="" />
                    <div className="ml-5 space-y-2">
                        <p className="">{item?.item.orderItem[0].product.productName}</p>
                        <p className="opacity-50 text-xs font-semibold">{item?.item.orderItem[0].product.category}</p>
                        <p className="opacity-50 text-xs font-semibold">{item?.item.orderItem[0].product.breed}</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>₹{item?.item.totalDiscountPrice}</p>
            </Grid>
            <Grid item xs={4}>
               {item?.item.orderStatus !== "PENDING" ? formattedDeliveryDate > dateToday ? <div>
               <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                    <span className='font-semibold'>
                        Delivered On {formattedDeliveryDate} 
                    </span>
               
                </p>
                <p className="text-xs">
                    Your Item Has Been Delivered
                </p>
                </div>: <p><span>
                        Exception Delivery On Mar 03
                    </span></p> : <span className='font-semibold'>
                        Pending
                    </span>} 
                    {/* {false &&
                <p>
                    <span>
                        Exception Delivery On Mar 03
                    </span> */}
                {/* </p>} */}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard