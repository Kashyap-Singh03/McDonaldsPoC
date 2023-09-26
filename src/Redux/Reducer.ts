//@ts-nocheck
import {combineReducers} from 'redux';

const initialState = {
  loading: false,
  users: [],
  isLogin: false,
  currentUser: null,
  cartItems: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        isLogin: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isLogin: true,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false,
        currentUser: null,
        isLogin: action.payload,
      };
    case 'ADD_TO_CART_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_TO_CART_SUCCESS':
      let myindex = -1;
      state.cartItems.map((item, index) => {
        // console.log('ITEM TO ADD : ', item, '\n');

        if (
          item.id === action.payload.item.id &&
          item.userId === action.payload.userId
        ) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.cartItems.push({
          userId: action.payload.userId,
          id: action.payload.item.id,
          image: action.payload.item.image,
          title: action.payload.item.title,
          price: action.payload.item.price,
          description: action.payload.item.description,
          qty: action.payload.item.qty + 1,
        });
      } else {
        state.cartItems[myindex].qty = state.cartItems[myindex].qty + 1;
      }
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems],
      };
    case 'REMOVE_FROM_CART_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'REMOVE_FROM_CART_SUCCESS':
      let startingIndex = -1;
      state.cartItems.map((item, index) => {
        if (
          item.id === action.payload.item.id &&
          item.userId === action.payload.userId
        ) {
          startingIndex = index;
        }
      });
      if (startingIndex == -1) {
      } else {
        state.cartItems[startingIndex].qty =
          state.cartItems[startingIndex].qty - 1;
      }
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems],
      };
    case 'DELETE_CART_ITEM_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_CART_ITEM_SUCCESS':
      const updatedCartItems = state.cartItems.filter(
        item =>
          item.id !== action.payload.item.id &&
          item.userId === action.payload.userId,
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer: reducer,
});

export default rootReducer;
