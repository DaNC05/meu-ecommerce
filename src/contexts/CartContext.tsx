'use client'
import { createContext, useState, ReactNode, useEffect } from 'react';

interface ItemCarrinho {
    produtoId: number;
    quantidade: number;
}

interface CartContextData {
    carrinho: ItemCarrinho[];
    adicionarAoCarrinho: (produtoId: number) => void
    removeDoCarrinho: (produtoId: number) => void
    aumentarQuantidade: (produtoId: number) => void
    diminuirQuantidade: (produtoId: number) => void
    limparCarrinho: () => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
    const [carrinho, setCarrinho] = useState<ItemCarrinho[]>(() => {
        if (typeof window !== 'undefined') {
            const salvo = localStorage.getItem('carrinho');
            return salvo ? JSON.parse(salvo) : [];
        }
        return []
    });

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }, [carrinho])
    const removeDoCarrinho = (produtoId: number) => {
        const filtro = carrinho.filter((item) => item.produtoId !== produtoId)
        setCarrinho(filtro)
    };
    const adicionarAoCarrinho = (produtoId: number) => {
        const indexDoProduto = carrinho.findIndex((item) => item.produtoId === produtoId)
        if (indexDoProduto === -1) setCarrinho([...carrinho, { produtoId: produtoId, quantidade: 1 }])
        else {
            const copiaDoCarrinho = [...carrinho]
            copiaDoCarrinho[indexDoProduto].quantidade += 1;
            setCarrinho(copiaDoCarrinho)
        }
    };
    const aumentarQuantidade = (produtoId: number) => {
        const indexDoProduto = carrinho.findIndex((item) => item.produtoId === produtoId)
        const copiaDoCarrinho = [...carrinho]
        copiaDoCarrinho[indexDoProduto].quantidade += 1
        setCarrinho(copiaDoCarrinho)
    };
    const diminuirQuantidade = (produtoId: number) => {
        const indexDoProduto = carrinho.findIndex((item) => item.produtoId === produtoId)
        const copiaDoCarrinho = [...carrinho]

        if (copiaDoCarrinho[indexDoProduto].quantidade > 1) {
            copiaDoCarrinho[indexDoProduto].quantidade -= 1
            setCarrinho(copiaDoCarrinho)
        }
        else {
            removeDoCarrinho(produtoId)
        }
    };
    const limparCarrinho = () => {
        setCarrinho([])
    }
    return (
        <CartContext.Provider value={{ carrinho, adicionarAoCarrinho, removeDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho }}>
            {children}
        </CartContext.Provider>
    )
}