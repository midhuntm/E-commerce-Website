import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
export default function Protected({isSignIn,children}) {
  if(!isSignIn)
  {
    return <Navigate to='/' replace/>
  }
  return children;
}
