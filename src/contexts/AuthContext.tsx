'use client'

import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextData {
    usuario: string | null;
    Login: () => void;
    Logout: () => void;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function LoginProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<string | null>(() => {
        if (typeof window !== 'undefined') {
            const salvo = localStorage.getItem('usuario');
            return salvo ? JSON.parse(salvo) : null;
        }
        return null
    });
    useEffect(() => {
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }, [usuario])
    const Login = () => {
        setUsuario('Joao')
    }
    const Logout = () => {
        setUsuario(null)
    }
    return <AuthContext.Provider value={{ Logout, Login, usuario }}> {children} </AuthContext.Provider>
}
