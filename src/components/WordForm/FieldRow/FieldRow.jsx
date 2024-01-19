"use client"
import { Field, FieldRow } from "../WordFormStyled";
import { handleKeyDown } from "../utils";

export const FieldRowComponent = ({
  rowIndex, wordLength, fieldValues, validationColors, activeRow, handleInputChange, inputRefs, handleRowCompletion, setFieldValues
}) => {
  const generateField = (index) => {
    const isEditable = rowIndex === activeRow;
    const value = fieldValues[rowIndex][index];
    const backgroundColor = validationColors[rowIndex][index];

    return isEditable ? (
      <Field
        type="text"
        key={index}
        className={index}
        maxLength={1}
        value={value}
        onChange={(e) => handleInputChange(rowIndex, index, e)}
        ref={(el) => inputRefs.current[rowIndex * wordLength + index] = el}
        onKeyDown={(event) => handleKeyDown(event, handleRowCompletion, index, wordLength, inputRefs, rowIndex, fieldValues, setFieldValues)}
        backgroundcolor={backgroundColor} color={backgroundColor === "transparent" ? "black" : "white"}
        />
    ) : (
      <Field key={index} backgroundcolor={backgroundColor} color={backgroundColor !== "transparent" ? "white" : "black"} disabled value={value}/>
    );
  };

  return <FieldRow>{Array.from({ length: wordLength }, (_, index) => generateField(index))}</FieldRow>;
};
