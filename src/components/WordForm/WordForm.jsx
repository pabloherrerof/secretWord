"use client";
import React, { useEffect, useRef, useState } from "react";
import { ButtonStyled } from "../Button/ButtonStyled";
import { WordFormContainer } from "./WordFormStyled";
import WordLengthSelector from "../WordLengthSelector/WordLengthSelector";
import { FieldRowComponent } from "./FieldRow/FieldRow";
import { handleInputChange, handleKeyDown } from "./utils";
import { validateLetters } from "@/lib/validateLetter";
import {
  toastError,
  toastSuccess,
  toastWarning,
} from "@/app/notifications/toast";
import { Modal } from "./Modal/Modal";




export default function WordForm() {
  const [wordLength, setWordLength] = useState(5);
  const [word, setWord] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [fieldValues, setFieldValues] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(wordLength).fill(""))
  );
  const [validationColors, setValidationColors] = useState(
    Array(5).fill(Array(wordLength).fill("transparent"))
  );
  const [buttonMessage, setButtonMessage] = useState("Try");
  const [newWord, setNewword] = useState(false);
  const inputRefs = useRef([]);
  const [modal, setModal] = useState(false);
  const [win, setWin] = useState(false);
 
    console.log(word)
  useEffect(() => {
    inputRefs.current = Array.from({ length: wordLength * 5 }, () =>
      React.createRef()
    );
  }, [wordLength]);

  useEffect(() => {
    if (!wordLength || wordLength < 1) return;
    fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`)
      .then((response) => response.json())
      .then((result) => setWord(result[0]))
      .then(() => setNewword(false))
      .then(() =>
        setFieldValues(
          Array(5)
            .fill(null)
            .map(() => Array(wordLength).fill(""))
        )
      ).then(() => {
        setValidationColors(
          Array(5).fill(Array(wordLength).fill("transparent"))
        )
  })
      .catch((error) => console.error(error));
  }, [wordLength, newWord]);


  const validateWord = async (wordToValidate) => {
    try {
      const url = `https://wordsapiv1.p.rapidapi.com/words/${wordToValidate}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_URL,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      
      if (response.ok && result.word) {
        return { valid: true };
      } else {
        return { valid: false };
      }
    } catch (error) {
      console.error("Server Error", error);
      return { valid: false };
    }
  };


  const handleRowCompletion = async () => {
    if (fieldValues[activeRow].includes("")) {
      toastError("Please fill all the fields");
      return;
    }
    

    const userWord = fieldValues[activeRow].join("");
    const validationResponse = await validateWord(userWord);


    if (validationResponse.valid) {
      if (activeRow <= 4) {

        const validatedRowColors = validateLetters(
          word,
          fieldValues[activeRow]
        );
        if (validatedRowColors.every((color) => color === "var(--green)")) {
          setModal(true);
          setWin(true);
        }
        const updatedValidationColors = [...validationColors];
        updatedValidationColors[activeRow] = validatedRowColors;
        setValidationColors(updatedValidationColors);
        setActiveRow(activeRow + 1);
          setTimeout(() => {
            if(activeRow < 4){
            const input = inputRefs.current[(activeRow + 1 )* wordLength];
            input.focus();
            }
          }, 400);
      }
      if (activeRow === 4) {
        setActiveRow(undefined);
        setModal(true);
      }
    } else {
      toastWarning("This word doesn't exist");
    }
  };

  const handleRestart = () => {
    setButtonMessage("Try")
    setActiveRow(0);
    setFieldValues(Array(5).fill(Array(wordLength).fill("")));
    setValidationColors(Array(5).fill(Array(wordLength).fill("transparent")));
    setNewword(true);
    setModal(false);
  };
  console.log(fieldValues)
  console.log(validationColors)


  return (
    <>
      <WordFormContainer>
        {fieldValues.map((_, rowIndex) => (
          <FieldRowComponent
            key={rowIndex}
            rowIndex={rowIndex}
            wordLength={wordLength}
            fieldValues={fieldValues}
            validationColors={validationColors}
            activeRow={activeRow}
            setFieldValues={setFieldValues}
            handleInputChange={(rowIndex, index, e) =>
              handleInputChange(
                fieldValues,
                setFieldValues,
                rowIndex,
                index,
                e,
                wordLength,
                inputRefs
              )
            }
            inputRefs={inputRefs}
            handleRowCompletion={handleRowCompletion}
          />
        ))}
      </WordFormContainer>
      {modal && <Modal win={win} restart={handleRestart} word={word} />}
      <ButtonStyled
        color="white"
        backgroundcolor="black"
        onClick={handleRowCompletion}
      >
        {buttonMessage}
      </ButtonStyled>
      <WordLengthSelector
        wordLength={wordLength}
        setWordLength={setWordLength}
        restart={handleRestart}
      />
    </>
  );
}
