import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({isLogged}) => {
  const {uid} = useSelector( state => state.auth);
  console.log(uid);
  console.log(isLogged);
  return isLogged ? (<Navigate to="/home" />) : <Outlet />
}
