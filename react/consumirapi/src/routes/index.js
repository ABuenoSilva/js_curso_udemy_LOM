import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MyRoute>
            <Login />
          </MyRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
