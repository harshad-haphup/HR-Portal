import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

function PrivateRoutes() {
  const auth=localStorage.getItem("authToken")
  return (
    auth ? <><Navbar/><Outlet/></> : <Navigate to="/login"/>
  );
}

export default PrivateRoutes;