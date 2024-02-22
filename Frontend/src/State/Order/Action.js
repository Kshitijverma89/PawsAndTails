import { GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY__FAILURE } from "../../State/Order/ActionType"
import { api, API_BASE_URL } from '../../config/apiConfig';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from './ActionType';
import axios from "axios";

export const createOrder = (reqData) => async(dispatch)=>{
  console.log(reqData)
    dispatch({type: CREATE_ORDER_REQUEST});
    

    try{
        const {data} = await api.post(`${API_BASE_URL}/api/order`, reqData.address,
        
        );

        if(data.id){
            reqData.navigate({search: `step=3&order_id=${data.id}`});
        }
        console.log("create order - ", data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
    } catch(error){
        console.log("catch error : ", error);
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message
        })
    }
};

export const getOrderById = (orderId) => async(dispatch)=>{

    dispatch({type: GET_ORDER_BY_ID_REQUEST});

    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };

    try{
        const {data} = await axios.get(`${API_BASE_URL}/api/order/${orderId}`,config);

        console.log("created order - ", data);
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    } catch(error){
        console.log("catch error : ", error);
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        })
    }
};

export const getOrderHistory = (reqData) => async (dispatch, getState) => {
  console.log(reqData)
    try {
      dispatch({ type: GET_ORDER_HISTORY_REQUEST });
  
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(reqData.jwt)}`,
        },
      };
  
      const { data } = await axios.get(`${API_BASE_URL}/api/order/user`,config);
      console.log("order history -------- ", data);
      dispatch({
        type: GET_ORDER_HISTORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_HISTORY_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
