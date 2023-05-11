function backspace(theString) {
  return theString.substring(0, theString.length - 1);
}

var firstOperand = "";
var operatorVar = "";
var operatorHistory = "";
var secondOperand = "";

var numbers = document.querySelectorAll(".number");
var historyValue = document.querySelector("#historyValue");
var result = document.querySelector("#outputValue");
var dot = document.querySelector(".dot");
var clear = document.querySelector("#clear");
var equalTo = document.querySelector(".equalTo");
var backSpace = document.querySelector("#spacing");
numbers.forEach((number) => {
  number.addEventListener('click', (p) => {
    calculate(number.id);
  });
});
var scramble = false;

function equalToAnswer(number_id, count) {
  count--;
  if (number_id == '-' || number_id == '+' || number_id == '*' || number_id == '/') {
    operatorHistory = number_id;
  }
  if (historyValue.textContent.length > 1) {
    if (scramble) {
      operatorHistory = '+';
      historyValue.textContent += operatorHistory + secondOperand;
    } else {
      historyValue.textContent += secondOperand + operatorHistory;
    }
  } else {
    if (number_id == '=') {
      scramble = true;
      operatorHistory = '';
    }
    historyValue.textContent += result.textContent + operatorHistory;
  }
  var answer = 0;
  if (operatorVar == "+") {
    answer = parseFloat(firstOperand) + parseFloat(secondOperand);
    result.textContent = roundOff(answer, 8).toString();
  } else if (operatorVar == "-") {
    answer = parseFloat(firstOperand) - parseFloat(secondOperand);
    result.textContent = roundOff(answer, 8).toString();
  } else if (operatorVar == "*") {
    answer = parseFloat(firstOperand) * parseFloat(secondOperand);
    result.textContent = roundOff(answer, 8).toString();
  } else {
    answer = parseFloat(firstOperand) / parseFloat(secondOperand);
    result.textContent = roundOff(answer, 8).toString();
  }
  result.textContent = roundOff(answer, 8).toString();
  if (number_id == '=') {
    result.textContent += "";
    operatorHistory = '';
  } else {
    var c = result.textContent + number_id;
    if (!isNaN(c)) {
      result.textContent = backspace(c);
    } else {
      result.textContent = c;
    }
  }
  secondOperand = "";
  firstOperand = roundOff(answer, 8).toString();
}

function calculate(number_id) {
  if (result.textContent.includes('+') || result.textContent.includes('-') ||
    result.textContent.includes('*') || result.textContent.includes('/')) {
    var count = result.textContent.split("+").length - 1;
    count += result.textContent.split("-").length - 1;
    count += result.textContent.split("*").length - 1;
    count += result.textContent.split("/").length - 1;
    count++;

    if (count > 1 && number_id == '+'
      || count > 1 && number_id == '-'
      || count > 1 && number_id == '*'
      || count > 1 && number_id == '/'
      || count > 1 && number_id == '=') {
      if (secondOperand.length == 0 && number_id == '=') {
        return;
      }
      if (secondOperand.length == 0 && number_id != '=') {
        result.textContent = backspace(result.textContent);
        result.textContent += number_id;
        return;
      }
      equalToAnswer(number_id, count);
      shouldHistory = true;
      if (number_id == '-' || number_id == '+' || number_id == '*' || number_id == '/') {
        operatorHistory = number_id;
        operatorVar = number_id;
      }
    } else if (count == 1) {
      result.textContent += number_id;
    } else {
      secondOperand += number_id;
      result.textContent += number_id;
    }
  } else {
    firstOperand = result.textContent;
    result.textContent += number_id;
    operatorVar = number_id;
  }
}

equalTo.addEventListener('click', (p) => {
  calculate('=');
});

backSpace.addEventListener('click', (p) => {
  result.textContent = backspace(result.textContent);
});

clear.addEventListener('click', (p) => {
  result.textContent = "";
  historyValue.textContent = "";
});

dot.addEventListener('click', (p) => {
  var operatorCounter = result.textContent.split("+").length - 1; //used to count
  operatorCounter += result.textContent.split("-").length - 1;
  operatorCounter = result.textContent.split("*").length - 1;
  operatorCounter = result.textContent.split("/").length - 1;
  var theString = result.textContent;
  console.log('-' + operatorCounter);
  count = theString.split(".").length - 1;
  if (count == 1 && operatorCounter > 0 || count < 1) {
    result.textContent += dot.id;
  }
});

const calculator = document.querySelector("#calculator");
const support = document.querySelector("#support")
support.addEventListener('click', (p) => {
  calculator.classList.toggle("active");
  calculator.textContent =
    "<h1> Calculator Support </h1> <p> If you are seeing this, you are seeing Calculator support. </p>";
});

document.addEventListener('keydown', function (event) {
  if (event.shiftKey) {
    if (event.key === "*" || event.key === "+" || event.key === "-" || event.key === "/") {
      calculate(event.key);
    }
  } else if (!isNaN(event.key) || event.key === "-") {
    calculate(event.key);
  } else if (event.key === "=") {
    calculate(event.key);
  } else if (event.key === "Enter") {
    calculate('=');
  } else if (event.key == 'Backspace') {
    result.textContent = backspace(result.textContent);
  } else {
    return;
  }
});

function roundOff(digits, power) {
  return parseFloat(Math.round(digits + 'e' + power) + "e-" + power);
}