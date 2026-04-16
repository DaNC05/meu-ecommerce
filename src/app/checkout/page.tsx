'use client'

import { useContext, useEffect, useState } from "react";
import { CartContext } from '@/contexts/CartContext';
import { AuthContext } from '@/contexts/AuthContext';
import { BotaoAcaoHeader } from "@/components/Header/styles";
import { CheckoutContainer, ItemResumo, MensagemCentral, Titulo, TotalContainer, BotaoPagamento } from "./styles";


interface Produto {
    id: number;
    title: string;
    price: number;
    images: string[];
}


export default function Checkout() {
    const { carrinho, limparCarrinho, aumentarQuantidade, diminuirQuantidade, removeDoCarrinho } = useContext(CartContext);
    const { usuario, Login, Logout } = useContext(AuthContext)
    const [produtosDoCarrinho, setProdutosDoCarrinho] = useState<Produto[]>([])
    const [carregando, setCarregando] = useState(true)
    const confirmarPagamento = () => {
        alert("Compra Realizada com Sucesso")
        limparCarrinho()
    }

    useEffect(() => {
        async function buscarProdutos() {
            const resposta = await fetch('https://dummyjson.com/products');
            const dados = await resposta.json();
            setProdutosDoCarrinho(dados.products)
            setCarregando(false)
        } buscarProdutos()
    }, [carrinho])
    if (usuario === null) {
        return (
            <CheckoutContainer>
                <MensagemCentral>
                    <h2>Faça login para finalizar a compra</h2>
                    <BotaoAcaoHeader onClick={Login}>Entrar na Conta</BotaoAcaoHeader>
                </MensagemCentral>
            </CheckoutContainer>
        );
    }
    if (carregando) {
        return <CheckoutContainer><h2 style={{ textAlign: 'center' }}>Preparando seu pedido... ⏳</h2></CheckoutContainer>
    }
    const valorTotal = carrinho.reduce((acumulador, item) => {
        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);
        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
        return acumulador + subTotal

    }, 0)
    return (
        <CheckoutContainer>
            <Titulo>Pagamento</Titulo>
            {carrinho.length === 0 ? (<MensagemCentral><h2>Seu Carrinho está vazio</h2></MensagemCentral>) :
                (<>
                    {carrinho.map((item) => {
                        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);

                        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
                        return (
                            <ItemResumo key={item.produtoId}>
                                <div className="info-produto">
                                    <span className="nome">{produtoCompleto?.title}</span>
                                    <span className="detalhes">Qtd: {item.quantidade} x R$ {produtoCompleto?.price.toFixed(2)}</span>
                                </div>
                                <span className="subtotal">R$ {subTotal.toFixed(2)}</span>


                            </ItemResumo>

                        )
                    })}
                    <TotalContainer>
                        <span>Total da Compra:</span>
                        <span style={{ color: '#2ecc71' }}> R$ {valorTotal.toFixed(2)}</span>

                        <BotaoPagamento onClick={confirmarPagamento}>
                            Confirmar e Pagar
                        </BotaoPagamento>
                    </TotalContainer>

                </>)
            }

        </CheckoutContainer>
    )


}