import React, { useContext } from 'react';
import {Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

interface IProps {
    children: React.ReactNode,
    
}


export const RoutesPrivate = ({ children}: IProps) => {

    const {isAuth} = useAuth() 
  return (
   <>
   {
       !isAuth? <Navigate to='/login' />: children
   }
   
      </>
  )
}