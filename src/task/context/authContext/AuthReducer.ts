
import { User } from '../../interfaces/interfaces';

type UserAction = | {type: 'login', payload: {user: User}} 
                 
                  
export const AuthReducer = (state: User, action: UserAction): User =>{

   switch (action.type) {

    case 'login':
            return{
                ...action.payload.user,
                isAuth: true
            }

       
    default:
        return state;
   }
}