'use client'

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import styled from "styled-components";

const Container = styled.div`
     max-width: 800px;
     margin: 0 auto;
     padding:20px;
    `
const ItemEstilizado = styled.div`
     display:flex;
     justify-content:space-between;
     align-items: center;
     border-bottom:1px solid #eee
    `

const BotaoAcao = styled.button`
     padding:5px 10px;
     border:none;
     border-radius:5px;
     cursor:pointer;
     background-color:${props => props.$remover ? 'red' : '#f0f0f0'};
     &:hover{background-color:${props => props.$remover ? 'darkred' : '#e0e0e0'}};
    `
export default function PaginaCarrinho() {
    const { carrinho, removeDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho } = useContext(CartContext)
    const [carregando, setCarregando] = useState(true)

    // Estado para guardar os dados completos vindos da API
    const [produtosDoCarrinho, setProdutosDoCarrinho] = useState([])

    useEffect(() => {
        async function buscarProdutos() {
            const resposta = await fetch('https://dummyjson.com/products');
            const dados = await resposta.json();
            setProdutosDoCarrinho(dados.products)
            setCarregando(false)
        } buscarProdutos()
    }, [carrinho])
    if (carregando) {
        return <h2>Carregando produtos... ⏳</h2>
    }
    const valorTotal = carrinho.reduce((acumulador, item) => {
        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);
        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
        return acumulador + subTotal

    }, 0)
    return (
        <Container>
            <h1>Seu Carrinho</h1>
            {carrinho.length === 0 ? (<h2>Seu Carrinho está vazio</h2>) :
                (<>
                    {carrinho.map((item) => {
                        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);

                        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
                        return (
                            <ItemEstilizado key={item.produtoId}>
                                <p >
                                    Produto:{produtoCompleto?.title} | Quantidade:{item.quantidade} | Valor: {subTotal.toFixed(2)}
                                </p>
                                <BotaoAcao onClick={() => aumentarQuantidade(item.produtoId)}>+</BotaoAcao>
                                <BotaoAcao onClick={() => diminuirQuantidade(item.produtoId)}>-</BotaoAcao>
                                <BotaoAcao $remover onClick={() => removeDoCarrinho(item.produtoId)}>❌</BotaoAcao>
                            </ItemEstilizado>
                        )
                    })}
                    {<h2>Total da Compra: R$ {valorTotal.toFixed(2)}</h2>}
                    <BotaoAcao onClick={limparCarrinho}>Limpar Carrinho</BotaoAcao>
                </>)
            }

        </Container>
    )
}

