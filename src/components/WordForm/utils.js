
export const handleInputChange = (
  fieldValues,
  setFieldValues,
  rowIndex,
  index,
  e,
  wordLength,
  inputRefs
) => {
  const value = e.target.value;
  const updatedRows = [...fieldValues];
  updatedRows[rowIndex] = [...updatedRows[rowIndex]];
  updatedRows[rowIndex][index] = value;
  setFieldValues(updatedRows);
  if (value && index < wordLength - 1) {
    const nextInputRef = inputRefs.current[rowIndex * wordLength + index + 1];
    if (nextInputRef && typeof nextInputRef.focus === 'function') {
      nextInputRef.focus();
    }
  }
  
};



export const handleKeyDown = (event, handleRowCompletion, index, wordLength, inputRefs, rowIndex, fieldValues, setFieldValues) => {
  if (event.key === "Enter") {
    handleRowCompletion();
  } else if (event.key === "Backspace") {
    if (index > 0) {
      const prevInputIndex = rowIndex * wordLength + index - 1;
      const prevInputRef = inputRefs.current[prevInputIndex];
      const currentValue = event.target
      if (prevInputRef && typeof prevInputRef.focus === 'function') {
        setFieldValues(fieldValues.map((row, i) => {
          if (i === rowIndex) {
            return row.map((letter, j) => {
              if (j === index) {
                return '';
              }
              return letter;
            });
          }
          return row;
        }));
        prevInputRef.focus();
        prevInputRef.value = '';

      }
    }
  }
};
