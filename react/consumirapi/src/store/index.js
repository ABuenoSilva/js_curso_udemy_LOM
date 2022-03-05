import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './modules/reduxPersist';
import history from '../services/history';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga, history);

export const persistor = persistStore(store);
export default store;
