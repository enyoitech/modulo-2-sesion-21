import React from 'react'
import { useAuth } from '../hooks/useAuth'

export const Login = () => {

  const {login} = useAuth();

  // const logeando = () => {
  //   login('pepito', '12345')
  // }

  return (
    <>
    <h1>
        Login

    </h1>
    <button onClick={()=> login('pepito', '12345')}>Logear</button>
    </>
  )
}
