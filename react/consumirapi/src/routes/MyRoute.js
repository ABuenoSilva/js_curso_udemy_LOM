import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ isClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
