import axios from "axios";
import { api } from "../../config/apiConfig";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_RESQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
// if(localStorage.getItem("user")!=null){
// const user = localStorage.getItem("user");
// const username = JSON.parse(user).username;
// }

export const getCart = ()=>async(dispatch)=>{
    const username = JSON.parse(localStorage.getItem("user")).username
    console.log(JSON.parse(localStorage.getItem("user")).username);
    
    dispatch({type:GET_CART_RESQUEST})

    try{
        // const {data} = await axios.get(`http://localhost:8000/cart/cartItems/${username}`);
        const{data}= await api.get(`cart/cartItems/${username}`)
  
        dispatch({type:GET_CART_SUCCESS, payload:data})
        console.log(data)
    }catch(error){
        dispatch({type:GET_CART_FAILURE,payload:error.message})
    }
}

export const addItemToCart = (reqData)=> async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try{
        const{data}= await api.put("/api/cart/add", reqData.data)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
    }
}
export const updateCartItem = (reqData)=> async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    console.log(reqData.data)
    try{
        const{data}= await api.put(`/cart/cartItems/${reqData.cartItemId}/${reqData.data.quantity}`)
        console.log(data.cart)
        dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload:data.cart})
    }catch(error){
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message})
    }
}

export const removeCartItem = (reqData)=> async(dispatch)=>{
    console.log(reqData)
    dispatch({type:REMOVE_CART_ITEM_REQUEST})

    try{
        await api.delete(`/cart/cartItems/${reqData}`)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS, payload:reqData})
    }catch(error){
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
    }
}
