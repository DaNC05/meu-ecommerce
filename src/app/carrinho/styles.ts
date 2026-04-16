import styled from "styled-components";


export const CarrinhoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

// Container principal de cada item como uma linha flexível
export const CartItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  gap: 1rem;
`;

// Grupo para foto e info básica à esquerda
export const ProductInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1; /* Ocupa o espaço livre à esquerda */

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 4px;
  }
  
  .info-textos p { margin: 0; font-size: 0.9rem;}
  .info-textos p.title { font-weight: bold; font-size: 1rem; }
`;

// Grupo central para controles de quantidade
export const QuantityControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  .quantidade-num {
    font-size: 1.1rem;
    font-weight: bold;
    min-width: 2ch;
    text-align: center;
  }
`;

// Grupo para o subtotal e botão de remoção à direita
export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .subtotal-preco {
    font-weight: bold;
    color: #333;
  }
`;

// Componente de botão flexível com base em props
export const BotaoCarrinho = styled.button<{ $variant?: 'small' | 'large' | 'remover' }>`
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  /* Variante padrão (quantidade + e -) */
  ${props => !props.$variant || props.$variant === 'small' ? `
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #f0f0f0;
    &:hover { background-color: #e0e0e0; }
  `: ''}

  ${props => props.$variant === 'remover' ? `
    background: none;
    font-size: 1.2rem;
    padding: 0;
    &:hover { transform: scale(1.1); }
  `: ''}

  /* Variante Limpar Carrinho (Preto) 🧹 */
  ${props => props.$variant === 'large' ? `
    display: block;
    width: 100%;
    margin-top: 1rem;
    padding: 15px;
    border-radius: 8px;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    &:hover { background-color: #333; }
  `: ''}
`;

// Container para o resumo e ações finais na parte inferior
export const CartSummaryContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 2px solid #ccc;
  text-align: right;
  
  h2 { margin-bottom: 1rem; }
  
  .cart-actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
  }
`;