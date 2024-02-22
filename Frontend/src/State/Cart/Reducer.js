import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_RESQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState={
    cart:null,
    loading:false,
    error:null,
    cartItems:[]
}


export const cartReducer=(state = initialState, action)=>{
    console.log(state)
    switch(action.type){
        case ADD_ITEM_TO_CART_REQUEST:
            return {...state, loading: true, error:null}
        case ADD_ITEM_TO_CART_SUCCESS:
            return {...state, 
                cartItems: [...state.cartItems, action.payload.cartItems ],
                loading: false, error:null}
        case ADD_ITEM_TO_CART_FAILURE:
            return {...state, loading: false, error:action.payload}
        case GET_CART_RESQUEST:
            return {...state, 
                loading: true, 
                error:null}
        case GET_CART_SUCCESS:
            return {...state,
                cartItems: action.payload.cart, 
                loading: false, 
                error:null}
        case GET_CART_FAILURE:
            return {...state, 
                loading: false, 
                error:action.payload}
        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return {...state, 
                loading: true, 
                error:null}
        case REMOVE_CART_ITEM_SUCCESS:
            return {...state,
                cartItems: state.cartItems.filter((item)=> item.cartItemId !== action.payload), 
                deleteCartItem: action.payload, 
                loading: false, 
                error:null}
        case UPDATE_CART_ITEM_SUCCESS:
            console.log(action.payload)
            return {...state,
                cartItems: state.cartItems.map((item)=> item.cartItemId === action.payload.cartItemId ? action.payload: item),
                updateCartItem: action.payload,
                loading: false, 
                error:null}
        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return {...state, 
                loading: false, 
                error:action.payload}
        default:
            return state;
    }
    
}