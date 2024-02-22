import axios from "axios";
import { api, API_BASE_URL } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

// export const createPayment = (orderId) => async(dispatch) =>{

//     dispatch({type: CREATE_PAYMENT_REQUEST})
//     try{
//         const {data} = await api.post(`api/payments/${orderId}`);
//         console.log(data)

//         if(data.payment_link_url){
//             console.log(data)
//             window.location.href=data.payment_link_url;
//         }

//     } catch(error){
//         dispatch({type: CREATE_PAYMENT_FAILURE, payload: error.message});
//     }
// }

// export const updatePayment = (reqData) => async(dispatch) =>{

//     dispatch({type: UPDATE_PAYMENT_REQUEST})
//     try{
//         const {data} = await api.get(`api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

//         // if(data.paymment_link_url){
//         //     window.location.href=data.payment_link_url;
//         // }
//         console.log("update payment :- ", data)
//     } catch(error){
//         dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message});
//     }
// }



export const createPayment = (reqData) => async (dispatch) => {
    console.log("create payment reqData ",reqData)
    try {
      dispatch({
        type: CREATE_PAYMENT_REQUEST,
      });
  
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };
  
      const { data } = await axios.post(`${API_BASE_URL}/api/payments/${reqData}`, {}, config);
  console.log("data",data)
  if(data.payment_link_url){
    window.location.href=data.payment_link_url;
  }
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PAYMENT_FAILURE,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

  

  export const updatePayment = (reqData) => {
    return async (dispatch) => {
      console.log("update payment reqData ",reqData)
      dispatch(updatePaymentRequest());
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${reqData.jwt}`,
          },
        };
        const response = await axios.get(`${API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,config);
        console.log("updated data",response.data)
        dispatch(updatePaymentSuccess(response.data));
      } catch (error) {
        dispatch(updatePaymentFailure(error.message));
      }
    };
  };

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};

export const updatePaymentFailure = (error) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: error,
  };
};