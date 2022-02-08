import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSuccess() {
  console.log('cliquei e deu certo');
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoFailure() {
  console.log('cliquei e deu errado pra kct');
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
