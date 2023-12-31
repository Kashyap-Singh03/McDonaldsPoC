export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';
export const DELETE_CART_ITEM_REQUEST = 'DELETE_CART_ITEM_REQUEST';
export const DELETE_CART_ITEM_SUCCESS = 'DELETE_CART_ITEM_SUCCESS';
export const DELETE_CART_ITEM_FAILURE = 'DELETE_CART_ITEM_FAILURE';
export const PAST_ORDERS_REQUEST = 'PAST_ORDERS_REQUEST';
export const PAST_ORDERS_SUCCESS = 'PAST_ORDERS_SUCCESS';
export const PAST_ORDERS_FAILURE = 'PAST_ORDERS_FAILURE';
export const UPDATE_PROFILE_DETAILS_REQUEST = 'UPDATE_PROFILE_DETAILS_REQUEST';
export const UPDATE_PROFILE_DETAILS_SUCCESS = 'UPDATE_PROFILE_DETAILS_SUCCESS';
export const UPDATE_PROFILE_DETAILS_FAILURE = 'UPDATE_PROFILE_DETAILS_FAILURE';

export const signup_request = (data: any) => ({
  type: SIGNUP_REQUEST,
  payload: data,
});

export const signup_success = (data: any) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signup_failure = (error: any) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const login_request = (data: any) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

export const login_success = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const login_failure = (error: any) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout_request = () => ({
  type: LOGOUT_REQUEST,
});

export const logout_success = (data: any) => ({
  type: LOGOUT_SUCCESS,
  payload: data,
});

export const logout_failure = (error: any) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const add_to_cart_request = (userId: any, item: any) => ({
  type: ADD_TO_CART_REQUEST,
  payload: {userId, item},
});

export const add_to_cart_success = (userId: any, item: any) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: {userId, item},
});

export const add_to_cart_failure = (error: any) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});

export const remove_from_cart_request = (userId: any, item: any) => ({
  type: REMOVE_FROM_CART_REQUEST,
  payload: {userId, item},
});

export const remove_from_cart_success = (userId: any, item: any) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: {userId, item},
});

export const remove_from_cart_failure = (error: any) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: error,
});

export const delete_cart_item_request = (userId: any, item: any) => ({
  type: DELETE_CART_ITEM_REQUEST,
  payload: {userId, item},
});

export const delete_cart_item_success = (userId: any, item: any) => ({
  type: DELETE_CART_ITEM_SUCCESS,
  payload: {userId, item},
});

export const delete_cart_item_failure = (error: any) => ({
  type: DELETE_CART_ITEM_FAILURE,
  payload: error,
});

export const past_orders_request = (data: any) => ({
  type: PAST_ORDERS_REQUEST,
  payload: data,
});

export const past_orders_success = (data: any) => ({
  type: PAST_ORDERS_SUCCESS,
  payload: data,
});

export const past_orders_failure = (error: any) => ({
  type: PAST_ORDERS_FAILURE,
  payload: error,
});

export const update_profile_details_request = (data: any) => ({
  type: UPDATE_PROFILE_DETAILS_REQUEST,
  payload: data,
});

export const update_profile_details_success = (data: any) => ({
  type: UPDATE_PROFILE_DETAILS_SUCCESS,
  payload: data,
});

export const update_profile_details_failure = (error: any) => ({
  type: UPDATE_PROFILE_DETAILS_FAILURE,
  payload: error,
});
