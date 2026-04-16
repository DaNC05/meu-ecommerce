import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    background-color: #1e1e2f; /* Dark background matching image 1 */
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid darkred; /* Subtle accent from removal buttons */
`;

export const HeaderNav = styled.nav`
    display: flex;
    gap: 1.5rem;
    align-items: center;
`;

export const HeaderLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover { color: lightgray; }
`;

// 2.styled-component para o botão de ação (Login/Sair)
export const BotaoAcaoHeader = styled.button`
    background-color: white; /* Base matching image 1 */
    color: black;
    border: 1px solid white;
    padding: 5px 15px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover { 
        background-color: #e0e0e0; 
    }

    /* Estilo para "Sair" com fundo escuro e borda vermelha */
    ${props => props.$remover ? `
        background-color: #1e1e2f; 
        color: white;
        border: 1px solid darkred;
        &:hover { background-color: darkred; color: white; }
    `: ''}
`;