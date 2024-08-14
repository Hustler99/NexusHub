import React from 'react'
import { jwtDecode } from "jwt-decode";
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {
  let token = localStorage.getItem("token")
  try {
    let decodedToken = jwtDecode(token)
  } catch (error) {
    return <Navigate to="/signin"/>
  }
  if(token){
    return children
  }
  
}
