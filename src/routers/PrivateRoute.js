import React from 'react';
// import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({isLogged}) => {
  // console.log(isLogged);
  return isLogged ? <Outlet /> : (<Navigate to="/login" />)
};
