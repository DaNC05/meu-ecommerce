'use client'

import { useContext, useEffect, useState } from "react";
import { CartContext } from '@/contexts/CartContext';
import { AuthContext } from '@/contexts/AuthContext';


export default function Checkout() {
    const { carrinho, limparCarrinho, aumentarQuantidade, diminuirQuantidade, removeDoCarrinho } = useContext(CartContext);
    const { usuario, Login, Logout } = useContext(AuthContext)
    const [produtosDoCarrinho, setProdutosDoCarrinho] = useState([])
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
        return <><h2>Faça login para finalizar a compra</h2> <button onClick={Login}>Entrar</button></>
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
        <div>
            <h1>Pagamento</h1>
            {carrinho.length === 0 ? (<h2>Seu Carrinho está vazio</h2>) :
                (<>
                    {carrinho.map((item) => {
                        const produtoCompleto = produtosDoCarrinho.find((produtosDaApi) => produtosDaApi.id === item.produtoId);

                        const subTotal = (produtoCompleto?.price || 0) * item.quantidade
                        return (
                            <div key={item.produtoId}>
                                <p >
                                    Produto: {produtoCompleto?.title} | Quantidade: {item.quantidade} | Valor: {subTotal.toFixed(2)}
                                </p>
                                <button onClick={() => aumentarQuantidade(item.produtoId)}>+</button>
                                <button onClick={() => diminuirQuantidade(item.produtoId)}>-</button>
                                <button $remover onClick={() => removeDoCarrinho(item.produtoId)}>❌</button>
                            </div>
                        )
                    })}
                    {<h2>Total da Compra: R$ {valorTotal.toFixed(2)}</h2>}
                    <button onClick={confirmarPagamento}>Confirmar Pagamento</button>
                    <button onClick={limparCarrinho}>Limpar Carrinho</button>
                </>)
            }

        </div>
    )


}