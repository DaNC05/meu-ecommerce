'use client'

import { useContext, useState, useEffect, useRef } from 'react';
import { CartContext } from '@/contexts/CartContext';
import { AuthContext } from '@/contexts/AuthContext';
import { HeaderContainer, HeaderLink, HeaderNav, BotaoAcaoHeader, LinhaSuperior, MenuCategorias, ItemMenu } from './styles';
import { useRouter } from 'next/navigation';

interface Categoria {
    name: string;
    slug: string;
    url: string;
}

export default function Header() {
    const { carrinho } = useContext(CartContext);
    const { usuario, Login, Logout } = useContext(AuthContext)
    const [pesquisa, setPesquisa] = useState('')
    const router = useRouter()
    const menuRef = useRef<HTMLDivElement>(null);
    const realizarBuscar = () => {
        if (pesquisa.trim() != '') {
            router.push(`/busca?q=${pesquisa}`)
        }
    }
    const [categoria, setCategoria] = useState<Categoria[]>([])
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        const carregarCategorias = async () => {
            const categoriaResposta = await fetch('https://dummyjson.com/products/categories', { next: { revalidate: 60 } });
            if (!categoriaResposta.ok) throw new Error(`Erro ${categoriaResposta.status}`)
            const dadosCategoria = await categoriaResposta.json()
            const categorias: Categoria[] = dadosCategoria;
            setCategoria(categorias)
        }
        carregarCategorias()
    }, [])
    useEffect(() => {
        const cliqueFora = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenu(false);
            }
        }
        document.addEventListener('mousedown', cliqueFora)
        return () => {
            document.removeEventListener('mousedown', cliqueFora)
        }

    }, [menuRef])
    return (
        <HeaderContainer>
            <LinhaSuperior>
                <h2>E-Commerce</h2>
                <HeaderNav>
                    <input value={pesquisa} onChange={e => setPesquisa(e.target.value)} /> <BotaoAcaoHeader onClick={realizarBuscar}>Pesquisar</BotaoAcaoHeader>
                    {usuario != null ? <><span>Olá, {usuario} </span> <BotaoAcaoHeader onClick={Logout}>Sair</BotaoAcaoHeader></> : <BotaoAcaoHeader onClick={Login}>Entrar</BotaoAcaoHeader>}
                    <HeaderLink href="/">Catálogo</HeaderLink>
                    <HeaderLink href="/carrinho">Carrinho {carrinho.length}</HeaderLink>
                </HeaderNav>
            </LinhaSuperior>
            <div ref={menuRef}>
                <BotaoAcaoHeader onClick={() => setMenu(!menu)}>☰ Categorias</BotaoAcaoHeader>
                {menu && (
                    <MenuCategorias >{categoria.map((categoria) => <ItemMenu onClick={() => setMenu(false)} key={categoria.slug} href={`/categoria/${categoria.slug}`}>{categoria.name} </ItemMenu>)}</MenuCategorias>
                )
                }
            </div>
        </HeaderContainer>
    )
}