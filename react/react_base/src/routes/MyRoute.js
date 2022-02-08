import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../services/history';

export default function MyRoute({ isClosed, ...rest }) {
  const isLoggedIn = true;
  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to={{
          pathname: '/login',
          state: { prevPath: history.location.pathname },
        }}
      />
    );
  }

  return rest.children;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  isClosed: PropTypes.bool,
};
