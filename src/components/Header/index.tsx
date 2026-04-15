'use client'

import { LinkBotao } from '@/app/styles';
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
                <LinkBotao href="/">Catálogo</LinkBotao>
                <LinkBotao href="/carrinho">Carrinho {carrinho.length}</LinkBotao>
            </Nav>
        </HeaderContainer>
    )
}