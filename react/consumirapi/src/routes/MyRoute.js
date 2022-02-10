import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ isClosed, ...rest }) {
  const isLoggedIn = false;
  const location = useLocation();
  if (isClosed && !isLoggedIn) {
    console.log('voltando para login');
    return <Navigate to="/login" state={{ location }} />;
  }

  return rest.children;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  isClosed: PropTypes.bool,
};
