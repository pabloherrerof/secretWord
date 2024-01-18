"use client"
import styled from "styled-components";
import { LengthSelectorButton } from "../Button/ButtonStyled";
import { Hint, Label, Number, Selector, SelectorContainer } from "./WordLengthStyled";



export default function WordLengthSelector(props) {
  const { wordLength, setWordLength } = props;
  


  const handlePlusLength = () => {
    props.restart()
    setWordLength(wordLength + 1);
  };

  const handleSubstractLength = () => {
    props.restart()
    setWordLength(wordLength - 1);
  }

  return (
    <SelectorContainer>
      <Label htmlFor="wordLength">Word length:</Label>
      <Selector>
        {wordLength > 3 ? (
          <LengthSelectorButton onClick={() => handleSubstractLength()}>
            -
          </LengthSelectorButton>
        ) : (
          <LengthSelectorButton disabled>-</LengthSelectorButton>
        )}
        <Number>{wordLength}</Number>

        {wordLength < 7 ? (
          <LengthSelectorButton onClick={() => handlePlusLength()}>
            +
          </LengthSelectorButton>
        ) : (
          <LengthSelectorButton disabled>+</LengthSelectorButton>
        )}
      </Selector>
      <Hint>(min: 3, max: 7)</Hint>
    </SelectorContainer>
  );
}
