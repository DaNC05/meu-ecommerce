'use client'
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { BotaoAcao } from "./styles";
interface BotaoProps {
    produtoId: number;
}

export default function BotaoComprar({ produtoId }: BotaoProps) {
    const { adicionarAoCarrinho } = useContext(CartContext)
    const adicionar = () => {
        adicionarAoCarrinho(produtoId)
    }

    return (
        <>
            <BotaoAcao onClick={adicionar}>Adicionar ao Carrinho</BotaoAcao>
        </>
    )
}