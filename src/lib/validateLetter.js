export const validateLetters = (word, fieldLetters) => {
  const letters = word.split("");
  const fieldLettersCopy = [...fieldLetters];
  let colores = new Array(fieldLetters.length).fill("var(--black)");


letters.forEach((letter, index) => {
  const ocurrencias = fieldLettersCopy.filter((letra) => letra === letter).length;
  const ocurrenciasEnPalabra = letters.filter((letra) => letra === letter).length;
  if (letter === fieldLetters[index]) {
    colores[index] = "var(--green)";
    fieldLettersCopy[index] = "";
  } else if (fieldLettersCopy.includes(letter) ) {
    colores[fieldLettersCopy.indexOf(letter)]= "var(--yellow)";
    fieldLettersCopy[fieldLettersCopy.indexOf(letter)] = ""; 
  }
});
return colores;
};
