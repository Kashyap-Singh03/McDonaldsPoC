export const signup_request = (data: any) => ({
  type: 'SIGNUP_REQUEST',
  payload: data,
});

export const signup_success = (data: any) => ({
  type: 'SIGNUP_SUCCESS',
  payload: data,
});

export const login_request = (data: any) => ({
  type: 'LOGIN_REQUEST',
  payload: data,
});

export const login_success = (data: any) => ({
  type: 'LOGIN_SUCCESS',
  payload: data,
});

export const logout_request = () => ({
  type: 'LOGOUT_REQUEST',
});

export const logout_success = (data: any) => ({
  type: 'LOGOUT_SUCCESS',
  payload: data,
});

export const add_to_cart_request = (userId: any, item: any) => ({
  type: 'ADD_TO_CART_REQUEST',
  payload: {userId, item},
});

export const add_to_cart_success = (userId: any, item: any) => ({
  type: 'ADD_TO_CART_SUCCESS',
  payload: {userId, item},
});

export const remove_from_cart_request = (userId: any, item: any) => ({
  type: 'REMOVE_FROM_CART_REQUEST',
  payload: {userId, item},
});

export const remove_from_cart_success = (userId: any, item: any) => ({
  type: 'REMOVE_FROM_CART_SUCCESS',
  payload: {userId, item},
});

export const delete_cart_item_request = (userId: any, item: any) => ({
  type: 'DELETE_CART_ITEM_REQUEST',
  payload: {userId, item},
});

export const delete_cart_item_success = (userId: any, item: any) => ({
  type: 'DELETE_CART_ITEM_SUCCESS',
  payload: {userId, item},
});
