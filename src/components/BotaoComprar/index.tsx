'use client'
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

interface BotaoProps {
  produtoId: number;
}

export default  function BotaoComprar({produtoId}:BotaoProps) {
    const{adicionarAoCarrinho} = useContext(CartContext)
    const adicionar = () => {
       adicionarAoCarrinho(produtoId)
    }
    
    return (
        <>
         <button onClick={adicionar}>Adicionar ao Carrinho</button>
        </>
    )
}