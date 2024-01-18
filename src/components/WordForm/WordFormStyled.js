import styled from "styled-components";

export const WordFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;
export const FieldRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 400px;
  height: 100%;
`;
export const LetterContainer = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.color};
  font-weight: bold;
  font-family: "American typewriter", sans-serif !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: ${props => props.backgroundcolor};

`;

export const Field = styled.input`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-transform: lowercase;
  text-align: center;
  color: ${props => props.color};
  background-color: ${props => props.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
    font-weight: bold;
    font-family: "American typewriter", sans-serif !important;
`;