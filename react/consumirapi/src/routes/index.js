import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <MyRoute>
            <Alunos />
          </MyRoute>
        }
      />
      <Route
        path="/aluno/:id/edit"
        element={
          <MyRoute isClosed>
            <Aluno />
          </MyRoute>
        }
      />
      <Route
        path="/aluno"
        element={
          <MyRoute isClosed>
            <Aluno />
          </MyRoute>
        }
      />
      <Route
        path="/fotos/:id"
        element={
          <MyRoute isClosed>
            <Fotos />
          </MyRoute>
        }
      />
      <Route
        path="/login"
        element={
          <MyRoute>
            <Login />
          </MyRoute>
        }
      />
      <Route
        path="/register"
        element={
          <MyRoute>
            <Register />
          </MyRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
