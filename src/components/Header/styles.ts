import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    background-color: #1e1e2f; 
    position:relative;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column; /* Transforma o container principal em andares (coluna) */
    gap: 1.5rem; /* Espaço entre a linha de cima e a linha de categorias */
    border-bottom: 2px solid darkred;
`;

/* Novo componente para o "andar de cima" */
export const LinhaSuperior = styled.div`
    display: flex;
    justify-content: space-between; /* Empurra Logo para esquerda e Busca/Auth para direita */
    align-items: center;
    width: 100%;
`;

export const HeaderNav = styled.nav`
    display: flex;
    gap: 1.5rem;
    align-items: center;

    /* Estilizando a barra de pesquisa */
    input {
        padding: 8px 12px;
        border: none;
        border-radius: 4px 0 0 4px;
        outline: none;
    }

    button {
        padding: 8px 15px;
        border: none;
        background-color: #e0e0e0;
        color: #1e1e2f;
        border-radius: 0 4px 4px 0;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background-color: white;
        }
    }
`;

export const HeaderLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover { color: lightgray; }
`;

export const BotaoAcaoHeader = styled.button`
    background-color: white; 
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
`;
export const MenuCategorias = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 250px;
    background-color: #1e1e2f;
    border: 1px solid #333;
    z-index: 10;
    padding: 1rem;
    
    /* Organização dos itens */
    display: flex;
    flex-direction: column;
    gap: 12px; /* Espaço vertical entre cada categoria */
`;

export const ItemMenu = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.2s, padding-left 0.2s;
    display: block; 

    &:hover {
        background-color: #3e3e5a; 
        color: white;
        padding-left: 20px; /* Um pequeno efeito de deslocamento lateral */
    }
`;