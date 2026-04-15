'use client'

import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextData {
    usuario: string | null;
    Login: () => void;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function LoginProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<string | null>(null)

    const Login = () => {

        setUsuario('Joao')
    }
    return <AuthContext.Provider value={{ Login, usuario }}> {children} </AuthContext.Provider>
}
