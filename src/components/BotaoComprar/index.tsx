'use client'

interface BotaoProps {
  produtoId: number;
}

export default  function BotaoComprar({produtoId}:BotaoProps) {
    const adicionar = () => {
        alert('Produto adicionado!')
    }
    
    return (
        <>
         <button onClick={adicionar}>Adicionar ao Carrinho</button>
        </>
    )
}