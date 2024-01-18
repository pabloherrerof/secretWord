"use client"
import styled from "styled-components";

export const LayoutStyled = styled.div`
    background: white;
    min-height: 100vh;
    `;

export const LayoutErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    background-size: cover;
    min-height: 100vh;
    `
export const LayoutErrorCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: var(--black);
    justify-content: center;
    width: 400px;
    height: 450px;
    border-radius: 10px;
    padding: 2rem 2rem;
    z-index: 1;
    font-family: 'Futura', sans-serif;
    h1{
        color: white;
        margin-bottom: 1rem;
    }
    p{
        color: #b7b7b7;
        margin-bottom: 2rem;
    }
    svg{
        fill: white;
        font-size: 5rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 455px) {
            width: 300px;
        }
    @media (max-width: 320px){
        width: 280px;
    }
    
`