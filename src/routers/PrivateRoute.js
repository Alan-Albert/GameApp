import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({isLogged}) => {
  const {uid} = useSelector( state => state.auth);
  console.log(uid);
  console.log(isLogged);
  return isLogged ? <Outlet /> : (<Navigate to="/login" />)
};
