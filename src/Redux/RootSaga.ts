import {all} from 'redux-saga/effects';
import {mainSaga} from './SagaFunctions';

export default function* RootSaga() {
  yield all([mainSaga()]);
}
