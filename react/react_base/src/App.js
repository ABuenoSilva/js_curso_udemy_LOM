import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <Header />
        <AppRoutes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
