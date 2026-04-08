'use client'

import Link from 'next/link';
import { HeaderContainer, Nav} from './styles';

export default function Header(){
    return(
        <HeaderContainer>
            <h2>E-Commerce</h2>
            <Nav>
                <Link href="/">Catálogo</Link>
                <Link href="/carrinho">Carrinho</Link>
            </Nav>
        </HeaderContainer>
    )
}