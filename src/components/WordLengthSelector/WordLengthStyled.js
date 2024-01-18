import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Futura";
width: 200px;
border-radius: 20px;
padding-top: 10px;
padding-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: var(--black);
`;

export const Number = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  background-color: transparent;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

export const Hint = styled.div`
  font-size: 11px;
  color: grey;
`;