'use client'

import Link from 'next/link';
import { HeaderContainer, Nav} from './styles';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';


export default function Header(){
    const {carrinho} = useContext(CartContext);
    return(
        <HeaderContainer>
            <h2>E-Commerce</h2>
            <Nav>
                <Link href="/">Catálogo</Link>
                <Link href="/carrinho">Carrinho {carrinho.length}</Link>
            </Nav>
        </HeaderContainer>
    )
}