'use client'

import Link from 'next/link';
import { HeaderContainer, Nav } from './styles';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';
import { AuthContext } from '@/contexts/AuthContext';


export default function Header() {
    const { carrinho } = useContext(CartContext);
    const { usuario, Login, Logout } = useContext(AuthContext)
    return (
        <HeaderContainer>
            <h2>E-Commerce</h2>
            <Nav>
                {usuario != null ? <><p>Olá, {usuario} </p> <button onClick={Logout}>Sair</button></> : <button onClick={Login}>Entrar</button>}
                <Link href="/">Catálogo</Link>
                <Link href="/carrinho">Carrinho {carrinho.length}</Link>
            </Nav>
        </HeaderContainer>
    )
}