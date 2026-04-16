'use client'

import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';
import { AuthContext } from '@/contexts/AuthContext';
import { HeaderContainer, HeaderLink, HeaderNav, BotaoAcaoHeader } from './styles';

export default function Header() {
    const { carrinho } = useContext(CartContext);
    const { usuario, Login, Logout } = useContext(AuthContext)
    return (
        <HeaderContainer>
            <h2>E-Commerce</h2>
            <HeaderNav>
                {usuario != null ? <><span>Olá, {usuario} </span> <BotaoAcaoHeader onClick={Logout}>Sair</BotaoAcaoHeader></> : <BotaoAcaoHeader onClick={Login}>Entrar</BotaoAcaoHeader>}
                <HeaderLink href="/">Catálogo</HeaderLink>
                <HeaderLink href="/carrinho">Carrinho {carrinho.length}</HeaderLink>
            </HeaderNav>
        </HeaderContainer>
    )
}