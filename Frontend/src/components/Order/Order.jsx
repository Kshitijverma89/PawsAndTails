import { Grid } from "@mui/material";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import {getOrderById, getOrderHistory} from "../../State/Order/Action"

const orderStatus = [{ label: "On The Way", value: "On_the_way" },
{ label: "Delivered", value: "Delivered" },
{ label: "Cancelled", value: "Cancelled" },
{ label: "Returned", value: "Returned" },
]
const Order = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("token");
    const {order}=useSelector(store=>store);
    console.log(order.orders);
  
    useEffect(() => {
        dispatch(getOrderHistory({ jwt }));
        // console.log(order.orders);
    }, [jwt]);
   

    return (
        <div className="px:5 lg:px-20 mt-5">
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>

                    <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                        <h1 className="font-bold text-lg">Filter</h1>
                        <div className="space-y-4 mt-4">
                            <h1 className="font-semibold text-lg">ORDER STATUS</h1>

                            {orderStatus.map((option) =>
                                <div className="flex items-center">
                                    <input className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" defaultValue={option.value} type="checkbox" />
                                    <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">{option.label}</label>
                                </div>
                            )}


                        </div>
                    </div>

                </Grid>

                <Grid item xs={9}>
                    <div className="space-y-5">
                        {order?.orders.map((item) => <OrderCard item={item}/>)}
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Order