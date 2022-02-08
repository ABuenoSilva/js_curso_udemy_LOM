import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from './actions';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
