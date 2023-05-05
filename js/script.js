function addition() {
  var output = getOutput();
  const addition = document.querySelector('.addition');
  addition.addEventListener('click', (p) => {
    printOutput(addition.id);
  });
}
addition();

function subtraction() {
  var output = getOutput();
  const subtraction = document.querySelector('.subtraction');
  subtraction.addEventListener('click', (p) => {
    printOutput(subtraction.id);
  });
}
subtraction();

function multiplication() {
  var output = getOutput();
  const multiplication = document.querySelector('.multiplication');
  multiplication.addEventListener('click', (p) => {
    console.log(multiplication.id);
    printOutput(multiplication.id)
  });
}
multiplication();

function division() {
  var output = getOutput();
  const division = document.querySelector('.division');
  division.addEventListener('click', (p) => {
    console.log(division.id);
  });
}
division();

function clear() {
  const clear = document.querySelector("#clear");
  clear.addEventListener('click', (p) => {
    printOutput("");
    printHistory("");
  });
}
clear();

function backspace() {
  const backspace = document.querySelector("#backspace");
  backspace.addEventListener("click", (p) => {
    var output = reverseNumberFormat(getOutput().toString());
    var outputLenght = output.lenght;
    output = outputLenght.slice(0, -1);
    printOutput(output);
  });
}
backspace();

function operate() {
  var output = getOutput();
  var history = getHistory();
  if (output == "" && history != "") {
    if (isNaN(history[history.length - 1])) {
      history = history.substring(0, history.length - 1);
    }
  }
  if (output != '' || history!="") {
    output = output==""? output:reverseNumberFormat(output);
    history = history + output;
    var operation = document.getElementById("operator");
    operation = eval(history);
    printOutput(operation);
  } else {
    history = history + this.id;
    printHistory(history);
    printOutput("");
  }
}
operate();

function getHistory() {
  return document.getElementById("historyValue").textContent;
}

function printHistory(num) {
  document.getElementById("historyValue").textContent = num;
}

function getOutput() {
  return document.getElementById("outputValue").textContent;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("outputValue").textContent = num;
  } else {
    document.getElementById("outputValue").textContent = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener('click', (p) => {
    console.log(number.id);
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + number.id;
      printOutput(output);
    }
  })
})

const calculator = document.querySelector("#calculator");
const displayHistory = document.querySelector(".displayHistory");
const results = document.querySelector('#results')
const keyboards = document.querySelector("#keyboards")
displayHistory.addEventListener('click', () => {
  results.setAttribute('style', 'height:400px');
  calculator.setAttribute('style', 'overflow:hidden')
});
