import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';
import * as actions from './actions';

const erro = true;

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      erro ? reject() : resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('FODEU!!!');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
  takeLatest(types.BOTAO_CLICADO_SUCCESS, exampleRequest),
  takeLatest(types.BOTAO_CLICADO_FAILURE, exampleRequest),
]);
