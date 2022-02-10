/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
// import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const useHandleSubmit = (e) => {
    e.preventDefault();

    let formErros = false;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail incorreto');
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErros) {
      return;
    }
    // console.log('oi');
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={useHandleSubmit}>
        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Acessar conta</button>
      </Form>
    </Container>
  );
}
