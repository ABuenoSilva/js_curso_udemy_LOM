import { all } from 'redux-saga/effects';

import exampleRequest from './example/sagas';

export default function* rootSaga() {
  return yield all([exampleRequest]);
}
