import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../services/history';

export default function MyRoute({ isClosed, ...rest }) {
  console.log('my route');
  const isLoggedIn = false;
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
  console.log(rest);
  return rest.children;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  isClosed: PropTypes.bool,
};
