function addition() {
  var output = getOutput();
  const addition = document.querySelector('#addition');
  addition.addEventListener('click', (p) => {
    addValue = addition.textContent;
    printOutput(addValue);
  });
}
addition();

function clear() {
  const clear = document.querySelector("#clear");
  clear.addEventListener('click', (p) => {
    printOutput("");
    printHistory("");
  });
}
clear();

 function backspace() {
   var output = reverseNumberFormat(getOutput().toString());
   const backspace = document.querySelector("#backspace");
   backspace.addEventListener("click"), (p) => {
     var outputLenght = output.lenght
     output = outputLenght.slice(0,-1);
     printOutput(output); 
   }
 }
 backspace();

function operate() {
  var output = getOutput();
  var history = getHistory();
  if (output != '') {
    output = reverseNumberFormat(output);
    history = history + output;
    var operation = document.getElementById("operate");
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
