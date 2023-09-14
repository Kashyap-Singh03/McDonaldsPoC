import {ADD_TO_CART, REMOVE_TO_CART} from './constants';
const initialState = {
  count: 0,
};
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        count: state.count + 1,
      };
    case REMOVE_TO_CART:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
