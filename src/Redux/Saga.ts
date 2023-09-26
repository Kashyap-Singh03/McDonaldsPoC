import {put, takeLatest} from 'redux-saga/effects';

function* signupfn(action: any) {
  try {
    console.log('SIGNUP : ', typeof action.payload, '  :  ', action.payload);
    yield put({type: 'SIGNUP_SUCCESS', payload: action.payload});
  } catch (error) {
    console.log('SignUp Error : ', action.payload);
  }
}

function* loginfn(action: any) {
  try {
    console.log('LOGIN : ', typeof action.payload, '  :  ', action.payload);
    yield put({type: 'LOGIN_SUCCESS', payload: action.payload});
  } catch (error) {
    console.log('Login Error : ', error);
  }
}

function* logoutfn(action: any) {
  try {
    yield put({type: 'LOGOUT_SUCCESS', payload: false});
  } catch (error) {
    console.log('Logout Error : ', error);
  }
}

function* addToCartfn(action: any) {
  try {
    // console.log('ADD_TO_CART : ' , typeof(action.payload),"  :  ",action.payload);
    yield put({type: 'ADD_TO_CART_SUCCESS', payload: action.payload});
  } catch (error) {
    console.log('ADD_TO_CART Error : ', error);
  }
}

function* removeFromCartfn(action: any) {
  try {
    // console.log('ADD_TO_CART : ' , typeof(action.payload),"  :  ",action.payload);
    yield put({type: 'REMOVE_FROM_CART_SUCCESS', payload: action.payload});
  } catch (error) {
    console.log('REMOVE_FROM_CART Error : ', error);
  }
}

function* deleteCartItemfn(action: any) {
  try {
    console.log('DELETE_TO_CART : ' , typeof(action.payload),"  :  ",action.payload);
    yield put({type: 'DELETE_CART_ITEM_SUCCESS', payload: action.payload});
  } catch (error) {
    console.log('REMOVE_FROM_CART Error : ', error);
  }
}

export function* mainSaga() {
  yield takeLatest('SIGNUP_REQUEST', signupfn);
  yield takeLatest('LOGIN_REQUEST', loginfn);
  yield takeLatest('ADD_TO_CART_REQUEST', addToCartfn);
  yield takeLatest('REMOVE_FROM_CART_REQUEST', removeFromCartfn);
  yield takeLatest('DELETE_CART_ITEM_REQUEST', deleteCartItemfn);
}
