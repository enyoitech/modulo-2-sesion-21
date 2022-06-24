import React, { useContext } from 'react';
import {Navigate } from 'react-router-dom'
import { TaskContext } from '../context/taskContext/TaskContext';
import { useAuth } from '../hooks/useAuth';

interface IProps {
    children: React.ReactNode,
    
}


export const RoutesPublic = ({ children}: IProps) => {
    const {isAuth} = useAuth()
  return (
   <>
   {
       isAuth? <Navigate to='/' />: children
   }
   
      </>
  )
}