
import { useContext } from 'react';
import { AuthContext } from '../context/authContext/authContext';


export const useAuth = () => {
    const { userState, login } = useContext(AuthContext);
    const { isAuth } = userState;

    return {
            login,
            isAuth
           }

}