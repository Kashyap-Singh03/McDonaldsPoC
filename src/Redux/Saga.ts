import {all, takeLatest} from 'redux-saga/effects';

const checkData = (action: any) => {
  console.log(action);
};

function* watchFetchData() {
  yield takeLatest('CHECK_REQUEST', checkData);
}
export default function* rootSaga() {
  yield all([watchFetchData()]);
}
