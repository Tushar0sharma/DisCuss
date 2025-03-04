import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Authrouteprotection = () => {
  const user=useSelector((state=>state.user))
  if(user && user.isLoggedin){
    return (<Outlet/>)
  }
  else{
    return <Navigate to="/login"/>
  }
}

export default Authrouteprotection