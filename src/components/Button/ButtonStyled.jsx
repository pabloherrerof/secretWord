import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: 18px 20px;
    color: ${props => props.color};
    font-size: 1rem;
    background-color: ${props => props.backgroundcolor};
    border: none;
    border-radius: 28px;
    min-width: 120px;
    font-weight: bolder;
    font-family: 'Futura', sans-serif;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }

`

export const LengthSelectorButton = styled.button`
    color: var(--black);
    font-weight: bolder;
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`
export const LogOutButtonStyled = styled.button`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 28px;
    border: none;
    color: white;
    background-color: var(--grey);

    svg{
        font-size: 30px;
    }
    &:hover {
        cursor: pointer;
    }
    `

    export const BurgerButtonStyled = styled.button`
    font-size: 40px;
    color: var(--black);
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
    `