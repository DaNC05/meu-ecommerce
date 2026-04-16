import styled from "styled-components";

export const CheckoutContainer = styled.div`
    max-width: 600px;
    margin: 3rem auto;
    padding: 2.5rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
`;

export const Titulo = styled.h1`
    text-align: center;
    color: #1e1e2f;
    margin-bottom: 2rem;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 1rem;
`;

export const ItemResumo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px dashed #e0e0e0;

    .info-produto {
        display: flex;
        flex-direction: column;
    }

    .nome { font-weight: bold; }
    .detalhes { font-size: 0.85rem; color: #666; }
    .subtotal { font-weight: bold; color: #333; }
`;

export const TotalContainer = styled.div`
    margin-top: 2rem;
    display: block;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const BotaoPagamento = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 2rem;
    transition: background-color 0.2s, transform 0.1s;

    &:hover { background-color: #27ae60; }
    &:active { transform: scale(0.98); }
`;

export const MensagemCentral = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;