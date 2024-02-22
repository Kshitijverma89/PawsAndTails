import React from 'react'
import AddressCard from '../Address/AddressCard'
import OrderTracker from './OrderTracker'
import StarIcon from '@mui/icons-material/Star';
import { getOrderById } from '../../State/Order/Action';
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const OrderDetails = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("token");
    const { orderId } = useParams();
    const { order } = useSelector(store => store);
  
    // console.log("order", order.order.orderStatus);
  
    useEffect(() => {
      dispatch(getOrderById(orderId));
    }, []);
  
    const navigate = useNavigate();
    
    return (
//         <div className="px:5 lg:px-20">
//             <div>
//                 <h1 className="font-bold text-xl py-7">Delivery Address</h1>
//                 <AddressCard />
//             </div>

//             <div className="py-20">
//             <OrderTraker
//               activeStep={
//                 order.order?.orderStatus === "PLACED"
//                   ? 1
//                   : order.order?.orderStatus === "CONFIRMED"
//                   ? 2
//                   : order.order?.orderStatus === "SHIPPED"
//                   ? 3
//                   : 5
//               }
//             />
//             </div>
            
//             <Grid className="space-y-3 mb-5" container>
//                 {[1, 1, 1, 1, 1].map(() =>
//                     <Grid item container className="shadow-xl rounded-md p-4 border" sx={{ alignItem: "Center", justifyContent: "space-between" }}>
//                         <Grid item xs={6}>
//                             <div className="flex items-center space-x-4">
//                                 <img className="w-[9rem] h-[9rem] object-cover object-top" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" alt="" />

//                                 <div className="space-y-2 ml-5">
//                                     <p className="font-bold space-x-5">Alsatian</p>
//                                     <p className="space-x-5 text-xs font-semibold">
//                                         <span className="opacity-50 ">Alsatian </span>
//                                         <span className="opacity-50">Alsatian</span>
//                                     </p>
//                                     <p >Alsatian</p>
//                                     <p className="font-semibold space-x-5">₹1099</p>
//                                 </div>
//                             </div>



//                         </Grid>

//                         <Grid item className='my-auto'>
//                             <Box sx={{ color: deepPurple[500] }}>
//                                 <StarIcon sx={{ fontSize: "2.5rem" }} className="px-2" />
//                                 <span className="text-sm cursor" >Rate & Review Product</span>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 )}
//             </Grid>
//         </div>
//     )
// }

<div className=" px-2 lg:px-36 space-y-7 ">
<Grid container className="p-3 shadow-lg">
  <Grid xs={12}>
    <p className="font-bold text-lg py-2">Delivery Address</p>
  </Grid>
  <Grid item xs={6}>
    <AddressCard address={order.order?.shippingAddress} />
  </Grid>
</Grid>
<Box className="p-5 shadow-lg border rounded-md">
  <Grid
    container
    sx={{ justifyContent: "space-between", alignItems: "center" }}
  >
    <Grid item xs={9}>
      <OrderTracker
        activeStep={
          order.order?.orderStatus === "PLACED"
            ? 1
            : order.order?.orderStatus === "CONFIRMED"
            ? 2
            : order.order?.orderStatus === "SHIPPED"
            ? 3
            : 5
        }
      />
    </Grid>
    <Grid item>
     {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
        RETURN
      </Button>}

      {order.order?.orderStatus!=="DELIVERED" && order.order?.orderStatus!=="PENDING" && <Button sx={{ color: deepPurple[500] }} variant="text">
        cancel order
      </Button>}
    </Grid>
  </Grid>
</Box>



<Grid container className="space-y-5">
  {order?.order?.orderItem.map((item) => (
    <Grid
      container
      item
      className="shadow-xl rounded-md p-5 border"
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Grid item xs={6}>
        {" "}
        <div className="flex  items-center ">
          <img
            className="w-[5rem] h-[5rem] object-cover object-top"
            src={item?.product.imageLink}
            alt=""
          />
          <div className="ml-5 space-y-2">
            <p className="">{item?.product.title}</p>
            <p className="opacity-50 text-xs font-semibold space-x-5">
              <span>Category: {item?.product.category}</span> <span>Breed: {item?.product.breed}</span>
            </p>
            <p>Seller: {item.product.brand}</p>
            <p>₹{item.price} </p>
          </div>
        </div>
      </Grid>
      <Grid item>
        {
          <Box
            sx={{ color: deepPurple[500] }}
            onClick={() => navigate(`/account/rate/${item.product.id}`)}
            className="flex items-center cursor-pointer"
          >
            <StarIcon
              sx={{ fontSize: "2rem" }}
              className="px-2 text-5xl"
            />
            <span>Rate & Review Product</span>
          </Box>
        }
      </Grid>
    </Grid>
  ))}
</Grid>
</div>
);
};

export default OrderDetails