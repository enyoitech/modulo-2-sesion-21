import React, { useReducer } from 'react'
import { User } from '../../interfaces/interfaces'
import { AuthContext } from './authContext'
import { AuthReducer } from './AuthReducer'



const INITIAL_STATE: User = {
    isAuth: false,
    username: '',
    password: ''
}


interface IProps{
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:IProps) => {

  const [userState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const login = async (username: string, pass: string) => {
    const URL='http://localhost:3004/user';
    try {
      const res = await fetch(URL);
      console.log(res);
      if (!res.ok) {
        console.log('aqui ocurrio un error');
        return {
          errorMsn: 'Ha ocurrido un problema al cargar los datos'
        }
      }
      const result = await res.json();
      console.log(result);
      // inicio-este bloque se realizaria en el backend
      const {password, ...userLogin} = result?.find( (user: Partial<User>) => user?.password === pass && user.username === username); 
      if (!userLogin) {
        return {
          errorMsn: 'Usuario y/o Password incorrecto'
        }
      }
      // fin-este bloque se realizaria en el backend

      dispatch({type: 'login', payload: {user: userLogin}})

      //return result;
      
   
      
    } catch (error) {
      return {
        status: 500,
        errorMsn: 'Ha ocurrido un problema al conectar con el servidor'
      }
    }

    
  }
  
  return (
    <AuthContext.Provider value={{
      userState,
        login
      
    }}>
        {children}
    </AuthContext.Provider>
  )
}
