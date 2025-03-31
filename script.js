let currentInput = "";
let operator = "";
let previousInput = "";

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  document.getElementById("display").value = "";
}

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return; // Prevent empty operator
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    document.getElementById("display").value = currentInput;
  }
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        result = "Error";
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}
