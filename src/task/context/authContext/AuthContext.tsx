import React from 'react'



import { createContext } from "react";
import { User, } from "../../interfaces/interfaces";

export type AuthContextProps = {
    userState: User,
    login: (user: string, pass: string) => void
    
    
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)