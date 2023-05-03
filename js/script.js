const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    output();
  });
});

function output() {
  const outputValue = document.getElementById('outputValue');
  outputValue.textContent = number;
  if(outputValue.length > 9) {
      outputValue.innerText = outputValue.substring(0, 9);
  }
} 

function add() {
  const addKey = document.querySelector('#addition');
  addition.addEventListener('click', (p) => {
    console.log("I am here");
  });
}
add();

function subtract() {
  const subtractKey = document.querySelector('#subtraction');
  subtraction.addEventListener('click', (p) => {
    console.log("I am subtract");
  });
}
subtract();

function multiply() {
  const addKey = document.querySelector('#multiplication');
  multiplicaton.addEventListener('click', (p) => {
    console.log("I am multiplication");
  });
}
multiply();

function divide() {
  const addKey = document.querySelector('#divisor');
  divisor.addEventListener('click', (p) => {
    console.log("I am a divisor");
  });
}
divide();

function operate() {
  const operate = document.querySelector('#operate');
  operate.addEventListener('click', (p) => {
    console.log("I will evaluate");
  });
}
operate();

