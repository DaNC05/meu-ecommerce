'use client'

import styled from "styled-components"

export const ProdutoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width:768px){
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImagemProduto = styled.img`
  width:100%;
  max-width:400px;
  border-radius:8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0,1);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.5rem;
  h1{margin:0;}
  .preco{font-size:2rem;font-weight:bold; color: #2ecc71;}
`
