import {combineReducers} from 'redux';

const initialState = {
  userData: '',
  loading: false,
};

const CheckReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHECK_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CHECK_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  check: CheckReducer,
});

export default rootReducer;
