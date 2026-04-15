'use client'

import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextData {
    usuario: string | null;
    Login: () => void;
    Logout: () => void;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function LoginProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<string | null>(null)

    const Login = () => {

        setUsuario('Joao')
    }
    const Logout = () => {
        setUsuario(null)
    }
    return <AuthContext.Provider value={{ Logout, Login, usuario }}> {children} </AuthContext.Provider>
}
