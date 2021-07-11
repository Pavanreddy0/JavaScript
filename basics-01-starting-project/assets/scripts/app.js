let result = 0;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredInput = getUserNumberInput();
  const calcDescription = `${result} + ${enteredInput}`;
  result += enteredInput;
  outputResult(result, calcDescription);
}

function substract() {
  const enteredInput = getUserNumberInput();
  const calcDescription = `${result} - ${enteredInput}`;
  result -= enteredInput;
  outputResult(result, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
