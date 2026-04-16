'use client'

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { AuthContext } from '@/contexts/AuthContext';
import { LinkBotao } from "../styles";
import { CarrinhoContainer, CartItemRow, ProductInfoGroup, QuantityControlGroup, BotaoCarrinho, ActionGroup, CartSummaryContainer } from "./styles";
import { BotaoAcaoHeader } from "@/components/Header/styles";

interface Produto {
    id: number;
    title: string;
    price: number;
    images: string[];
}



export default function PaginaCarrinho() {
    const { carrinho, removeDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho } = useContext(CartContext)
    const [carregando, setCarregando] = useState(true)
    const { usuario, Login, Logout } = useContext(AuthContext)

    // Estado para guardar os dados completos vindos da API
    const [produtosDoCarrinho, setProdutosDoCarrinho] = useState<Produto[]>([])

    useEffect(() => {
        async function buscarProdutos() {
            const resposta = await fetch('https://dummyjson.com/products');
            const dados = await resposta.json();
            setProdutosDoCarrinho(dados.products)
            setCarregando(false)
        } buscarProdutos()
    }, [carrinho])
    if (usuario === null) {
        return <><h2>Faça login para acessar o carrinho</h2> <BotaoAcaoHeader onClick={Login}>Entrar</BotaoAcaoHeader></>
    }
    if (carregando) {
        return <h2>Carregando produtos... ⏳</h2>
    }
    const valorTotal = carrinho.reduce((acumulador, item) => {
        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);
        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
        return acumulador + subTotal

    }, 0)
    return (
        <CarrinhoContainer>
            <h1>Seu Carrinho</h1>
            {carrinho.length === 0 ? (<h2>Seu Carrinho está vazio...</h2>) :
                (<>
                    {carrinho.map((item) => {
                        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);

                        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
                        return (
                            <CartItemRow key={item.produtoId}>
                                <ProductInfoGroup>
                                    <img src={produtoCompleto?.images[0]} alt={produtoCompleto?.title}></img>
                                    <div className="info-textos">
                                        <p className="title">{produtoCompleto?.title}</p>
                                        <p>R$ {produtoCompleto?.price.toFixed(2)}</p>
                                    </div>
                                </ProductInfoGroup>
                                <QuantityControlGroup>
                                    <BotaoCarrinho onClick={() => aumentarQuantidade(item.produtoId)}>+</BotaoCarrinho>
                                    <span className="quantidade-num">{item.quantidade}</span>
                                    <BotaoCarrinho onClick={() => diminuirQuantidade(item.produtoId)}>-</BotaoCarrinho>
                                </QuantityControlGroup>
                                <ActionGroup>
                                    <p className="subtotal-preco">R$ {subTotal.toFixed(2)}</p>
                                    <BotaoCarrinho $variant="remover" onClick={() => removeDoCarrinho(item.produtoId)}>❌</BotaoCarrinho>
                                </ActionGroup>
                            </CartItemRow>
                        )
                    })}
                    <CartSummaryContainer>
                        {<h2>Total da Compra: R$ {valorTotal.toFixed(2)}</h2>}
                        <div className="cart-actions">
                            <LinkBotao href="/checkout">Pagar</LinkBotao>
                            <BotaoCarrinho $variant="large" onClick={limparCarrinho}>Limpar Carrinho</BotaoCarrinho>
                        </div>
                    </CartSummaryContainer>
                </>)
            }

        </CarrinhoContainer >
    )
}

