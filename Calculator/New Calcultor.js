let currentInput = ''; 
let previousInput = ''; 
let operator = ''; 

// Function to adda number on the screen
function appendNumber(number) {
  currentInput += number;
  document.getElementById('screen').value = currentInput;
}

// delete
function clearScreen() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('screen').value = '';
}

// operation
function setOperation(op) {
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

//  calculate
function calculate() {
  let result = 0;
  let previous = parseFloat(previousInput); 
  let current = parseFloat(currentInput);   

  if (operator === '+') {
    result = previous + current;
  } else if (operator === '-') {
    result = previous - current;
  } else if (operator === '*') {
    result = previous * current;
  } else if (operator === '/') {
    if (current !== 0) {
      result = previous / current;
    } else {
      alert("Erreur: division par zéro !");
      return;
    }
  }

  
  document.getElementById('screen').value = result;
  currentInput = result.toString(); 
}
