import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const {uid} = useSelector( state => state.auth);
  console.log(uid);
  return (!!uid) ? (<Navigate to="/auth/login" />) : children
};
