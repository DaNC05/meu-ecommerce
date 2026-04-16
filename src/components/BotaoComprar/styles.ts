'use client'
import styled from "styled-components"

export const BotaoAcao = styled.button` 
  background-color: #2ecc71;
  color:white;
  border:none;
  padding:15px 30px;
  font-size:1.2rem;
  font-weight:bold;
  border-radius:8px;
  cursor:pointer;
  transition: background-color 0.2s, transform 0.2;
  width:100%;

  &:hover{
    background-color:#27ae60;
    transform: scale(1.02);
  }
`
