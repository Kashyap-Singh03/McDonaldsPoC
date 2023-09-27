import {all} from 'redux-saga/effects';
import {mainSaga} from './Saga';

export default function* rootSaga() {
  yield all([mainSaga()]);
}
