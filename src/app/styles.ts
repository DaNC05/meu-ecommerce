'use client'

import styled from 'styled-components';
import Link from 'next/link';

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
export const LinkBotao = styled(Link)`
  display:block;
  background-color:#1e1e2f;
  color:white;
  text-align:center;
  padding:10px 15px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margint-top: 1rem;
  &:hover{
     background-color:white;
     color:#00d8ff;
  }

`
export default CardProduto




