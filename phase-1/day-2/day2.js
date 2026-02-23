function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

function calculator(num1, num2, operator) {

  // Input validation
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid input: Please enter numbers only.";
  }

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 5, "+")); 
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 5, "/")); 