'use client'

import styled from 'styled-components';


const CardProduto = styled.div`
background-color: white;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
transition: transform 0.3s ease;
padding: 1rem;
border-radius: 8px;
border: '1px solid #ccc'
&:hover{transform: translateY(-5px)};

img{
  width:100%;
  height: 200px;
  object-fit:contain;
  margin-bottom: 1rem;
}
`

export default CardProduto




