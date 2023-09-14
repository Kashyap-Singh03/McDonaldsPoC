import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

sagaMiddleware.run(RootSaga);

export default store;
